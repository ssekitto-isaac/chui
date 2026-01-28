'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      title: 'Buah Branch',
      description: '"Buah Brunch" at Chui Safari Camp is a signature experience that blends gourmet dining with the beauty of the wild.',
      image: '/dining-experience.jpg',
    },
    {
      title: 'Adventure',
      description: 'Embark on thrilling wildlife encounters, guided safaris, and water-based activities that will leave you breathless.',
      image: '/activity-game-drive.jpg',
    },
    {
      title: 'A Celebration of Taste',
      description: 'The brunch features a curated selection of fresh, locally sourced dishes, offering both comfort and elegance.',
      image: '/spa-treatment.jpg',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            fill
            className="object-cover"
            priority={index === currentSlide}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 text-balance">
              {feature.title}
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
