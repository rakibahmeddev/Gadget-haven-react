import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../utility/addToDB';
import { RiStarSLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const allProducts = useLoaderData();

  useEffect(() => {
    const LsCart = getStoredCart();
    const newLsCart = LsCart.map((id) => parseInt(id));
    // console.log(LsCart, newLsCart, allProducts);

    const findCart = allProducts.find((product) =>
      newLsCart.includes(product.id)
    );
    console.log(findCart[0]);

    setProduct(findCart);
  }, []);

  console.log(product);
  const {
    id,
    title,
    image,

    price,
    category,
    description,
    rating,
  } = product;

  return (
    <div className="bg-gray-100 pb-26">
      {/* Hero */}
      <div className="bg-purple-600">
        <div className=" px-4 sm:px-6 lg:px-8 py-10 ">
          {/* Announcement Banner */}
          <div className="flex justify-center"></div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="max-w-[80%] md:max-w-[90%] text-center mx-auto">
            <h1 className="block font-medium text-white mb-2 text-xl md:text-3xl">
              Dashboard
            </h1>
          </div>
          {/* End Title */}

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white/70">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Features */}
      <div className=" px-22 lg:px-0 my-18">
        <div className=" md:max-w-[60%] bg-white rounded-4xl p-6 md:p-5 lg:p-6 mx-auto ">
          {/* Grid */}
          <div className="md:flex gap-x-10">
            <div className="w-[30%] flex justify-center items-center border border-gray-200 rounded-2xl p-10 shadow-2xl">
              <img
                className="rounded-2xl w-[50%] md:w-[150px] block"
                src={image}
                alt={title}
              />
            </div>
            {/* End Col */}

            <div className="w-[70] mt-5 sm:mt-10 lg:mt-0">
              <div className="">
                {/* Title */}
                <div className="">
                  <h2 className="font-bold text-xl md:text-2xl lg:text-2xl text-gray-800">
                    {title}
                  </h2>
                  <p className="text-black font-bold">
                    Price:{' '}
                    <span className="font-bold text-base text-purple-600">
                      ${price}
                    </span>
                  </p>
                </div>
                {/* End Title */}

                <div className="">
                  <div>
                    <button className="bg-[#EAF5E6] text-green-500 px-6 py-1 font-light text-sm rounded-full">
                      {category}
                    </button>
                  </div>

                  <div className="mt-8 flex items-center">
                    <button className="btn px-12 py-3 flex justify-center items-center gap-x-1 bg-purple-600 text-white rounded-lg cursor-pointer">
                      <p>Purchase</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Features */}
    </div>
  );
};

export default Dashboard;
