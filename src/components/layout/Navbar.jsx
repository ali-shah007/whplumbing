import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Boiler Service", path: "/boiler-service" },
  { name: "Boiler Repair", path: "/boiler-repair" },
  { name: "New Boiler", path: "/new-boiler" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#0B2D4D]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo2.png"
            alt="Wheatley Heating Plumbing Solutions"
            className="w-14 md:w-18 h-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <h1 className="text-base md:text-lg font-bold tracking-wide text-[#0B2D4D]">
              Wheatley Heating
            </h1>
            <h1 className="text-base md:text-lg font-bold tracking-wide text-[#123F67]">
              Plumbing Solutions
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#0B2D4D] text-white shadow-md"
                    : "text-[#0B2D4D] hover:text-[#F97316] hover:bg-[#F97316]/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Call CTA */}
        <div className="hidden md:block">
          <a
            href="tel:+447447712847"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Flame size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-[#0B2D4D]/5 text-[#0B2D4D] hover:bg-[#F97316]/10 hover:text-[#F97316] transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#0B2D4D]/10 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-[#0B2D4D] text-white"
                      : "text-[#0B2D4D] hover:bg-[#F97316]/10 hover:text-[#F97316]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Call CTA */}
            <a
              href="tel:+447447712847"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white py-3 rounded-xl font-medium shadow-md"
            >
              <Flame size={16} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;