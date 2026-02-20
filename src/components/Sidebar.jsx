import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CiHome, CiShoppingCart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md"
import {categories} from "../Data"
import { FaRegUserCircle } from "react-icons/fa";

export default function SideBar({ open, setOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full font-font4 sm:w-80 bg-white text-black p-6 z-50 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl p-2">
            <FiX />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 overflow-y-auto flex-1">

          
          

          <Link
            onClick={() => setOpen(false)}
            to="/home"
            className="block hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-2 font-bold">
              <CiHome />
              <span>Home</span>
            </div>
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/about"
            className="block hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-2 font-bold">
              <BsPerson />
              <span>About</span>
            </div>
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="block hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-2 font-bold">
              <MdOutlineContactPage />
              <span>Contact</span>
            </div>
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/add-to-cart"
            className="block hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-2 font-bold">
              <CiShoppingCart />
              <span>Cart</span>
            </div>
          </Link>

          {/* Dynamic Categories */}
          {Object.values(categories).map((category, index) => (
            <div key={index}>
              <h3 className="font-bold mt-4">{category.title}</h3>

              {category.items.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-sm hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center gap-2 py-1">
                    <span></span>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto border-t border-gray-200 pt-4">
          <p>Can we help you?</p>
          <p className="font-medium">+91 1800 103 9988</p>
        </div>
      </div>
    </>
  );
}
