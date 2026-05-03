import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Wrench, Cog, X } from "lucide-react";

const services = [
  {
    title: "Boiler Service",
    desc: "Keep your boiler running efficiently with regular servicing.",
    image: "/11.png",
    icon: <Cog size={18} />,
    link: "/boiler-service",
  },
  {
    title: "Boiler Repair",
    desc: "Fast and reliable repair services when your boiler breaks.",
    image: "/22.jpg",
    icon: <Wrench size={18} />,
    link: "/boiler-repair",
  },
  {
    title: "New Boiler",
    desc: "Upgrade to energy-efficient systems with expert installation.",
    image: "/33.png",
    icon: <Flame size={18} />,
    link: "/new-boiler",
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          offer: "10% OFF for First-Time Customers",
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="services" className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF6FF] overflow-hidden">
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#F97316]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2D4D]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-[#0B2D4D]/5 text-[#0B2D4D] border border-[#0B2D4D]/10 rounded-full">
            <Flame size={14} className="text-[#F97316]" />
            Professional Heating Solutions
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2D4D]">
            Our Services
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional heating solutions tailored to your needs with reliable
            service, expert engineers, and energy-efficient systems.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 text-left border border-gray-100"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium text-[#0B2D4D] shadow">
                    <span className="text-[#F97316]">{s.icon}</span>
                    Expert Service
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0B2D4D]">
                    {s.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{s.desc}</p>

                  <Link
                    to={s.link}
                    className="inline-flex items-center gap-2 text-[#F97316] font-medium group-hover:gap-3 transition-all"
                  >
                    View Service
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Cog className="text-[#0B2D4D]" size={22} />
                    <h2 className="text-2xl font-bold text-[#0B2D4D]">
                      Get Your Free Quote
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600">
                    First-time customers get{" "}
                    <span className="font-semibold text-[#F97316]">
                      10% OFF
                    </span>{" "}
                    on their first service.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="">Select Service</option>
                    <option>Boiler Installation</option>
                    <option>Boiler Repair</option>
                    <option>Boiler Servicing</option>
                    <option>Emergency Heating</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us what you need..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    {isSubmitting ? "Sending..." : "Claim My 10% Discount"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-[#0B2D4D] mb-2">
                  Quote Request Sent!
                </h3>
                <p className="text-gray-600">
                  Thanks! We’ll contact you shortly with your discounted quote.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;