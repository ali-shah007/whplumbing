import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Boiler Service",
    desc: "Keep your boiler running efficiently with regular servicing.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "Boiler Repair",
    desc: "Fast and reliable repair services when your boiler breaks.",
    image: "https://images.unsplash.com/photo-1600566752227-8f3b4d7d8f50",
  },
  {
    title: "New Boiler",
    desc: "Upgrade to energy-efficient systems with expert installation.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
];

const Services = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>
        <p className="text-gray-500 mb-12">
          Professional heating solutions tailored to your needs
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={`${s.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={s.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {s.desc}
                </p>

                {/* CTA */}
                <button className="flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                  View Service
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;