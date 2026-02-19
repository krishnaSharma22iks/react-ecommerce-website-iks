import { Routes, Route, Outlet } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Category from "./Pages/Category";
import SingleProduct from "./Pages/SingleProduct";
import AddToCart from "./Pages/AddToCart";
import CheckOut from "./Pages/CheckOut";
import AdminLayout from "./AdminPanel/pages/AdminLayout";
import UserLayout from "./Pages/UserLayout"
import ScrollTop from "./Common/ScrollTop";



function App() {
  return (
    <ProductsProvider>
      <ScrollTop />
      <Routes>
        {/* USER LAYOUT */}
          <Route path="/" element={<Login />} />
        <Route element={<UserLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/item/:id" element={<SingleProduct />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>

        {/* ADMIN LAYOUT */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h1>Dashboard</h1>} />
        </Route>

      </Routes>
    </ProductsProvider>
  );
}

export default App;
