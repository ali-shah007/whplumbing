import { Phone, Star } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-black/80 backdrop-blur-md text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* Left - Reviews */}
        <div className="flex items-center gap-2 text-gray-300">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="hidden sm:inline">
            Read Our 5 Star Reviews
          </span>
        </div>

        {/* Right - Contact + CTA */}
        <div className="flex items-center gap-4">
          
          {/* Phone */}
          <div className="hidden sm:flex items-center gap-2 text-gray-300 hover:text-white transition">
            <Phone size={16} />
            <span>+971 55 771 1247</span>
          </div>

          {/* CTA */}
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium shadow hover:opacity-90 transition">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;