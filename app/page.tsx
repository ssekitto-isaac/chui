'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Accommodations from '@/components/accommodations'
import Activities from '@/components/activities'
import Spa from '@/components/spa'
import Gallery from '@/components/gallery'
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Accommodations />
      <Activities />
      <Gallery />
      <Spa />
      <Reviews />
      <Footer />
    </main>
  )
}
