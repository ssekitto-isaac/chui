import Image from 'next/image'

export default function Activities() {
  const activities = [
    { name: 'Game Drives', image: '/activity-game-drive.jpg' },
    { name: 'Nile River Cruise', image: '/activity-boat-cruise.jpg' },
    { name: 'Guided Nature Walk', image: '/activity-guided-walk.jpg' },
    { name: 'Bird Watching', image: '/activity-bird-watch.jpg' },
  ]

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 text-foreground">
          Activities
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Discover unforgettable experiences in the heart of Africa's most spectacular natural settings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="group relative rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer border border-border h-64"
            >
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.name}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-lg font-semibold text-white">
                    {activity.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
            View All Activities
          </button>
        </div>
      </div>
    </section>
  )
}
