"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] md:h-[800px] min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero-banner.jpg"
        alt="Safari Lodge with wildlife at sunset"
        className="object-cover w-full h-full absolute inset-0"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <span className="uppercase tracking-widest text-white/80 text-base md:text-lg mb-2 drop-shadow-lg">
          Welcome to
        </span>
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-white drop-shadow-2xl leading-tight">
          Chui Safari Camp UG.
        </h1>
      </div>
    </section>
  );
}
