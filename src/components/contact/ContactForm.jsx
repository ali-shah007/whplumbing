// components/contact/ContactForm.jsx
const ContactForm = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />

            <textarea
              placeholder="Describe your issue..."
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />

            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
              Get Free Quote
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="space-y-6 text-gray-600">

            <div>
              <h4 className="font-semibold text-black">📞 Phone</h4>
              <p>07775 067833</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">📧 Email</h4>
              <p>info@wheatleyplumbing.co.uk</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">📍 Location</h4>
              <p>Doncaster, South Yorkshire</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">⏰ Hours</h4>
              <p>24/7 Emergency Service Available</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;