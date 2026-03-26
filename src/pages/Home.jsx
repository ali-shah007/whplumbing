import React from "react";

import Trust from "../components/home/Trust";
import Services from "../components/home/Services";
import Reviews from "../components/home/Reviews";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import TopBar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";



function Home() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Trust />
      <Services />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;