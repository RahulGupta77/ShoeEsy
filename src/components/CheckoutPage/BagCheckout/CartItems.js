import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  getCouponsValue,
  getDiscountValue,
  getFreeDeliveryValue,
} from "../../../utility/CartMethods";
import ButtonCheckout from "../ButtonCheckout";

const CartItems = ({
  handleNext,
  cartItemsSize,
  totalCartValue,
  cartItems,
  setTotalCartValue,
}) => {
  const discountValue = getDiscountValue(totalCartValue);
  const couponsValue = getCouponsValue(totalCartValue);
  const freeDeliveryValue = getFreeDeliveryValue(totalCartValue);
  const finalTotalCartValue =
    totalCartValue - (discountValue + couponsValue + freeDeliveryValue);
  console.log(cartItems);

  const incrementItemQuantity = (qty) => {

  };

  const decrementItemQuantity = (qty) => {
    
  };

  return (
    <div className="grid grid-cols-10">
      <div className="col-span-6 bg-white py-6 px-4 mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="w-full h-40 bg-red-50 ">
          {Boolean(cartItems.length) ? (
            <div className="h-full flex gap-x-5">
              <div className="h-full w-[20%] ">
                <img
                  className="h-full w-full object-cover"
                  src={cartItems[0].image}
                  alt={cartItems[0].name}
                />
              </div>
              <div>
                <p className="font-bold text-md text-[#282c3f]">
                  {cartItems[0].brand}
                </p>
                <p className="text-md text-[#282c3f]">{cartItems[0].name}</p>
                <p>{cartItems[0].category}</p>
                <div className="flex gap-x-2">
                  <button
                    onClick={() => incrementItemQuantity(cartItems[0].qty)}
                  >
                    +
                  </button>
                  <div>{cartItems[0].qty}</div>
                  <button
                    onClick={() => decrementItemQuantity(cartItems[0].qty)}
                  >
                    -
                  </button>
                </div>
                <p>{cartItems[0].cost}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-span-4 mx-5">
        <div className="bg-white py-4 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <div className="text-lg font-semibold text-gray-700 uppercase font-serif tracking-wide">
            Price Details
          </div>
          <hr className="h-px border-0 bg-gray-300 my-2" />
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
              <div>
                Price ({cartItemsSize} {cartItemsSize === 1 ? "item" : "items"})
              </div>
              <div className="font-semibold">₹{totalCartValue}</div>
            </div>
            <div className="flex justify-between">
              <div>Discount</div>
              <div className="text-[#388e3c]">
                - ₹{totalCartValue ? discountValue : null}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Coupons for you</div>
              <div className="text-[#388e3c]">
                - ₹{totalCartValue ? couponsValue : null}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Delivery Charges</div>
              <div className="text-[#388e3c] flex gap-x-2">
                <s className="text-[#717478]">
                  ₹{totalCartValue ? freeDeliveryValue : null}
                </s>
                <span>Free</span>
              </div>
            </div>
          </div>
          <hr className="h-px border-0 bg-gray-300 my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <div>Total Amount</div>
            <div>₹{totalCartValue ? finalTotalCartValue : null}</div>
          </div>
          <hr className="h-px border-0 bg-gray-300 mt-4 mb-2 " />
          <div className="text-[#388e3c] font-semibold text-md">
            You will save ₹
            {totalCartValue
              ? freeDeliveryValue + couponsValue + discountValue
              : null}{" "}
            on this order
          </div>
        </div>

        <div className="mt-7">
          <ButtonCheckout text="Place Order" callBackFunction={handleNext} />
        </div>

        <div className="flex items-center py-2 px-4 text-gray-600 gap-x-2 mt-2">
          <div className="h-11 w-11 ">
            <ShieldCheckIcon className="h-full w-full" />
          </div>
          <p className="font-bold text-sm">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
