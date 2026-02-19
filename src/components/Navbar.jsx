import { useEffect, useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import SearchBar from "../components/SearchBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openR, setOpenR] = useState(false);

  const { cart } = useCart();
  const products = useContext(ProductsContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-black text-white shadow-lg"
            : "bg-white border-b border-gray-300 text-black"
        }`}
      >
        <div className="flex items-center h-16 px-4 md:px-8">

          {/* Left */}
          <div className="flex-1 flex items-center justify-start">
            <button
              onClick={() => setOpen(true)}
              className="text-2xl md:text-3xl"
            >
              <FiMenu className="hover:text-green-800" />
            </button>
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-felipa font-bold">
              <Link to="/home">IksKrishna</Link>
            </h1>
          </div>

          {/* Right */}
          <div className="flex-1 flex items-center justify-end">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 font-font2">

              <h5 className="hidden sm:block hover:text-green-800">
                <Link to="/contact">Call us</Link>
              </h5>

              <Link to="/add-to-cart">
                <div className="flex items-center">
                  <CiShoppingCart className="text-xl md:text-2xl hover:text-green-800" />
                  <span className="text-xs sm:text-sm ml-1">
                    {cart.length === 0 ? "" : cart.length}
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setOpenR(!openR)}
                className="text-xl md:text-2xl"
              >
                <CiSearch className="hover:text-green-800" />
              </button>

            </div>
          </div>

        </div>
      </nav>

      <div className="h-16"></div>

      <SideBar open={open} setOpen={setOpen} />
      <SearchBar openR={openR} setOpenR={setOpenR} />
    </>
  );
}
