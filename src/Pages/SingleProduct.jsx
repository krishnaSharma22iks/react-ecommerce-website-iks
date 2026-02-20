import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { TbBrandSketch } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineShortText } from "react-icons/md";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { IoIosReturnLeft } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";
import { CiBoxes } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiDollarSign } from "react-icons/fi";
import {useCart} from "../context/CartContext"
import BackBtn from "../Common/BackBtn"
import { Zoom, } from "react-awesome-reveal";
import {Link} from "react-router-dom"

const SingleProduct = () => {
  const { id , categoryName} = useParams();
  // cart
  const products = useContext(ProductsContext);
  const { addToCart,cart } = useCart();
  const product = products.find((item)=>item.id===Number(id));
  // Loading
  if (!product) return <h2>Loading...</h2>;

  // Add to cart Btn Toggle
  const isInCart = cart.some((item)=> item.id === product.id)

  // Related Product
  const relatedp = products.filter((item)=>
     item.category === product.category 
      && item.id !== product.id).slice(0,4)
  return (
    
     <div className="max-w-6xl mx-auto p-6 font-font4">
      <BackBtn />
      <Zoom triggerOnce duration={1000}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Left: Image Section */}
    <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full max-w-sm object-contain"
      />
      
    </div>

    {/* Right: Details Section */}
    <div className="space-y-4">

      <h2 className="text-3xl font-bold text-gray-800">
        {product.title}
      </h2>

      <p className="text-gray-600">
        {product.description}
      </p>

      <div className="flex items-center gap-4">
        <span className="text-2xl font-semibold flex items-center">
           <FiDollarSign />{product.price}
        </span>

        <span className="text-sm text-gray-500 line-through">
           {Math.round(product.price * 1.2)}
        </span>

        <span className="text-sm  font-medium">
          {product.discountPercentage}% OFF
        </span>
      </div>

      <div className="text-sm text-gray-500 font-font4">
        <p className="font-bold py-2 flex items-center gap-3"><span><TbBrandSketch /></span>Brand: <span className="font-medium">{product.brand}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><TbCategory2 /></span>Category: <span className="font-medium">{product.category}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><CiStar /></span>Rating: <span className="font-medium">{product.rating}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><AiOutlineStock /></span>Stock: <span className="font-medium">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><MdOutlineShortText /></span>Sku: <span className="font-medium">{product.sku}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><LiaWeightHangingSolid /></span>Weight: <span className="font-medium">{product.weight}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><IoIosReturnLeft /></span>ReturnPolicy: <span className="font-medium">{product.returnPolicy}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><AiOutlineFileProtect /></span>WarrantyInformation: <span className="font-medium">{product.warrantyInformation}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><CiBoxes /></span>MinimumOrderQuantity: <span className="font-medium">{product.minimumOrderQuantity}</span></p>
        <p className="font-bold py-2 flex items-center gap-3"><span><LiaShippingFastSolid /></span>ShippingInformation: <span className="font-medium">{product.shippingInformation}</span></p>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
         <button onClick={() => addToCart(product)} disable={isInCart} className={`px-6 py-3 rounded-lg text-white transition
    ${isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}
  `}>
         {isInCart ? "Added" : "Add To Cart"}
        </button>
      </div>

    </div>
  </div>
  </Zoom>


      <h1 className="fw-bold text-3xl py-20">
        Related Products
      </h1>
    {/* Related Products */}
   
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto w-full items-stretch">
        {relatedp.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id}>
            <div className="w-full bg-white group cursor-pointer shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="w-full aspect-[4/5] md:aspect-[3/2] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={item.images[0]}
                  loading="lazy"
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h1 className="font-font4 text-center py-3">
                {item.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
   
</div>

  )
}

export default SingleProduct