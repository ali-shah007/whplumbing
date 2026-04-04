// pages/NewBoiler.jsx

import FAQ from "../components/boilerService/FAQ";
import Reviews from "../components/home/Reviews";
import BoilerCTA from "../components/NewBoiler/BoilerCTA";
import BoilerHero from "../components/NewBoiler/BoilerHero";
import BoilerIncluded from "../components/NewBoiler/BoilerIncluded";
import BoilerPackages from "../components/NewBoiler/BoilerPackages";
import BoilerProcess from "../components/NewBoiler/BoilerProcess";




const NewBoiler = () => {
  return (
    <>
      <BoilerHero />
      <BoilerProcess />
      <BoilerPackages />
      
      
      <BoilerIncluded />
      
      <Reviews/>
      <FAQ />
      <BoilerCTA />
      
      
    </>
  );
};

export default NewBoiler;