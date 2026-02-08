// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [showFallback, setShowFallback] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.muted = true;
//     video.playsInline = true;
//     video.loop = true;

//     let fallbackTimer: number | undefined;

//     const tryPlay = async () => {
//       try {
//         await video.play();
//         setShowFallback(false);
//       } catch {
//         // Only show fallback if video cannot play after a short delay
//         fallbackTimer = window.setTimeout(() => {
//           if (video.paused || video.readyState === 0) setShowFallback(true);
//         }, 1200);
//       }
//     };

//     const onCanPlay = () => {
//       setShowFallback(false);
//       if (fallbackTimer) clearTimeout(fallbackTimer);
//     };
//     const onError = () => {
//       setShowFallback(true);
//       if (fallbackTimer) clearTimeout(fallbackTimer);
//     };

//     video.addEventListener("canplay", onCanPlay);
//     video.addEventListener("error", onError);

//     tryPlay();

//     return () => {
//       video.removeEventListener("canplay", onCanPlay);
//       video.removeEventListener("error", onError);
//       if (fallbackTimer) clearTimeout(fallbackTimer);
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-[700px] md:h-[800px] min-h-screen flex items-center justify-center overflow-hidden">
//       <video
//         ref={videoRef}
//         poster="/hero-banner 2.jpeg"
//         aria-hidden="true"
//         crossOrigin="anonymous"
//         className="object-cover w-full h-full absolute inset-0"
//         style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         playsInline
//         muted
//         autoPlay
//         loop
//         preload="metadata"
//       >
//         <source src="https://bantutech.online/chui.mp4" type="video/mp4" />
//       </video>

//       {showFallback && (
//         <img
//           src="/hero-banner 2.jpeg"
//           alt="Safari Lodge with wildlife at sunset"
//           aria-hidden="true"
//           className="object-cover w-full h-full absolute inset-0"
//           style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         />
//       )}
//       <div className="absolute inset-0 bg-black/40 z-5"></div>
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
//         <span className="uppercase tracking-widest text-white/80 text-base md:text-lg mb-2 drop-shadow-lg">
//           Welcome to
//         </span>
//         <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-white drop-shadow-2xl leading-tight">
//           Chui Safari Camp UG.
//         </h1>
//       </div>
//     </section>
//   );
// }
