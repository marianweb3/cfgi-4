import { motion } from "framer-motion";
import { GraphIcon } from "../../../../components/UI/SVGIcons";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full min-h-[600px] lg:min-h-[1080px] relative flex pt-20 lg:pt-0 lg:items-center px-4 lg:px-0">
      <div className="max-w-[1600px] mx-auto lg:w-full h-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[#FF532E] text-[40px] md:text-[144px] font-bold font-neue leading-[40px] md:leading-[144px]"
          >
            $PREAI
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-white text-[40px] md:text-[144px] font-bold font-neue leading-[40px] md:leading-[144px] flex items-center gap-1"
          >
            <GraphIcon className="lg:size-[90px] size-[40px]" /> Staking
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-[45px] flex flex-col gap-6 max-w-[744px]"
          >
            <p className="font-neue font-medium text-[20px] md:text-[40px] leading-[20px] md:leading-[40px] -tracking-wider text-white">
              /3 products
              <br />
              with 1 easy rewards system
            </p>
            <p className="font-neue font-thin text-[16px] md:text-[24px] leading-[22px] md:leading-[33.6px] -tracking-wider text-[#FFFFFFB2]">
              Imagine receiving revenue from an improved Safeguard, an improved
              Fear & Greed Index & new age Hedge Funds
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-20 flex gap-4 lg:flex-row flex-col"
          >
            <button className="md:max-w-[300px] w-full bg-[#FF532E] hover:bg-transparent border-2 border-[#FF532E] text-white hover:text-[#FF532E] transition-all duration-300 ease-in-out rounded-full px-4 md:px-6 py-2 md:py-3 text-[20px] md:text-[30px] leading-[30px] md:leading-[45px] font-medium font-work-sans flex items-center justify-center">
              Connect Wallet
            </button>
            <button className="md:max-w-[300px] w-full backdrop-blur-lg bg-[#FFFFFF0D] border-2 border-[#FFFFFF1A] text-white hover:border-[#FF532E] hover:text-[#FF532E] transition-all duration-300 ease-in-out rounded-full px-4 md:px-6 py-2 md:py-3 text-[20px] md:text-[30px] leading-[30px] md:leading-[45px] font-medium font-work-sans flex items-center justify-center">
              Chart
            </button>
          </motion.div>
        </motion.div>
      </div>
      <img
        src="/assets/staking-insights/abstract-circle-wave.png"
        alt="Wave Pattern"
        className="absolute right-0 bottom-0 h-[800px] object-[-339px] object-cover lg:h-auto lg:object-[0px]"
      />
    </section>
  );
};

export default Banner;
