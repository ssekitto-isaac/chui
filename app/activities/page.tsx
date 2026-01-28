import Header from "@/components/header";
import Footer from "@/components/footer";
import { activitiesData } from "@/lib/activities-data";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Activities | Chui Safari Camp",
  description:
    "Explore all the exciting activities and experiences at Chui Safari Camp in Buliisa, Uganda.",
};

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back button and title */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
          All Activities
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl">
          Discover an incredible range of experiences at Chui Safari Camp, from
          thrilling game drives to cultural immersion.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {activitiesData.map((activity, index) => (
            <div
              key={activity.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-80 md:h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? "md:col-start-2" : ""}`}
              >
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
                  {activity.name}
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  {activity.description}
                </p>
                <Link
                  href={`/activities/${activity.id}`}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Book your stay at Chui Safari Camp today and experience the magic of
            Uganda's wilderness.
          </p>
          <a
            href="tel:+256700801524"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium text-lg"
          >
            Call to Book: +256 700 801 524
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
