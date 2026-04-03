// pages/BoilerService.jsx
import Hero from "../components/boilerService/Hero";
import Process from "../components/boilerService/Process";
import Included from "../components/boilerService/Included";
import WhyChoose from "../components/boilerService/WhyChoose";
import FAQ from "../components/boilerService/FAQ";
import CTA from "../components/boilerService/CTA";
import Trust from "../components/home/Trust";

const BoilerService = () => {
  return (
    <>
      <Hero />
      <Trust />
      <Process />
      <Included />
      <WhyChoose />
      <FAQ />
      <CTA />
    </>
  );
};

export default BoilerService;