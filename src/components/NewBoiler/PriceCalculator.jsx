// components/common/PriceCalculator.jsx
import { useState } from "react";

const PriceCalculator = () => {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);

  const basePrice = 1500;
  const price = basePrice + bedrooms * 200 + bathrooms * 150;

  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Estimate Your Boiler Price
      </h2>

      <p className="text-gray-500 mb-10">
        Get a quick idea of installation cost based on your home.
      </p>

      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-2xl shadow">

        {/* Bedrooms */}
        <div className="mb-6 text-left">
          <label className="font-medium">Bedrooms</label>
          <input
            type="range"
            min="1"
            max="5"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full"
          />
          <p>{bedrooms}</p>
        </div>

        {/* Bathrooms */}
        <div className="mb-6 text-left">
          <label className="font-medium">Bathrooms</label>
          <input
            type="range"
            min="1"
            max="3"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="w-full"
          />
          <p>{bathrooms}</p>
        </div>

        {/* Price */}
        <div className="text-3xl font-bold text-orange-500 mb-6">
          £{price}
        </div>

        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl">
          Get Exact Quote
        </button>

      </div>
    </section>
  );
};

export default PriceCalculator;