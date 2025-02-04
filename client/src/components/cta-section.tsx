import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to simplify your financial operations?</h2>
          <p className="text-xl text-gray-600 mb-8">Open an account today.</p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button size="lg">Get Started for free</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

