import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Contexts/Cartcontext';

const Cart = () => {
  const { cart, removeFromCart, total, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart rounded">
      <h2>Your Cart ({totalItems})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product, index) => (
          <div key={product.id} className="cart-item mb-4 flex justify-between gap-3">
            <div className="flex items-center gap-3">
              <span>{index + 1}.</span>
              <img className="bg-[#f7f7f7] w-[64px] h-[64px]" src={product.image} alt={product.name} />
              <button onClick={() => removeFromCart(product.id)} className="text-red-500">Remove All</button>
            </div>
            <div>
              <h3>{product.product}</h3>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <div className="p-4 flex gap-2 items-center bg-[#f7f7f7]">
              <button className="p" onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
              <span className="">{product.quantity}</span>
              <button className="" onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
            </div>
          </div>
        ))
      )}
      <div className="flex justify-between font-bold mt-4">
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      {total > 0 && <Link className="py-4 text-center block bg-[#d87d4A]" to={'./Checkout'}>Checkout</Link>}
    </div>
  );
};

export default Cart;
