import { activitiesData } from "@/lib/activities-data";
import Image from "next/image";
import Link from "next/link";

export default function ActivityDetail() {
  const activity = activitiesData.find((a) => a.id === 2);

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

        {/* Creative Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Game Drive Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/game-drive-1.jpg"
                alt="Elephants on the savanna during a game drive"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/game-drive-2.jpg"
                alt="Safari breakfast in the wild"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/game-drive-3.jpg"
                alt="View from inside the safari vehicle"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow border border-border">
              <Image
                src="/game-drive-4.jpg"
                alt="Wildlife viewing from the safari truck"
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
          </div>
          <p className="text-foreground/70 mt-4 text-center text-sm">
            Every game drive is a new adventure—capture the magic of Uganda’s
            wild heart.
          </p>
        </div>
      </div>
    </section>
  );
}
