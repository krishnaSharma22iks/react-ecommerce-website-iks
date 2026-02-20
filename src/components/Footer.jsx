import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FB] text-gray-700 font-font4">
      
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <h1 className="text-lg font-felipa font-bold">
          IksKrishna
        </h1>

        <ul className="flex gap-4 sm:gap-6 text-sm">
          <li><Link to="/home" className="hover:text-black">Home</Link></li>
          <li><Link to="/about" className="hover:text-black">About</Link></li>
          <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
        </ul>

        <div className="flex gap-4 text-sm">
          <span className="hover:text-black cursor-pointer">Facebook</span>
          <span className="hover:text-black cursor-pointer">Twitter</span>
          <span className="hover:text-black cursor-pointer">Instagram</span>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-300 py-3">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
