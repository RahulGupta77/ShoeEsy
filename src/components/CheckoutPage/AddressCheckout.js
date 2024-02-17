import React from "react";
import ButtonCheckout from "./ButtonCheckout";

const AddressCheckout = ({ handleNext }) => {
  return (
    <div>
      AddressCheckout
      <ButtonCheckout text="Continue" callBackFunction={handleNext} />
    </div>
  );
};

export default AddressCheckout;
