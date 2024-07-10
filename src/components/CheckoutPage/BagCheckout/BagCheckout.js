import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";


const BagCheckout = ({
  handleNext,
  cartItemsSize,
  totalCartValue,
  cartItems,
  setTotalCartValue,
}) => {
  return (
    <div className="mt-5 mx-5 ">
      {Boolean(cartItemsSize) ? (
        <CartItems
          handleNext={handleNext}
          cartItemsSize={cartItemsSize}
          totalCartValue={totalCartValue}
          cartItems={cartItems}
          setTotalCartValue={setTotalCartValue}
        />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default BagCheckout;
