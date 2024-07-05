import React from 'react'
import { earpohne, speaker } from './HeadData'
import { Link } from 'react-router-dom'
import ReuseService from './ReuseService'
import Footer from './Footer'

export default function EarPhones() {
  return (
    <>
     <div className='bg-[#010101] text-center text-white h-40'> 
          <h1 className='TEXT-4Xl py-20 font-manrope'>  EARPHONES</h1>
        </div>
    <div className='py-4 m-16'>
      {earpohne.map((speakers,index)=> {
        return  <div className={`flex font-manrope flex-col gap-10 ${index === 1  ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-16`}>
        <div className="w-full flex justify-center items-center lg:w-1/2 h-auto bg-[#f1f1f1]">
    <img src={speakers.image} className=" object-cover" alt={speakers.name} />
        </div>
    <div className="w-full text-center lg:text-left mt-10 md:w-1/2 p-4">
      <p className='text-[#d87d4A] inline-block tracking-widest mb-6'>{speakers.name}</p>
      <h2 className="text-3xl font-bold mb-2">{speakers.product}</h2>
      <p>{speakers.description}</p>
      <Link  to={speakers.href} className="px-8 inline-block mt-8 py-4 bg-[#d87d4A]  hover:bg-[#fbaf85]">{speakers.link}</Link>
    </div>
    </div>
      })}

      <ReuseService />
      <Footer />
    </div>

    </>

  )
}
