'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-lodge.jpg"
          alt="Chui Safari Camp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white text-balance leading-tight">
          Discover Your Safari
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Chui Safari Camp offers an authentic luxury safari experience in the heart of Buliisa, Uganda. Immerse yourself in nature with exclusive accommodations, thrilling wildlife encounters, and unforgettable adventures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
            Explore Now
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
