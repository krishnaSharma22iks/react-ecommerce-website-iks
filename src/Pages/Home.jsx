import ProductCard from "../Common/ProductCard"
import CategoriesSection from "../components/Home/CategoriesSection"
import HeroSection from "../components/Home/HeroSection"
import Model from "../components/Home/Model"
import { banners } from "../data/Home_category"
import FAQ from "../components/Home/FAQ"
import {Link} from "react-router-dom"
import {sectionData} from "../Data"

const Home = () => {
  

  return (
    <div>
      <HeroSection />
      <CategoriesSection img={banners[0].img} title="Select Category"/>
      <Model 
      img={banners[1].img}
      {...sectionData[0]}

      button={<Link to="/category/womens-bags">
        <button className="bg-yellow-200 font-bold rounded-md p-2">
          Shop Now
        </button></Link>}
      />

      <ProductCard title="Heavy Discount On This Products"/>

        <Model 
         {...sectionData[1]}
        img={banners[0].img} 
        button={<button className="bg-yellow-200 font-bold rounded-md p-2">
            Shop Now
          </button>}
        />
      <FAQ />
      {/* <Model img={banners[2].img} /> */}
    </div>
  )
}

export default Home
