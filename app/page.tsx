import Header from '@/components/header'
import Hero from '@/components/hero'
import EscapeSection from '@/components/escape-section'
import FeatureCarousel from '@/components/feature-carousel'
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
      <EscapeSection />
      <FeatureCarousel />
      <Accommodations />
      <Activities />
      <Gallery />
      <Spa />
      <Reviews />
      <Footer />
    </main>
  )
}
