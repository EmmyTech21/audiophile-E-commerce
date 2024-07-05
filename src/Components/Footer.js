import React from 'react'
import service from '../images/Bitmap Service 2.png';
export default function Footer() {
  return (
    <div className='mt-4 lg:h-[300px] mx-4 flex lg:flex-row-reverse gap-3 lg:justify-between sm:flex-col'>
      <div className='  lg:w-[50%] mb-4'>
      <img className='w-full h-[400px] lg:h-[300px]' src={service} alt='' />

      </div>
      
      <div className='mx-4 lg:w-[645px] lg:self-center lg:text-normal font-manrope'>
        <h1 className='font-bold  text-4xl mb-4'>Bringing you the <span className='text-[#d87d4A]'>best</span>  audio gear</h1>
        <p className=''>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers,
           and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse
           and experience a wide range of our products. Stop by our store to meet some of the fantastic people
           who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </div>
  )
}
