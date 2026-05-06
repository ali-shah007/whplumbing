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
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2D4D]/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full">
              <Flame size={14} className="text-orange-400" />
              Trusted Local Heating Experts
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Boiler Installation <br />
              <span className="bg-gradient-to-r from-orange-400 to-blue-300 bg-clip-text text-transparent">
                Servicing & Repairs
              </span>
            </h1>

            <p className="text-blue-100 mb-8 max-w-md">
              Professional engineers delivering reliable, efficient heating solutions tailored to your home.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-medium shadow-lg transition"
              >
                Get Free Quote <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToServices}
                className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                View Services
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <img
              src="666.jpg"
              className="rounded-2xl shadow-2xl"
              alt="boiler"
            />
          </div>
        </div>
      </section>

      {/* POPUP */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-white text-black shadow-2xl border border-gray-200 animate-fadeIn">
            
            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <X />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Cog className="text-orange-500" />
                  Get Your Free Quote
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* INPUTS */}
                  {["name", "phone", "email"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      onChange={handleChange}
                      value={formData[field]}
                      required
                      className="w-full p-3 rounded-xl border border-gray-300 
                                 bg-white text-black 
                                 dark:bg-white dark:text-black
                                 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                  ))}

                  {/* SELECT */}
                  <select
                    name="service"
                    onChange={handleChange}
                    value={formData.service}
                    required
                    className="w-full p-3 rounded-xl border border-gray-300 
                               bg-white text-black 
                               dark:bg-white dark:text-black
                               focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  >
                    <option value="">Select Service</option>
                    <option>Boiler Installation</option>
                    <option>Boiler Repair</option>
                    <option>Boiler Servicing</option>
                  </select>

                  {/* TEXTAREA */}
                  <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    value={formData.message}
                    rows={4}
                    className="w-full p-3 rounded-xl border border-gray-300 
                               bg-white text-black 
                               dark:bg-white dark:text-black
                               focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                               hover:from-orange-600 hover:to-orange-700
                               text-white py-3 rounded-xl font-semibold 
                               shadow-md transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Message Sent!
                </h2>
                <p className="text-gray-600">
                  We will contact you shortly.
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