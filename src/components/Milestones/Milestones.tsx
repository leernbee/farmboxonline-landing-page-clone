import React from 'react';

const Services = () => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-wide text-[#374e38] uppercase lg:text-5xl">
            Milestones
          </h2>
          <p className="text-lg text-gray-700 lg:text-xl">
            Helping our farmers is also securing a fresh food on your table
          </p>
        </div>
        <dl className="mt-16 text-center sm:grid sm:grid-cols-5 sm:gap-8 sm:mx-auto">
          <div className="flex flex-col items-center">
            <img
              className="mb-3 w-16 h-16"
              src="assets/images/709880bb35636e5f3eb99f16e667df47.svg"
              alt=""
            />
            <dt className="order-2 mt-1 text-lg font-medium leading-6 text-gray-800">
              farmers
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-[#208308] ">
              122
            </dd>
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <img
              className="mb-3 w-16 h-16"
              src="assets/images/0c147a68c3ec8bbbc6cc86824cece588.svg"
              alt=""
            />
            <dt className="order-2 mt-1 text-lg font-medium leading-6 text-gray-800">
              seedling planted
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-[#208308] ">
              12,000
            </dd>
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <img
              className="mb-3 w-16 h-16"
              src="assets/images/0a623ea0b823465f7134c07efd5adab8.svg"
              alt=""
            />
            <dt className="order-2 mt-1 text-lg font-medium leading-6 text-gray-800">
              piglets raised
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-[#208308] ">
              76
            </dd>
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <img
              className="mb-3 w-16 h-16"
              src="assets/images/21e489fb2140b4e08dfc52af84710be9.svg"
              alt=""
            />
            <dt className="order-2 mt-1 text-lg font-medium leading-6 text-gray-800">
              cups planted
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-[#208308] ">
              800
            </dd>
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <img
              className="mb-3 w-16 h-16"
              src="assets/images/66fc027e027a66d4f100cb70ac3530c1.svg"
              alt=""
            />
            <dt className="order-2 mt-1 text-lg font-medium leading-6 text-gray-800">
              chicks raised
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-[#208308] ">
              4,500
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Services;
