import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="relative w-6 h-6 cursor-pointer">
      <input
        type="checkbox"
        className="appearance-none bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-sm focus:outline-none w-full h-full cursor-pointer"
        checked={checked}
        onChange={toggleCheckbox}
      />
      {checked && (
        <svg
          className="absolute inset-0 w-full h-full p-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={toggleCheckbox}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
