import React from "react";
import PunchingBags from "../../components/ProductCard/PunchingBags";

const PunchingBagsPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Punching</span> Bags
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        Shop our durable punching bags designed for all levels of boxing and martial arts training. 
        Made with premium materials and reinforced stitching, these bags provide excellent resistance and impact absorption for 
        heavy workouts, improving strength, endurance, and technique.
      </p>

      <PunchingBags />
    </div>
  );
};

export default PunchingBagsPage;
