// components/newboiler/BoilerPackages.jsx

const boilers = [
  {
    name: "Ideal Instinct",
    warranty: "5 Year Warranty",
    desc: "Reliable and cost-effective entry-level boiler for smaller homes.",
    img: "/newboiler1.jpg",
  },
  {
    name: "Baxi Platinum",
    warranty: "10 Year Warranty",
    desc: "Perfect for medium homes with efficient heating and low running costs.",
    img: "/newboiler2.jpg",
  },
  {
    name: "Worcester Bosch 4000",
    warranty: "10 Year Warranty",
    desc: "Premium performance boiler with modern design and quiet operation.",
    img: "/newboiler3.jpg",
  },
];

const BoilerPackages = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Popular Boiler Options</h2>

      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        Choose from trusted brands with long warranties and high efficiency.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {boilers.map((b, i) => (
          <div
            key={i}
            className="group bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="h-56 flex items-center justify-center bg-white">
              <img
                src={b.img}
                alt={b.name}
                className="h-44 object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg mb-1">{b.name}</h3>

              <p className="text-orange-500 text-sm mb-2 font-medium">
                {b.warranty}
              </p>

              <p className="text-gray-500 text-sm mb-4">{b.desc}</p>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-medium hover:scale-105 transition">
                Get Price
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoilerPackages;