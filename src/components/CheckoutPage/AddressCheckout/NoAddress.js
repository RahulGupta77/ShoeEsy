import React from "react";
import AddAddressBtn from "./AddAddressBtn";

const NoAddress = () => {
  return (
    <div className="flex pt-8  justify-center flex-col items-center gap-y-6">
      <div className="h-24 w-24 text-blue-gray-800">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96M117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2l-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5zM128 352a32 32 0 1 0-64 0a32 32 0 1 0 64 0m288-224a32 32 0 1 0 0-64a32 32 0 1 0 0 64" />
        </svg>
      </div>
      <h3 className="text-blue-gray-900 font-semibold text-3xl mt-2">
        No Address Found!!
      </h3>
      <AddAddressBtn/>
    </div>
  );
};

export default NoAddress;
