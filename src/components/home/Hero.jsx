import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, X, Flame, Cog } from "lucide-react";

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

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
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
        "service_6c6m8of",
        "template_bkj5vis",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          offer: "10% OFF for First-Time Customers",
        },
        "9n6-Mq8Wf1Ad27f-w"
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
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message failed. Check EmailJS setup.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B2D4D] via-[#123F67] to-[#F97316] text-white py-20 px-6">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2D4D]/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full">
              <Flame size={14} className="text-orange-400" />
              Trusted Local Heating Experts
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Boiler Installation <br />
              <span className="bg-gradient-to-r from-orange-400 to-blue-300 bg-clip-text text-transparent">
                Servicing & Repairs
              </span>
            </h1>

            <p className="text-blue-100 mb-8">
              Professional engineers delivering reliable heating solutions.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-full"
              >
                Get Free Quote <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToServices}
                className="px-6 py-3 border border-white/30 rounded-full"
              >
                View Services
              </button>
            </div>
          </div>

          <div>
            <img
              src="/logo2-1.png"
              className="rounded-2xl shadow-2xl"
              alt="boiler"
            />
          </div>
        </div>
      </section>

      {/* POPUP */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-lg p-6 rounded-2xl bg-white text-black">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Cog className="text-orange-500" />
                  Get Free Quote
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full border p-2 rounded"
                    required
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full border p-2 rounded"
                    required
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full border p-2 rounded"
                    required
                  />

                  <select
                    name="service"
                    onChange={handleChange}
                    value={formData.service}
                    className="w-full border p-2 rounded"
                    required
                  >
                    <option value="">Select Service</option>
                    <option>Boiler Installation</option>
                    <option>Boiler Repair</option>
                    <option>Boiler Servicing</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full border p-2 rounded"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 text-white py-2 rounded"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold">Message Sent!</h2>
                <p>We will contact you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;