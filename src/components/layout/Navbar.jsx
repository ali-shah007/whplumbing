import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow">
      
      {/* Logo + Name */}
      <div className="flex items-center gap-2">
        <img
          src="/logo512.png"   // put your logo in public folder
          alt="WH Plumbing Logo"
          className="w-20 h-auto object-contain"
        />
        <h1 className="text-xl font-bold">WH Plumbing</h1>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/boiler-service">Boiler Service</Link>
        <Link to="/boiler-repair">Boiler Repair</Link>
        <Link to="/new-boiler">New Boiler</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;