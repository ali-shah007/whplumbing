import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Flame, ShieldCheck, Star, X, Cog } from "lucide-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
          message: formData.message,
          offer: "Free Quote Request",
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
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
      <section className="relative bg-gradient-to-br from-[#0B2D4D] via-[#123F67] to-[#0A2238] text-white py-20 px-6 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#F97316]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
              <Flame size={14} className="text-[#F97316]" />
              Trusted Local Heating Experts
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Boiler Service in{" "}
              <span className="bg-gradient-to-r from-[#F97316] to-orange-300 bg-clip-text text-transparent">
                Doncaster
              </span>
            </h1>

            <p className="text-blue-100 mb-8 text-lg max-w-xl">
              Keep your heating system safe, efficient, and reliable with expert
              servicing from Wheatley Plumbing and Heating.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
              <span className="bg-white/10 px-4 py-3 rounded-xl">✔ All boiler brands</span>
              <span className="bg-white/10 px-4 py-3 rounded-xl">✔ Gas Safe registered</span>
              <span className="bg-white/10 px-4 py-3 rounded-xl">✔ Transparent pricing</span>
              <span className="bg-white/10 px-4 py-3 rounded-xl">✔ 5-star rated</span>
            </div>

            {/* ✅ BUTTONS */}
            <div className="flex flex-wrap gap-4">
              
              {/* CALL BUTTON */}
              <a
                href="tel:+447447712847"
                className="bg-gradient-to-r from-[#F97316] to-[#EA580C] px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:scale-105"
              >
                Book Your Service
              </a>

              {/* POPUP BUTTON */}
              <button
                onClick={() => setIsOpen(true)}
                className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition backdrop-blur"
              >
                Get Free Quote
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="/boiler-service.png"
              alt="Boiler Service"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10"
            />

            <div className="absolute bottom-4 left-4 bg-white text-[#0B2D4D] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
              <Star size={14} className="fill-[#F97316] text-[#F97316]" />
              5.0 Rated Service
            </div>

            <div className="absolute top-4 right-4 bg-white/95 text-[#0B2D4D] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#F97316]" />
              Gas Safe Certified
            </div>
          </div>
        </div>
      </section>

      {/* ✅ POPUP */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Cog className="text-[#0B2D4D]" />
                  <h2 className="text-xl font-bold text-[#0B2D4D]">
                    Get Free Quote
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input name="name" placeholder="Name" required onChange={handleChange} className="w-full border p-3 rounded-xl" />
                  <input name="phone" placeholder="Phone" required onChange={handleChange} className="w-full border p-3 rounded-xl" />
                  <input name="email" placeholder="Email" required onChange={handleChange} className="w-full border p-3 rounded-xl" />
                  <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-3 rounded-xl" />

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-[#F97316] text-white py-3 rounded-xl"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold text-[#0B2D4D]">
                  Request Sent!
                </h3>
                <p>We’ll contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;