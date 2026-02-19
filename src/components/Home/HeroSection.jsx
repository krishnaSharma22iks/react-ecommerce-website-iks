import React from 'react'
import banner from "../../assets/banner.webp"

const HeroSection = () => {
  return (
    <>
    <div className='relative w-full '>
      <img src={banner} alt="banner"  className="w-full h-64 sm:h-96 md:h-[500px] object-cover"/>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold text-white/70 font-font2">Welcome To IKS Store</h1>
        <p className="mt-2 text-white/70 font-font2">Up to 50% Off</p>
        <button className="mt-4 hover:bg-black/50 text-white/70 px-6 py-2 rounded font-font2">
          Shop Now
        </button>
      </div>
    </div>

    </>
  )
}

export default HeroSection