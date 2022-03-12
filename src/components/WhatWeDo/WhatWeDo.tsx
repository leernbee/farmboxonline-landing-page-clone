import React from 'react';

const Achievements = () => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 bg-no-repeat bg-cover bg-what-we-do-bg sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-wide text-[#374e38] uppercase lg:text-5xl">
            What We Do?
          </h2>
          <p className="text-lg text-gray-700 lg:text-xl">
            We offer an end-to-end solution for our farmers
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-lg lg:max-w-none">
          <img
            className="w-full"
            src="assets/images/499c161511f736b3c1a65f18039eee44.png"
            alt=""
          />
        </div>
        <p className="mt-3 text-xl text-center text-gray-800 sm:mt-4">
          illustration by <b>www.catfishcreative.com.au</b>
        </p>
      </div>
    </div>
  );
};

export default Achievements;
