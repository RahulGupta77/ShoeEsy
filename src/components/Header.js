import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 h-[10vh] bg-white flex items-center px-5 gap-x-40 justify-between shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="h-3/4 cursor-pointer ">
        <Link to="/">
          <img src="./logo.png" alt="brand-logo" className="h-full" />
        </Link>
      </div>

      <div className="w-2/6 border-2 h-1/2 border-[#ff6478] rounded-lg focus-within:border-[#ec455b] focus-within:shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)] flex overflow-hidden ">
        <input
          className="w-11/12 h-full px-3 focus:outline-none bg-[gray-50]"
          placeholder="Search with Ese..."
        />
        <div className="w-[10%] bg-[#ff6478]  p-1 cursor-pointer flex items-center justify-center hover:bg-[#de354c]">
          <img
            src="./search.png"
            alt="search-icon"
            className="h-5/6 w-5/6 object-contain"
          />
        </div>
      </div>

      {/* <div className="flex gap-16 px-4">
        <Button text="Login" route="./login" needArrow={false} />
        <Button text="Register" route="./register" needArrow={false} />
      </div> */}

      <div className="flex items-center justify-center gap-x-10">
        <NavLink to="/" exact={"true"}>
          {({ isActive }) => (
            <div className="h-7 w-7 relative flex flex-col justify-center mt-2 items-center cursor-pointer">
              <img
                src="./home.png"
                alt="home-page"
                className="h-full w-full object-cover"
              />
              <div className="text-[12px] mt-[2px] font-semibold">Home</div>
              {isActive && (
                <div className="border-b-[3px] border-[#e4344c] w-[120%]"></div>
              )}
            </div>
          )}
        </NavLink>

        <NavLink to="/products" exact={"true"}>
          {({ isActive }) => (
            <div className="h-7 w-7 relative flex flex-col justify-center mt-2 items-center cursor-pointer">
              <img
                src="./products.png"
                alt="product-page"
                className="h-full w-full object-cover"
              />
              <div className="text-[12px] mt-[1px] font-semibold">Shop</div>
              {isActive && (
                <div className="border-b-[3px] border-[#e4344c] w-[120%]"></div>
              )}
            </div>
          )}
        </NavLink>

        <NavLink to="/cart" exact={"true"}>
          {({ isActive }) => (
            <div className="h-7 w-7 relative flex flex-col justify-center mt-2 items-center cursor-pointer">
              {/* <div className="h-5 w-5 bg-[#e4344c] rounded-full flex items-center justify-center font-extrabold text-white text-[12px] absolute -top-3 -right-2 animate-bounce">
            0
          </div> */}
              <img
                src="./bag.png"
                alt="cart-items"
                className="h-full w-full object-cover"
              />
              <div className="text-[12px] mt-[2px] font-semibold">Bag</div>
              {isActive && (
                <div className="border-b-[3px] border-[#e4344c] w-[120%]"></div>
              )}
            </div>
          )}
        </NavLink>

        <NavLink to="/checkout" exact={"true"}>
          {({ isActive }) => (
            <div className="h-7 w-7 relative flex flex-col justify-center mt-2 items-center cursor-pointer">
              <img
                src="./checkout.png"
                alt="checkout-page"
                className="h-full w-full object-cover"
              />
              <div className="text-[12px] mt-[2px] font-semibold">Checkout</div>
              {isActive && (
                <div className="border-b-[3px] border-[#e4344c] w-[130%]"></div>
              )}
            </div>
          )}
        </NavLink>

        <div className="flex items-center justify-center gap-x-2">
          <div className="h-10 w-10 rounded-full">
            <img
              src="./profile.png"
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
