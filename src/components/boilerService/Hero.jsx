// components/boiler/Hero.jsx
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Boiler Service in <span className="text-purple-400">Doncaster</span>
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            Keep your heating system safe, efficient, and reliable with expert servicing from Wheatley Plumbing and Heating. Trusted by local homeowners.
          </p>

          {/* Trust Points */}
          <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
            <span className="bg-white/5 px-3 py-2 rounded-lg">✔ All boiler brands</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">✔ Gas Safe registered</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">✔ Transparent pricing</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">✔ 5-star rated</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition shadow-lg">
              Book Your Service
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/boiler-service.png" // 👉 put your image in public folder
            alt="Boiler Service"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
            ⭐ 5.0 Rated Service
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;