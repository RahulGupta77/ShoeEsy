import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";

const ProductCards = ({ product }) => {
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [hoverAnimate, setHoverAnimate] = useState(false);

  console.log(showAddToCart);

  return (
    <div
      onMouseOver={() => setShowAddToCart(true)}
      onMouseOut={() => setShowAddToCart(false)}
      className="w-[15rem] h-[24rem] col-span-3 mt-10 transition-all relative  hover:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
    >
      <div
        onMouseOver={() => setHoverAnimate(true)}
        onMouseOut={() => setHoverAnimate(false)}
        className=" w-full h-[80%] relative "
      >
        <div className="h-full w-full overflow-hidden ">
          <Tooltip
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            content="Add Item"
            className="text-[#ed4f7a] border-2 border-[#ed4f7a] px-2 py-1 font-bold tracking-wider bg-white rounded-lg text-sm "
          >
            <div className="absolute top-1 right-1 z-30 cursor-pointer bg-white rounded-full p-1 m-1 ">
              <HeartIcon className="h-6 w-6  text-[#ed4f7a]" />
            </div>
          </Tooltip>
          <img
            src={product.image}
            alt="shoe product"
            className={
              "h-full w-full object-cover transition-all duration-[400ms] filter  ease-out-back" +
              (hoverAnimate && " scale-105")
            }
          />
        </div>
        <div className="absolute bg-[#ffffffcc] px-1 py-1 font-bold text-xs backdrop-blur-2xl bottom-0 flex gap-1 justify-center items-center ml-2 mb-2">
          <div className="flex gap-x-1 ">
            <p>{product.rating}</p>
            <StarIcon className="h-4 w-4 text-[#3f968f]" />
          </div>
          <p>|</p>
          <p>{product.ratingCount}</p>
        </div>
        <div
          className={
            "absolute -bottom-7 overflow-hidden flex justify-center bg-white items-center  z-30   w-full transition-all duration-[400ms] ease-in-out-back  " +
            (showAddToCart ? "h-[20%]" : "h-0 ")
          }
        >
          <div className="cursor-pointer bg-orange-100 flex items-center justify-center gap-x-2">
            <div className="">add to bag</div>
            <ShoppingBagIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      {/* {showAddToCart && } */}
      <div className="px-2 p-1">
        <p>{product.brand}</p>
        <p>{product.name}</p>
        <p>Rs. {product.cost}</p>
      </div>
    </div>
  );
};

export default ProductCards;
