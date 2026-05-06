import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Wrench, Cog } from "lucide-react";

const services = [
  {
    title: "Boiler Service",
    desc: "Keep your boiler running efficiently with regular servicing.",
    image: "/11.png",
    icon: <Cog size={18} />,
    link: "/boiler-service",
  },
  {
    title: "Boiler Repair",
    desc: "Fast and reliable repair services when your boiler breaks.",
    image: "/22.jpg",
    icon: <Wrench size={18} />,
    link: "/boiler-repair",
  },
  {
    title: "New Boiler",
    desc: "Upgrade to energy-efficient systems with expert installation.",
    image: "/33.png",
    icon: <Flame size={18} />,
    link: "/new-boiler",
  },
];

const Services = () => {
  const phoneNumber = "447447712847";

  const whatsappMessage = encodeURIComponent(
    "Hi, I would like a free quote for boiler services. Please assist me."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <>
      <section
        id="services"
        className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF6FF] overflow-hidden"
      >
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#F97316]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2D4D]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-[#0B2D4D]/5 text-[#0B2D4D] border border-[#0B2D4D]/10 rounded-full">
            <Flame size={14} className="text-[#F97316]" />
            Professional Heating Solutions
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2D4D]">
            Our Services
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional heating solutions tailored to your needs with reliable
            service, expert engineers, and energy-efficient systems.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 text-left border border-gray-100"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium text-[#0B2D4D] shadow">
                    <span className="text-[#F97316]">{s.icon}</span>
                    Expert Service
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0B2D4D]">
                    {s.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{s.desc}</p>

                  <Link
                    to={s.link}
                    className="inline-flex items-center gap-2 text-[#F97316] font-medium group-hover:gap-3 transition-all"
                  >
                    View Service
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ WhatsApp Button (REPLACED POPUP BUTTON) */}
          <div className="mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;