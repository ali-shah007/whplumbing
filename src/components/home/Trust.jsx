const partners = [
  { name: "Vaillant", logo: "/trust1.png" },
  { name: "Worcester Bosch", logo: "/trust2.svg" },
  { name: "Ideal Boilers", logo: "/trust3.png" },
  { name: "Trustpilot", logo: "/trust4.svg" },
  { name: "Partner 5", logo: "/trust5.png" },
  { name: "Partner 6", logo: "/trust6.png" },
  { name: "Partner 7", logo: "/trust7.png" },
];

const Trust = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted Local Engineers
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          We provide reliable, affordable, and professional heating services.
        </p>

        {/* Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex flex-row whitespace-nowrap animate-marquee gap-10">
            
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center bg-white px-6 py-4 rounded-xl shadow-sm h-20 min-w-[150px]"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-10 max-w-[120px] object-contain"
                />
              </div>
            ))}

          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <span>✔ Gas Safe Registered</span>
          <span>✔ 24/7 Emergency Support</span>
          <span>✔ Fully Insured Engineers</span>
          <span>✔ 5-Star Rated Service</span>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Trust;