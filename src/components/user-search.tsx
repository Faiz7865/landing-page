"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Define the User type
interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export default function UserSearch() {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setUsers(data)
        setFilteredUsers(data)
      } catch (err) {
        setError("Failed to fetch users. Please try again later.")
        console.error("Error fetching users:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Implement debounced search
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }
  }

  // Filter users based on search term
  const filterUsers = useCallback(
    (term: string) => {
      if (!term.trim()) {
        setFilteredUsers(users)
        return
      }

      const lowerCaseTerm = term.toLowerCase()

      // Using a HashMap approach for efficient filtering
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerCaseTerm) ||
          user.username.toLowerCase().includes(lowerCaseTerm) ||
          user.email.toLowerCase().includes(lowerCaseTerm),
      )

      setFilteredUsers(filtered)
    },
    [users],
  )

  // Create debounced version of filterUsers
  const debouncedFilterUsers = useCallback(
    debounce((term: string) => filterUsers(term), 300),
    [filterUsers],
  )

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    debouncedFilterUsers(term)
  }

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Users</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Search and explore our user database with our fast, debounced search functionality.
            </p>
          </div>

          <div className="w-full max-w-md relative">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users by name, username, or email..."
                className="pl-8"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <Card key={user.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border">
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{user.name}</CardTitle>
                        <CardDescription>@{user.username}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Email:</span>
                        <span className="text-muted-foreground">{user.email}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Phone:</span>
                        <span className="text-muted-foreground">{user.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Website:</span>
                        <span className="text-muted-foreground">{user.website}</span>
                      </div>
                      <div className="pt-2">
                        <span className="font-medium">Company:</span>
                        <p className="text-muted-foreground mt-1">{user.company.name}</p>
                        <p className="text-xs italic text-muted-foreground mt-1">"{user.company.catchPhrase}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No users found matching your search criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

