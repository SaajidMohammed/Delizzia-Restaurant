import React from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menuData';

const MenuCategory = ({ addToCart }) => {
  // Use the slug from the URL (e.g., /pizza, /pasta) to find the right data
  const { categorySlug } = useParams();
  
  // Retrieve the items for this category (e.g., Margherita Pizza, Pasta Alfredo)
  const items = menuData[categorySlug];

  if (!items) {
    return <div className="text-center py-20 text-2xl">Category not found.</div>;
  }

  // Format the title (e.g., "pizza" becomes "Pizza Varieties")
  const displayTitle = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  return (
    <section className="py-12 px-4 md:px-8 text-center min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-8 text-[#333]">
        {displayTitle} Varieties
      </h2>
      
      {/* Container for the dish cards matching the original flex layout */}
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {items.map((item) => (
          <MenuCard 
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            onBuy={() => addToCart(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;