import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { categories } from '../data/menuData';

const Home = ({ user }) => {
  return (
    <main>
      {/* Hero Section with Background.png */}
      <Hero />

      {/* Menu Categories Section */}
      {user ? (
        <section id="menu" className="py-12 px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
          
          <div className="flex flex-wrap gap-6 justify-center">
            {categories.map((category) => (
              <div key={category.slug} className="flex flex-col items-center">
                {/* Category Link replicating the original anchor image */}
                <Link to={`/${category.slug}`} className="block group">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-[250px] h-[180px] object-cover rounded-[10px] shadow-md transition-transform duration-300 group-hover:scale-105" 
                  />
                  <p className="mt-2 font-bold text-lg text-[#333] group-hover:text-[#e67e22]">
                    {category.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="text-center py-12 bg-gray-50">
          <h2 className="text-2xl font-bold text-[#333]">Please <Link to="/login" className="text-[#e67e22] underline">Login</Link> to view our menu</h2>
        </div>
      )}

      {/* Note: Footer with Contact details is usually placed in App.jsx or Layout.jsx */}
    </main>
  );
};

export default Home;