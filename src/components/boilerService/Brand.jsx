// components/boiler/Brands.jsx
const Brands = () => {
  const brands = [
    "Worcester Bosch",
    "Vaillant",
    "Ideal",
    "Baxi",
    "Viessmann",
    "Glow-worm",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">
        We Service All Major Boiler Brands
      </h2>

      <div className="flex flex-wrap justify-center gap-6 text-gray-600">
        {brands.map((b, i) => (
          <span key={i}>{b}</span>
        ))}
      </div>
    </section>
  );
};

export default Brands;