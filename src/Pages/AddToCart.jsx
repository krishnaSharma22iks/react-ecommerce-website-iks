import { useCart } from "../context/CartContext";
import { RxCross1 } from "react-icons/rx";
import BackBtn from "../Common/BackBtn"
import { useNavigate } from "react-router-dom";
import { Zoom, } from "react-awesome-reveal";

export default function AddToCart() {
  const { cart, removeFromCart, decreaseQty,clearCart,increaseQty } = useCart();
   const navigate = useNavigate();

  if (cart.length === 0) {
    return (
        <>
        <div className="px-10"><BackBtn/></div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-lg">🛒 Your cart is empty</p>
      </div>
        </>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
        <div className=""><BackBtn/></div>
        <Zoom triggerOnce duration={1000}>

      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-lg px-4 shadow-sm"
            >
              {/* Product Info */}
              <div className="flex ">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Quantity: {product.quantity}
                </p>
                
              </div>
               <div>
      <div className="flex items-center gap-4">
  <button
    onClick={() => decreaseQty(product.id)}
    className="px-3 py-1 border"
  >
    -
  </button>

  <span>{product.quantity}</span>

  <button
    onClick={() => increaseQty(product.id)}
    className="px-3 py-1 border"
  >
    +
  </button>
</div>

     
    </div>
              <img
                   src={product.thumbnail}
                   alt={product.title}
                  className="h-20 w-20"
                />
                 <h2 className="text-md  text-gray-800">
                    {product.title}
                 </h2>

              {/* Price */}
              <div className="flex items-center justify-between sm:justify-end gap-6">
                <p className="font-semibold">
                  ${product.price}
                </p>
                

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-black hover:text-red-600 transition "
                >
                  <RxCross1 />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border rounded-lg p-6 shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">Free</span>
          </div>  

          <hr className="mb-4" />

          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button onClick={()=>navigate("/checkout")} className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 text-sm text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
      </Zoom>
    </div>
  );
}
