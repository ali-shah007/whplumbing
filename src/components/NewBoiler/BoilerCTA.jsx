// components/newboiler/BoilerCTA.jsx
import { Phone, ArrowRight } from "lucide-react";

const BoilerCTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for a New Boiler?
        </h2>

        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Get a fast, fixed-price quote with expert advice. No pressure, no hidden costs — just reliable installation you can trust.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

          {/* Primary CTA */}
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
            bg-gradient-to-r from-orange-500 to-orange-600 
            hover:from-orange-600 hover:to-orange-700 
            font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get My Quote
            <ArrowRight size={18} />
          </button>

          {/* Secondary CTA */}
          <a
            href="tel:+971557711247"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
            bg-white/10 hover:bg-white/20 border border-white/20 
            font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ Fixed Pricing</span>
          <span>✔ Up to 12-Year Warranty</span>
          <span>✔ Energy Efficient Boilers</span>
          <span>✔ Expert Installation</span>
        </div>

      </div>
    </section>
  );
};

export default BoilerCTA;