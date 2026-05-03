// components/boiler/CTA.jsx
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Your Boiler Service Today
        </h2>

        <p className="text-gray-300 mb-10">
          Fast, reliable, and professional service you can trust. Get your free quote now.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

          {/* Call Button */}
          <a
            href="tel:+971557711247"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
            bg-gradient-to-r from-orange-500 to-orange-600 
            hover:from-orange-600 hover:to-orange-700 
            text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* Email Button */}
          <a
            href="mailto:whplumbing@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
            bg-white/10 hover:bg-white/20 
            border border-white/20 
            text-white font-semibold transition"
          >
            <Mail size={18} />
            Email Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center text-gray-300 text-sm">

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-orange-500" />
            <span>+971 55 771 1247</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-400" />
            <span>whplumbing@gmail.com</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;