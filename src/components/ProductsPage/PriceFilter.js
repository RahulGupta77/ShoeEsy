import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
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
  const [finalValue, setFinalValue] = useState([]);
  const [currentValue, setCurrentValue] = useState([500, 7000]);

  return (
    <div className="min-h-32 pt-8 pb-5 px-6 border-b-2">
      <Typography
        color="blue-gray"
        className="font-extrabold uppercase text-sm"
      >
        Price
      </Typography>

      <div className="mt-5 flex flex-col">
        <StyledSlider
          defaultValue={[500, 7000]}
          minDistance={1500}
          max={7000}
          min={500}
          value={currentValue}
          onAfterChange={(val) => setFinalValue(val)}
          onChange={(val) => setCurrentValue(val)}
          renderTrack={Track}
          renderThumb={Thumb}
        />
      </div>

      <div className="mt-3 flex px-2 py-2 items-center justify-between">
        <div>
          <span className="text-sm font-bold mr-2">Min</span>
          <input
            type="number"
            value={currentValue[0]}
            className="placeholder-gray-500 text-sm font-semibold  bg-green-200 w-16 rounded-lg px-3 py-1 outline-none focus:shadow-outline "
          />
        </div>
        <div>-</div>
        <div>
          <span className="text-sm font-bold mr-2">Max</span>
          <input
            type="number"
            value={currentValue[1]}
            className="placeholder-gray-500 text-sm font-semibold bg-green-200 w-16 rounded-lg px-3 py-1 outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
