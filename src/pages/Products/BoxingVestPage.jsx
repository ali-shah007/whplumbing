import React from "react";
import BoxingVest from "../../components/ProductCard/BoxingVest";

const BoxingVestPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Boxing</span> Vest
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As a trusted B2B supplier, we offer high-performance boxing vests in bulk, crafted from breathable, lightweight, and durable materials. 
        Designed for gyms, retailers, and distributors, our vests provide excellent flexibility, fit, and comfort to keep athletes cool during intense training and competition.
        Partner with us for reliable supply of premium boxing vests tailored for professional athletes and boxing enthusiasts.
      </p>

      <BoxingVest />
    </div>
  );
};

export default BoxingVestPage;
