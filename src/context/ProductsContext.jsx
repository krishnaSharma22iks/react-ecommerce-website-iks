import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 

 useEffect(()=>{
      const getData = async() =>{
  try{
    const res = await axios.get("https://dummyjson.com/products?limit=0")
    console.log(res)
    setProducts(res.data.products)
  }catch(error){
    console.log(error)
  }
 }
 getData()
 },[])



  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
