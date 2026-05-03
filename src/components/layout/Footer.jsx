import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0B2D4D] via-[#123F67] to-[#0A2238] text-white pt-16 pb-8 px-6 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 relative z-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo2.png"
              alt="Wheatley Heating Plumbing Solutions"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-lg font-bold tracking-wide text-white">
                Wheatley Heating
              </h1>
              <h1 className="text-lg font-bold tracking-wide text-blue-200">
                Plumbing Solutions
              </h1>
            </div>
          </div>

          <p className="text-blue-100 mb-4 leading-relaxed">
            Professional heating services you can trust. Reliable, fast, and
            affordable solutions for homes and businesses.
          </p>

          <div className="text-sm text-blue-200 space-y-1">
            <p>✔ Certified Engineers</p>
            <p>✔ 24/7 Emergency Service</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
            <Flame size={16} className="text-[#F97316]" />
            Services
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li>
              <Link
                to="/new-boiler"
                className="hover:text-[#F97316] transition"
              >
                Boiler Installation
              </Link>
            </li>
            <li>
              <Link
                to="/boiler-repair"
                className="hover:text-[#F97316] transition"
              >
                Boiler Repairs
              </Link>
            </li>
            <li>
              <Link
                to="/boiler-service"
                className="hover:text-[#F97316] transition"
              >
                Boiler Servicing
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>

          <ul className="space-y-3 text-blue-100">
            <li>
              <Link to="/" className="hover:text-[#F97316] transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/boiler-service"
                className="hover:text-[#F97316] transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F97316] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>

          <div className="space-y-4 text-blue-100">
            <a
              href="tel:+447447712847"
              className="flex items-center gap-3 hover:text-[#F97316] transition"
            >
              <Phone size={16} />
              <span>+44 7447 712 847</span>
            </a>

            <a
              href="mailto:info@whplumbing.co.uk"
              className="flex items-center gap-3 hover:text-[#F97316] transition"
            >
              <Mail size={16} />
              <span>info@whplumbing.co.uk</span>
            </a>

            <div className="flex items-center gap-3 hover:text-[#F97316] transition">
              <MapPin size={16} />
              <span>277 Thorne Road, Doncaster, DN2 5AR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/10 mt-12 pt-6 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Wheatley Heating Plumbing Solutions. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;