// components/contact/ContactForm.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
        "YOUR_SERVICE_ID",     // 👉 replace
        "YOUR_TEMPLATE_ID",    // 👉 replace
        form.current,
        "YOUR_PUBLIC_KEY"      // 👉 replace
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

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Request a Free Quote
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Fill out the form and we’ll get back to you quickly.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
            />

            <textarea
              name="message"
              placeholder="Describe your issue..."
              rows="4"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 
              bg-gradient-to-r from-orange-500 to-orange-600 
              hover:from-orange-600 hover:to-orange-700 
              text-white py-3 rounded-xl font-semibold 
              shadow-lg hover:shadow-xl transition"
            >
              {loading ? "Sending..." : "Get Free Quote"}
            </button>

            {/* Status Messages */}
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
                <p>07775 067833</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-blue-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p>info@wheatleyplumbing.co.uk</p>
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

          {/* Extra Trust */}
          <div className="mt-10 text-sm text-gray-500">
            ✔ Fast response • ✔ Free quotes • ✔ Trusted local engineers
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;