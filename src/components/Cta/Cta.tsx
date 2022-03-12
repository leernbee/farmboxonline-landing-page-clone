import React from 'react';

const Achievements = () => {
  return (
    <div className="py-16 bg-white">
      <div className="py-12 px-4 mx-auto max-w-7xl text-center bg-gray-50 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          <span className="block">
            Cannot find the solution you are looking for?
          </span>
        </h2>
        <div className="flex flex-col justify-center items-center mt-8 lg:flex-row">
          <div className="inline-flex">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-12 text-2xl font-medium tracking-wider text-[#7c8a80] uppercase bg-[#ade65b] rounded-lg border border-transparent"
            >
              All Services
            </a>
          </div>
          <div className="inline-flex mt-4 lg:mt-0 lg:ml-3 ">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-12 text-2xl font-medium tracking-wider text-[#ade65b] uppercase bg-[#7c8a80] rounded-lg border border-transparent"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
