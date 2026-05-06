import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_6c6m8of",
        "template_bkj5vis",
        form.current,
        "9n6-Mq8Wf1Ad27f-w"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("error");
        }
      );
  };

  const phoneNumber = "+447447712847";
  const displayNumber = "07447 712847";

  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to get a free quote for plumbing/heating services."
  );

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
          
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Request a Free Quote
          </h2>

          <p className="text-gray-500 mb-6 text-sm">
            Fill out the form and we’ll get back to you quickly.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            {/* INPUT BASE STYLE */}
            {[
              { name: "user_name", placeholder: "Your Name", type: "text" },
              { name: "user_phone", placeholder: "Phone Number", type: "tel" },
              { name: "user_email", placeholder: "Email Address", type: "email" },
            ].map((input) => (
              <input
                key={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                required
                className="w-full p-3 rounded-xl border border-gray-300 
                           bg-white text-black 
                           dark:bg-white dark:text-black
                           focus:outline-none focus:ring-2 focus:ring-orange-400 
                           focus:border-transparent transition"
              />
            ))}

            {/* SERVICE */}
            <select
              name="service"
              required
              className="w-full p-3 rounded-xl border border-gray-300 
                         bg-white text-black 
                         dark:bg-white dark:text-black
                         focus:outline-none focus:ring-2 focus:ring-orange-400 
                         focus:border-transparent transition"
            >
              <option value="">Select Service</option>
              <option>Boiler Repair</option>
              <option>Boiler Installation</option>
              <option>General Plumbing</option>
              <option>Emergency Call</option>
            </select>

            {/* OFFER */}
            <select
              name="offer"
              className="w-full p-3 rounded-xl border border-gray-300 
                         bg-white text-black 
                         dark:bg-white dark:text-black
                         focus:outline-none focus:ring-2 focus:ring-orange-400 
                         focus:border-transparent transition"
            >
              <option value="">Any Offer?</option>
              <option>Free Quote</option>
              <option>10% Discount</option>
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Describe your issue..."
              rows="4"
              required
              className="w-full p-3 rounded-xl border border-gray-300 
                         bg-white text-black 
                         dark:bg-white dark:text-black
                         focus:outline-none focus:ring-2 focus:ring-orange-400 
                         focus:border-transparent transition"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 
                         bg-gradient-to-r from-orange-500 to-orange-600 
                         hover:from-orange-600 hover:to-orange-700 
                         text-white py-3 rounded-xl font-semibold 
                         shadow-md hover:shadow-lg transition"
            >
              {loading ? "Sending..." : "Get Free Quote"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm mt-2">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center">
          
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Information
          </h2>

          <div className="space-y-6 text-gray-600">

            <div className="flex items-start gap-3">
              <Phone className="text-orange-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <a href={`tel:${phoneNumber}`} className="hover:text-orange-500">
                  {displayNumber}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="text-green-500" />
              <div>
                <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-blue-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <a
                  href="mailto:info@whplumbing.co.uk"
                  className="hover:text-blue-600"
                >
                  info@whplumbing.co.uk
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-orange-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p>Doncaster, South Yorkshire</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-blue-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Hours</h4>
                <p>24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-500">
            ✔ Fast response • ✔ Free quotes • ✔ Trusted local engineers
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;