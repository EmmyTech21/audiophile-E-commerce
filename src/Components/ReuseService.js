import React from 'react'
import group from '../images/Group 5.png';
import speaker from '../images/speaker-1.png';
import headphone from '../images/headphone-1.png';

export default function ReuseService() {
  return (
    <div>
        <div className="relative bg-white mb-4 flex flex-col items-center md:flex-row mt-20 gap-2">
        <div className="relative mb-10 flex rounded-md w-full h-60 bg-[#f1f1f1] flex-col items-center justify-center">
          <img src={group} className="absolute w-24 top-[-40px] left-1/2 transform -translate-x-1/2" alt="Group" />
          <h3 className="mt-12">Headphones</h3>
          <p>SHOP</p> <span></span>
        </div>
        <div className="relative mb-10 bg-[#f1f1f1] w-full h-60 flex flex-col items-center justify-center">
          <img src={speaker} className="absolute w-24 top-[-40px] left-1/2 transform -translate-x-1/2" alt="Speaker" />
          <h3 className="mt-12">SPEAKERS</h3>
          <p>SHOP</p> <span></span>
        </div>
        <div className="relative mb-10 h-60 bg-[#f1f1f1] w-full flex flex-col items-center justify-center">
          <img src={headphone} className="absolute w-24 top-[-30px] left-1/2 transform -translate-x-1/2" alt="Headphone" />
          <h3 className="mt-12">EARPHONES</h3>
          <p>SHOP</p> <span></span>
        </div>
      </div>

    </div>
  )
}
