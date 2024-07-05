import React from 'react'
import hero from '../images/Hero-img.png'
export default function Hero() {
  return (
    <section  id='hero' className="relative bg-[#131313] 	 text-white lg:flex lg:items-center">
    <div className="absolute font-manrope top-0 left-0 z-40 flex flex-col items-center justify-center w-368px h-full p-8 text-center lg:relative lg:w-1/2 lg:items-start lg:justify-center lg:p-16 lg:text-left">
      <h4 className="text-[#f1f1f1] mb-6">NEW PRODUCT</h4>
      <h1 className="text-5xl font-bold">XX99 Mark II <br></br>Headphones</h1>
      <p className="my-4  tracking-wider ">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="px-8 py-4 mt-4 bg-[#d87d4A]  hover:bg-[#fbaf85]">
        SELL PRODUCT
      </button>
    </div>
    <div id='hero-img' className="relative lg:w-1/2">
      <img
        className=" lg:w-full lg:h-1/2 "
        src={hero}
        alt="hero"
      />
    </div>
  </section>
  )
}
// bg-[#101010]
// brightness-20
// bg-[#1a1a1a]