import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const AISuggestion = () => {
  return (
    <motion.section
      variants={item}
      className="bg-[#141414B2] rounded-[32px] border border-[#FFFFFF1A] p-[30px] flex flex-col gap-[30px] col-span-2 xl:col-span-1"
    >
      <h3 className="text-white font-work-sans font-medium text-[32px] leading-[36px] md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[44px] tracking-wider">
        AI Suggestion
      </h3>
      <div className="outline-2 outline outline-[#FFFFFF1A] rounded-full p-[20px] md:p-[25px] lg:p-[30px] md:pl-[40px] lg:pl-[50px] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-white font-work-sans text-[30px] leading-[30px] font-medium md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px]">
            Suggestion
          </span>
          <span className="text-white font-work-sans text-[30px] leading-[30px] font-medium md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px]">
            Loading
          </span>
        </div>
        <CircularProgress percentage={50} />
      </div>
      <div className="w-full h-[2px] bg-[#383838]" />
      <div className="gap-6 flex items-center max-w-[320px] md:max-w-[350px] lg:max-w-[369px] mx-auto">
        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 shrink-0 bg-[#FF532E] rounded-full" />
        <span className="text-[#ff542eb3] text-[16px] leading-[20px] font-medium tracking-wider md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px]">
          Create a custom alert{" "}
          <span className="text-[#ffffffb1] text-[16px] leading-[20px] font-medium tracking-wider md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px]">
            to improve your AI suggestions
          </span>
        </span>
      </div>
    </motion.section>
  );
};

export default AISuggestion;
