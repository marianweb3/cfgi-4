import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";

const Tokenomics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section className="max-w-[1440px] mx-auto w-full flex flex-col gap-20 py-20 lg:my-[200px] px-4 2xl:px-0">
      <SectionHeader sectionNumber={3} title={"Tokenomics"} />
      <div ref={ref} className="flex flex-wrap gap-5">
        <motion.div
          className=" grow min-h-auto 2xl:min-h-[480px] w-full bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] relative flex items-center justify-center overflow-hidden px-4 lg:px-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="grid grid-cols-2 max-w-[1224px] w-full xl:flex flex-wrap gap-2 lg:gap-4 justify-center col-span-2 border-2 border-[#FFFFFF1A] backdrop-blur-lg mb-[18px] sm:mb-0 mt-[150px] sm:mt-20 bg-[#FFFFFF1A] py-4 px-2 lg:px-[18px] rounded-[32px] xl:rounded-full relative z-10"
            variants={containerVariants}
          >
            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center grow md:h-[200px] py-2 lg:py-0"
              variants={itemVariants}
            >
              <span className="font-medium font-neue text-[24px] lg:text-[44px] leading-[24px] lg:leading-[44px] tracking-wider text-white">
                10 B
              </span>{" "}
              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                Total Supply
              </span>
            </motion.div>

            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center grow md:h-[200px] py-2 lg:py-0"
              variants={itemVariants}
            >
              <span className="font-medium font-neue text-[24px] lg:text-[44px] leading-[24px] lg:leading-[44px] tracking-wider text-white">
                1B
              </span>
              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                Burnt Supply
              </span>
            </motion.div>

            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center grow md:h-[200px] py-2 lg:py-0"
              variants={itemVariants}
            >
              <span className="font-medium font-neue text-[24px] lg:text-[44px] leading-[24px] lg:leading-[44px] tracking-wider text-white">
                0B
              </span>
              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                Staked Supply
              </span>
            </motion.div>
            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center grow md:h-[200px] py-2 lg:py-0 px-2"
              variants={itemVariants}
            >
              <span className="font-medium font-neue text-[24px] lg:text-[44px] leading-[24px] lg:leading-[44px] tracking-wider text-white">
                9B
              </span>
              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                Circulating Supply
              </span>
            </motion.div>
          </motion.div>

          <motion.img
            src="/assets/preai/wallpaper/top-ellipse.png"
            alt=""
            className="absolute transform -translate-x-1/2 top-0"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/tokenomics/bottom-left-ellipse.png"
            alt=""
            className="absolute left-0 bottom-0"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/tokenomics/top-right-ellipse.png"
            alt=""
            className="absolute right-0 top-0"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/tokenomics/supply.png"
            alt="staking"
            className="absolute top-[-5%] transform -translate-x-1/2 z-[3]"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
