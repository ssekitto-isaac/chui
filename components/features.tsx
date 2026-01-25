export default function Features() {
  const features = [
    {
      title: 'Exclusive',
      description: 'Indulge in lavish accommodations, personalised service, and unparalleled privacy as you immerse yourself in the awe-inspiring surroundings.',
      icon: '✨',
    },
    {
      title: 'Luxurious',
      description: 'Immerse yourself in luxury with splendid accommodation, impeccable service, and exquisite amenities, all complemented by our customised fine dining experience.',
      icon: '👑',
    },
    {
      title: 'Eco-friendly',
      description: 'Explore, relax and experience eco-conscious accommodations, organic cuisine, and environmentally friendly practices as we contribute to the preservation of our natural surroundings.',
      icon: '🌿',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
