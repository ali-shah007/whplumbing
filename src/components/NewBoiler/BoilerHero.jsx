// components/newboiler/BoilerHero.jsx
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

const BoilerHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            New Boiler Installation in{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Doncaster
            </span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-lg">
            Upgrade to a modern, energy-efficient boiler with expert installation. 
            Enjoy lower energy bills, reliable heating, and long-term peace of mind.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3 text-sm mb-10">
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">🔥 Low installation cost</span>
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">✔ Up to 12-year warranty</span>
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">⭐ 5-star rated</span>
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">⚡ Energy efficient</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary CTA */}
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
              bg-gradient-to-r from-orange-500 to-orange-600 
              hover:from-orange-600 hover:to-orange-700 
              font-semibold shadow-lg hover:shadow-xl transition"
            >
              Get Fixed Price Quote
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

          {/* Trust Badge */}
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
            <ShieldCheck size={16} className="text-orange-500" />
            Gas Safe Registered • Fully Insured • Warranty Included
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/boiler-service.png"
            alt="New Boiler Installation"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* Overlay Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/10 to-transparent"></div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-6 bg-white text-gray-800 px-5 py-4 rounded-xl shadow-xl max-w-xs">
            <p className="text-sm font-semibold">
              💡 Save on Energy Bills
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Modern boilers can cut your heating costs significantly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BoilerHero;