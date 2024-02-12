import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 h-[10vh] bg-white flex items-center px-5 gap-x-40 justify-between shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="h-3/4 cursor-pointer ">
        <Link to="/">
          <img src="./logo.png" alt="brand-logo" className="h-full" />
        </Link>
      </div>

      <div className="w-2/6 border-2 h-1/2 border-gray-300 rounded-lg bg-white focus-within:border-gray-500 flex overflow-hidden ">
        <input
          className="w-11/12 h-full px-3 focus:outline-none bg-gray-50"
          placeholder="Search with Ese..."
        />
        <div className="w-1/12 bg-gray-200 p-1 cursor-pointer hover:bg-gray-300">
          <img
            src="./search-icon.png"
            alt="search-icon"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* <div className="flex gap-16 px-4">
        <Button text="Login" route="./login" needArrow={false} />
        <Button text="Register" route="./register" needArrow={false} />
      </div> */}

      <div className="flex items-center justify-center gap-x-10">
        <div className="h-7 w-7 relative flex flex-col justify-center mt-2 items-center cursor-pointer">
          <div className="h-5 w-5 bg-[#e4344c] rounded-full flex items-center justify-center font-extrabold text-white text-[12px] absolute -top-3 -right-2 animate-bounce">
            0
          </div>
          <img
            src="./bag-icon.png"
            alt="cart-items"
            className="h-full w-full object-cover"
          />
          <div className="text-[12px] mt-[2px] font-semibold">Bag</div>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <div className="h-10 w-10 rounded-full">
            <img
              src="./profile-icon.png"
              alt="user-profile"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-bold text-gray-800 text-[17px]">Monika</span>
        </div>

        <Button
          text="Logout"
          route="./"
          needArrow={true}
          arrowDirection={"right"}
        />

        {/* <Button
          text="Back to Explore"
          route="./"
          needArrow={true}
          arrowDirection={"left"}
        /> */}
      </div>
    </div>
  );
};

export default Header;
