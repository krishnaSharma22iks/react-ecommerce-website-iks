import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ openR, setOpenR }) => {
  const navigate = useNavigate();
  const products = useContext(ProductsContext);
  const [search, setSearch] = useState("");

  const filteredProducts = products?.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {openR && (
        <section className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1">
                <CiSearch
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition"
                />
              </div>
              <button
                onClick={() => setOpenR(false)}
                className="text-2xl"
              >
                <RxCross1 />
              </button>
            </div>

            <div className="mt-8">
              {search && filteredProducts?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map(product => (
                    <div
                      key={product.id}
                      onClick={() => {
                        navigate(`/item/${product.id}`);
                        setOpenR(false);
                      }}
                      className="border flex items-center rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                      <img className="w-10 h-10" src={product.thumbnail} ></img>
                      <p className="font-medium text-gray-800">
                        {product.title}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                search && (
                  <p className="text-gray-500 mt-4">
                    No products found
                  </p>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SearchBar;       