import React from 'react'

const Button = ({btn,onClick}) => {
  return (
    <>
   <section className='pt-16 item-center flex justify-center'> 
    <button className='border-2 border-solid border-black p-3 hover:bg-black hover:text-white text-center  px-6  rounded-3xl'>{btn}</button>
  </section>
    </>
  )
}

export default Button