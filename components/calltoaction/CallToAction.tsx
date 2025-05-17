import React from 'react';
import { Search } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="h-[40vh] w-full bg-[#1B153E] text-white flex items-center px-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-serif">
          Join the world class
        </h1>
        <p className="text-md text-gray-300">
          Study with us in June, July and September 2025
        </p>
        <a
          href="#"
          className="relative w-fit font-semibold text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
        >
          Find out more
        </a>
      </div>

      <div className="ml-auto flex flex-col gap-4 w-[50%]">
        <div className="flex h-14 w-full">
          <input
            type="text"
            placeholder="Search for courses"
            className="flex-1 px-6 text-lg text-[#1B153E] bg-white outline-none font-serif"
          />
          <button className="w-16 bg-red-600 flex items-center justify-center">
            <Search className="text-white" size={24} />
          </button>
        </div>

        <div className="flex justify-between text-sm font-semibold">
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
