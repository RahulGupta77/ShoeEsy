import React from "react";
import {
  HeroImage,
  UpperCarouselImages,
  LowerCarouselImages,
} from "../utilities/HomePageUtils";

const HomePage = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-2/3 flex">
        <div className="w-1/2 h-full">
          <img
            src={HeroImage}
            alt={"Brand"}
            className="h-full w-full object-cover brightness-75"
          />
        </div>
        <div className="w-1/2 h-full">
          <div className="h-1/2 bg-red-200">
            <img
              src={UpperCarouselImages[0]}
              alt={"uppercarousel"}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-1/2 bg-green-200">
            <img
              src={LowerCarouselImages[0]}
              alt={"lowercarousel"}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
