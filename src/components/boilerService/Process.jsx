import { Flame } from "lucide-react";

const steps = [
  {
    title: "Get in Touch",
    desc: "Choose a convenient time and tell us your boiler type. We offer flexible bookings across Doncaster.",
    img: "/why.jpg",
  },
  {
    title: "Engineer Visit",
    desc: "A Gas Safe registered engineer will carry out a full inspection and professional service.",
    img: "/121.jpg",
  },
  {
    title: "Service Report",
    desc: "Receive a detailed report with findings, advice, and recommendations for your system.",
    img: "/122.jpg",
  },
];

const Process = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF6FF] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#F97316]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2D4D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-[#0B2D4D]/5 text-[#0B2D4D] border border-[#0B2D4D]/10 rounded-full">
          <Flame size={14} className="text-[#F97316]" />
          Simple 3-Step Process
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2D4D]">
          Boiler Servicing Made Simple
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We make the entire process quick, smooth, and stress-free from start
          to finish.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden relative">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Step Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#0B2D4D] shadow">
                  Step 0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <span className="text-[#F97316] font-bold text-sm">
                  0{i + 1}
                </span>

                <h3 className="font-semibold text-lg mt-2 mb-2 text-[#0B2D4D]">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;