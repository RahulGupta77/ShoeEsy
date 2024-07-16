import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const AddAddressBtn = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button onClick={handleOpen} className="flex justify-center items-center">
        <div className="h-5 w-5 mr-1">
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="#ffffff" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
          </svg>
        </div>
        Add New Address
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              New Address
            </Typography>
            <div>
              <div>
                <Typography
                  className="mb-3 font-bold uppercase text-sm"
                  variant="h6"
                >
                  Contact Details
                </Typography>
                <div className="flex flex-col gap-y-3">
                  <Input label="Name*" size="lg" />
                  <Input type="number" label="Mobile No*" size="lg" />
                </div>
              </div>
              <div className="mt-5">
                <Typography
                  className="mb-3 font-bold uppercase text-sm"
                  variant="h6"
                >
                  Address
                </Typography>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <Input type="number" label="6 digit Pincode*" size="lg" />
                    {null && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-2 flex items-center gap-1 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Invalid pincode
                      </Typography>
                    )}
                  </div>
                  <Input
                    label="Address (House No, Building, Area)*"
                    size="lg"
                  />
                  <Input label="Locality / Town*" size="lg" />
                  <Input disabled label="City / District*" size="lg" />
                  <Input disabled label="State*" size="lg" />
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Add Address
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AddAddressBtn;
