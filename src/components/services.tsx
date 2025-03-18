import { Zap, BarChart, Layers, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast Performance",
    description: "Our solutions are optimized for speed, ensuring your users have a seamless experience.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Data-Driven Insights",
    description: "Make informed decisions with our advanced analytics and reporting tools.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Scalable Architecture",
    description: "Built to grow with your business, our platform scales effortlessly as your needs evolve.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected with industry-leading security measures.",
  },
]

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive suite of services designed to help your business thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch py-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

