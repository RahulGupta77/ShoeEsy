import React from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

const Sidebar = () => {
  return (
    <div className="sticky top-10 ">
      <CategoryFilter />
      <PriceFilter/>
      <BrandFilter />
      <RatingFilter />
      
    </div>
  );
};

export default Sidebar;
