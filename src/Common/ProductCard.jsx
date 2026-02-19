import { useContext } from "react"
import {ProductsContext} from "../context/ProductsContext"
import Button from "./Button"
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const ProductCard = ({btnTxt,title,img}) => {
   const products = useContext(ProductsContext);

    const selectedCate = [
  "fragrances",
  "beauty",
  "mens-watches",
  "womens-dresses",
  "womens-shoes",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "mens-shoes",
  "sunglasses"
  ]

   const maxDiscount = 5;
   const minDiscount = 2;

   const filterdProducts = Object.values(
    products.filter(product=>selectedCate.includes(product.category) && product.discountPercentage >= minDiscount &&
    product.discountPercentage <= maxDiscount)
   );

  return (
    <>
    <section  className='px-4 sm:px-10 py-10  flex gap-2 flex-col'>
    <Fade direction="up" triggerOnce duration={1000}>
      <h1 className='text-center text-2xl font-font2 p-10'>{title}</h1>
    
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto w-full items-stretch">
       {filterdProducts.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <div className="w-full bg-white group cursor-pointer shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="w-full aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                 src={item.images[0]}
                 loading="lazy"
                 alt={item.title}
                 className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h1 className="font-font2 text-base md:text-lg mb-2">{item.title}</h1>
                <h5 className="font-font2 text-gray-700">${item.price}</h5>
              </div>

              <h5 className="font-font2 bg-gray-200 px-3 py-1 text-center mt-3">Saving {item.discountPercentage}%</h5>
            </div>
          </div>
        </Link>
       ))}
      </div>
      </Fade>
    </section>
    {/* <Button btn={btnTxt}  /> */}
    </>
  )
}

export default ProductCard