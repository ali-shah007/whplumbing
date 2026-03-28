import { Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-purple-700 via-blue-700 to-black text-white overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Get Expert Advice Today
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-8 text-lg">
          Speak with our certified engineers and get a fast, free quote for your heating needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Call Button */}
          <a
            href="tel:+971557711247"
            className="flex items-center justify-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/971557711247"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-gray-300">
          ✔ Free Quotes • ✔ Fast Response • ✔ Trusted Engineers
        </p>
      </div>
    </section>
  );
};

export default CTA;