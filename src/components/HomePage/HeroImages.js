import React from "react";
import {
  HeroImage,
  LowerCarouselImages,
  UpperCarouselImages,
} from "../../utilities/HomePageUtils";

const HeroImages = () => {
  return (
    <div className="w-full h-[64vh] flex">
      <div className="w-1/2 h-full">
        <img
          src={HeroImage}
          alt={"Brand"}
          className="h-full w-full object-cover brightness-75"
        />
      </div>
      <div className="w-1/2 h-full">
        <div className="h-1/2">
          <img
            src={UpperCarouselImages[1]}
            alt={"uppercarousel"}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-1/2">
          <img
            src={LowerCarouselImages[1]}
            alt={"lowercarousel"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
