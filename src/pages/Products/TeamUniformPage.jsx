import React from "react";
import TeamUniform from "../../components/ProductCard/TeamUniform";

const TeamUniformPage = () => {
  return (
    <div className="mt-[100px] px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        <span className="text-brand-color">Team</span> Uniform
      </h1>

      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        Browse our collection of high-quality team uniforms tailored for comfort, durability, and style. 
        Designed with breathable fabrics and reinforced stitching, these uniforms are ideal for sports teams, 
        clubs, and organizations seeking professional and customizable athletic apparel.
      </p>

      <TeamUniform />
    </div>
  );
};

export default TeamUniformPage;
