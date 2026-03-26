import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Custom Boxing Gloves",
    description: "High-quality boxing gloves designed for maximum comfort and durability.",
    image: "/Boxing/BoxingGloves/7.png",
    sectionId: "boxing-gloves",
  },
  {
    title: "Bag Gloves",
    description: "Durable bag gloves perfect for heavy bag training sessions.",
    image: "/Boxing/BoxingGloves/0.jpeg",
    sectionId: "bag-gloves",
  },
  {
    title: "Focus Pads",
    description: "Lightweight and durable focus pads for precision training.",
    image: "/Boxing/BoxingGloves/21.jpeg",
    sectionId: "focus-pads",
  },
  {
    title: "Punching Bags",
    description: "Premium punching bags built for endurance and heavy workouts.",
    image: "/Boxing/BoxingGloves/28.jpg",
    sectionId: "punching-bags",
  },
  {
    title: "Personalized Head Guard",
    description: "Protective headgear for safe and effective training.",
    image: "/Boxing/BoxingGloves/15.png",
    sectionId: "head-guard",
  },
  {
    title: "Other Equipment",
    description: "Explore other training equipment to support your fitness journey.",
    image: "/Boxing/BoxingGloves/31.png",
    sectionId: "other-equipment",
  },
  {
    title: "Personalized Boxing Shorts",
    description: "Stylish and comfortable boxing shorts for professionals and amateurs.",
    image: "/Boxing/boxing shorts/1.jpg",
    sectionId: "boxing-shorts",
  },
  {
    title: "Custom Boxing Vest",
    description: "Breathable boxing vests for intense training and competition.",
    image: "/Boxing/boxing vest/1.jpg",
    sectionId: "boxing-vest",
  },
  {
    title: "Personalized Team Uniform",
    description: "Customizable team uniforms with superior quality stitching.",
    image: "/Boxing/team uniforms/1.jpg",
    sectionId: "team-uniform",
  },
  {
    title: "Custom Taekwondo Uniform",
    description: "Traditional and modern Taekwondo uniforms for training and competition.",
    image: "/Boxing/teakwondo uniforms/1.jpg",
    sectionId: "taekwondo-uniform",
  },
  {
    title: "Custom Basketball Uniform",
    description: "High-quality basketball uniforms crafted for durability and performance.",
    image: "/Boxing/basketball/1.jpg",
    sectionId: "basketball",
  },
];

const OurProductsPage = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-100 py-12 px-6 mt-[100px]">
        <h1 className="text-4xl font-bold text-center text-black mb-10">
          <span className="text-brand-color">Product</span> Categories
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Link to={`/products/${category.sectionId}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-auto object-contain rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-black">{category.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProductsPage;
