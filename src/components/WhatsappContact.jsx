import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappContact = () => {
  return (
    <a
      href=""
      className="bg-gradient-to-r from-red-600 to-yellow-500 text-white items-center flex rounded-md px-3 py-2 gap-2 cursor-pointer font-semibold text-2xl hover:bg-[#28D146]/90  "
    >
      <FaWhatsapp className="text-3xl   " />
      <span className=" text-2xl">Contact-Us</span>
    </a>
  );
};

export default WhatsappContact;
