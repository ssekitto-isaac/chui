'use client'

export default function Reviews() {
  const reviews = [
    {
      name: 'Fatima AlMattar',
      rating: 4,
      text: 'Friendly staff and great views of the Nile I stayed here for 2 nights; the cottages are spacious and really big! It\'s an eco-friendly lodge...',
    },
    {
      name: 'Janel T',
      rating: 5,
      text: 'Luxury to the max! The most beautiful place I have ever stayed and by far the most luxurious. The staff was phenomenal, the meals were...',
    },
    {
      name: 'David T',
      rating: 5,
      text: 'High marks for this really nice hotel The hotel is wonderful and the service was superb. We stayed 3 nights in the Asili Banda which...',
    },
    {
      name: 'Steve G',
      rating: 5,
      text: 'Best accommodations at Murchison Falls We were very glad to have chosen Nile Safari Lodge for our trip. It is most definitely one of the...',
    },
    {
      name: 'Mélanie Ba',
      rating: 5,
      text: 'This hotel is the best I ever been to. Everything is perfect from the room and the service, to the activities. The pool is so...',
    },
    {
      name: 'Rowena Mutoni',
      rating: 5,
      text: 'This is one of the most beautiful places I\'ve been! Special thanks to Allan, Josephine and Harriet! Staff is amazing 1000/10',
    },
  ]

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      ))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 text-foreground">
          Google client Reviews
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          See what our guests have to say about their unforgettable stays
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-primary/5 rounded-lg p-6 border border-border hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                {review.text}
              </p>
              <p className="font-semibold text-foreground text-sm">— {review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
            Share YOUR REVIEW
          </button>
        </div>
      </div>
    </section>
  )
}
