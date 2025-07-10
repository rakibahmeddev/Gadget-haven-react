import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
    <div className='bg-gray-100'>
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
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>

        </div>
      </div>
      {/* End Hero */}

      {/* Features */}
      <div className="max-w-[85rem] bg-white rounded-4xl p-6 md:p-8 lg:p-10 mx-auto mt-[-150px]">
        {/* Grid */}
        <div className="flex gap-x-10">
          <div>
            <img
              className="rounded-xl"
              src={image}
              alt={title}
            />
          </div>
          {/* End Col */}

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="">
              {/* Title */}
              <div className="">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  We tackle the challenges start-ups face
                </h2>
                <p className="text-gray-500">
                  Besides working with start-up enterprises as a partner for
                  digitalization, we have built enterprise products for common
                  pain points that we have encountered in various products and
                  projects.
                </p>
              </div>
              {/* End Title */}

              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Easy & fast</span> designing
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500">
                      Powerful <span className="font-bold">features</span>
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500">
                      User Experience Design
                    </span>
                  </div>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </div>
  );
};

export default ProductDetail;
