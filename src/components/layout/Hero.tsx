import React from 'react';

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg')",
      }}
    >
      <div className="w-full max-w-4xl text-white text-center bg-black/60 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 rounded-lg">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to IronFit Gym
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
          Transform your body. Transform your life.
        </p>

      </div>
    </div>
  );
};

export default Hero;