import Image from 'next/image'

export default function Spa() {
  return (
    <section id="spa" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-foreground">
              Mtoni Massage
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Indulge in pure relaxation and tranquility with our Mtoni Massage experience. Derived from the Swahili word for 'river,' Mtoni Massage invites you to immerse yourself in the serene beauty of the Nile from the comfort of your banda.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              To tailor your experience to perfection, we kindly request that you notify our team at least two hours before your desired appointment time.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
              Download our spa profile
            </button>
          </div>

          <div className="relative rounded-lg h-96 w-full overflow-hidden">
            <Image
              src="/spa-treatment.jpg"
              alt="Mtoni Massage Experience"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
