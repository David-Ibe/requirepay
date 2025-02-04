"use client"

import Image from "next/image"

const guides = [
  {
    title: "Getting Started",
    description: "Learn the basics of RequirePay and set up your first integration",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    links: [
      { title: "Quick Start Guide", href: "#" },
      { title: "Account Setup", href: "#" },
      { title: "API Keys", href: "#" },
    ],
  },
  {
    title: "Payment Processing",
    description: "Learn how to process payments and handle transactions",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    links: [
      { title: "Accept Payments", href: "#" },
      { title: "Payment Methods", href: "#" },
      { title: "Webhooks", href: "#" },
    ],
  },
  {
    title: "Security",
    description: "Understand our security features and best practices",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    links: [
      { title: "Security Overview", href: "#" },
      { title: "Authentication", href: "#" },
      { title: "Data Protection", href: "#" },
    ],
  },
]

const apiReference = [
  {
    title: "Core API",
    description: "Essential endpoints for payment processing",
    endpoints: ["POST /v1/payments", "GET /v1/payments/:id", "POST /v1/refunds"],
  },
  {
    title: "Customers API",
    description: "Manage customer data and profiles",
    endpoints: ["POST /v1/customers", "GET /v1/customers/:id", "PUT /v1/customers/:id"],
  },
  {
    title: "Webhooks API",
    description: "Configure and manage webhook notifications",
    endpoints: ["POST /v1/webhooks", "GET /v1/webhooks", "DELETE /v1/webhooks/:id"],
  },
]

const sdks = [
  {
    language: "Node.js",
    version: "v2.1.0",
    icon: "/icons/nodejs.svg",
  },
  {
    language: "Python",
    version: "v2.0.1",
    icon: "/icons/python.svg",
  },
  {
    language: "PHP",
    version: "v2.0.0",
    icon: "/icons/php.svg",
  },
  {
    language: "Ruby",
    version: "v1.9.0",
    icon: "/icons/ruby.svg",
  },
]

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to integrate RequirePay into your application
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-3">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="text-blue-600 hover:text-blue-700">
                        {link.title} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">API Reference</h2>
          <div className="max-w-4xl mx-auto">
            {apiReference.map((api) => (
              <div key={api.title} className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{api.title}</h3>
                  <p className="text-gray-600 mb-4">{api.description}</p>
                  <div className="space-y-2 font-mono text-sm">
                    {api.endpoints.map((endpoint) => (
                      <div key={endpoint} className="bg-gray-50 p-2 rounded">
                        {endpoint}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Official SDKs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sdks.map((sdk) => (
              <div key={sdk.language} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src={sdk.icon} alt={sdk.language} width={64} height={64} />
                </div>
                <h3 className="font-semibold mb-1">{sdk.language}</h3>
                <p className="text-sm text-gray-600">{sdk.version}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a
              href="/resources/contact-support"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
