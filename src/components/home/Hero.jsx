import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRight, Star, X, Flame, Cog } from "lucide-react";

const Hero = () => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Smooth scroll function
  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
      <section className="bg-gradient-to-br from-[#0B2D4D] via-[#123F67] to-[#F97316] text-white py-20 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2D4D]/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
              <Flame size={14} className="text-orange-400" />
              Trusted Local Heating Experts
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Boiler Installation, <br />
              <span className="bg-gradient-to-r from-orange-400 to-blue-300 bg-clip-text text-transparent">
                Servicing & Repairs
              </span>
            </h1>

            <p className="text-blue-100 text-lg mb-8 max-w-xl">
              Professional engineers delivering reliable, energy-efficient
              heating solutions for your home and business.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </button>

              {/* ✅ UPDATED BUTTON */}
              <button
                onClick={scrollToServices}
                className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
              >
                View Services
              </button>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-3 text-sm text-blue-100">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span>Rated 5/5 by 100+ customers</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/logo2 (1).png"
              alt="Heating Services"
              className="rounded-2xl shadow-2xl w-full object-contain bg-white/5 p-8"
            />

            <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-xl shadow-lg">
              <p className="font-bold text-lg text-[#F97316]">500+</p>
              <p className="text-sm text-gray-600">Boilers Installed</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-white text-black p-4 rounded-xl shadow-lg">
              <p className="font-bold text-lg text-[#0B2D4D]">24/7</p>
              <p className="text-sm text-gray-600">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
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

export default Hero;