import React from "react";
import ButtonCheckout from "./ButtonCheckout";

const BagCheckout = ({ handleNext }) => {
  return (
    <div>
      BagCheckout
      <ButtonCheckout text="Place Order" callBackFunction={handleNext} />
    </div>
  );
};

export default BagCheckout;
