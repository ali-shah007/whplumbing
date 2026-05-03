// components/boiler/WhyChoose.jsx
import { ShieldCheck, Wrench, Clock } from "lucide-react";

const features = [
  {
    title: "Local & Trusted",
    desc: "A reliable local company trusted by homeowners across Doncaster for honest and professional service.",
    icon: ShieldCheck,
  },
  {
    title: "Thorough Service",
    desc: "We carry out complete safety and performance checks — not just a quick inspection.",
    icon: Wrench,
  },
  {
    title: "Flexible Booking",
    desc: "Choose a time that suits you with friendly support and fast response.",
    icon: Clock,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/why.jpg"
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* Glow Accent */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full"></div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 left-5 bg-white px-5 py-3 rounded-xl shadow-lg text-sm font-semibold flex items-center gap-2">
            <span className="text-orange-500">★</span>
            Trusted by Local Customers
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Why Choose Wheatley Plumbing & Heating?
          </h2>

          <p className="text-gray-500 mb-10">
            We deliver reliable, high-quality boiler servicing with a focus on safety, transparency, and customer satisfaction.
          </p>

          <div className="space-y-6">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg 
                    bg-gradient-to-br from-orange-100 to-orange-200 
                    text-orange-600 
                    group-hover:from-orange-500 group-hover:to-orange-600 
                    group-hover:text-white 
                    transition-all duration-300">
                    <Icon size={26} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>

                    {/* Accent Line */}
                    <div className="mt-2 h-1 w-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;