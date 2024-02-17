import {
  BanknotesIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import BagCheckout from "./BagCheckout";
import AddressCheckout from "./AddressCheckout";
import PaymentCheckout from "./PaymentCheckout";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full relative px-24 py-4 mt-5 flex flex-col items-center">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className="w-[50vw]"
      >
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

        <Step className="cursor-pointer " onClick={() => setActiveStep(1)}>
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

        <Step className="cursor-pointer " onClick={() => setActiveStep(2)}>
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
        <div className="mt-16 z-30 min-h-[70vh]  w-[70vw] text-black bg-green-300">
          <BagCheckout handleNext={handleNext} />
        </div>
      )}

      {activeStep === 1 && (
        <div className="mt-16 z-30 min-h-[70vh]  w-[70vw] text-black bg-green-300">
          <AddressCheckout handleNext={handleNext} />
        </div>
      )}

      {activeStep === 2 && (
        <div className="mt-16 z-30 min-h-[70vh]  w-[70vw] text-black bg-green-300">
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
