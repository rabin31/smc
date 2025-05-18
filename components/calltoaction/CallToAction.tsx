import React from 'react';
import { Search } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="w-full bg-[#1B153E] text-white flex flex-col lg:flex-row items-center px-6 md:px-12 py-12 gap-8 lg:gap-0">
      {/* Left Content */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif">
          Join the world class
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Study with us in June, July and September 2025
        </p>
        <a
          href="#"
          className="relative w-fit font-semibold text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
        >
          Find out more
        </a>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="flex h-12 md:h-14 w-full">
          <input
            type="text"
            placeholder="Search for courses"
            className="flex-1 px-4 md:px-6 text-sm md:text-lg text-[#1B153E] bg-white outline-none font-serif"
          />
          <button className="w-12 md:w-16 bg-red-600 flex items-center justify-center">
            <Search className="text-white" size={20} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xs md:text-sm font-semibold">
          {['Undergraduate courses', 'Postgraduate courses', 'Foundation programmes'].map((label, i) => (
            <a
              key={i}
              href="#"
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
