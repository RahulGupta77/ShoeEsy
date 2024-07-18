import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddAddressBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [validPincodeChecker, setValidPincodeChecker] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
  });

  const fetchPincodeDetails = async (name, value) => {
    try {
      const response = await fetch(
        "https://api.postalpincode.in/pincode/" + value
      );
      const data = await response.json();
      if (Array.isArray(data[0].PostOffice)) {
        if (data[0].PostOffice.length > 1) {
          setFormData((prevData) => ({
            ...prevData,
            city: data[0].PostOffice[0].Block,
            state: data[0].PostOffice[0].State,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            city: data[0].PostOffice[0].Name,
            state: data[0].PostOffice[0].State,
          }));
        }
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setValidPincodeChecker(false);
      }
    } catch (error) {
      setValidPincodeChecker(true);
      toast.error(error.message);
      return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pincode") {
      if (value.length > 6) return;

      setValidPincodeChecker(true);

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      setFormData((prevData) => ({
        ...prevData,
        city: "",
        state: "",
      }));

      if (value.length === 6) fetchPincodeDetails(name, value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addressSubmitHandler = () => {
    console.log(formData);
    setFormData({
      name: "",
      mobile: "",
      pincode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
    });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex justify-center items-center"
        color="pink"
      >
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
                  <Input
                    label="Name*"
                    size="lg"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    type="number"
                    label="Mobile No*"
                    size="lg"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
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
                    <Input
                      type="number"
                      label="6 digit Pincode*"
                      size="lg"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                    {!validPincodeChecker && (
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
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <Input
                    label="Locality / Town*"
                    size="lg"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                  />
                  <Input
                    disabled
                    label="City / District*"
                    size="lg"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <Input
                    disabled
                    label="State*"
                    size="lg"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              color="pink"
              onClick={() => {
                addressSubmitHandler();
                handleOpen();
              }}
              fullWidth
            >
              Add Address
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AddAddressBtn;
