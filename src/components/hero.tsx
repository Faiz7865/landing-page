import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(https://plus.unsplash.com/premium_photo-1669930763050-3ff42583e293?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24 lg:py-32 m-auto">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            Transform Your Business with Our Innovative Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-[700px]">
            We help businesses grow by providing cutting-edge technology solutions that drive results and create
            meaningful experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

