import React from "react";

const BrandComponent = ({ image, link }) => {
  return (
    <div className="h-[32vh] w-[38vw] bg-gray-300 flex justify-center items-center relative">
      <a
        href="#_"
        className="px-5 py-2.5 absolute top-3 left-4 rounded group  text-white font-semibold inline-block cursor-pointer"
      >
        <span
          className={
            "absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-[#e4344c]"
          }
        ></span>
        <span
          className={
            "h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-50 bg-[#e4344c]"
          }
        ></span>
        <span
          className={
            "absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl  filter group-active:opacity-0 group-hover:blur-sm bg-[#e4344c]"
          }
        ></span>
        <span
          className={
            "absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-[#e4344c]"
          }
        ></span>
        <span className="relative flex items-center justify-center uppercase font-semibold tracking-wider">
          Shop Now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </span>
      </a>

      <img
        src={image}
        alt="shoe-brand"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default BrandComponent;
