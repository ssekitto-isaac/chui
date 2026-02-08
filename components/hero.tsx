"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  // No need for useRef or useEffect, let the video element handle autoplay natively

  return (
    <section className="relative w-full h-[700px] md:h-[800px] min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="object-cover w-full h-full absolute inset-0"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        playsInline
        muted
        autoPlay
        loop
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/Spotfishing_2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-5"></div>
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
