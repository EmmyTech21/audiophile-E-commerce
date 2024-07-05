// src/Components/HeadPhones.js
import React from 'react';
import { Link } from 'react-router-dom';
import { headphones } from './HeadData'; // Update the path as needed
import ReuseService from './ReuseService';

export default function HeadPhones() {
  return (
    <div>
      <div className="bg-[#010101] text-center text-white h-40">
        <h1 className="text-4xl py-20 font-manrope">HEADPHONES</h1>
      </div>
      <div className="m-10">
        {headphones.map((heads, index) => (
          <div key={heads.id} className={`flex font-manrope flex-col gap-10 ${index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-16`}>
            <div className="w-full flex justify-center items-center lg:w-1/2 h-auto bg-[#f1f1f1]">
              <img src={heads.image} className="object-cover" alt={heads.name} />
            </div>
            <div className="w-full text-center lg:text-left mt-10 md:w-1/2 p-4">
              <p className="text-[#d87d4A] inline-block tracking-widest mb-6">{heads.name}</p>
              <h2 className="text-3xl font-bold mb-2">{heads.product}</h2>
              <p>{heads.description}</p>
              <Link to={`/product/${heads.id}`} className="px-8 py-4 inline-block mt-8 bg-[#d87d4A] hover:bg-[#fbaf85]">SEE PRODUCT</Link>
            </div>
          </div>
        ))}
      </div>
      <ReuseService />

    </div>
  );
}
