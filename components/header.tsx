'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/chui-safari-logo.jpg"
              alt="Chui Safari Camp"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-playfair font-bold text-primary hidden sm:block">Chui Safari Camp</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#accommodations" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            Bandas
          </Link>
          <Link href="#activities" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            Activities
          </Link>
          <Link href="#spa" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            Spa
          </Link>
          <a href="tel:+256700801524" className="flex items-center gap-2 text-foreground hover:text-primary transition text-sm lg:text-base">
            <Phone size={16} />
            <span className="hidden lg:inline">+256 700 801 524</span>
          </a>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition text-sm font-medium">
            Book Now
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#accommodations" className="text-foreground hover:text-primary transition">
                Bandas
              </Link>
              <Link href="#activities" className="text-foreground hover:text-primary transition">
                Activities
              </Link>
              <Link href="#spa" className="text-foreground hover:text-primary transition">
                Spa
              </Link>
              <a href="tel:+256700801524" className="flex items-center gap-2 text-foreground hover:text-primary transition">
                <Phone size={16} />
                <span>+256 700 801 524</span>
              </a>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition w-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
