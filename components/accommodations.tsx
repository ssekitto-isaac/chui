'use client'

import Image from 'next/image'

export default function Accommodations() {
  const accommodations = [
    {
      name: 'Deluxe Banda',
      description: 'Experience comfort and elegance in our spacious deluxe rooms with stunning river views and modern amenities.',
      features: ['River View', 'En-suite Bathroom', 'Private Veranda', 'WiFi'],
      image: '/banda-deluxe.jpg',
    },
    {
      name: 'Exclusive Suite',
      description: 'Our premium offering features luxury furnishings, personalized service, and exclusive access to private facilities.',
      features: ['Premium Furnishings', 'Private Deck', 'Personalized Service', 'Gourmet Dining'],
      image: '/banda-suite.jpg',
    },
    {
      name: 'Standard Banda',
      description: 'Perfect for those seeking comfort and authenticity, our standard bandas offer cozy accommodations with traditional charm.',
      features: ['Comfortable Beds', 'Shared Facilities', 'River Access', 'Natural Ventilation'],
      image: '/banda-standard.jpg',
    },
  ]

  return (
    <section id="accommodations" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 text-foreground">
          Accommodations
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Choose from our selection of luxurious accommodations, each designed for your ultimate comfort.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.name}
              className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold mb-3 text-foreground">
                  {accommodation.name}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {accommodation.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {accommodation.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/70">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
                  Explore more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
