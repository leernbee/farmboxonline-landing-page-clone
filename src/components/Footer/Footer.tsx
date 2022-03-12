export default function Example() {
  return (
    <footer className="relative bg-center bg-cover bg-footer-bg">
      <div className="absolute top-0 left-0 -z-0 w-full h-full bg-cover bg-mission-bg opacity-80 z-1"></div>
      <div className="relative z-50 py-12 px-4 mx-auto max-w-7xl text-white sm:px-6 lg:py-16 lg:px-8">
        <div className="z-10">
          <div className="flex flex-col justify-between lg:flex-row">
            <img
              className="object-contain max-w-[240px] w-100"
              src="assets/images/logo.webp"
              alt="Company name"
            />
            <p className="max-w-xl text-2xl lg:text-3xl">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
          </div>
          <div className="pb-8 mt-16">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="grow mt-2 md:mt-0">
                <h3 className="text-lg font-bold tracking-wider uppercase">
                  Connect with us
                </h3>
                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 mt-2 md:mt-0 lg:flex-1 lg:min-w-[160px]">
                <h3 className="text-lg font-bold tracking-wider  uppercase">
                  Our Location
                </h3>
                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Our Process
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 mt-2 md:mt-0 lg:flex-1 lg:min-w-[160px]">
                <h3 className="text-lg font-bold tracking-wider  uppercase">
                  Our Services
                </h3>
                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Sponsor a box
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Farming Supplies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Trainings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Agri-Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Food Marketplace
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 mt-2 md:mt-0 lg:flex-1 lg:min-w-[160px]">
                <h3 className="text-lg font-bold tracking-wider  uppercase">
                  <br></br>
                </h3>
                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-bold">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-between md:items-center">
            <p className="text-lg font-bold text-center md:order-1 md:mt-0 lg:text-left">
              Support@farmboxonline.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
