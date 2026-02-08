import { activitiesData } from "@/lib/activities-data";
import Image from "next/image";
import Link from "next/link";

export default function ActivityDetail() {
  const activity = activitiesData.find((a) => a.id === 3);

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
        <div className="prose text-foreground">{activity.longDescription}</div>
      </div>
    </section>
  );
}
