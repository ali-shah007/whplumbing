// components/boiler/CTA.jsx
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Book Your Boiler Service Today
      </h2>

      <p className="text-gray-300 mb-8">
        Contact Wheatley Plumbing and Heating for a free quote.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span>+971 55 771 1247</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span>whplumbing@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;