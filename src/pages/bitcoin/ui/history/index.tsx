import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CustomBarChart from "../../../../components/UI/common/charts/CustomBarChart";
import CustomLineChart from "../../../../components/UI/common/charts/CustomLineChart";
import { barData, lineData } from "../../../../constants/bitcoin/chartData";

const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const chartVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

const History = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="p-[20px] md:p-[25px] lg:p-[30px] rounded-[32px] bg-[#141414B2] border border-[#FFFFFF1A]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headerVariants}
        className="flex items-center flex-row justify-between md:items-center mb-10"
      >
        <h3 className="text-white font-work-sans font-medium text-[28px] md:text-[34px] lg:text-[40px] leading-[32px] md:leading-[38px] lg:leading-[44px] tracking-wider mb-4 md:mb-0">
          History
        </h3>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="bg-orangeBg border-2 border-transparent hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg w-full text-white px-6 py-2 rounded-full font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] uppercase tracking-tighter">
            Create Alert
          </button>
          <div className="bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-full py-2 md:py-3 px-4 md:px-6 flex gap-[10px] md:gap-[14px] shrink-0">
            <span className="font-work-sans font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-tighter text-white self-center">
              Time
            </span>
            <div className="w-[1px] md:w-[2px] bg-[#323232]" />
            <span className="font-work-sans font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-tighter text-[#323232]">
              16 hours
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={chartVariants}
      >
        <CustomBarChart data={barData} height={500} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headerVariants}
        className="flex flex-col md:flex-row justify-between items-start md:items-center my-10"
      >
        <h3 className="text-white font-work-sans font-medium text-[28px] md:text-[34px] lg:text-[40px] leading-[32px] md:leading-[38px] lg:leading-[44px] tracking-wider mb-4 md:mb-0">
          Price
        </h3>

        <div className="bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-full py-2 md:py-3 px-4 md:px-6 flex gap-[10px] md:gap-[14px] shrink-0">
          <span className="font-work-sans font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-tighter text-white self-center">
            LAST UPDATED
          </span>
          <div className="w-[1px] md:w-[2px] bg-[#323232]" />
          <span className="font-work-sans font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-tighter text-[#323232]">
            56,762.50$
          </span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={chartVariants}
      >
        <CustomLineChart data={lineData} height={437} />
      </motion.div>
    </section>
  );
};

export default History;
