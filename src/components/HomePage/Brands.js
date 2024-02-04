import React from "react";
import TitleBanner from "./TitleBanner";

const Brands = () => {
  return (
    <div className="mt-[5rem] flex flex-col items-center justify-center">
      <div className="w-4/5 text-center">
        <TitleBanner title="MEN'S BRANDS" />
        <div className="mt-12 w-full h-72 bg-gray-500 p-4 flex gap-x-5">
          <div className="h-full w-1/2 bg-slate-300"></div>
          <div className="h-full w-1/2 bg-slate-300"></div>
        </div>
      </div>
      <div className="w-4/5 mt-[5rem] text-center">
        <TitleBanner title="WOMEN'S BRANDS" />
        <div className="mt-12 w-full h-72 bg-gray-500 p-4 flex gap-x-5">
          <div className="h-full w-1/2 bg-slate-300"></div>
          <div className="h-full w-1/2 bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
