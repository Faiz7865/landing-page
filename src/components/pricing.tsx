import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for small businesses and startups",
    features: ["Up to 5 users", "10GB storage", "Basic analytics", "24/7 support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for growing businesses and teams",
    features: ["Up to 20 users", "50GB storage", "Advanced analytics", "Priority support", "Custom integrations"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited users",
      "500GB storage",
      "Premium analytics",
      "Dedicated support team",
      "Custom integrations",
      "Advanced security features",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : ""}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-3">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

