import { Checkbox, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const CategoryFilter = () => {
  const [gender, setGender] = useState(null);

  const handleGenderClick = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
  };

  return (
    <div className="min-h-32 pt-8 pb-5 px-6 border-b-2">
      <Typography
        color="blue-gray"
        className="font-extrabold uppercase text-sm"
      >
        Categories
      </Typography>
      <div className="flex flex-col mt-3">
        <Checkbox
          onChange={handleGenderClick}
          value={"men"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          }
          color="pink"
          label={
            <div>
              <Typography color="blue-gray" className="font-bold">
                Men
              </Typography>
            </div>
          }
        />

        <Checkbox
          onChange={handleGenderClick}
          value={"women"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          }
          color="pink"
          label={
            <div>
              <Typography color="blue-gray" className="font-bold">
                Women
              </Typography>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
