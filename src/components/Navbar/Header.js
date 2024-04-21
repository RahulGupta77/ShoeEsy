import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../customHooks/useOnlineStatus.js";
import { fetchCart } from "../../utility/CartMethods.js";
import Button from "../Button.js";
import { clearAll } from "../redux/filterSlice.js";
import {
  toggleLoginStatus,
  updateCartItemsSize,
  updateUserDetails,
} from "../redux/userSlice.js";
import { handleRouteChangeClick } from "../updateRouteInStore.js";
import Navlinks from "./Navlinks";
import SearchBarSuggestions from "./SearchBarSuggestions.js";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // is replaced with history in react-router v6
  const [showInternetStatus, setShowInternetStatus] = useState(false);
  const [showLogoutText, setShowLogoutText] = useState(false);
  const [currentSearchedText, setCurrentSearchedText] = useState("");
  const [showSearchedSuggestions, setShowSearchedSuggestions] = useState(false);
  const isLoggedIn = useSelector((store) => store.userDetails.isLoggedIn);
  const { username, token } = useSelector(
    (store) => store.userDetails.userInfo
  );
  const currentRoute = useSelector((store) => store.navigation.currentRoute);
  const cartItemsSize = useSelector((store) => store.userDetails.cartItemsSize);
  const currentRouteName = currentRoute.split("/").pop();
  const onlineStatus = useOnlineStatus();

  const logoutHandler = () => {
    handleRouteChangeClick("./login", dispatch);
    dispatch(
      updateUserDetails({
        username: "",
        token: "",
        balance: 0,
      })
    );
    dispatch(toggleLoginStatus(false));
    dispatch(clearAll());
    dispatch(updateCartItemsSize(0));
    setShowLogoutText(false);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const data = await fetchCart(token);
      if (data) {
        dispatch(updateCartItemsSize(data.length));
      }
    };

    fetchCartItems();
  }, [dispatch, token]);

  return (
    <div className="sticky top-0 z-50 h-[85px] bg-[rgba(255,255,255,0.8)]  backdrop-blur-2xl flex items-center justify-between px-5 shadow-md">
      <div className="h-3/4 w-[200px] cursor-pointer ">
        <Link to="/" onClick={() => handleRouteChangeClick("/", dispatch)}>
          <img src="./logo.png" alt="brand-logo" className="h-full" />
        </Link>
      </div>

      <div className="w-[35%] relative border-2 h-1/2 border-[#ed4f7a] rounded-lg flex overflow-hidden ">
        <input
          className="w-11/12 h-full px-3 focus:outline-none bg-slate-50"
          placeholder="Search with Ese..."
          value={currentSearchedText}
          onChange={(e) => setCurrentSearchedText(e.target.value)}
          onBlur={() => setTimeout(() => setShowSearchedSuggestions(false), 0)}
          onFocus={() => setShowSearchedSuggestions(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (currentRouteName !== "products") {
                handleRouteChangeClick("./products", dispatch);
                navigate("./products");
              }
              setShowSearchedSuggestions(false);
            }
          }}
        />
        <div
          onClick={() => {
            setCurrentSearchedText("");
            setShowSearchedSuggestions(false);
          }}
          className="absolute  right-[3.5rem] top-[2px] text-[#de354c] p-1 hover:bg-pink-50 rounded-full cursor-pointer"
        >
          {currentSearchedText && <XMarkIcon className="h-7 w-7 " />}
        </div>
        <Link
          to="./products"
          onClick={() => {
            if (currentRouteName !== "products") {
              handleRouteChangeClick("./products", dispatch);
              navigate("./products");
            }
            setShowSearchedSuggestions(false);
          }}
          className="w-[10%] bg-[#ed4f7a]  p-1 cursor-pointer flex items-center justify-center hover:bg-[#e3374e]"
        >
          <img
            src="./search.png"
            alt="search-icon"
            className="h-5/6 w-5/6 object-contain"
          />
        </Link>
      </div>

      {currentSearchedText.trim() && showSearchedSuggestions && (
        <SearchBarSuggestions setCurrentSearchedText={setCurrentSearchedText} />
      )}

      {!(currentRouteName === "register") &&
        !(currentRouteName === "login") && (
          <div className={"flex items-center justify-center gap-x-[45px]"}>
            <Navlinks route={"./"} text={"Home"} svg={true} />
            <Navlinks
              route={"./products"}
              text={"Shop"}
              image="./products.svg"
            />
            {isLoggedIn && (
              <>
                <Navlinks
                  route={"./cart"}
                  text={"Bag"}
                  image="./bag.png"
                  bubbleRequired={true}
                  cartItemsSize={cartItemsSize}
                />
                <Navlinks
                  route={"./checkout"}
                  text={"Checkout"}
                  image="./checkout.png"
                />

                <div
                  className={"flex items-center justify-center gap-x-2 mr-1"}
                >
                  <div className="h-10 w-10 rounded-full relative mr-1">
                    <div
                      onMouseOver={() => setShowInternetStatus(true)}
                      onMouseOut={() => setShowInternetStatus(false)}
                      className={
                        "w-[14px] h-[14px] rounded-full cursor-pointer border-2 border-white absolute -top-[2px] -right-[1px]  " +
                        (onlineStatus ? "bg-green-500" : "bg-red-500")
                      }
                    ></div>
                    {showInternetStatus && (
                      <div className="absolute text-sm font-bold -right-[65px] tracking-wider rounded-bl-2xl rounded-r-2xl text-[#ed4f7a] top-[5px] border-2 border-[#ed4f7a] bg-white px-2 z-50">
                        {onlineStatus ? "online" : "offline"}
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
                      className="font-bold text-gray-800 text-[17px] tracking-wider"
                      onClick={() => {
                        handleRouteChangeClick("./about", dispatch);
                      }}
                    >
                      {username}
                    </Link>
                    <div className="relative">
                      <Link
                        to="./login"
                        onClick={() => {
                          logoutHandler();
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
                        <span className="absolute -left-[72px] -top-2 font-bold bg-white text-[#ed4f7a] px-2 py-1  rounded-l-xl tracking-wider border-2 border-[#ed4f7a] rounded-tr-xl text-sm z-50">
                          logout
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            {!isLoggedIn && (
              <>
                <div className="w-28">
                  <Button
                    text="Login"
                    route="./login"
                    needArrow={true}
                    arrowDirection={"right"}
                  />
                </div>
                <div className="w-32">
                  <Button
                    text="Register"
                    route="./register"
                    needArrow={true}
                    arrowDirection={"right"}
                  />
                </div>
              </>
            )}
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
