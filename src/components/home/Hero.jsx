import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
          Trusted Local Heating Experts
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Boiler Installation, <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Servicing & Repairs
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
          Professional engineers delivering reliable, energy-efficient heating
          solutions for your home and business.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:opacity-90 transition">
            Get Free Quote
            <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
            View Services
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ 24/7 Emergency Service</span>
          <span>✔ Certified Engineers</span>
          <span>✔ Fast Response Time</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;