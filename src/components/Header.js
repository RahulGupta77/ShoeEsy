import React from "react";

const Header = () => {
  return (
    <div className="shadow-lg sticky top-0 z-50 h-[10vh] bg-gray-50 flex items-center px-5 gap-x-40">
      <div className="h-3/4 cursor-pointer ">
        <img src="./logo.png" alt="brand-logo" className="h-full" />
      </div>

      <div className="w-2/5 border-2 h-1/2 border-gray-300 rounded-lg bg-white focus-within:border-gray-500 flex overflow-hidden ">
        <input
          className="w-11/12 h-full px-3 focus:outline-none"
          placeholder="Search with Ease..."
        />
        <div className="w-1/12 bg-gray-200 p-1 cursor-pointer hover:bg-gray-300">
          <img
            src="./search-icon.png"
            alt="search-icon"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
