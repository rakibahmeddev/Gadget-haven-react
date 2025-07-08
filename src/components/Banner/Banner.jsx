import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-purple-600 rounded-4xl mx-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-36 space-y-10">
          {/* Announcement Banner */}
          <div className="flex justify-center"></div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="max-w-[80%] md:max-w-[70%] text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-3xl md:text-4xl lg:text-5xl">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
          </div>
          {/* End Title */}

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white/70">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>

          {/* Buttons */}
          <div className="text-center mb-14">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-white text-black  shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent  text-base font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6"
              href="#"
            >
              Shop Now
             
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}

    <div className='w-[60%] mx-auto mt-[-150px] border-4 border-white  rounded-4xl'>
      <img className='rounded-4xl  ' src={banner} alt="" />
    </div>

    </div>
  );
};

export default Banner;
