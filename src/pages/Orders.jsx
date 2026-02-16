import React from 'react';

const Orders = ({ orders }) => {
  return (
    <section className="py-12 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#333]">Your Orders</h2>
      
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#e67e22]">
              <div className="flex justify-between items-start mb-4 border-b pb-2">
                <div>
                  <p className="font-bold text-lg">Order ID: #{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <p className="text-xl font-bold text-[#e67e22]">Total: ₹{order.total}</p>
              </div>
              
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-gray-700">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-2 border-t text-right">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">Order Placed</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Orders;