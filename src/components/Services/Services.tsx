import React from 'react';

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: 'Sponsor a Box',
    href: '#',
    category: { name: 'Fund a farmer', href: '#' },
    description:
      'Grow your money while help a farmer. Buy a box that contains the farming supplies and solutions needed of a farmer.',
    imageUrl: 'assets/images/fb06ce61ca971651e5c485b307531cb4.jpg',
  },
  {
    title: 'Supplies & Services',
    href: '#',
    category: { name: 'For farmers', href: '#' },
    description:
      'Increasing agricultural productivity requires quality farming essentials skills and advanced solutions. And we make it accessible & affordable for you.',
    imageUrl: 'assets/images/fb06ce61ca971651e5c485b307531cb4.jpg',
  },
  {
    title: 'Marketplace',
    href: '#',
    category: { name: 'Farm-fresh goods', href: '#' },
    description:
      'Do you want to use farm-fresh produce for your business or for your meal? Our marketplace is the digital platform to sell the harvest of our local farmers.',
    imageUrl: 'assets/images/fb06ce61ca971651e5c485b307531cb4.jpg',
  },
];

const Services = () => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-wide text-[#374e38] uppercase lg:text-5xl">
            Our Services
          </h2>
        </div>
        <div className="grid gap-5 mx-auto mt-12 max-w-lg lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex overflow-hidden flex-col">
              <div className="">
                <img
                  className="object-cover w-full h-52 bg-top"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 justify-between py-6 px-5 pb-0 mx-3 bg-white">
                <div className="flex-1 px-3 pt-8 -mt-14 bg-white shadow-sm">
                  <p className="font-medium text-gray-600 uppercase text-md">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block ">
                    <p className="text-3xl font-bold text-[#374e38] ">
                      {post.title}
                    </p>
                    <p className="mt-4 text-base leading-tight text-gray-600">
                      {post.description}
                    </p>
                  </a>
                  <div className="flex my-6 font-bold text-[#208308] underline lg:text-lg text-md">
                    <span>BUY NOW</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
