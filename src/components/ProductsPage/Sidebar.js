import React from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";

const Sidebar = () => {
  return (
    <div className="sticky top-10 ">
      <CategoryFilter />
      <BrandFilter />
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </div>
  );
};

export default Sidebar;
