// components/newboiler/BoilerProcess.jsx
const steps = [
  {
    title: "Get in Touch",
    desc: "Tell us your needs and arrange a visit or call at a time that suits you.",
  },
  {
    title: "Receive Quote",
    desc: "We provide a clear, fixed-price quote with everything included.",
  },
  {
    title: "Install & Setup",
    desc: "We install your boiler and ensure everything is working perfectly.",
  },
];

const BoilerProcess = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Boiler Buying Made Simple</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-2xl">
        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-orange-500 font-bold">0{i + 1}</span>
            <h3 className="font-semibold mt-2 mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoilerProcess;