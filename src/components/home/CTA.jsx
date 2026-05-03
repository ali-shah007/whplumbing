import { Phone, MessageCircle, Flame } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#0B2D4D] via-[#123F67] to-[#F97316] text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0B2D4D]/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
          <Flame size={14} className="text-[#F97316]" />
          Trusted Heating Specialists
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Get Expert Advice Today
        </h2>

        {/* Description */}
        <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
          Speak with our certified engineers and get a fast, free quote for your
          heating needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Call Button */}
          <a
            href="tel:+447447712847"
            className="flex items-center justify-center gap-2 bg-white text-[#0B2D4D] px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/447447712847"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-blue-100">
          ✔ Free Quotes • ✔ Fast Response • ✔ Trusted Engineers
        </p>
      </div>
    </section>
  );
};

export default CTA;