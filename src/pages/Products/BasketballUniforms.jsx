// src/pages/Products/BasketballPage.jsx
import React from "react";
import BasketballProducts from "../../components/ProductCard/BasketballProducts";

const BasketballPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Basketball</span> Products
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        As leading suppliers of premium basketball products, we offer gear crafted with top-quality materials to ensure durability, performance, and style.
        Our basketball equipment is designed to meet the needs of players at every level, providing excellent grip, comfort, and longevity.
      </p>

      <BasketballProducts />
    </div>
  );
};

export default BasketballPage;
