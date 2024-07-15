import { motion } from "framer-motion";
import ButtonArrowUpRight from "../../../../../../components/UI/common/form-controls/buttons/ButtonArrowUpRight";
import IndicatorSection from "./IndicatorSection";
import UpdateBar from "./UpdateBar";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const BitcoinBreakdown = () => {
  return (
    <motion.section
      variants={item}
      className="bg-[#141414B2] rounded-[32px] border border-[#FFFFFF1A] p-[30px] grow flex flex-col gap-[30px] col-span-2 lg:col-span-1"
    >
      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider">
            Bitcoin breakdown
          </h3>
          <p className="text-[#ffffffb1] font-work-sans font-medium text-[16px] leading-[22.4px] -tracking-wider">
            The 10 algorithms used to score Bitcoin
          </p>
        </div>
        <ButtonArrowUpRight />
      </div>
      <IndicatorSection />
      <UpdateBar />
    </motion.section>
  );
};

export default BitcoinBreakdown;
