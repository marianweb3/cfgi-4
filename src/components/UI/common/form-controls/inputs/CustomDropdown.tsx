import { useState } from "react";

interface CustomDropdownProps {
  label?: string;
  options: string[];
  value: string;
  className?: string;
  onChange: (value: string) => void;
}

const CustomDropdown = ({
  label,
  options,
  value,
  onChange,
  className,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {label ? (
        <label className="block mb-2 font-semibold text-gray-400">
          {label}
        </label>
      ) : null}
      <div
        className={`py-[15px] px-6 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-xl font-light text-[20px] leading-[30px] tracking-wider text-[#FFFFFF99] cursor-pointer flex justify-between items-center ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select a Country"}
        <svg
          className={`fill-current h-4 w-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full dropdown-gradient border border-[#323232] rounded-xl backdrop-blur py-[6px] px-[10px] flex flex-col gap-[2px]">
          {options.map((option) => (
            <li
              key={option}
              className={`p-5 cursor-pointer hover:bg-[#24232373] border border-transparent hover:border-[#FFFFFF0A] hover:backdrop-blur-sm rounded-xl ${
                option === value
                  ? "bg-[#24232373] border border-[#FFFFFF0A] text-white backdrop-blur-sm"
                  : "text-[#ffffff7f]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
