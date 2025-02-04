import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Globe, Building2, ShieldCheck, Wallet } from "lucide-react"

const features = [
  {
    title: "All-in-One Finance Platform",
    description:
      "Simplify your financial ecosystem with our comprehensive suite of tools designed for modern businesses.",
    icon: Wallet,
  },
  {
    title: "Corporate Dollar Card",
    description: "Streamline your financial operations with powerful virtual and physical VISA dollar cards.",
    icon: CreditCard,
  },
  {
    title: "Business Bank Accounts",
    description: "Experience cash management with insured and regulated bank accounts tailored just for you.",
    icon: Building2,
  },
  {
    title: "Global Operations",
    description: "Seamlessly manage international payments and multi-currency transactions.",
    icon: Globe,
  },
  {
    title: "Compliance-First",
    description: "Built with security and regulatory compliance at its core.",
    icon: ShieldCheck,
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">From startups to enterprises and businesses of all sizes</h2>
          <p className="mt-4 text-lg text-gray-600">
            We help you streamline and simplify your financial operations toward driving business growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

