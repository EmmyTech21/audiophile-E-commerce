import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../Contexts/Cartcontext';
import { speaker } from '../HeadData';
import ReuseService from '../ReuseService';

export default function ProductSpeaker() {
    const { id } = useParams()
  const product = speaker.find((product) => product.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);



  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="m-10">
      <div  className={`flex font-manrope flex-col gap-10 ${product === 1 ? ' md:flex-row-reverse' : 'md:flex-row'} items-center mb-16`}> 
      <div className="w-full flex justify-center items-center lg:w-1/2 h-auto bg-[#f1f1f1]">
      <img src={product.image} className="object-cover" alt={product.name} />
      </div>
      <div  className="w-full sm:text-left text-center lg:text-left mt-10 md:w-1/2 p-4">
        <p className="text-[#d87d4A] inline-block tracking-widest mb-6">{product.name}</p>
        <h2 className="text-3xl font-bold mb-2">{product.product}</h2>
        <p>{product.description}</p>
        <p className='mt-10 font-bold'> $ {product.price * quantity}</p>

        <div className='flex items-center gap-2 mt-6'> 
          <div className='px-8 py-4  bg-[#f7f7f7]'>
          <button onClick={decrementQuantity} className='p-2'>-</button>
       <span className='p-2'>{quantity}</span>
       <button onClick={incrementQuantity} className='p-2'>+</button>
          </div>

        <button onClick={handleAddToCart} className="px-8 py-4 inline-block  bg-[#d87d4A] hover:bg-[#fbaf85]">
          Add to Cart
        </button>
        </div>
      </div>
    </div>
    <div className=' mt-36 lg:flex lg:gap-10 lg:justify-between'>
      <div className='mb-6 lg:w-2/3'>
      <h1 className='mb-6 font-manrope font-bold text-3xl'>FEATURE</h1>
      <p className='font-manrope mb-4 font-normal'>{product.sectionTtext1}</p>
      <p className='font-manrope  font-normal'>{product.sectionTtext2}</p>
      </div>
    
    <div className='mb-8'>
    <h1 className='text-3xl  font-manrope font-bold uppercase mb-6'>in the box</h1>
    <div className='flex flex-col gap-3'>
     <p> <span className='text-[#d87d4A] mr-2'>1x</span>{product.productIv[0]}</p>
      <p><span className='text-[#d87d4A] mr-2'>2x</span>{product.productIv[1]}</p>
     <p> <span className='text-[#d87d4A] mr-2'>1x</span>{product.productIv[2]}</p>
     <p> <span className='text-[#d87d4A] mr-2'>1x</span>{product.productIv[3]}</p>
     {/* <p> <span className='text-[#d87d4A] mr-2'>1x</span>{product.productIv[4]}</p> */}
     </div>
    </div>
    </div>
    <div className='md:flex gap-4'>
    <div className='flex md:w-1/2 flex-col gap-4 mb-4'>
    <img  src={product.images3} alt='headphone'/>
    <img src={product.images1} alt='headphone'/>
    </div>
    <img className='md:w-1/2' src={product.images2} alt='headphone'/>
    </div>
    <h1 className='text-3xl mt-8 uppercase text-center'>you may also like</h1>

<div className=' items-center m-10 flex flex-col md:flex-row gap-8 justify-between'>
  <div className='w-36 flex flex-col items-center'>
    <img className='' src={product.images4} alt='product'/>
    <h2>XX99 MARK I</h2>
    <Link to={`/product/${product.id}`} className="px-2 
         py-4 inline-block  text-[16px] text-white mt-8 bg-[#d87d4A] hover:bg-[#fbaf85]">SEE PRODUCT</Link>
  </div>
  <div className='w-36 flex flex-col items-center'>
    <img  className='' src={product.images5} alt='product'/>
    <h2>XX99 MARK I</h2>
    <Link to={`/product/${product.id}`}  className="px-2 
         py-4 inline-block  text-[16px] text-white mt-8 bg-[#d87d4A] hover:bg-[#fbaf85]">SEE PRODUCT</Link>
  </div>
  <div className='w-36 flex flex-col items-center'>
    <img className=' ' src={product.images6} alt='product'/>
    <h2>XX99 MARK I</h2>
    <Link to={`/product/${product.id}`}
     className="px-2 
     py-4 inline-block  text-[16px] text-white mt-8 bg-[#d87d4A] hover:bg-[#fbaf85]">SEE PRODUCT</Link>
  </div>
</div>
<ReuseService />
    </div>
    
  )
}
