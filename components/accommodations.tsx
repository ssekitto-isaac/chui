'use client'

import Image from 'next/image'

export default function Accommodations() {
  const accommodations = [
    {
      name: 'Single Room',
      description: 'Experience comfort and elegance in our spacious deluxe rooms with stunning river views and modern amenities.',
      features: ['River View', 'En-suite Bathroom', 'Private Veranda', 'WiFi'],
      image: '/banda-deluxe.jpg',
    },
    {
      name: 'Double/Twin',
      description: 'Our premium offering features luxury furnishings, personalized service, and exclusive access to private facilities.',
      features: ['Premium Furnishings', 'Private Deck', 'Personalized Service', 'Gourmet Dining'],
      image: '/banda-suite.jpg',
    },
    {
      name: 'Triple Room',
      description: 'Perfect for those seeking comfort and authenticity, our standard rooms offer cozy accommodations with traditional charm.',
      features: ['Comfortable Beds', 'Shared Facilities', 'River Access', 'Natural Ventilation'],
      image: '/banda-standard.jpg',
    },
  ]

  return (
    <section id="accommodations" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-12 text-foreground">
          Accommodations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.name}
              className="group relative h-96 w-full overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={accommodation.image || "/placeholder.svg"}
                alt={accommodation.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div />
                <div>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4 text-balance">
                    {accommodation.name}
                  </h3>
                  <a href="https://wa.me/256700801524" >
                  <button className="px-6 py-2 bg-white text-foreground font-bold rounded-full hover:bg-primary hover:text-white transition inline-block">
                    Book Now
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
