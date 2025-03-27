# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



here using node.js 22.13.2
           npm     9.9.4
           Dependency by vite

          TailwindCSS, npm i react-router, 














          import React from 'react';
import heroiimg from '../../images/heriimg.png';
import sideimg from '../../images/imageinvert1.png';

function Hero() {
  return (
    <>
      <section className="mb-0 lg:mb-64 md:mb-64 text-white overflow-hidden relative">
        {/* Overlay background */}
        <div className="absolute inset-0 bg-zinc-900" />
        
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroiimg})`,
            filter: "brightness(0.5)"
          }}
        />

        {/* Content container */}
        <div className="container mx-auto px-5 py-24 md:py-32 lg:py-44 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between">
            {/* Left Column - Title and Text */}
            <div className="md:w-1/2 mb-0 md:mb-0 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                Trekking
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Snails
                </span>
              </h1>
              <p className="text-xl mb-0 text-gray-300">
                Explore the world's most breathtaking landscapes, &amp;
                one step at a time.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-full">
              <img
                src={sideimg}
                alt="Trekking Snails"
                className="w-full object-contain md:object-cover"
              />
            </div>
          </div>
        </div>

        {/* SVG Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Hero;

