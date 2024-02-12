import React from "react";
import { Link } from "react-router-dom";
import { RegisterHeroImage } from "../utilities/HomePageUtils";
import Button from "./Button";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: `url(${RegisterHeroImage})` }}
      className="h-[120vh] w-[100vw] bg-no-repeat bg-cover bg-center flex justify-end "
    >
      <div className="h-[50%] mt-28 w-1/3 mr-10 flex flex-col gap-6 pl-7 pt-10 rounded-2xl p-4 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <h1 className="mb-1 font-semibold leading-none tracking-wide text-gray-800 text-4xl ">
          Register
        </h1>
        <input
          type="text"
          className="bg-gray-50 font-medium border-gray-500 text-gray-900  block w-11/12 p-3 focus:outline-none rounded-md hover:shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)]  focus:border-gray-700 focus:border-2 border border-solid "
          placeholder="Username"
        />
        <input
          type="password"
          className="bg-gray-50 border-gray-500 text-gray-900  block w-11/12 p-3 focus:outline-none rounded-md hover:shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)] focus:border-gray-700 focus:border-2 border border-solid "
          placeholder="Enter a password with minimum 6 characters"
        />
        <input
          type="password"
          className="bg-gray-50 border-gray-500 text-gray-900  block w-11/12 p-3 focus:outline-none rounded-md hover:shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)] focus:border-gray-700 focus:border-2 border border-solid "
          placeholder="Confirm Password"
        />
        <div className="my-2 rounded-lg uppercase w-11/12 shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)]">
          <Button text={"Register Now"} route={"/login"} needArrow={false} />
        </div>
        <div className="text-lg font-medium leading-none tracking-wide text-gray-900  mt-2 ">
          Already have an Account?{" "}
          <span className="text-[red] font-extrabold cursor-pointer">
            <Link to="/login">Login Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
