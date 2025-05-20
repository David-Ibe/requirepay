"use client"

import Image from "next/image"

const executiveTeam = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "/team/sarah-chen.jpg",
    bio: "Former fintech executive with 15+ years of experience in global payments and banking.",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "/team/michael-rodriguez.jpg",
    bio: "Tech veteran with experience at leading Silicon Valley companies.",
  },
  {
    name: "David Kim",
    role: "Chief Product Officer",
    image: "/team/david-kim.jpg",
    bio: "Product leader with expertise in building scalable financial products.",
  },
  {
    name: "Emily Thompson",
    role: "Chief Financial Officer",
    image: "/team/emily-thompson.jpg",
    bio: "Former investment banker with expertise in fintech and payments.",
  },
]

const departmentLeads = [
  {
    name: "Alex Foster",
    role: "Head of Engineering",
    image: "/team/alex-foster.jpg",
    bio: "Leading our engineering teams in building robust payment infrastructure.",
  },
  {
    name: "Lisa Wang",
    role: "Head of Design",
    image: "/team/lisa-wang.jpg",
    bio: "Creating beautiful and intuitive experiences for our users.",
  },
  {
    name: "James Carter",
    role: "Head of Sales",
    image: "/team/james-carter.jpg",
    bio: "Building partnerships with businesses worldwide.",
  },
  {
    name: "Maria Garcia",
    role: "Head of Customer Success",
    image: "/team/maria-garcia.jpg",
    bio: "Ensuring our customers get the most out of RequirePay.",
  },
  {
    name: "Tom Wilson",
    role: "Head of Security",
    image: "/team/tom-wilson.jpg",
    bio: "Protecting our platform and our customers\' data.",
  },
  {
    name: "Rachel Adams",
    role: "Head of Marketing",
    image: "/team/rachel-adams.jpg",
    bio: "Sharing our story with the world.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600">
              The passionate people behind RequirePay&apos;s mission to revolutionize global payments.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {executiveTeam.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Leads Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Department Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {departmentLeads.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re always looking for talented individuals to join our mission.
            </p>
            <a
              href="/company/careers"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
                <p className="text-gray-600">
                  We work together across teams to solve complex problems.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovative</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and new ideas.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse</h3>
                <p className="text-gray-600">
                  We celebrate different perspectives and backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
