import React from "react";
import FocusPads from "../../components/ProductCard/FocusPads";

const FocusPadsPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Focus</span> Pads
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As a reliable B2B supplier, we provide premium focus pads built for precision training and rapid striking drills. 
        Constructed with robust materials and enhanced padding, our focus pads deliver superior shock absorption and durability. 
        Ideal for boxing gyms, martial arts schools, and fitness centers seeking quality training gear in bulk.
      </p>

      <FocusPads />
    </div>
  );
};

export default FocusPadsPage;
