import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button.js";
import { handleRouteChangeClick } from "../updateRouteInStore.js";
import Navlinks from "./Navlinks";

const Header = () => {
  const [showInternetStatus, setShowInternetStatus] = useState(false);
  const [showLogoutText, setShowLogoutText] = useState(false);
  const currentRoute = useSelector((store) => store.navbar.currentRoute);
  const currentRouteName = currentRoute.split("/").pop();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // is replaced with history in react-router v6

  return (
    <div className="sticky top-0 z-50 h-[85px] bg-white flex items-center justify-between px-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="h-3/4 w-[200px] cursor-pointer ">
        <Link to="/" onClick={() => handleRouteChangeClick("/", dispatch)}>
          <img src="./logo.png" alt="brand-logo" className="h-full" />
        </Link>
      </div>

      <div className="w-[35%] border-2 h-1/2 border-[#ed4f7a] rounded-lg focus-within:border-[#de354c] focus-within:shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)] flex overflow-hidden ">
        <input
          className="w-11/12 h-full px-3 focus:outline-none bg-slate-50"
          placeholder="Search with Ese..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRouteChangeClick("./products", dispatch);
              navigate("./products");
            }
          }}
        />
        <Link
          to="./products"
          onClick={() => handleRouteChangeClick("./products", dispatch)}
          className="w-[10%] bg-[#ed4f7a]  p-1 cursor-pointer flex items-center justify-center hover:bg-[#e3374e]"
        >
          <img
            src="./search.png"
            alt="search-icon"
            className="h-5/6 w-5/6 object-contain"
          />
        </Link>
      </div>

      {/* <div className="flex gap-16 px-4">
        <Button text="Login" route="./login" needArrow={false} />
        <Button text="Register" route="./register" needArrow={false} />
      </div> */}

      {!(currentRouteName === "register") &&
        !(currentRouteName === "login") && (
          <div className={"flex items-center justify-center gap-x-[45px]"}>
            <Navlinks route={"./"} text={"Home"} svg={true} />
            <Navlinks
              route={"./products"}
              text={"Shop"}
              image="./products.svg"
            />
            <Navlinks
              route={"./cart"}
              text={"Bag"}
              image="./bag.png"
              bubbleRequired={true}
            />
            <Navlinks
              route={"./checkout"}
              text={"Checkout"}
              image="./checkout.png"
            />

            <div className={"flex items-center justify-center gap-x-2 mr-1"}>
              <div className="h-10 w-10 rounded-full relative">
                <div
                  onMouseOver={() => setShowInternetStatus(true)}
                  onMouseOut={() => setShowInternetStatus(false)}
                  className="w-[14px] h-[14px] rounded-full cursor-pointer bg-green-500 border-2 border-white absolute -top-[2px] -right-[1px] "
                ></div>
                {showInternetStatus && (
                  <div className="absolute text-sm font-bold -right-[65px] tracking-wider rounded-bl-2xl rounded-r-2xl text-[#ed4f7a] top-[5px] border-2 border-[#ed4f7a] bg-white px-2 z-50">
                    online
                  </div>
                )}
                <img
                  src="./profile.png"
                  alt="user-profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                to={"./about"}
                className="flex items-center justify-center gap-x-3 relative"
              >
                <Link
                  to="./about"
                  className="font-bold text-gray-800 text-[17px]"
                  onClick={() => {
                    handleRouteChangeClick("./about", dispatch);
                  }}
                >
                  Monika
                </Link>
                <Link
                  to="./login"
                  onClick={() => {
                    handleRouteChangeClick("./login", dispatch);
                    setShowLogoutText(false);
                  }}
                  onMouseOver={() => setShowLogoutText(true)}
                  onMouseOut={() => setShowLogoutText(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                    />
                  </svg>
                </Link>
                {showLogoutText && (
                  <span className="absolute -bottom-[16px] left-0 font-bold bg-white text-[#ed4f7a] px-2 py-1  rounded-l-2xl tracking-wider border-2 border-[#ed4f7a] rounded-br-2xl text-sm z-50">
                    logout
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

      {(currentRouteName === "register" || currentRouteName === "login") && (
        <div className="w-[13rem]">
          <Button
            text="Back to Home"
            route="./"
            needArrow={true}
            arrowDirection={"left"}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
