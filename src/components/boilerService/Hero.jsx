import React from "react";
import { Flame, ShieldCheck, Star, Phone } from "lucide-react";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book boiler service."
  );

  const whatsappLink = `https://wa.me/447447712847?text=${whatsappMessage}`;

  return (
    <section className="relative bg-gradient-to-br from-[#0B2D4D] via-[#123F67] to-[#0A2238] text-white py-20 px-6 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F97316]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
            <Flame size={14} className="text-[#F97316]" />
            Trusted Local Heating Experts
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Boiler Service in{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-orange-300 bg-clip-text text-transparent">
              Doncaster
            </span>
          </h1>

          <p className="text-blue-100 mb-8 text-lg max-w-xl">
            Keep your heating system safe, efficient, and reliable with expert
            servicing from Wheatley Plumbing and Heating.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
            <span className="bg-white/10 px-4 py-3 rounded-xl">
              ✔ All boiler brands
            </span>
            <span className="bg-white/10 px-4 py-3 rounded-xl">
              ✔ Gas Safe registered
            </span>
            <span className="bg-white/10 px-4 py-3 rounded-xl">
              ✔ Transparent pricing
            </span>
            <span className="bg-white/10 px-4 py-3 rounded-xl">
              ✔ 5-star rated
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F97316] to-[#EA580C] px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:scale-105"
            >
              Book Your Service
            </a>

            {/* CALL BUTTON */}
            <a
              href="tel:+447447712847"
              className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition backdrop-blur"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img
            src="/boiler-service.png"
            alt="Boiler Service"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10"
          />

          <div className="absolute bottom-4 left-4 bg-white text-[#0B2D4D] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
            <Star size={14} className="fill-[#F97316] text-[#F97316]" />
            5.0 Rated Service
          </div>

          <div className="absolute top-4 right-4 bg-white/95 text-[#0B2D4D] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#F97316]" />
            Gas Safe Certified
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;