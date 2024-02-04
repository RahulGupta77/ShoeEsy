import React from "react";
import { ExploreMoreImages } from "../../utilities/HomePageUtils";
import TitleBanner from "./TitleBanner";

const ExploreMore = () => {
  return (
    <div className="mt-[5rem] flex justify-center">
      <div className="w-4/5">
        <TitleBanner title="EXPLORE MORE" />
        <div className="className= mt-12 flex gap-x-5">
          <div className="bg-gray-300 h-[17rem] w-[23rem] overflow-hidden cursor-pointer rounded-lg">
            <img
              src={ExploreMoreImages[0]}
              alt="explore-more-1"
              className="h-full w-full object-cover hover:scale-125 transition-all duration-500 ease-out"
            />
          </div>
          <div className="bg-gray-300 h-[17rem] w-[23rem] overflow-hidden cursor-pointer rounded-lg">
            <img
              src={ExploreMoreImages[1]}
              alt="explore-more-2"
              className="h-full w-full object-cover hover:scale-125 transition-all duration-500 ease-out"
            />
          </div>
          <div className="bg-gray-300 h-[17rem] w-[23rem] overflow-hidden cursor-pointer rounded-lg">
            <img
              src={ExploreMoreImages[2]}
              alt="explore-more-3"
              className="h-full w-full object-cover hover:scale-125 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
