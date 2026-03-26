import React from "react";
import BoxingShorts from "../../components/ProductCard/BoxingShorts";

const BoxingShortsPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Boxing</span> Shorts
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As a reliable B2B supplier, we provide premium boxing shorts in bulk, crafted from breathable, high-quality fabrics to ensure durability, comfort, and flexibility.
        Ideal for gyms, retailers, and distributors, our lightweight and moisture-wicking shorts offer excellent freedom of movement for professional boxers and fitness enthusiasts alike.
        Partner with us for competitively priced, stylish boxing shorts suitable for training, competition, and everyday workouts.
      </p>

      <BoxingShorts />
    </div>
  );
};

export default BoxingShortsPage;
