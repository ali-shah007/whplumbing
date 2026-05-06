import { Phone, MessageCircle } from "lucide-react";

const RepairHero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to book a boiler repair service."
  );

  const whatsappLink = `https://wa.me/447447712847?text=${whatsappMessage}`;

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-6 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Boiler Repair in{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Doncaster
            </span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-lg">
            Fast, reliable boiler repairs with same-day availability. We fix all
            major brands with honest pricing and no hidden costs.
          </p>

          {/* Trust Points */}
          <div className="grid grid-cols-2 gap-3 mb-10 text-sm">
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              🔥 Fast repairs
            </span>
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              ✔ Gas Safe engineers
            </span>
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              💰 Fixed pricing
            </span>
            <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              ⭐ 5-star rated
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Book Repair Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
              bg-gradient-to-r from-orange-500 to-orange-600 
              hover:from-orange-600 hover:to-orange-700 
              font-semibold shadow-lg hover:shadow-xl transition"
            >
              <MessageCircle size={18} />
              Book Your Boiler Repair
            </a>

            {/* Call Button */}
            <a
              href="tel:+447447712847"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
              bg-white/10 hover:bg-white/20 border border-white/20 
              font-semibold transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/666.jpg"
            alt="Boiler Repair"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* Image Overlay Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/10 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 left-5 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-lg text-sm font-semibold">
            🔧 Same-Day Repairs Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairHero;