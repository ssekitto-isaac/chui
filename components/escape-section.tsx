'use client'

import Image from 'next/image'

export default function EscapeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and description */}
          <div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-12 text-foreground leading-tight">
              Escape The Ordinary
            </h2>

            {/* Images for small screens */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mb-8">
              <div className="relative h-64 w-full">
                <Image
                  src="/activity-guided-walk.jpg"
                  alt="Lodge detail"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/accommodations-view.jpg"
                  alt="Accommodation view"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Chui Safari Camp offers a magical escape in the most luxurious setting in Buliisa. Explore the breathtaking views of the Nile and abundant wildlife from every corner of our camp.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Our expert guides and world-class amenities ensure you have an unforgettable experience on the banks of Uganda's longest river and amid some of Africa's most iconic wildlife.
            </p>
          </div>

          {/* Right side - Featured images */}
          <div className="hidden lg:grid grid-cols-1 gap-6">
            <div className="relative h-80 w-full">
              <Image
                src="/accommodations-view.jpg"
                alt="Accommodation overview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
