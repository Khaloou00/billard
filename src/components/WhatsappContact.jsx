import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappContact = () => {
  const phoneNumber = "+2250709856380"; // Format international (ex: Suisse +41)
  const message =
    "Bonjour CIBillard ! Je vous écris au sujet des services que vous proposez."; // Message par défaut
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="bg-gradient-to-r from-red-600 to-yellow-500 text-white items-center flex rounded-md px-3 py-2 gap-2 cursor-pointer font-semibold text-md z-100 md:text-2xl lg:text-2xl "
    >
      <FaWhatsapp className="text-2xl lg:text-3xl   " />
      <span className="lg:text-2xl text-xl ">Contact-Us</span>
    </a>
  );
};

export default WhatsappContact;
