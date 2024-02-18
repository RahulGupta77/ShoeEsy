import {
  BanknotesIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Step, Stepper, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ProtectedRoute from "../../miscellaneousPages/ProtectedRoute";
import AddressCheckout from "./AddressCheckout";
import BagCheckout from "./BagCheckout";
import PaymentCheckout from "./PaymentCheckout";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isLoggedIn = useSelector((store) => store.userDetails.isLoggedIn);

  if (!isLoggedIn) {
    return <ProtectedRoute />;
  }

  const handleNext = () => setActiveStep((cur) => cur + 1);

  return (
    <div className="w-full relative px-24 py-4 mt-5 flex flex-col items-center">
      <Stepper activeStep={activeStep} className="w-[50vw]">
        <Step className="cursor-pointer " onClick={() => setActiveStep(0)}>
          <ShoppingBagIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Bag
            </Typography>
          </div>
        </Step>

        <Step
          className="cursor-pointer "
          onClick={() => {
            if (activeStep !== 0) {
              setActiveStep(1);
            } else {
              toast.error("Place an order to continue!!");
            }
          }}
        >
          <PencilSquareIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Address
            </Typography>
          </div>
        </Step>

        <Step
          className="cursor-pointer "
          onClick={() => {
            if (activeStep === 0) {
              toast.error("Place an order to continue!!");
            } else if (activeStep === 1) {
              toast.error("Set Address to continue!!");
            }
          }}
        >
          <BanknotesIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Payment
            </Typography>
          </div>
        </Step>
      </Stepper>

      {activeStep === 0 && (
        <div className="mt-16 z-30 min-h-[70vh]  w-[70vw] text-black border-2">
          <BagCheckout handleNext={handleNext} />
        </div>
      )}

      {activeStep === 1 && (
        <div className="mt-16 z-30 min-h-[70vh]  w-[70vw] text-black border-2">
          <AddressCheckout handleNext={handleNext} />
        </div>
      )}

      {activeStep === 2 && (
        <div className="mt-16 z-30 min-h-[70vh]  w-[70vw] text-black border-2">
          <PaymentCheckout />
        </div>
      )}

      {/* <div className="mt-8 w-[50vw] flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default Checkout;
