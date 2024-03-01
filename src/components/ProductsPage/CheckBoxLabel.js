import { Checkbox, Typography } from "@material-tailwind/react";
import React from "react";

const CheckBoxLabel = ({ label, method }) => {
  return (
    <Checkbox
      id={label}
      value={label}
      onChange={method}
      color="pink"
      label={
        <div>
          <Typography color="blue-gray" className="font-bold text-sm">
            {label}
          </Typography>
        </div>
      }
      ripple={true}
    />
  );
};

export default CheckBoxLabel;
