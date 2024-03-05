import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 6px;
`;

const StyledThumb = styled.div`
  font-size: 1px;
  height: 15px;
  line-height: 15px;
  width: 15px;
  text-align: center;
  background-color: #fff;
  margin-top: -5px;
  color: #fff;
  border-width: 1.5px;
  border-color: #ed4f7a;
  border-radius: 50%;
  cursor: grab;
  outline: none;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? "#ddd" : props.index === 1 ? "#ed4f7a" : "#ddd"};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const PriceFilter = () => {
  const [finalValue, setFinalValue] = useState(null);
  const [currentValue, setCurrentValue] = useState([500, 7000]);
  const [inputValue, setInputValue] = useState(["500", "7000"]);

  const handleInputPrice = (e, idx) => {
    const newArr = [...inputValue];
    if (idx === 0) {
      newArr[0] = e.target.value;
    } else {
      newArr[1] = e.target.value;
    }
    setInputValue(newArr);
  };

  const priceValidateHandler = (e, idx) => {
    const minVal = Number(inputValue[0]);
    const maxVal = Number(inputValue[1]);

    if (idx === 0) {
      let flag = false;
      if (minVal < 500) {
        toast.error("Minimum value cannot be less than 500₹");
        flag = true;
      } else if (minVal > 7000) {
        toast.error("Invalid minimum value!!");
        flag = true;
      } else if (maxVal - minVal < 1500) {
        toast.error("Maintain minimum difference of 1500₹");
        flag = true;
      }
      if (flag) {
        setInputValue((prev) => {
          const res = [...prev];
          res[0] = currentValue[0] + "";
          return res;
        });
        return;
      }
      setCurrentValue((prev) => {
        const res = [...prev];
        res[0] = minVal;
        return res;
      });
    } else {
      let flag = false;
      if (maxVal > 7000) {
        toast.error("Maximum value cannot exceed 7000₹");
        flag = true;
      } else if (maxVal < 500) {
        toast.error("Invalid maximum value!!");
        flag = true;
      } else if (maxVal - minVal < 1500) {
        toast.error("Maintain minimum difference of 1500₹");
        flag = true;
      }
      if (flag) {
        setInputValue((prev) => {
          const res = [...prev];
          res[1] = currentValue[1] + "";
          return res;
        });
        return;
      }

      setCurrentValue((prev) => {
        const res = [...prev];
        res[1] = maxVal;
        return res;
      });
    }

    if (minVal === 500 && maxVal === 7000) {
      setFinalValue(null);
      return;
    }
    setFinalValue([minVal, maxVal]);
  };

  const stringi = JSON.stringify(finalValue);

  useEffect(() => {
    if (finalValue) console.log("filtering");
  }, [stringi, finalValue]);

  const resetPriceValues = () => {
    setFinalValue(null);
    setCurrentValue([500, 7000]);
    setInputValue(["500", "7000"]);
  };

  return (
    <div className="min-h-32 pt-8 pb-6 px-4 border-b-2">
      <div className="flex justify-between">
        <Typography
          color="blue-gray"
          className="font-extrabold uppercase text-sm px-2"
        >
          Price
        </Typography>
        {finalValue && (
          <Typography
            onClick={() => {
              resetPriceValues();
            }}
            className="text-sm text-[#ed4f7a] px-2 uppercase font-extrabold cursor-pointer "
          >
            Clear
          </Typography>
        )}
      </div>

      <div className="mt-8 flex flex-col">
        <StyledSlider
          defaultValue={[500, 7000]}
          minDistance={1500}
          max={7000}
          min={500}
          value={[currentValue[0], currentValue[1]]}
          onAfterChange={(val) => {
            if (val[0] === 500 && val[1] === 7000) {
              setFinalValue(null);
              return;
            }
            setFinalValue(val);
          }}
          onChange={(val) => {
            setCurrentValue(val);
            setInputValue([val[0] + "", val[1] + ""]);
          }}
          renderTrack={Track}
          renderThumb={Thumb}
        />
      </div>

      <div className="mt-6 flex py-2 items-center text-[#263238] justify-between">
        <div>
          <span className="text-sm font-bold mr-2 ">Min ₹</span>
          <input
            type="number"
            value={inputValue[0]}
            className="border-2 text-sm font-semibold  w-16 rounded-lg px-3 py-1 focus:shadow-outline focus:outline-pink-300"
            onChange={(e) => handleInputPrice(e, 0)}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.target.blur();
            }}
            onBlur={(e) => priceValidateHandler(e, 0)}
          />
        </div>
        <div>-</div>
        <div>
          <span className="text-sm font-bold mr-2 ">Max ₹</span>
          <input
            type="number"
            value={inputValue[1]}
            className="border-2 text-sm font-semibold  w-16 rounded-lg px-3 py-1 focus:shadow-outline focus:outline-pink-300"
            onChange={(e) => handleInputPrice(e, 1)}
            onBlur={(e) => priceValidateHandler(e, 1)}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.target.blur();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
