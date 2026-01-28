import Header from "@/components/header";
import Hero from "@/components/hero";
import EscapeSection from "@/components/escape-section";
import AboutUsSection from "@/components/about-us-section";
import FeatureCarousel from "@/components/feature-carousel";
import Accommodations from "@/components/accommodations";
import Activities from "@/components/activities";
import Spa from "@/components/spa";
import Gallery from "@/components/gallery";
import Reviews from "@/components/reviews";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EscapeSection />
      <AboutUsSection />
      <FeatureCarousel />
      <Accommodations />
      <Activities />
      <Gallery />
      <Spa />
      <Reviews />
      <Footer />
    </main>
  );
}

// Create an about us section where we place the literature mision and vision of chui safari camp
// Mission Statement (The "What & How")
// Replace MToni Massage with Vision and statement.
//  Activities, when some one clicks on an activity, take them to the detail page. and show them
// more details about that activity.
//Onscroll, make the menu background solid with white text.
//Change the logo to a better one like the one from the old site
//change images as well.
//Exciting. pages let them have their own pages. too.
