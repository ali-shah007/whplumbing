// components/boiler/Included.jsx
import {
  ShieldCheck,
  Gauge,
  Settings,
  Sparkles,
  Flame,
  FileText,
} from "lucide-react";

const items = [
  {
    title: "Visual Inspection",
    desc: "Complete check of boiler, flue, and pipework for leaks or damage.",
    icon: ShieldCheck,
  },
  {
    title: "Pressure Check",
    desc: "We test and adjust system pressure to optimal levels.",
    icon: Gauge,
  },
  {
    title: "Safety Controls",
    desc: "Key components like thermostat and controls are fully tested.",
    icon: Settings,
  },
  {
    title: "Cleaning & Maintenance",
    desc: "Internal cleaning to improve performance and lifespan.",
    icon: Sparkles,
  },
  {
    title: "Gas Rate Check",
    desc: "Ensuring correct gas flow for safe and efficient operation.",
    icon: Flame,
  },
  {
    title: "Service Report",
    desc: "Detailed report with findings and recommendations.",
    icon: FileText,
  },
];

const Included = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What’s Included in Your Boiler Service
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          We carry out a full professional service to ensure your boiler is safe, efficient, and reliable all year round.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-left"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-4 group-hover:scale-110 transition">
                  <Icon size={48} />
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

export default Included;