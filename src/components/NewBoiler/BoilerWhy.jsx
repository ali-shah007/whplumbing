// components/newboiler/BoilerWhy.jsx
const BoilerWhy = () => {
  return (
    <section className="py-24 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-12">
        Why Choose Wheatley Plumbing & Heating?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Trusted Locally</h3>
          <p className="text-gray-500">Highly rated by customers across Doncaster.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Clear Pricing</h3>
          <p className="text-gray-500">No hidden costs — everything explained upfront.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Fast Installation</h3>
          <p className="text-gray-500">Quick and professional installation process.</p>
        </div>
      </div>
    </section>
  );
};

export default BoilerWhy;