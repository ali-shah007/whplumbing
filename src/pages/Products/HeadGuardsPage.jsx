import React from "react";
import HeadGuards from "../../components/ProductCard/HeadGuards";

const HeadGuardsPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Head</span> Guards
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As a trusted B2B supplier, we offer high-quality head guards engineered for maximum protection and comfort. 
        Made with durable materials and featuring adjustable straps, our head guards provide a secure fit and superior impact absorption, 
        ideal for gyms, boxing clubs, and professional trainers sourcing safety equipment in bulk.
      </p>

      <HeadGuards />
    </div>
  );
};

export default HeadGuardsPage;
