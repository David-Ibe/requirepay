"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    title: "Pay-ins",
    description: "Accept payments from customers worldwide with multiple payment methods",
    href: "/solutions/pay-ins",
  },
  {
    title: "Payment Links",
    description: "Create and share payment links for quick transactions",
    href: "/solutions/payment-links",
  },
  {
    title: "Multi-currency Account",
    description: "Hold and manage multiple currencies in one account",
    href: "/solutions/multi-currency-account",
  },
  {
    title: "Payout",
    description: "Send payments to vendors and partners globally",
    href: "/solutions/payout",
  },
  {
    title: "Virtual USD Cards",
    description: "Issue virtual cards for secure online transactions",
    href: "/solutions/virtual-usd-cards",
  },
  {
    title: "Money Transfer",
    description: "Send money internationally with competitive rates",
    href: "/solutions/money-transfer",
  },
]

const company = [
  {
    title: "About Us",
    description: "Learn about our mission and values",
    href: "/company/about",
  },
  {
    title: "Team",
    description: "Meet the people behind RequirePay",
    href: "/company/team",
  },
  {
    title: "Careers",
    description: "Join our growing team",
    href: "/company/careers",
  },
  {
    title: "Press",
    description: "Latest news and media coverage",
    href: "/company/press",
  },
]

const resources = [
  {
    title: "Documentation",
    description: "Detailed guides and API references",
    href: "/resources/documentation",
  },
  {
    title: "Help Center",
    description: "FAQs and troubleshooting guides",
    href: "/resources/help-center",
  },
  {
    title: "Blog",
    description: "Industry insights and updates",
    href: "/resources/blog",
  },
  {
    title: "Developers",
    description: "API documentation and SDKs",
    href: "/resources/developers",
  },
  {
    title: "Contact Support",
    description: "Get help from our team",
    href: "/resources/contact-support",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight">
                Require<span className="text-blue-600">Pay</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-12">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="inline-flex items-center text-gray-600 hover:text-gray-900 px-1 pt-1 text-sm font-medium">
                  Solutions
                </button>
                <div className="absolute left-0 w-screen max-w-[800px] px-4 mt-1 transform -translate-x-1/4 hidden group-hover:block z-50">
                  <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-100/70 divide-x divide-y divide-gray-300">
                      {solutions.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex flex-col justify-between rounded-lg bg-white hover:bg-blue-50 p-4 transition-colors duration-200 border border-gray-300 hover:border-blue-300 hover:shadow-md"
                        >
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button className="inline-flex items-center text-gray-600 hover:text-gray-900 px-1 pt-1 text-sm font-medium">
                  Company
                </button>
                <div className="absolute left-0 w-screen max-w-[600px] px-4 mt-1 transform -translate-x-1/4 hidden group-hover:block z-50">
                  <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-100/70 divide-x divide-y divide-gray-300">
                      {company.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex flex-col justify-between rounded-lg bg-white hover:bg-blue-50 p-4 transition-colors duration-200 border border-gray-300 hover:border-blue-300 hover:shadow-md"
                        >
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="inline-flex items-center text-gray-600 hover:text-gray-900 px-1 pt-1 text-sm font-medium">
                  Resources
                </button>
                <div className="absolute left-0 w-screen max-w-[600px] px-4 mt-1 transform -translate-x-1/4 hidden group-hover:block z-50">
                  <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-100/70 divide-x divide-y divide-gray-300">
                      {resources.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex flex-col justify-between rounded-lg bg-white hover:bg-blue-50 p-4 transition-colors duration-200 border border-gray-300 hover:border-blue-300 hover:shadow-md"
                        >
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link href="/register">
              <Button className="bg-black text-white hover:bg-gray-800">
                Create an account
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Solutions
              </button>
              <div className="pl-4">
                {solutions.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Company
              </button>
              <div className="pl-4">
                {company.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Resources
              </button>
              <div className="pl-4">
                {resources.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 rounded-md text-base font-medium bg-black text-white hover:bg-gray-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
