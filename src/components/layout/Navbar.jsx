import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo2.png"
            alt="WH Plumbing Logo"
            className="w-20 h-auto object-contain"
          />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            WH Plumbing
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          <Link className="hover:text-blue-600 transition" to="/boiler-service">Boiler Service</Link>
          <Link className="hover:text-blue-600 transition" to="/boiler-repair">Boiler Repair</Link>
          <Link className="hover:text-blue-600 transition" to="/new-boiler">New Boiler</Link>
          <Link className="hover:text-blue-600 transition" to="/contact">Contact</Link>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link onClick={() => setIsOpen(false)} className="block" to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} className="block" to="/boiler-service">Boiler Service</Link>
          <Link onClick={() => setIsOpen(false)} className="block" to="/boiler-repair">Boiler Repair</Link>
          <Link onClick={() => setIsOpen(false)} className="block" to="/new-boiler">New Boiler</Link>
          <Link onClick={() => setIsOpen(false)} className="block" to="/contact">Contact</Link>

          <Link
            to="/contact"
            className="block text-center bg-blue-600 text-white py-2 rounded-full"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;