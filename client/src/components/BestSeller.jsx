// import React from 'react'
// import ProductCard from './ProductCard'
// import { useAppContext } from '../context/AppContext'

// const BestSeller = () => {
//     const {products} = useAppContext();
//   return (
//     < div className='mt-16'>
//       <p className='text-2xl md:text-2xl font-medium'>Best Sellers</p>
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
//         {products.filter((product)=> product.inStock).slice(0,4).map((product,index)=>(
//             <ProductCard key={index} product={product} />
//         ))}

//         <ProductCard product={products[0]}/>
//       </div>
//     </div>
//   )
// }

// export default BestSeller



import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  const bestSellerProducts = products
    .filter((product) => product.inStock)
    .slice(0, 5);

  return (
    <div className="mt-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Best Sellers
      </h2>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;