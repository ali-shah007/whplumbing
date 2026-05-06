// components/contact/ContactHero.jsx
import { Phone, MessageCircle } from "lucide-react";

const ContactHero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi, I need help with my boiler / heating system."
  );

  const whatsappLink = `https://wa.me/447447712847?text=${whatsappMessage}`;

  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white py-32 px-6 text-center overflow-hidden"
      style={{
        backgroundImage: "url('/contact-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Get in Touch with{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Wheatley Plumbing
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Need help with your boiler or heating system? Get fast support, expert
          advice, and a free quote — we’re here to help.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {/* Call Button */}
          <a
            href="tel:+447447712847"
            className="flex items-center gap-2 px-6 py-3 rounded-xl 
            bg-gradient-to-r from-orange-500 to-orange-600 
            hover:from-orange-600 hover:to-orange-700 
            font-semibold shadow-lg hover:shadow-xl transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl 
            bg-green-500 hover:bg-green-600 
            font-semibold shadow-lg hover:shadow-xl transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ Fast Response</span>
          <span>✔ Free Quotes</span>
          <span>✔ Local Experts</span>
          <span>✔ Friendly Support</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;