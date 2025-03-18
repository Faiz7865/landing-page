import Hero from "@/components/hero"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import UserSearch from "@/components/user-search"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <UserSearch />
      <Contact />
    </main>
  )
}
