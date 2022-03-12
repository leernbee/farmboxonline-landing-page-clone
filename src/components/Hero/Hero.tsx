import React from 'react';

const Achievements = () => {
  return (
    <section className="flex items-center h-screen max-h-[960px] bg-top bg-hero-bg lg:relative">
      <div className="mx-auto w-full max-w-7xl text-center lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold leading-tight text-white lg:text-6xl">
            <span className="block text-sm font-semibold tracking-wide text-white  lg:text-3xl">
              Our farmers
            </span>
            <span className="block tracking-tighter leading-none xl:inline">
              Deserve a better Agri-Community
            </span>{' '}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg font-semibold text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Agriculture is an ecosystem. It has an ecosystem of problems and
            needs an ecosystem of solution.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div>
              <button
                type="submit"
                className="py-3 px-6 mt-3 w-full text-lg font-bold text-[#374e38]  bg-[#ade65b] rounded-full border border-transparent shadow-sm sm:inline-flex sm:shrink-0 sm:items-center sm:mt-0 sm:w-auto lg:text-xl"
              >
                Be part of the solution
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
