import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Modern Payments for Innovative Companies
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one
              account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact-sales">Contact Sales</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[600px] lg:h-[700px]">
            <div className="absolute inset-0">
              <Image
                src="/hero.jpg"
                alt="Dashboard Preview"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23E5E7EB'/%3E%3C/svg%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
