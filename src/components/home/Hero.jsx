import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
            Trusted Local Heating Experts
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Boiler Installation, <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Servicing & Repairs
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Professional engineers delivering reliable, energy-efficient heating
            solutions for your home and business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
              Get Free Quote
              <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              View Services
            </button>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span>Rated 5/5 by 100+ customers</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
            alt="Heating Engineer"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* Floating Card 1 */}
          <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-xl shadow-lg">
            <p className="font-bold text-lg">500+</p>
            <p className="text-sm text-gray-600">Boilers Installed</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -top-6 -right-6 bg-white text-black p-4 rounded-xl shadow-lg">
            <p className="font-bold text-lg">24/7</p>
            <p className="text-sm text-gray-600">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;