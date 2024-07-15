import React from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  label,
  placeholder,
  value,
  name,
  onChange,
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-[14px] leading-[21px] text-[#FFFFFF99] uppercase">
        {label}
      </label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-[15px] pl-6 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-xl font-semibold text-[20px] leading-[30px] tracking-wider placeholder:text-white font-work-sans"
      />
    </div>
  );
};

export default TextInput;
