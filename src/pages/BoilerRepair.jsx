// pages/BoilerRepair.jsx

import CommonIssues from "../components/boilerRepair/CommonIssues";

import RepairHero from "../components/boilerRepair/RepairHero";
import RepairProcess from "../components/boilerRepair/RepairProcess";
import RepairWhy from "../components/boilerRepair/RepairWhy";
import FAQ from "../components/boilerService/FAQ";
import Trust from "../components/home/Trust";


const BoilerRepair = () => {
  return (
    <>
      <RepairHero />
      <Trust/>
      <RepairProcess />
      <CommonIssues />
      <RepairWhy />
      <FAQ />
    
    </>
  );
};

export default BoilerRepair;