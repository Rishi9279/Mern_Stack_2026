import React from "react";
import { FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div>
      <div className="flex gap-20 p-10 bg-[#111725] text-white">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">
            <span className="text-purple-600">FUTURA</span> HOME
          </h1>
          <p className="text-[12px] text-gray-300">Reimagining interior design for the future of living.</p>
          <div className="flex gap-4 text-2xl text-gray-300">
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaWhatsapp size={20} />
            <FaYoutube size={20} />
          </div>
        </div>
        <div className="flex  gap-50">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm">Shop</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-[12px] text-gray-400">All Products</li>
              <li className="text-[12px] text-gray-400">New Arrivals</li>
              <li className="text-[12px] text-gray-400">Best Sellers</li>
              <li className="text-[12px] text-gray-400">Sale</li>
              <li className="text-[12px] text-gray-400">Gift Cards</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm">Company</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-[12px] text-gray-400">All Products</li>
              <li className="text-[12px] text-gray-400">New Arrivals</li>
              <li className="text-[12px] text-gray-400">Best Sellers</li>
              <li className="text-[12px] text-gray-400">Sale</li>
              <li className="text-[12px] text-gray-400">Gift Cards</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm">Support</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-[12px] text-gray-400">All Products</li>
              <li className="text-[12px] text-gray-400">New Arrivals</li>
              <li className="text-[12px] text-gray-400">Best Sellers</li>
              <li className="text-[12px] text-gray-400">Sale</li>
              <li className="text-[12px] text-gray-400">Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#111725] px-10 border-t border-gray-800">
        <p className="text-center text-gray-400 text-[11px] py-4"> &copy; 2026 FUTURA HOME. All rights reserved.</p>
        <ul className="flex justify-center gap-6 text-gray-400 text-[11px] py-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
