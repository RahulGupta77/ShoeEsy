import { Rating, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const RatingFilter = () => {
  const ratings = [4, 3, 2, 1];
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="min-h-32 pt-8 pb-5 px-6 border-b-2">
      <Typography
        color="blue-gray"
        className="font-extrabold uppercase text-sm"
      >
        Customer Ratings
      </Typography>

      <div className="mt-5 flex flex-col">
        {ratings.map((rating) => (
          <div
            className={
              "flex my-1 items-center gap-1 cursor-pointer hover:text-[#eeba41] " +
              (selectedRating === rating ? "text-[#eeba41]" : "text-[#263228]")
            }
            key={rating + "up"}
            onClick={() => handleRatingClick(rating)}
          >
            <Rating value={rating} readonly />
            <div className="font-bold text-sm">& Up</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
