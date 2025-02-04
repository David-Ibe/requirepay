"use client"

import Image from "next/image"

const featuredPosts = [
  {
    title: "The Future of Cross-Border Payments",
    excerpt: "Explore how emerging technologies are reshaping international money transfers and what it means for businesses.",
    author: "Sarah Chen",
    role: "CEO",
    date: "January 15, 2024",
    image: "/blog/cross-border-payments.jpg",
    category: "Industry Insights",
  },
  {
    title: "Building Secure Payment Systems",
    excerpt: "Best practices for implementing secure payment processing in your applications.",
    author: "Tom Wilson",
    role: "Head of Security",
    date: "January 10, 2024",
    image: "/blog/secure-payments.jpg",
    category: "Security",
  },
  {
    title: "Optimizing Payment Conversion Rates",
    excerpt: "Learn how to improve your payment flow and increase conversion rates.",
    author: "David Kim",
    role: "CPO",
    date: "January 5, 2024",
    image: "/blog/conversion-rates.jpg",
    category: "Best Practices",
  },
]

const recentPosts = [
  {
    title: "Understanding Payment Regulations in 2024",
    excerpt: "A comprehensive guide to payment regulations and compliance requirements.",
    author: "Lisa Wang",
    date: "December 28, 2023",
    category: "Compliance",
  },
  {
    title: "The Rise of Digital Wallets",
    excerpt: "How digital wallets are changing the way we think about payments.",
    author: "Michael Rodriguez",
    date: "December 20, 2023",
    category: "Trends",
  },
  {
    title: "Implementing Strong Customer Authentication",
    excerpt: "A technical guide to implementing SCA in your payment flow.",
    author: "Alex Foster",
    date: "December 15, 2023",
    category: "Technical",
  },
  {
    title: "Payment Trends to Watch in 2024",
    excerpt: "Key payment trends that will shape the industry in the coming year.",
    author: "Emily Thompson",
    date: "December 10, 2023",
    category: "Industry Insights",
  },
]

const categories = [
  { name: "All", count: 45 },
  { name: "Industry Insights", count: 12 },
  { name: "Technical", count: 8 },
  { name: "Security", count: 7 },
  { name: "Best Practices", count: 6 },
  { name: "Compliance", count: 5 },
  { name: "Trends", count: 4 },
  { name: "Case Studies", count: 3 },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RequirePay Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights and updates from the world of payments
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className="font-medium">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.role}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <a href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <div key={post.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded border bg-blue-600 text-white">1</button>
                  <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">2</button>
                  <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">3</button>
                  <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
