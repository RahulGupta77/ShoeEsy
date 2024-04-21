import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { SearchSuggestions } from "../../utility/brands";

const SearchBarSuggestions = ({
  setCurrentSearchedText,
}) => {
  return (
    <div className="w-[34%] h-[24rem] bg-white absolute top-16 left-[21rem] rounded-2xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <ul className="mt-2">
        {SearchSuggestions.map((list, index) => (
          <li
            onClick={() => {
              setCurrentSearchedText(list);
            }}
            key={list + "" + index}
            className="py-1 hover:bg-[#ed4f7a] mt-1 hover:text-white hover:font-bold tracking-wide  border-b text-sm px-4 flex gap-x-5 items-center cursor-pointer"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="text-base">{list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarSuggestions;
