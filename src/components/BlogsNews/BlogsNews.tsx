import React from 'react';

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, suscipit aperiam. ',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    imageUrl: 'assets/images/fb06ce61ca971651e5c485b307531cb4.jpg',
  },
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, suscipit aperiam.',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    imageUrl: 'assets/images/fb06ce61ca971651e5c485b307531cb4.jpg',
  },
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, suscipit aperiam.',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: 'assets/images/fb06ce61ca971651e5c485b307531cb4.jpg',
  },
];

const Services = () => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 bg-mission-bg sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-wide text-[#374e38] uppercase lg:text-5xl">
            Blogs & News
          </h2>
        </div>
        <div className="grid gap-5 mx-auto mt-12 max-w-lg lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex overflow-hidden flex-col">
              <div className="shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 justify-between p-6 bg-white">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="">
                    <div className="flex text-sm text-gray-500">
                      <span>Read More</span>
                    </div>
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
