// components/contact/ContactCTA.jsx
const ContactCTA = () => {
  const phoneNumber = "+447447712847";

  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Need Help Right Now?
      </h2>

      <p className="mb-6">
        Call or message us for fast support and same-day service.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Call Now
        </a>

        <a
          href={`https://wa.me/${phoneNumber.replace("+", "")}`}
          className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;