import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full px-5 border-l-4 border-lightGreen flex flex-col">
      <div className="w-full border border-white rounded-md flex items-center px-3 py-2 bg-black text-white gap-3">
        <FaSearch />
        <input
          name={name}
          className="bg-transparent focus:outline-none w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
