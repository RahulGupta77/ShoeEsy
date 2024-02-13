import React from "react";
import Button from "./Button";

const Cart = () => {
  return (
    <div className="flex pt-32 items-center flex-col min-h-[80vh]">
      <div className="h-40 w-36 mb-6">
        <img src="./emptyBag.png" alt="bag-items" className="h-full w-full" />
      </div>

      <div className="text-xl font-semibold mb-2">Hey, it feels so light!</div>
      <div className="text-sm mb-10">
        There is nothing in your bag, lets add some items
      </div>
      <Button
        text={"Add items from Shop"}
        route={"/products"}
        needArrow={true}
        arrowDirection={"left"}
      />
    </div>
  );
};

export default Cart;
