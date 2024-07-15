import React, { ChangeEvent } from "react";

interface ToggleButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <label className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer text-white">
      <input
        type="radio"
        className="appearance-none h-4 w-4 border-2 border-[#323232] bg-[#1B1B1B] rounded-full checked:bg-[#FF532E]"
        checked={isActive}
        onChange={onClick}
      />
      {icon}
      <span
        className={`text-[20px] ${isActive ? "text-white" : "text-gray-400"}`}
      >
        {label}
      </span>
    </label>
  );
};

export default ToggleButton;
