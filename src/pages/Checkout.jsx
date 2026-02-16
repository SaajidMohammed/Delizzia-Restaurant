import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, onPlaceOrder }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace('₹', ''));
    return acc + price;
  }, 0);

  const handleConfirmOrder = () => {
    if (paymentMethod === 'cod') {
      onPlaceOrder();
      navigate('/orders');
    } else {
      alert("This payment method is not available yet.");
    }
  };

  return (
    <section className="py-12 px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#333]">Checkout</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <p className="text-gray-700 mb-2">Total Items: {cartItems.length}</p>
        <p className="text-2xl font-bold text-[#e67e22]">Total Amount: ₹{total}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Payment Method</h3>
        <div className="flex items-center gap-3 mb-4">
          <input 
            type="radio" 
            id="cod" 
            name="payment" 
            value="cod" 
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-5 h-5 accent-[#e67e22]"
          />
          <label htmlFor="cod" className="text-lg">Cash on Delivery</label>
        </div>
        
        <button 
          onClick={handleConfirmOrder}
          className="w-full bg-[#1e1e1e] text-white py-3 rounded-lg font-bold hover:bg-black transition-colors mt-4"
        >
          Confirm Order
        </button>
      </div>
    </section>
  );
};

export default Checkout;