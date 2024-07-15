import React, { useState } from "react";
import { FaExclamationCircle, FaDollarSign } from "react-icons/fa";
import CustomDropdown from "../inputs/CustomDropdown";

const PriceAlert = () => {
  const [price, setPrice] = useState("59,105");
  const [condition, setCondition] = useState("Lower than");

  return (
    <div className="bg-[#FFFFFF0F] border-2 border-[#FFFFFF1A] rounded-lg p-6 max-w-[900px] mx-auto mt-10">
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center text-[#FF532E] text-center">
          <FaExclamationCircle className="mr-2" size={30} />
          <span className="font-medium text-[16px] leading-[24px]">
            Only available starting from Unlimited plan
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 ">
        <div className="flex items-center text-white text-[24px] font-bold">
          <FaDollarSign className="mr-2" />
          Price
        </div>
        <div className="flex items-center gap-2">
          <CustomDropdown
            options={["Lower than", "Higher than"]}
            value={condition}
            onChange={setCondition}
            className="!bg-[#141414]"
          />
          <div className="relative w-full flex">
            <input
              type="text"
              className="py-[15px] text-left px-6 bg-[#141414] border-2 border-[#FFFFFF1A] outline-none rounded-l-xl font-light text-[20px] leading-[30px] tracking-wider text-[#FFFFFF99] w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="bg-[#1B1B1B] border-2 border-[#FFFFFF1A] border-l-0 rounded-r-xl flex items-center justify-center px-2">
              <FaDollarSign className=" text-[#FFFFFF99]" size={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[#fff] mt-4 text-[16px] leading-[24px]">
        Receive the alert only when the token reaches the chosen price
      </div>
    </div>
  );
};

export default PriceAlert;
