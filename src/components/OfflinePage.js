import React from "react";
import { OfflinePageImage } from "../utility/Image_Links";

const OfflinePage = ({ onlineStatus }) => {
  return (
    <div
      className={
        "h-[90vh] w-[100vw] relative " + (onlineStatus ? "hidden" : "block")
      }
    >
      <div className="absolute z-50 left-[5%] top-[35%] flex flex-col items-center justify-center">
        <div className="font-extrabold text-6xl text-gray-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
          <p>Oops!! Looks like </p> <p>you are offline </p>
        </div>
      </div>
      <img
        src={OfflinePageImage}
        alt="you're offline"
        className="h-full w-full object-cover brightness-75"
      />
    </div>
  );
};

export default OfflinePage;
