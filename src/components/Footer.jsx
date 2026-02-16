import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Contact Section */}
      <section id="contact" className="bg-[#f9f9f9] py-8 px-4 md:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col gap-2 md:gap-1">
          <p className="text-gray-700 text-sm md:text-base">No.123 Food Street, OMR, Chennai</p>
          <p className="text-gray-700 text-sm md:text-base">+91 7871509881</p>
          <p className="text-[#333] text-sm md:text-base">contact@delizia.com</p>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[#1e1e1e] text-white text-center py-6 px-4 md:px-8">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-[#e67e22] transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-[#e67e22] transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-[#e67e22] transition-colors"><Twitter size={24} /></a>
        </div>
        <p className="text-xs md:text-sm">
          Copyright &copy; 2026 Delizia Restaurent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;