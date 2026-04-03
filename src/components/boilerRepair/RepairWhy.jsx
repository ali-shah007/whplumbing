// components/repair/RepairWhy.jsx
const RepairWhy = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Why Choose Us for Boiler Repairs?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Trusted Locally</h3>
          <p className="text-gray-500">Highly rated by homeowners in Doncaster.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Honest Advice</h3>
          <p className="text-gray-500">Clear explanation before any work starts.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Fast & Tidy</h3>
          <p className="text-gray-500">Efficient repairs with no mess left behind.</p>
        </div>

      </div>
    </section>
  );
};

export default RepairWhy;