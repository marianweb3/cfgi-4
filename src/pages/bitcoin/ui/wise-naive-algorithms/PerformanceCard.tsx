import React from "react";

import CustomBarChart from "../../../../components/UI/common/charts/CustomBarChart";
import { motion } from "framer-motion";

interface PerformanceCardProps {
  data: any[];
  title: string;
  progress: number;
  status: string;
  isLocked?: boolean;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  data,
  title,
  progress,
  status,
  isLocked = false,
}) => {
  return (
    <motion.div
      variants={item}
      className="bg-[#141414B2] rounded-[32px] border border-[#FFFFFF1A] p-[30px] grow flex flex-col gap-5 w-full relative"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] tracking-wider">
          {title}
        </h3>
        <button className="bg-[#1B1B1B] w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FFFFFF1A]">
          <img src="/assets/question-mark.svg" alt="Question Mark" />
        </button>
      </div>

      <div className="w-full h-[25px] bg-[#2F2F2F] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF532E] rounded-l-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex mx-auto border border-[#FF7F27] bg-[#FF7F2733] rounded-full px-[10px] py-[3px] font-bold text-[14px] leading-[19.6px] tracking-wider">
        <span className="text-[#FF7F27] font-bold text-[16px]">{status}</span>
      </div>

      <div className="relative">
        <div
          className={`relative ${isLocked ? "blur-[20px] bg-[#14141403]" : ""}`}
        >
          <CustomBarChart data={data} height={300} />
        </div>

        {isLocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div className="">
              <img src="/assets/lock.svg" alt="Lock" className="size-[44px]" />
            </div>
            <span className="text-[#ffffffb3] font-work-sans text-[24px] leading-[33.6px] font-medium -tracking-wider">
              Wise & Naive history
            </span>
            <button className="bg-[#FF532E] text-white max-w-[130px] w-full py-[13px] rounded-full">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PerformanceCard;
