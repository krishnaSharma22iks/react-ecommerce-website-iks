import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../Common/BackBtn"
import { Zoom, } from "react-awesome-reveal";

const CheckOut = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-xl text-gray-500">No products to checkout</h2>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Fill all fields");
      return;
    }

    clearCart();
    alert("Order placed successfully!");
    navigate("/home");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BackBtn />
      <Zoom triggerOnce duration={1000}>
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 mb-4 border-b pb-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  ${item.price} × {item.quantity.toFixed(2)}
                </p>
              </div>

              <p className="font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}

          <div className="flex justify-between text-lg font-semibold mt-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* RIGHT: CHECKOUT FORM */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">
            Shipping Details
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={placeOrder}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </div>
        </div>

      </div>
      </Zoom>
    </div>
  );
};

export default CheckOut;
