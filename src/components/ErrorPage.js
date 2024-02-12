import React from "react";
import { ErrorPageImage } from "../utilities/HomePageUtils";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="h-[90vh] w-[100vw] relative">
        <div className="absolute z-50 left-7 top-[35%] flex flex-col items-center justify-center">
          <div className="font-extrabold text-5xl text-gray-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
            <p>Seems like you</p> <p>are lost! </p>
          </div>
          <div className="mt-8 w-fit h-fit text-xl">
            <Button
              text={"GET BACK TO SHOP"}
              route={"./products"}
              needArrow={true}
              arrowDirection={"left"}
            />
          </div>
        </div>
        <img
          src={ErrorPageImage}
          alt="you're-lost"
          className="h-full w-full object-cover brightness-75"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
