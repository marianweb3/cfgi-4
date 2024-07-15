import { motion } from "framer-motion";
import ButtonArrowUpRight from "../../../../../../components/UI/common/form-controls/buttons/ButtonArrowUpRight";
import SegmentPie from "./SegmentPie";

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const WiseNaiveIndex = () => {
  return (
    <motion.section
      variants={item}
      className="p-[30px] rounded-[32px] bg-[#141414B2] border border-[#FFFFFF1A] xl:max-w-[520px] grow w-full flex flex-col gap-[30px] col-span-2 lg:col-span-1 justify-center"
    >
      <div className="w-full flex items-center justify-between">
        <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider">
          Wise & Naive Index
        </h3>
        <ButtonArrowUpRight />
      </div>
      <div className="bg-black border-2 border-[#FFFFFF1A] pb-10 rounded-3xl w-full flex flex-col items-center justify-center relative overflow-hidden h-full">
        <SegmentPie />
        <div className="mt-5 flex flex-col gap-1 relative z-10 items-center">
          <span className="font-bold font-neue text-[72px] leading-[60.48px] text-white">
            36
          </span>
          <img
            src="/assets/bitcoin/wise.svg"
            alt=""
            className="w-[59.24px] !h-5"
          />
        </div>
        <img
          src="/assets/bitcoin/green-ellipse.png"
          alt="Green Ellipse"
          className="absolute bottom-0 w-full"
        />
        <img
          src="/assets/bitcoin/Union.png"
          alt="Green Ellipse"
          className="absolute bottom-0 w-full"
        />
      </div>

      <div className="bg-[#2C2C2C66] border border-[#FFFFFF1A] rounded-3xl py-[10px] px-5 flex ">
        <div className="grow p-[10px] flex flex-col gap-[10px]">
          <span className="text-[#ffffff4d] font-work-sans font-medium text-[14px] leading-[19.6px] -tracking-wider">
            Currency
          </span>
          <div className="flex items-center gap-[10px]">
            <img
              src="/assets/bitcoin/bitcoin.svg"
              alt="Bitcoin Icon"
              className="size-5"
            />
            <span className="font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider text-white">
              Bitcoin
            </span>
          </div>
        </div>
        <div className="w-[2px] bg-[#383838]" />
        <div className="grow p-[10px] flex flex-col gap-[10px]">
          <span className="text-[#ffffff4d] font-work-sans font-medium text-[14px] leading-[19.6px] -tracking-wider">
            Time span
          </span>
          <DropDown />
        </div>
      </div>
    </motion.section>
  );
};

export default WiseNaiveIndex;

import { useState } from "react";

const options = ["15 min", "10 min", "25 min"];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center justify-between w-full text-[20px] leading-[28px] -tracking-wider max-w-[88px] font-medium text-white bg-[#1C1C1C]"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 bg-[#1C1C1C] border border-[#333] rounded-md shadow-lg">
          <ul
            className="py-1 text-[24px] text-white"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <li
                key={option}
                className="block px-4 py-2 cursor-pointer hover:bg-[#333]"
                onClick={() => selectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
