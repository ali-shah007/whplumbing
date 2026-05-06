// pages/NewBoiler.jsx

import FAQ from "../components/boilerService/FAQ";
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
      
      <FAQ />
      
      
    </>
  );
};

export default NewBoiler;