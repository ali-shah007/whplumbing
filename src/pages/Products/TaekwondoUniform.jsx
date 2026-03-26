import React from "react";
import TaekwondoUniform from "../../components/ProductCard/TaekwondoUniform";

const TaekwondoUniformPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Taekwondo</span> Uniform
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        Discover our premium Taekwondo uniforms crafted with durable, lightweight fabrics to ensure maximum comfort and freedom of movement. 
        Perfect for training and competition, our uniforms meet international standards and provide excellent durability and breathability.
      </p>

      <TaekwondoUniform />
    </div>
  );
};

export default TaekwondoUniformPage;
