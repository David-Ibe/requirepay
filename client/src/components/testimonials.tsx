import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "RequirePay's platform has revolutionized how we handle transactions. The integration process was remarkably smooth, and we were able to make global payments effortlessly.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "The user-friendly interface and simplified workflow have significantly reduced the time and effort spent on managing corporate spending.",
    author: "Michael Rodriguez",
    role: "CFO, InnovateCorp",
    company: "InnovateCorp",
  },
  {
    quote:
      "Their team is responsive, knowledgeable, and goes the extra mile. Highly recommended for any business looking to streamline their financial operations.",
    author: "Lisa Thompson",
    role: "Director of Finance",
    company: "Global Ventures",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Discover why RequirePay is the preferred choice for businesses
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="pt-6">
                <blockquote className="space-y-4">
                  <p className="text-gray-600">{testimonial.quote}</p>
                  <footer className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg"
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <cite className="not-italic font-medium text-gray-900">{testimonial.author}</cite>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

