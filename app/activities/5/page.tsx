import { activitiesData } from "@/lib/activities-data";
import Image from "next/image";
import Link from "next/link";

export default function ActivityDetail() {
  const activity = activitiesData.find((a) => a.id === 5);

  if (!activity) return <div>Activity not found.</div>;

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/activities" className="text-primary mb-6 inline-block">
          &larr; Back to Activities
        </Link>
        <div className="rounded-lg overflow-hidden shadow-md border border-border mb-8">
          <Image
            src={activity.image || "/placeholder.svg"}
            alt={activity.name}
            width={800}
            height={600}
            className="object-cover w-full h-64"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {activity.name}
        </h1>
        <p className="text-foreground/80 mb-6">{activity.description}</p>
        <div className="prose text-foreground mb-10">
          {activity.longDescription}
        </div>

        {/* Fishing Adventure Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Fishing Adventure Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/fishing-1.jpg"
                alt="Angler with a big catfish on the Nile"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/fishing-2.jpg"
                alt="Proud fisherman with his catch on the Nile"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/fishing-3.jpg"
                alt="Massive Nile perch catch in the wild"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/fishing-4.jpg"
                alt="Fishing boat on the Nile"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/fishing-5.jpg"
                alt="Happy angler with a Nile perch"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
          </div>
          <p className="text-foreground/70 mt-4 text-center text-sm">
            Every cast is a new story—experience the thrill of fishing on the
            legendary Nile.
          </p>
        </div>
      </div>
    </section>
  );
}
