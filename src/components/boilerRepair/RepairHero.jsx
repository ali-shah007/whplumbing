// components/repair/RepairHero.jsx
const RepairHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Boiler Repair in <span className="text-orange-500">Doncaster</span>
          </h1>

          <p className="text-gray-300 mb-8">
            Fast, reliable boiler repairs from Wheatley Plumbing & Heating. We fix all major brands with honest pricing and same-day availability.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
            <span className="bg-white/5 px-3 py-2 rounded-lg">🔥 Fast repairs</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">✔ Gas Safe engineers</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">💰 Fixed pricing</span>
            <span className="bg-white/5 px-3 py-2 rounded-lg">⭐ 5-star rated</span>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Get a Fast Quote
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/666.jpg"
            alt="Boiler Repair"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default RepairHero;