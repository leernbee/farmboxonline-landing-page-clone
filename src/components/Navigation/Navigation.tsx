import { MenuIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Process', href: '#' },
];

export default function Example() {
  return (
    <div className="absolute z-10 w-full bg-transparent">
      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div>
            <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="">
                <div className="flex justify-between items-center h-16">
                  <div className="hidden lg:flex  lg:items-center">
                    <a href="#">
                      <img
                        className="w-auto h-16"
                        src="/assets/images/logo.webp"
                        alt=""
                      />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <img
                      src="assets/images/logo.webp"
                      alt=""
                      className="w-auto h-12"
                    />
                  </a>

                  <div className="hidden justify-end p-4 px-8 ml-auto space-x-6 bg-gray-900 bg-opacity-25 rounded-lg lg:flex">
                    {navigation.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-medium text-white hover:text-indigo-50"
                      >
                        {link.name}
                      </a>
                    ))}
                    <div className="flex justify-end items-center ml-8">
                      <div className="flex items-center">
                        <div className="flex space-x-8">
                          <div className="flex">
                            <a href="#" className="p-2 -m-2 text-[#cdfaba] ">
                              <span className="sr-only">Account</span>
                              <UserIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>

                        <div className="flow-root ml-3">
                          <a
                            href="#"
                            className="group flex items-center p-2 -m-2"
                          >
                            <ShoppingCartIcon
                              className="shrink-0 w-6 h-6 text-[#cdfaba]"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex items-center ml-auto lg:hidden ">
                    <button
                      type="button"
                      className="p-2 -ml-2 text-gray-400 bg-white rounded-md"
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
