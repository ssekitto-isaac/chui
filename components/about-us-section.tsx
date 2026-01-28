"use client";

import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and text */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-6xl font-playfair font-bold mb-6 text-foreground leading-tight">
              About Us
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Mission Statement
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To deliver unforgettable experiences, blending thrilling
                adventures, empowering local communities while championing
                wildlife conservation for future generations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Vision
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To be Uganda's most admired safari camp, providing best
                accommodation and meals, transformative wildlife experiences,
                unparalleled conservation impact, and true community
                partnership.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-80 md:h-[420px]">
              <Image
                src="/activity-accommodation.jpg"
                alt="Chui Safari Camp Mission and Vision"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
