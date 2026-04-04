// components/newboiler/BoilerIncluded.jsx
import {
  Flame,
  Wrench,
  Settings,
  Sparkles,
  Trash2,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    title: "A-Rated Boiler",
    desc: "High-efficiency modern boiler for lower energy bills.",
    icon: Flame,
  },
  {
    title: "Expert Installation",
    desc: "Installed by Gas Safe registered professionals.",
    icon: Wrench,
  },
  {
    title: "Pipework & Flue",
    desc: "All necessary fittings and flue included.",
    icon: Settings, // ✅ fixed
  },
  {
    title: "System Flush",
    desc: "We clean your system and add a magnetic filter.",
    icon: Sparkles,
  },
  {
    title: "Old Boiler Removal",
    desc: "We safely remove and recycle your old system.",
    icon: Trash2,
  },
  {
    title: "Warranty Included",
    desc: "Full manufacturer + workmanship guarantee.",
    icon: ShieldCheck,
  },
];

const BoilerIncluded = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What’s Included in Your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Installation
          </span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Everything you need for a smooth, hassle-free boiler installation — no hidden extras.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-left border border-gray-100 hover:border-orange-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-4 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BoilerIncluded;