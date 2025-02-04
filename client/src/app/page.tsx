import { Hero } from '@/components/hero'
import { TrustedBy } from '@/components/trusted-by'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import Navbar from '@/components/navbar'
import { CtaSection } from '@/components/cta-section'
import { ValueProposition } from '@/components/value-proposition'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ValueProposition />
      <Testimonials />
      <Features />
     
      <CtaSection />
      <FAQ />
      <Footer />
    </main>
  )
}
