import React from "react";
import ButtonCheckout from "../ButtonCheckout";

const SelectAddress = ({ handleNext }) => {
  return (
    <div className="w-full  h-full">
      <div className="w-fit px-4">
        <ButtonCheckout text="Continue" callBackFunction={handleNext} />
      </div>
    </div>
  );
};

export default SelectAddress;
