import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabData } from "../../../../constants/bitcoin/tabData";

const TabsSection = () => {
  const [selectedTab, setSelectedTab] = useState("Breakdown");

  const renderContent = () => {
    const { paragraphs } = tabData[selectedTab];
    return (
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {paragraphs.map((para, index) => (
          <p
            key={index}
            className="text-white mb-[30px] font-work-sans font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[30px] tracking-wide"
          >
            {para}
          </p>
        ))}
        <div className="mt-6">
          <h4 className="text-white mb-5 font-work-sans font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-wide">
            Scores:
          </h4>
          <ul className="space-y-[10px] flex flex-col items-start">
            <li className="text-[#2D7A08] bg-[#2D7A0833] py-2 px-[14px] rounded-full border border-[#2D7A08]">
              0-19: EXTREME GREED
            </li>
            <li className="text-[#8CC208] bg-[#8CC20833] py-2 px-[14px] rounded-full border border-[#8CC208]">
              20-39: GREED
            </li>
            <li className="text-[#FFD72A] bg-[#FFD72A33] py-2 px-[14px] rounded-full border border-[#FFD72A]">
              40-59: NEUTRAL
            </li>
            <li className="text-[#FF7F27] bg-[#FEB33433] py-2 px-[14px] rounded-full border border-[#FF7F27]">
              60-79: FEAR
            </li>
            <li className="text-[#FF7F27] bg-[#FF7F2733] py-2 px-[14px] rounded-full border border-[#FF7F27]">
              80-100: EXTREME FEAR
            </li>
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#141414] rounded-[32px] border border-[#FFFFFF1A] p-[20px] sm:p-[25px] md:p-[30px] flex flex-col gap-[20px] sm:gap-[25px] md:gap-[30px]">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-work-sans font-medium text-[28px] sm:text-[34px] md:text-[40px] leading-[32px] sm:leading-[38px] md:leading-[44px] tracking-wider"
      >
        Bitcoin Wise & Naive Algorithm
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-[20px] sm:gap-[25px] md:gap-[30px]">
        <ul className="flex-shrink-0 max-w-full md:max-w-[209px] w-full md:w-auto bg-[#1B1B1B] p-[10px] rounded-[15px] overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal">
          {Object.keys(tabData).map((tab) => (
            <li
              key={tab}
              className={`inline-block md:block cursor-pointer px-[20px] sm:pl-[25px] md:pl-[30px] py-3 sm:py-4 md:py-5 rounded-[10px] ${
                selectedTab === tab
                  ? "bg-[#FF532E]"
                  : "bg-transparent hover:bg-[#FF532E]"
              } text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[30px] font-medium tracking-wide transition-colors duration-300`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.replace(/([A-Z])/g, " $1")}
            </li>
          ))}
        </ul>

        <div className="flex-grow p-4 sm:p-5 md:p-6">
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
