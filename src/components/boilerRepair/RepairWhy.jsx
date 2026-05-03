// components/repair/RepairWhy.jsx
import { ShieldCheck, MessageSquare, Zap } from "lucide-react";

const features = [
  {
    title: "Trusted Locally",
    desc: "We’re known across Doncaster for reliable, honest boiler repairs backed by real customer satisfaction.",
    icon: ShieldCheck,
  },
  {
    title: "Honest Advice",
    desc: "No upselling, no pressure. We clearly explain the issue and your options before any work begins.",
    icon: MessageSquare,
  },
  {
    title: "Fast & Tidy",
    desc: "Same-day repairs where possible, with clean and professional workmanship every time.",
    icon: Zap,
  },
];

const RepairWhy = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Why Choose Us for Boiler Repairs?
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          When your boiler breaks down, you need a team you can trust. We deliver fast, transparent, and high-quality repairs with a focus on safety and long-term reliability.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-100 
                           shadow-sm hover:shadow-xl hover:-translate-y-2 
                           transition duration-300 text-left"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-orange-100 to-orange-200 
                  text-orange-600 mb-5 
                  group-hover:from-orange-500 group-hover:to-orange-600 
                  group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Line */}
                <div className="mt-4 h-1 w-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-sm text-gray-500">
          ⭐ Rated highly by local homeowners • 🔧 Expert diagnostics • ⚡ Fast response times
        </div>

      </div>
    </section>
  );
};

export default RepairWhy;