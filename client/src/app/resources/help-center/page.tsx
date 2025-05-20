"use client"

import React from "react"

interface Article {
  title: string;
  href: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  articles: Article[];
}

interface PopularArticle {
  title: string;
  category: string;
  views: number;
}

interface TroubleshootingGuide {
  title: string;
  description: string;
  steps: string[];
}

const categories: Category[] = [
  {
    title: "Getting Started",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    articles: [
      { title: "Creating an Account", href: "#" },
      { title: "Verifying Your Identity", href: "#" },
      { title: "Setting Up Your Profile", href: "#" },
    ],
  },
  {
    title: "Payments",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    articles: [
      { title: "Making a Payment", href: "#" },
      { title: "Payment Methods", href: "#" },
      { title: "Payment Limits", href: "#" },
    ],
  },
  {
    title: "Security",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    articles: [
      { title: "Two-Factor Authentication", href: "#" },
      { title: "Password Security", href: "#" },
      { title: "Account Protection", href: "#" },
    ],
  },
];

const popularArticles: PopularArticle[] = [
  {
    title: "How to Reset Your Password",
    category: "Account Security",
    views: 1250,
  },
  {
    title: "Understanding Transaction Fees",
    category: "Payments",
    views: 980,
  },
  {
    title: "Setting Up Auto-Payments",
    category: "Payments",
    views: 850,
  },
  {
    title: "Verifying Your Identity",
    category: "Account Security",
    views: 720,
  },
];

const troubleshootingGuides: TroubleshootingGuide[] = [
  {
    title: "Payment Failed",
    description: "Steps to resolve failed payment issues",
    steps: [
      "Check your payment method details",
      "Verify sufficient funds",
      "Contact your bank if needed",
      "Try an alternative payment method",
    ],
  },
  {
    title: "Account Access Issues",
    description: "Troubleshoot login and access problems",
    steps: [
      "Clear browser cache and cookies",
      "Try resetting your password",
      "Check for system maintenance",
      "Contact support if issues persist",
    ],
  },
  {
    title: "Transaction Disputes",
    description: "Resolve transaction-related issues",
    steps: [
      "Review transaction details",
      "Gather supporting documentation",
      "Submit dispute through dashboard",
      "Follow up with support team",
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we help?
            </h1>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for help..."
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

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article.title}>
                      <a href={article.href} className="text-gray-600 hover:text-blue-600">
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="max-w-4xl mx-auto">
            {popularArticles.map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-lg shadow-sm mb-4 p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold mb-1">{article.title}</h3>
                  <span className="text-sm text-gray-500">{article.category}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {article.views} views
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Guides Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Troubleshooting Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {troubleshootingGuides.map((guide) => (
              <div key={guide.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is available 24/7 to assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/contact-support"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/resources/documentation"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors border border-blue-600"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
