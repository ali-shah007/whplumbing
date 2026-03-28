import { Star } from "lucide-react";

const reviews = [
  {
    name: "Darren Robson",
    text: "Excellent service. Professional team and quick installation.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sandra Conway",
    text: "Highly recommend. Friendly engineers and great experience.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Michael Carter",
    text: "Fast response and very reliable. Will definitely use again!",
    image: "https://i.pravatar.cc/100?img=8",
  },
];

const Reviews = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mb-12">
          Trusted by hundreds of happy customers
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              
              {/* Stars */}
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6">"{review.text}"</p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-sm text-gray-400">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Text */}
        <div className="mt-12 text-gray-500 text-sm">
          ⭐ Rated 5/5 by our customers
        </div>
      </div>
    </section>
  );
};

export default Reviews;