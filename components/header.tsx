"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-transparent z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/chui-safari-logo.jpg"
              alt="Chui Safari Camp"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
          <span className="text-2xl md:text-3xl font-playfair font-bold text-white drop-shadow-lg hidden sm:block">
            Chui Safari Camp
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="#accommodations"
            className="text-white hover:text-primary transition text-base font-medium drop-shadow-lg"
          >
            Bandas
          </Link>
          <Link
            href="#activities"
            className="text-white hover:text-primary transition text-base font-medium drop-shadow-lg"
          >
            Activities
          </Link>
          <Link
            href="#spa"
            className="text-white hover:text-primary transition text-base font-medium drop-shadow-lg"
          >
            Spa
          </Link>
          <a
            href="tel:+256700801524"
            className="flex items-center gap-2 text-white hover:text-primary transition text-base font-medium drop-shadow-lg"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">+256 700 801 524</span>
          </a>
          <button className="px-7 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition text-base font-semibold shadow-lg">
            Book Now
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/80 border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="#accommodations"
                className="text-white hover:text-primary transition text-lg"
              >
                Bandas
              </Link>
              <Link
                href="#activities"
                className="text-white hover:text-primary transition text-lg"
              >
                Activities
              </Link>
              <Link
                href="#spa"
                className="text-white hover:text-primary transition text-lg"
              >
                Spa
              </Link>
              <a
                href="tel:+256700801524"
                className="flex items-center gap-2 text-white hover:text-primary transition text-lg"
              >
                <Phone size={18} />
                <span>+256 700 801 524</span>
              </a>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition w-full text-lg font-semibold">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
