import { useCart } from "../context/CartContext";
import { RxCross1 } from "react-icons/rx";
import BackBtn from "../Common/BackBtn";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

export default function AddToCart() {
  const { cart, removeFromCart, decreaseQty, clearCart, increaseQty } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <>
        <div className="px-4 sm:px-10"><BackBtn /></div>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-500 text-lg"> Your cart is empty</p>
        </div>
      </>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 font-font4 py-6">
      <BackBtn />

      <Zoom triggerOnce duration={500}>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Shopping Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 border rounded-lg p-3 shadow-sm bg-white"
              >

                {/* Image */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-16 w-16 object-cover rounded-md"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-md font-medium line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    ${product.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="text-sm">{product.quantity}</span>

                    <button
                      onClick={() => increaseQty(product.id)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-end gap-2">
                  <p className="text-sm font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <RxCross1 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border rounded-lg p-5 shadow-sm h-fit bg-white">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2 text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-semibold mb-5">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition text-sm"
            >
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-3 text-xs text-red-500 hover:underline"
            >
              Clear Cart
            </button>
          </div>

        </div>
      </Zoom>
    </div>
  );
}