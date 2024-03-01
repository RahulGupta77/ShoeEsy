import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";

import { MEN_BRANDS, WOMEN_BRANDS } from "../../utility/brands";
import CheckBoxLabel from "./CheckBoxLabel";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function BrandAccordian() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="text-sm font-bold"
          onClick={() => handleOpen(1)}
        >
          Men
        </AccordionHeader>
        <AccordionBody>
          <div className="mt-1 flex flex-col">
            {MEN_BRANDS.map((brand) => (
              <CheckBoxLabel key={brand} label={brand} />
            ))}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mt-3"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          className="text-sm font-bold"
          onClick={() => handleOpen(2)}
        >
          Women
        </AccordionHeader>
        <AccordionBody>
          <div className="className=mt-1 flex flex-col">
            {WOMEN_BRANDS.map((brand) => (
              <CheckBoxLabel key={brand} label={brand} />
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}
