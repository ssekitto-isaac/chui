'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-playfair font-bold text-foreground mb-4">Stay Connected</h3>
            <p className="text-foreground/70 mb-4 text-sm">
              Subscribe to our newsletter with stories from our latest adventures and travel tips
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-full text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-foreground mb-4">
              Chui Safari Camp
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Experience authentic safari luxury in Buliisa, Uganda. Create unforgettable memories with wildlife encounters and world-class hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accommodations" className="text-foreground/70 hover:text-primary transition">
                  Bandas
                </a>
              </li>
              <li>
                <a href="#activities" className="text-foreground/70 hover:text-primary transition">
                  Activities
                </a>
              </li>
              {/* <li>
                <a href="#spa" className="text-foreground/70 hover:text-primary transition">
                  Spa
                </a>
              </li> */}
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition">
                  Download Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-foreground/70">+256 700 801 524</span>
                  <span className="text-foreground/70">+256 772 448 979</span>
                  <span className="text-foreground/70">+256 703 788 555</span>
                  <span className="text-foreground/70">+256 777 927 244</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-foreground/70">chuisafariugltd@gmail.com</span>
                  <span className="text-foreground/70">achemonges2001@gmail.com</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/70">Mubako Village, Avogera Parish, Ngwedo Buliisa, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 mb-8">
          <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/chuisafaricamp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.twitter.com/chuisafaricamp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/chuisafaricamp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
              <Youtube size={20} />
            </a>
            <a href="https://www.instagram.com/chuisafaricamp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/chuisafaricamp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>© 2026 Chui Safari Camp. All rights reserved.</p>
          {/* <p className="mt-2">
            Website designed by{' '}
            <a href="#" className="text-primary hover:underline">
              v0
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  )
}
