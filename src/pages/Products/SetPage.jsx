import React from "react";
import Set from "../../components/ProductCard/Set";

const SetPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Other</span> Equipment
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        Explore our range of other boxing and training equipment designed to enhance your performance and safety. 
        From training accessories to protective gear, all products are crafted with quality materials to meet the needs 
        of beginners and professionals alike.
      </p>

      <Set />
    </div>
  );
};

export default SetPage;
