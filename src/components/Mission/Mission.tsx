import React from 'react';

const Achievements = () => {
  return (
    <section className="relative px-4 pt-16 pb-20 bg-gray-50 bg-mission-bg sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:flex lg:col-span-6 lg:items-center lg:mx-0 lg:mt-0 lg:max-w-none">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full text-red-50 bg-red-50 fill-red-50"
                src="assets/images/451ca31d0e36b46332f9864a589e0675.png"
                alt=""
              />
            </div>
          </div>
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="block mt-1 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-[#374e38]">Our mission</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Farm Box has the mission to give our farmers a better
              Agri-Community. A community where it is easy to farm, there are
              available quality farming essentials, they have access to
              trainings and latest digital and agri-solutions, a sponsor willing
              helm them on their capital and a marketplace to sell their
              produce.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <button
                type="submit"
                className="py-3 px-6 mt-3 w-full text-lg font-bold text-[#374e38]  bg-[#ade65b] rounded-full border border-transparent shadow-sm sm:inline-flex sm:shrink-0 sm:items-center sm:mt-0 sm:w-auto lg:text-xl"
              >
                Help a farmer now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
