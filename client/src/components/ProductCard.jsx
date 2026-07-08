// import React from "react";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";


// const ProductCard = ({product}) => {
//     // const [count, setCount] = React.useState(0);
//   const  {currency,addToCart,  removefromCart, cartItems, navigate} = useAppContext();
  
//     return product && (
//         <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} 
//         className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2
//          bg-white min-w-56 max-w-56 w-full">
//             <div className="group cursor-pointer flex items-center justify-center px-2">
//                 <img className="group-hover:scale-105 transition max-w-26 md:max-w-36"
//                  src={product.image[0]} alt={product.name} />
//             </div>
//             <div className="text-gray-500/60 text-sm">
//                 <p>{product.category}</p>
//                 <p className="text-gray-700 font-medium text-lg truncate w-full">
//                     {product.name}</p>
//                 <div className="flex items-center gap-0.5">
//                     {Array(5).fill('').map((_, i) => (
                      
//                            <img key={i} className="md:w-3.5 w-3" src={i < 4 ? assets.star_icon : assets.star_dull_icon } alt=""/>

//                     ))}
//                     <p>(4)</p>
//                 </div>
//                 <div className="flex items-end justify-between mt-3">
//                     <p className="md:text-xl text-base font-medium text-primary">
//                         {currency}{product.offerPrice} {" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
//                     </p>
//                     <div onClick={(e) => {e.stopPropagation(); }} className="text-cyan-700">
//                         { !cartItems[product._id] ? (
//                             <button className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-200 md:w-[80px] w-[64px] h-[34px] rounded   font-medium cursor-pointer" onClick={() =>  addToCart(product._id)} >
//                                 <img src={assets.cart_icon} alt="cart_icon"/>
//                                 Add
//                             </button>
//                         ) : (
//                             <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
//                                 <button onClick={() =>  {removefromCart(product._id)}} className="cursor-pointer text-md px-2    h-full" >
//                                     -
//                                 </button>
//                                 <span className="w-5 text-center">{cartItems[product._id]}</span>
//                                 <button onClick={() =>  {addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
//                                     +
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;











import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const {
    currency,
    addToCart,
    removefromCart,
    cartItems,
    navigate,
  } = useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
          scrollTo(0, 0);
        }}
        className="border border-gray-200 rounded-lg p-3 bg-white w-full shadow-sm hover:shadow-md transition cursor-pointer"
      >
        {/* Product Image */}
        <div className="flex items-center justify-center h-40 sm:h-44 md:h-48 overflow-hidden">
          <img
            src={product.image[0]}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="mt-3">
          <p className="text-xs sm:text-sm text-gray-500">
            {product.category}
          </p>

          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  className="w-3 sm:w-3.5"
                  alt=""
                />
              ))}
            <span className="text-xs text-gray-500">(4)</span>
          </div>

          {/* Price & Cart */}
          <div className="flex items-end justify-between mt-3">
            <div>
              <p className="text-primary font-semibold text-base sm:text-lg">
                {currency}
                {product.offerPrice}
              </p>

              <p className="text-gray-400 text-xs line-through">
                {currency}
                {product.price}
              </p>
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
            >
              {!cartItems[product._id] ? (
                <button
                  onClick={() => addToCart(product._id)}
                  className="flex items-center gap-1 bg-indigo-100 border border-indigo-200 px-3 py-2 rounded text-sm"
                >
                  <img
                    src={assets.cart_icon}
                    alt=""
                    className="w-4"
                  />
                  Add
                </button>
              ) : (
                <div className="flex items-center bg-primary/20 rounded">
                  <button
                    onClick={() => removefromCart(product._id)}
                    className="px-2 py-2"
                  >
                    -
                  </button>

                  <span className="px-2">
                    {cartItems[product._id]}
                  </span>

                  <button
                    onClick={() => addToCart(product._id)}
                    className="px-2 py-2"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;