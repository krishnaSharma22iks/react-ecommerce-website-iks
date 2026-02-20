import { Link, useParams } from "react-router-dom";
import {  useContext } from "react";
import { ProductsContext } from "../context/ProductsContext"
import BackBtn from "../Common/BackBtn"
import { Zoom, } from "react-awesome-reveal";


function Category() {
  const { categoryName } = useParams();
    const products = useContext(ProductsContext);

  const items = products.filter(
    (item) => item.category === categoryName
  );

  return (
    <section   className="px-4 sm:px-10 py-2  flex flex-col">
      <BackBtn />
      <Zoom triggerOnce duration={1000}>
      <h5 className=" border border-gray font-font4 p-2">
        {categoryName}
      </h5>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto w-full items-stretch">
        {items.map((item) => (
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
      </Zoom>
    </section>
  );
}

export default Category;
