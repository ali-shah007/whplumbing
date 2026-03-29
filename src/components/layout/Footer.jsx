import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-16 pb-8 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img 
              src="/logo2.png" 
              alt="WH Plumbing Logo" 
              className="w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-semibold">WH Plumbing</h3>
          </div>

          <p className="text-gray-400 mb-4">
            Professional heating services you can trust. Reliable, fast, and affordable solutions.
          </p>

          <p className="text-sm text-gray-500">
            ✔ Certified Engineers <br />
            ✔ 24/7 Emergency Service
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Boiler Installation</li>
            <li className="hover:text-white transition cursor-pointer">Boiler Repairs</li>
            <li className="hover:text-white transition cursor-pointer">Boiler Servicing</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">About</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-2 hover:text-white transition">
              <Phone size={16} />
              <span>+971 55 771 1247</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} />
              <span>whplumbing@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <MapPin size={16} />
              <span>Dubai, UAE</span>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} WH Plumbing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;