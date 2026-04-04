// components/contact/ContactHero.jsx
const ContactHero = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white py-32 px-6 text-center"
      style={{
        backgroundImage: "url('/contact-bg.png')", // put image in public folder
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Wheatley Plumbing
          </span>
        </h1>

        <p className="text-gray-300 mb-8">
          Need help with your boiler or heating system? Contact us today for fast support, expert advice, and a free quote.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:07775067833"
            className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/447775067833"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;