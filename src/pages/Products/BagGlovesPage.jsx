// src/pages/Products/BagGlovesPage.jsx
import React from "react";
import BagGloves from "../../components/ProductCard/BagGloves";

const BagGlovesPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Bag</span> Gloves
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As trusted suppliers of premium bag gloves, we provide durable and high-quality products crafted from genuine and synthetic leather. 
        Our gloves feature reinforced stitching and ergonomic padding to ensure superior wrist support and excellent impact absorption. 
        Designed to meet the demands of intense training, our bag gloves guarantee both safety and top performance for athletes worldwide.
      </p>

      <BagGloves />
    </div>
  );
};

export default BagGlovesPage;
