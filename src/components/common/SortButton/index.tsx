import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SortButtonProps {
  handleSort: () => void;
  label: string;
  order: boolean;
}

export const SortButton: React.FC<SortButtonProps> = ({
  handleSort,
  label,
  order,
}) => {
  return (
    <button
      className="flex items-center justify-between w-full py-3 px-3"
      onClick={handleSort}
    >
      <span>{label}</span>
      <IoIosArrowDown
        color="white"
        className={`transition-transform ${order ? "rotate-180" : null}`}
      />
    </button>
  );
};
