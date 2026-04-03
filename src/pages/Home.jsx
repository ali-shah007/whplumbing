import React from "react";

import Trust from "../components/home/Trust";
import Services from "../components/home/Services";
import Reviews from "../components/home/Reviews";
import CTA from "../components/home/CTA";

import Hero from "../components/home/Hero";



function Home() {
  return (
    <div>
      
      <Hero/>
      <Trust />
      <Services />
      <Reviews />
      <CTA />
    
    </div>
  );
}

export default Home;