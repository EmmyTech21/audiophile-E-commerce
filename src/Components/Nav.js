import React, { useState } from 'react';
import { nav } from '../Data';
import { Link } from 'react-router-dom';
import logo from '../images/audiophile.png';
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from './Cart';


export default function Nav() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <div className='bg-[#101010] border-blue-50 '>
        <nav className='flex sm:justify-between p-8 lg:justify-around'>
          <GiHamburgerMenu className='text-white text-3xl lg:hidden' />
          <img className='w-13 h-8' src={logo} alt='logo' />
          <ul className='sm:hidden lg:flex gap-5 '>
            {nav.map((links, i) => (
              <li key={i} className='text-white'><Link to={links.path}>{links.name}</Link></li>
            ))}
          </ul>
          <FaCartPlus className='text-white text-3xl cursor-pointer' onClick={toggleCartVisibility} />
        </nav>
      </div>

      {isCartVisible && (
        <div className="cart-overlay ">
          <div className="cart-container w-[400px] mt-20 mr-10 bg-white rounded-md">
            <Cart />
          </div>
        </div>
      )}
    </>
  );
}
