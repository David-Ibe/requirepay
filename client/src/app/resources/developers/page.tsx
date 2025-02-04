"use client"

import Image from "next/image"

const quickStart = [
  {
    title: "Installation",
    code: `npm install @requirepay/sdk
# or
yarn add @requirepay/sdk`,
  },
  {
    title: "Initialize",
    code: `import { RequirePay } from '@requirepay/sdk';

const requirepay = new RequirePay({
  apiKey: 'your_api_key'
});`,
  },
  {
    title: "Create Payment",
    code: `const payment = await requirepay.payments.create({
  amount: 1000,
  currency: 'USD',
  description: 'Test payment'
});`,
  },
]

const sdks = [
  {
    language: "Node.js",
    version: "v2.1.0",
    icon: "/icons/nodejs.svg",
    github: "https://github.com/requirepay/node-sdk",
    docs: "/docs/node",
  },
  {
    language: "Python",
    version: "v2.0.1",
    icon: "/icons/python.svg",
    github: "https://github.com/requirepay/python-sdk",
    docs: "/docs/python",
  },
  {
    language: "PHP",
    version: "v2.0.0",
    icon: "/icons/php.svg",
    github: "https://github.com/requirepay/php-sdk",
    docs: "/docs/php",
  },
  {
    language: "Ruby",
    version: "v1.9.0",
    icon: "/icons/ruby.svg",
    github: "https://github.com/requirepay/ruby-sdk",
    docs: "/docs/ruby",
  },
]

const resources = [
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for popular languages",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sample Apps",
    description: "Example implementations and demos",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
]

export default function DevelopersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Developer Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to integrate RequirePay into your application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/documentation"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Documentation
              </a>
              <a
                href="#quick-start"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors border border-blue-600"
              >
                Quick Start
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start Guide</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {quickStart.map((step) => (
              <div key={step.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <div className="p-4 bg-gray-50">
                  <pre className="text-sm overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Official SDKs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sdks.map((sdk) => (
              <div key={sdk.language} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12">
                    <Image src={sdk.icon} alt={sdk.language} width={48} height={48} />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">{sdk.language}</h3>
                    <p className="text-sm text-gray-500">{sdk.version}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={sdk.github}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    GitHub Repository →
                  </a>
                  <a
                    href={sdk.docs}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    Documentation →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Technical Support?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our developer support team is here to help you with any technical questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/contact-support"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="https://github.com/requirepay"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors border border-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
