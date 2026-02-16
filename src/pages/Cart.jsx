import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => {
    // Remove ₹ and parse as integer for calculation
    const price = parseInt(item.price.replace('₹', ''));
    return acc + price;
  }, 0);

  return (
    <section className="py-12 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#333]">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Start ordering!</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <p className="font-bold">{item.name}</p>
              </div>
              <p className="text-[#e67e22] font-semibold">{item.price}</p>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total:</h3>
            <p className="text-2xl font-bold text-[#e67e22]">₹{total}</p>
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            className="w-full mt-6 bg-[#1e1e1e] text-white py-3 rounded-lg font-bold hover:bg-black transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;