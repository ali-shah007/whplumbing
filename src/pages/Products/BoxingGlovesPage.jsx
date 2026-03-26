// src/pages/Products/BoxingGlovesPage.jsx
import React from "react";
import BoxingGloves from "../../components/ProductCard/BoxingGloves";

const BoxingGlovesPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Boxing</span> Gloves
      </h1>
      
      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As a trusted B2B supplier, we offer high-quality boxing gloves in bulk, crafted from premium genuine leather and reinforced with high-density foam padding.
        Our durable gloves deliver superior wrist support and impact absorption, designed for professional gyms, retailers, and distributors.
        Benefit from competitive pricing and reliable supply for all your boxing glove bulk orders, tailored for training, sparring, and competition needs.
      </p>

      <BoxingGloves />
    </div>
  );
};

export default BoxingGlovesPage;
