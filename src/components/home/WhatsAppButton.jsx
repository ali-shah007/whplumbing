// components/common/WhatsAppButton.jsx
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447447712847"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;