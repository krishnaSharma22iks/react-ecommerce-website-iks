import React from 'react'
import { Slide } from "react-awesome-reveal";



const Model = ({ img , h1 , h2 , p , button }) => {
  return (
   <div
  className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] font-font4 px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col justify-center gap-4 sm:gap-5 bg-cover bg-center relative"
  style={{ backgroundImage: `url(${img})` }}
> 
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-2xl">
    <Slide direction="down" triggerOnce duration={800}>
      
      <h1 className="text-yellow-200 text-sm sm:text-base md:text-lg">
        {h1}
      </h1>

      <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        {h2}
      </h1>

      <p className="text-white text-sm sm:text-base md:text-lg">
        {p}
      </p>

      <div className="mt-4">
        {button}
      </div>

    </Slide>
  </div>
</div>

  );
};


export default Model
