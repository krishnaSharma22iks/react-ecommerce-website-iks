import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import { Zoom, } from "react-awesome-reveal";


const CategoriesSection = () => {

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


  const uniqueCategoryItems = Object.values(
  products.filter(item=>selectedCate.includes(item.category))
  .reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category ] = item;
    }
    return acc;
  }, {})
);


  return (
    <>
    <section className='px-4 sm:px-10 py-10 bg-white flex gap-2 flex-col'>
      {/* <BackBtn /> */}
      <h1 className='text-center text-2xl font-font4 p-10'>Select Your Category </h1>
    
       <Zoom triggerOnce duration={1000}>
     <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto w-full items-stretch">
       {uniqueCategoryItems.map((item) => (
      <Link to={`/category/${item.category}`} key={item.id}>
        <div className="w-full  group cursor-pointer shadow-xl transition-transform duration-300 hover:-translate-y-2 h-full">
          <div className="w-full aspect-[4/5] md:aspect-[3/2] bg-gray-50 flex items-center justify-center overflow-hidden">
            <img
              src={item.images[0]}
              loading="lazy"
              alt={item.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <h1 className="font-font4 text-center py-3">
            {item.category}
          </h1>
        </div>
      </Link>
))}
      </div>



    </Zoom>
    </section>
    </>
  )
}

export default CategoriesSection