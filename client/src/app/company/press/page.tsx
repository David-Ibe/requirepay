"use client"

import Image from "next/image"

const pressReleases = [
  {
    title: "RequirePay Raises $50M Series B to Accelerate Global Expansion",
    date: "January 15, 2024",
    source: "TechCrunch",
    excerpt: "RequirePay, the innovative payment processing platform, announced today that it has raised $50 million in Series B funding led by Accel Partners...",
    link: "#",
  },
  {
    title: "RequirePay Launches Revolutionary Cross-Border Payment Solution",
    date: "December 5, 2023",
    source: "Forbes",
    excerpt: "RequirePay today announced the launch of its new cross-border payment solution, enabling businesses to send and receive payments in over 50 countries...",
    link: "#",
  },
  {
    title: "RequirePay Named Among Top 50 Fintech Companies of 2023",
    date: "November 20, 2023",
    source: "Financial Times",
    excerpt: "In its annual fintech rankings, the Financial Times has named RequirePay as one of the top 50 fintech companies globally...",
    link: "#",
  },
]

const mediaKit = [
  {
    title: "Company Logos",
    description: "Download our logo in various formats",
    type: "ZIP",
    size: "2.5 MB",
  },
  {
    title: "Brand Guidelines",
    description: "Our brand identity and usage guidelines",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    title: "Product Screenshots",
    description: "High-resolution product images",
    type: "ZIP",
    size: "5.2 MB",
  },
]

const pressContacts = [
  {
    name: "Sarah Johnson",
    role: "Head of Communications",
    email: "press@requirepay.com",
    region: "Global",
  },
  {
    name: "Mark Thompson",
    role: "PR Manager, Americas",
    email: "press.americas@requirepay.com",
    region: "Americas",
  },
  {
    name: "Lisa Chen",
    role: "PR Manager, APAC",
    email: "press.apac@requirepay.com",
    region: "Asia Pacific",
  },
]

export default function PressPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Press Center
            </h1>
            <p className="text-xl text-gray-600">
              Latest news and updates from RequirePay
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="max-w-4xl mx-auto">
            {pressReleases.map((release) => (
              <div
                key={release.title}
                className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span>{release.date}</span>
                    <span>•</span>
                    <span>{release.source}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <a
                    href={release.link}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mediaKit.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {item.type} • {item.size}
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contacts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Press Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pressContacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-1">{contact.name}</h3>
                <p className="text-blue-600 mb-2">{contact.role}</p>
                <p className="text-gray-600 mb-1">{contact.region}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/press/techcrunch-logo.png"
                alt="TechCrunch"
                width={200}
                height={60}
                className="mx-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/press/forbes-logo.png"
                alt="Forbes"
                width={200}
                height={60}
                className="mx-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/press/ft-logo.png"
                alt="Financial Times"
                width={200}
                height={60}
                className="mx-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/press/bloomberg-logo.png"
                alt="Bloomberg"
                width={200}
                height={60}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
