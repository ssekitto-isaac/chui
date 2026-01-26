"use client";

import Image from "next/image";

export default function EscapeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Large image and title */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-6xl font-playfair font-bold mb-6 text-foreground leading-tight">
              Escape The Ordinary
            </h2>
            <div className="relative w-full h-80 md:h-[420px] mb-0 lg:mb-0">
              <Image
                src="/activity-guided-walk.jpg"
                alt="Lodge at night"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right side - Top image, then text */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-56 md:h-64">
              <Image
                src="/activity-boat-cruise.jpg"
                alt="Accommodation overview"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nile Safari Lodge offers a magical escape in the most luxurious,
              tranquil and eco-friendly setting in Uganda. Explore the
              breathtaking views of the{" "}
              <span className="text-[#e09b3d] underline">River Nile</span> from
              every corner of our lodge.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Escape the ordinary and experience the awe-inspiring spectacles
              that we have to offer on the banks of the world’s longest river
              and Uganda’s largest national park –{" "}
              <span className="text-[#e09b3d] underline">
                Murchison Falls National Park
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
