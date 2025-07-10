import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { RiStarSLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetail = () => {
  const { productId } = useParams();
  const id = parseInt(productId);
  const products = useLoaderData();
  // console.log(id, productId, products)

  const newProduct = products.find((product) => product.id === id);
  console.log(newProduct);
  const {
    id: newId,
    title,
    image,
    price,
    category,
    description,
    rating,
  } = newProduct;

  return (
    <div className="bg-gray-100 pb-26">
      {/* Hero */}
      <div className="bg-purple-600">
        <div className=" px-4 sm:px-6 lg:px-8 pt-10 pb-48">
          {/* Announcement Banner */}
          <div className="flex justify-center"></div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="max-w-[80%] md:max-w-[70%] text-center mx-auto">
            <h1 className="block font-medium text-white mb-2 text-xl md:text-3xl">
              Product Details
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
      <div className=" px-22 lg:px-0">
        <div className=' md:max-w-[85rem] bg-white rounded-4xl p-6 md:p-8 lg:p-10 mx-auto mt-[-150px]'>
          {/* Grid */}
          <div className="md:flex gap-x-10">
            <div className="flex justify-center items-center border border-gray-200 rounded-2xl p-10 shadow-2xl">
              <img
                className="rounded-2xl w-[50%] md:w-[600px] block"
                src={image}
                alt={title}
              />
            </div>
            {/* End Col */}

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="">
                {/* Title */}
                <div className="">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
                    {title}
                  </h2>
                  <p className="text-black font-bold">
                    Price:{' '}
                    <span className="font-bold text-2xl text-purple-600">
                      ${price}
                    </span>
                  </p>

                  <p className="text-black font-normal my-3">{description}</p>
                </div>
                {/* End Title */}

                <div className="">
                  <div>
                    <button className="bg-[#EAF5E6] text-green-500 px-6 py-1 font-light text-sm rounded-full">
                      {category}
                    </button>
                  </div>
                  <div className="flex gap-1 justify-start items-center mt-10">
                    <p>Ratting: </p>
                    <span className=" ml-3">{rating.rate}</span>
                    <RiStarSLine className="text-yellow-500 text-2xl" />
                    <span>/ {rating.count}</span>
                  </div>

                  <div className="mt-8 flex items-center">
                    <button></button>
                    <Link
                      to=""
                      className="btn px-12 py-3 flex justify-center items-center gap-x-1 bg-purple-600 text-white rounded-lg"
                    >
                      {' '}
                      <p>Add to Cart</p>{' '}
                      <MdOutlineShoppingCart className="text-xl" />
                    </Link>

                    <Link to="" className="bg-green-500 p-3 rounded-full ml-8">
                      <IoMdHeartEmpty className="text-2xl text-white" />
                    </Link>
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

export default ProductDetail;
