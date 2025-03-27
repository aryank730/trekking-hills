import React from 'react';
import heroiimg from '../../images/heriimg.png';
import sideimg from '../../images/imageinvert1.png';

function Hero() {
  return (
    <>
      <section className="  text-white relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroiimg})`, filter: 'brightness(0.5) blur(0px)' }}
        />

        {/* Content Container */}
        <div className="container mx-auto px-0 py-6  md:py-6 lg:py-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-around">
            {/* Left Column - Text */}
            <div className="m text-center md:text-left mb-10 md:mb-0 p-6 pt-16 lg:pt-0 md:pt-0">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight">
                Trekking
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Snails
                </span>
              </h1>
              <p className="text-xl mb-0 text-gray-300">
                Explore the world's most breathtaking landscapes, &amp; one step at a time.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="">
              <img
                src={sideimg}
                alt="Trekking Snails"
                className="w-full object-contain md:object-cover"
              />
            </div>
          </div>
        </div>

        {/* SVG Bottom */}
        <div className="absolute -bottom-0.5 left-0 right-0">
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
