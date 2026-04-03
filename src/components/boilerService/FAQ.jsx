// components/boiler/FAQ.jsx
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How often should I service my boiler?",
    answer:
      "We recommend servicing your boiler once a year to keep it running safely and efficiently. Regular servicing also helps prevent unexpected breakdowns and keeps your warranty valid.",
  },
  {
    question: "How long does a boiler service take?",
    answer:
      "Most boiler services take between 30 to 60 minutes. This depends on the type of boiler and its condition, but we always ensure a thorough inspection.",
  },
  {
    question: "Do you service all boiler brands?",
    answer:
      "Yes, we service all major brands including Worcester Bosch, Vaillant, Ideal, Baxi, Viessmann, and more.",
  },
  {
    question: "Are your engineers qualified?",
    answer:
      "Absolutely. All our engineers are Gas Safe registered and fully trained to carry out safe and professional servicing.",
  },
  {
    question: "Will a boiler service fix existing issues?",
    answer:
      "A service helps detect problems early, but repairs may be required separately. We’ll always explain everything clearly before doing any extra work.",
  },
  {
    question: "How much does a boiler service cost?",
    answer:
      "Our pricing is transparent and competitive. We provide upfront quotes with no hidden charges.",
  },
  {
    question: "Do landlords need annual servicing?",
    answer:
      "Yes, landlords are legally required to carry out annual gas safety checks and provide certificates for tenants.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Boiler Service FAQs
        </h2>

        <p className="text-gray-500 text-center mb-12">
          Everything you need to know before booking your boiler service.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-orange-400 shadow-lg"
                    : "bg-white border-gray-100 hover:border-orange-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;