const services = [
    {
      title: "Boiler Service",
      desc: "Keep your boiler running efficiently with regular servicing.",
    },
    {
      title: "Boiler Repair",
      desc: "Fast and reliable repair services when your boiler breaks.",
    },
    {
      title: "New Boiler",
      desc: "Upgrade to energy-efficient systems with expert installation.",
    },
  ];
  
  const Services = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
  
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <button className="text-purple-700 font-semibold">
                View Service →
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;