// components/common/ReviewsSlider.jsx
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "John D.",
    text: "Excellent service, very professional and quick installation.",
  },
  {
    name: "Sarah M.",
    text: "Highly recommend! Friendly engineers and great pricing.",
  },
  {
    name: "Ali R.",
    text: "Fast response and very clean work. 5 stars!",
  },
  {
    name: "David K.",
    text: "Installed my boiler next day. Amazing experience.",
  },
];

const ReviewsSlider = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = scrollRef.current;

    const interval = setInterval(() => {
      if (scroll) {
        scroll.scrollLeft += 1;
        if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
          scroll.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-10">
        ⭐ Trusted by Our Customers
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6"
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-600 mb-4">"{r.text}"</p>
            <h4 className="font-semibold">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSlider;