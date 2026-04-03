// components/repair/RepairProcess.jsx
const steps = [
  {
    title: "Get in Touch",
    desc: "Tell us the issue and book a convenient time. Same-day visits often available.",
  },
  {
    title: "Inspection & Quote",
    desc: "Our engineer inspects your boiler and gives a clear fixed price.",
  },
  {
    title: "Fast Repair",
    desc: "We fix the issue quickly using quality parts and test everything.",
  },
];

const RepairProcess = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Boiler Repairs Made Simple
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-200"
          >
            {/* Step Number */}
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center 
                            rounded-full bg-orange-50 text-orange-600 text-sm font-semibold">
              {i + 1}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RepairProcess;