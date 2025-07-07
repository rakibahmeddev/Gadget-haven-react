import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import 'preline/preline';

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="text-base mx-4">
        Home
      </NavLink>
      <NavLink to="/statistics" className="text-base mx-4">
        Statistics
      </NavLink>
      <NavLink to="/dashboard" className="text-base mx-4">
        Dashboard
      </NavLink>
    </>
  );

  return (
    <div>
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
        <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-3 flex items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              Gadget Haven
            </Link>
            {/* End Logo */}

            <div className="ms-1 sm:ms-2"></div>
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            <button
              type="button"
              className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              <span className="sr-only">Cart</span>
              <IoCartOutline className="text-2xl" />
            </button>
            <button
              type="button"
              className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              <span className="sr-only">Cart</span>
              <CiHeart className="text-2xl" />
            </button>

            <div className="lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                id="hs-pro-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-pro-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-pro-hcail"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Button Group */}

          {/* Collapse */}
          <div
            id="hs-pro-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            aria-labelledby="hs-pro-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
             {links}
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </div>
  );
};

export default Navbar;
