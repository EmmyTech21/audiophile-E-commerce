import React from 'react';

import speaker2 from '../images/Bitmap-Speaker.png'
import bitmap from '../images/Bitmap.png';
import bud from '../images/Bitmap copyEar.png'

import ReuseService from './ReuseService';
import Footer from './Footer';
export default function Service() {
  return (
    <>
      <div className=" m-16 py-4 overflow-y-hidden">
    <ReuseService />
      <div className='bg-[#d87d4A] overflow-hidden w-full lg:justify-around mb-4 text-[#ffff] font-manrope lg:flex-row flex flex-col items-center'>
        <img src={speaker2} className='w-60' alt='bitmap' />
        <div className='flex flex-col w-[349px] mt-6 items-center lg:items-start'>
          <h1 className='text-4xl mb-6 text-center lg:text-left'>ZX9 <br />SPEAKER</h1>
          <p className='text-center lg:text-left'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className='bg-[#010101] py-4 px-4 mb-4 mt-4 lg:mt-0'>SEE PRODUCT</button>
        </div>
      </div>
      <div className='relative mb-4'>
        <img className='relative sm:h-[300px] w-full object-cover' alt='bitmap' src={bitmap} />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center lg:items-start px-4 lg:px-8'>
          <h1 className='text-2xl lg:text-4xl mb-4 text-white'>ZX7 SPEAKER</h1>
          <button className="bg-transparent lg:text-3xl hover:bg-black hover:text-white border border-black text-white py-2 px-6">SEE PRODUCT</button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row flex-initial gap-3 mb-4'>
        <img src={bud} className='w-full md:w-1/2 object-cover h-[320px]' alt='' />
        <div className='h-[320px] w-full md:w-1/2 flex flex-col justify-center items-center bg-[#f1f1f1]'>
          <h2 className='text-3xl mb-4'>YX1 EARPHONES</h2>
          <button className="bg-transparent lg:text-3xl hover:bg-black hover:text-white border border-black text-black py-2 px-6">SEE PRODUCT</button>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}
