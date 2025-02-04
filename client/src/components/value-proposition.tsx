import { Layers, CreditCard, Building2 } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "All-in-One Finance Platform",
    description:
      "Simplify your financial ecosystem with Graph's all-in-one finance platform. From corporate cards to global payouts, we provide a comprehensive suite of tools designed to meet the unique needs of startups, businesses, and enterprises.",
  },
  {
    icon: CreditCard,
    title: "Corporate Dollar Card",
    description: "Streamline your financial operations with powerful virtual and physical VISA dollar cards.",
  },
  {
    icon: Building2,
    title: "Business Bank Accounts",
    description:
      "Experience cash management with insured and regulated bank accounts the way it should be exceptional and tailored just for you",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            All your spend in
            <br />
            one unified platform.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            All the tools you need to manage expenses proactively and empower teams with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-blue-900 text-blue-300 rounded-lg">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}