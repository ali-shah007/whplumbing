// components/newboiler/BoilerHero.jsx
const BoilerHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            New Boiler Installation in{" "}
            <span className="text-orange-500">Doncaster</span>
          </h1>

          <p className="text-gray-300 mb-8">
            Upgrade to a modern, energy-efficient boiler with Wheatley Plumbing & Heating. 
            Affordable pricing, expert installation, and long-term reliability.
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm mb-8">
            <span className="bg-white/5 px-3 py-2 rounded-lg">🔥 Low installation cost</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">✔ Up to 12-year warranty</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">⭐ 5-star rated</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">⚡ Energy efficient</span>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Get a Fixed Price Quote
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/boiler-service.png"
            alt="New Boiler Installation"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default BoilerHero;