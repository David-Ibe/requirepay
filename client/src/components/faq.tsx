"use client"

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center"
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const faqs = [
    {
      question: "What is RequirePay and how does it work?",
      answer: "RequirePay is a comprehensive payment platform that enables businesses to accept global payments, manage corporate cards, and handle multi-currency transactions. Our platform streamlines the payment process by providing a unified dashboard for all your financial operations."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support a wide range of payment methods including credit/debit cards, bank transfers, mobile payments, and digital wallets. Our platform is constantly updated to include new payment methods based on market demands and regional preferences."
    },
    {
      question: "How secure is RequirePay?",
      answer: "Security is our top priority. RequirePay employs bank-grade encryption, follows PCI DSS compliance standards, and implements multiple layers of security measures to protect your transactions and data. We regularly undergo security audits and updates to maintain the highest security standards."
    },
    {
      question: "What are your transaction fees?",
      answer: "Our pricing is transparent and competitive. We offer flexible pricing plans tailored to your business size and transaction volume. Contact our sales team for a detailed quote that matches your specific needs."
    },
    {
      question: "How long does it take to get started?",
      answer: "Getting started with RequirePay is quick and straightforward. Most businesses can complete the setup process within 24-48 hours. Our team provides dedicated support throughout the onboarding process to ensure a smooth transition."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
