const partners = [
  {
    name: "Vaillant",
    logo: "https://cdn.worldvectorlogo.com/logos/vaillant.svg",
  },
  {
    name: "Worcester Bosch",
    logo: "https://cdn.worldvectorlogo.com/logos/bosch-2.svg",
  },
  {
    name: "Ideal Boilers",
    logo: "https://cdn.worldvectorlogo.com/logos/ideal-standard.svg",
  },
  {
    name: "Trustpilot",
    logo: "https://cdn.worldvectorlogo.com/logos/trustpilot.svg",
  },
];

const Trust = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted Local Engineers
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          We provide reliable, affordable, and professional heating services.
          From installations to repairs, we ensure your home stays warm,
          safe, and energy-efficient.
        </p>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex justify-center items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Extra Trust Points */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <span>✔ Gas Safe Registered</span>
          <span>✔ 24/7 Emergency Support</span>
          <span>✔ Fully Insured Engineers</span>
          <span>✔ 5-Star Rated Service</span>
        </div>
      </div>
    </section>
  );
};

export default Trust;