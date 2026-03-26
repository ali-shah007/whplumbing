import React from 'react';
import './Marquee.css'; // Ensure the CSS for marquee is appropriate for this implementation
import { featuredProducts } from '../../components/Data/featuredProducts';

const Marquee = () => {
  return (
    <div className="marquee my-10 bg-base-200 border-t-2 border-b-2 border-[#1F93D0]">
      <div className="marquee-content py-5 md:px-[50px] px-[20px]">
        {/* Map over the products to show each brand logo */}
        {featuredProducts.map((product, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Duplicate the items for seamless transition */}
        {featuredProducts.map((product, index) => (
          <img
            key={index + featuredProducts.length}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Map over the products to show each brand logo */}
        {featuredProducts.map((product, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Duplicate the items for seamless transition */}
        {featuredProducts.map((product, index) => (
          <img
            key={index + featuredProducts.length}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Map over the products to show each brand logo */}
        {featuredProducts.map((product, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Duplicate the items for seamless transition */}
        {featuredProducts.map((product, index) => (
          <img
            key={index + featuredProducts.length}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Map over the products to show each brand logo */}
        {featuredProducts.map((product, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
        {/* Duplicate the items for seamless transition */}
        {featuredProducts.map((product, index) => (
          <img
            key={index + featuredProducts.length}
            src={`${process.env.PUBLIC_URL}/Brands/${product.Brand}.svg`}
            alt={`${product.Brand} logo`}
            className="marquee-item w-16 h-16 lg:w-24 lg:h-24 object-contain mx-4"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
