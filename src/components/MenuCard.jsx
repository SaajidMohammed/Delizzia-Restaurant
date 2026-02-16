import React from 'react';

const MenuCard = ({ name, price, image, onBuy }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="w-[250px] h-[180px] object-cover rounded-[10px] shadow-md" />
      <p className="mt-2 font-bold text-[#333]">{name}</p>
      <p className="my-1 text-[#e67e22] font-semibold">{price}</p>
      <button 
        onClick={onBuy} 
        className="bg-[#e67e22] text-white px-[18px] py-2 rounded-[4px] cursor-pointer hover:bg-[#cf711f] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuCard;