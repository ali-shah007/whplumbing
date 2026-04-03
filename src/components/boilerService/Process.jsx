// components/boiler/Process.jsx
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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Boiler Servicing Made Simple
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          We make the entire process quick, smooth, and stress-free from start to finish.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                
                {/* Step Number */}
                <span className="text-purple-500 font-bold text-sm">
                  0{i + 1}
                </span>

                <h3 className="font-semibold text-lg mt-2 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm">
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