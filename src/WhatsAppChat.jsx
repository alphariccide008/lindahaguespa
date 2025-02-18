import React from "react";

const WhatsAppChat = () => {
  const phoneNumber = "+13143237087"; // Replace with your WhatsApp number
  const message = "Hello, I need assistance"; // Default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </button>
    </div>
  );
};

export default WhatsAppChat;
