import React from "react";
import { ShopForImages } from "../../utilities/HomePageUtils";
import TitleBanner from "./TitleBanner";

const ShopFor = () => {
  return (
    <div className="mt-[4rem] flex justify-center">
      <div className="w-4/5">
        <TitleBanner title="SHOP FOR" />

        <div className="mt-12 flex gap-x-5">
          <div className="h-[22rem] w-[17rem] overflow-hidden rounded-xl bg-gray-300">
            <img
              src={ShopForImages[0]}
              alt="Formal Shoes"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[22rem] w-[17rem] overflow-hidden rounded-xl bg-gray-300">
            <img
              src={ShopForImages[1]}
              alt="Ladies Heels"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[22rem] w-[17rem] overflow-hidden rounded-xl bg-gray-300">
            <img
              src={ShopForImages[2]}
              alt="Mens Chappal"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[22rem] w-[17rem] overflow-hidden rounded-xl bg-gray-300">
            <img
              src={ShopForImages[3]}
              alt="Sport Shoes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFor;
