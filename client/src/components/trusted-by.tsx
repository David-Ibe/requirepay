import Image from "next/image"

export function TrustedBy() {
  return (
    <section className="pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center mx-auto max-w-5xl">
          <div className="w-40 h-16 relative">
            <Image
              src="/transocean.png"
              alt="Transocean"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          <div className="w-40 h-16 relative">
            <Image
              src="/Techstars.png"
              alt="Techstars"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          <div className="w-40 h-16 relative">
            <Image
              src="/seplat.png"
              alt="Seplat"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          <div className="w-40 h-16 relative">
            <Image
              src="/zenith.png"
              alt="Zenith"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          <div className="w-40 h-16 relative">
            <Image
              src="/flutterwave.png"
              alt="Flutterwave"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
