import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <div className="my-24 w-[85%] mx-auto">
      <h2 className="text-4xl text-center font-bold">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex my-16">
        <div className="w-[20%] bg-white text-center p-6 md:mr-8 shadow-xl/20 rounded-xl border border-gray-100">
          <h2 className='text-2xl font-bold'>Sidebar</h2>
        </div>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
