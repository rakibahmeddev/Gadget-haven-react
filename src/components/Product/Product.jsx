import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, image, price, category, description, rating } = product;
  console.log(product);
  const { rate, count } = rating;
  return (
    <div>
      <div className="max-w-[85rem] min-h-[500px] px-4 sm:px-6 lg:px-8 mx-auto py-6 bg-white shadow-xl/20 rounded-xl border border-gray-100">
        {/* Card */}
        <div className="group flex flex-col">
          <div className="relative">
            <div className=" rounded-2xl flex justify-center items-center">
              <img className="w-[180px] h-[200px] rounded-2xl" src={image} />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black hover:text-purple-600 cursor-pointer">
                {title}
              </h3>

              <p className="mt-2 font-semibold text-black">${price}</p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Category:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">{category}</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Ratting:</span>
                  </div>

                  <div className="flex justify-end items-center text-sm ">
                    <span className="flex items-center gap-1">
                      {rate} <FaRegStar /> / {count}
                    </span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto relative">
            <Link to={`/product/${id}`} className="py-2 px-3 w-full inline-flex justify-center  absolute b-0 items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-purple-500 text-white hover:bg-purple-700 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none">Buy Now</Link>
            
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
};

export default Product;
