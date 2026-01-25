'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { id: 1, src: '/activity-game-drive.jpg', alt: 'Safari Game Drive' },
    { id: 2, src: '/activity-boat-cruise.jpg', alt: 'Nile River Cruise' },
    { id: 3, src: '/banda-deluxe.jpg', alt: 'Deluxe Accommodation' },
    { id: 4, src: '/activity-guided-walk.jpg', alt: 'Guided Nature Walk' },
    { id: 5, src: '/spa-treatment.jpg', alt: 'Spa Experience' },
    { id: 6, src: '/dining-experience.jpg', alt: 'Fine Dining' },
    { id: 7, src: '/banda-suite.jpg', alt: 'Luxury Suite' },
    { id: 8, src: '/activity-bird-watch.jpg', alt: 'Bird Watching' },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-foreground">
            Our Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Explore the beauty and luxury of Chui Safari Camp through our curated collection of unforgettable moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center font-semibold px-4">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-foreground transition"
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-4xl h-96 md:h-[600px]">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-white/70">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              ←
            </button>
            <button
              onClick={() => setSelectedImage((selectedImage + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
