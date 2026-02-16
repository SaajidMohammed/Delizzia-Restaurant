import React from 'react';
import background from "../assets/Images/Background.png"

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay box with 60% black transparency */}
      <div className="bg-black/60 p-8 rounded-[10px] text-center text-white max-w-[90%] md:max-w-none">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-[3rem] font-bold leading-tight">
          Welcome to Delizia
        </h1>
        {/* Subtext */}
        <p className="mt-4 text-lg md:text-xl font-light">
          Delicious Meals served with love and care
        </p>
      </div>
    </section>
  );
};

export default Hero;