import React from "react";

interface NumberInputProps {
  label: string;
  placeholder: string;
  value?: number;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({
  label,
  placeholder,
  value,
  name,
  onChange,
  type = "text",
}: NumberInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-[14px] leading-[21px] text-[#FFFFFF99] uppercase">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        pattern="\d*"
        className="py-[15px] pl-6 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-xl font-semibold text-[20px] leading-[30px] tracking-wider placeholder:text-white font-work-sans"
      />
    </div>
  );
};

export default NumberInput;
