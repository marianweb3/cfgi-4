import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BirdIcon } from "../../../../components/UI/SVGIcons";

const StakingOverview = () => {
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
    <section
      ref={ref}
      className="max-w-[1440px] mx-auto w-full flex flex-wrap justify-center px-4 lg:px-0 gap-5 mt-[99px]"
    >
      <motion.div
        className="max-w-[1016px] grow min-h-[404px] w-full bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] relative flex items-center justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <span className="font-work-sans font-thin text-[32px] leading-[32px] -tracking-wider text-white absolute top-8 left-8">
          / 01
        </span>
        <motion.div
          className="grid grid-cols-2 xl:flex flex-wrap gap-4 justify-center col-span-2 border-2 border-[#FFFFFF1A] backdrop-blur-lg mb-[18px] sm:mb-0 mt-[150px] sm:mt-20 bg-[#FFFFFF1A] py-4 px-[18px] rounded-[32px] xl:rounded-full relative z-10"
          variants={containerVariants}
        >
          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
            variants={itemVariants}
          >
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              100%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              Wise & Naive Profits
            </span>
          </motion.div>

          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
            variants={itemVariants}
          >
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              50%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              LandBot Profits
            </span>
          </motion.div>

          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
            variants={itemVariants}
          >
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              50%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              M.A.E.V.E Profits
            </span>
          </motion.div>

          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
            variants={itemVariants}
          >
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              1%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              Tax
            </span>
          </motion.div>
        </motion.div>

        <motion.img
          src="/assets/staking-insights/OBJECTS.png"
          alt=""
          className="absolute transform -translate-x-1/2 bottom-0 z-[2]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/staking-insights/graphic.png"
          alt=""
          className="absolute transform -translate-x-1/2 bottom-0"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/staking-insights/bottom-ellipse.png"
          alt=""
          className="absolute transform -translate-x-1/2 bottom-0"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/staking.svg"
          alt="staking"
          className="absolute top-[1.5rem] transform -translate-x-1/2 z-[3]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/staking-insights/ellipse-line-white.png"
          alt="staking"
          className="absolute top-[9rem] sm:top-[1.5rem] transform -translate-x-1/2 z-10"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/staking-insights/aim.svg"
          alt="staking"
          className="absolute top-[7rem] sm:-top-[1.5rem] left-[70%] sm:left-[60%] transform -translate-x-1/2 z-10"
          variants={itemVariants}
        />
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
          variants={itemVariants}
        >
          <span className="text-[24px] leading-[24px] sm:text-[44px] font-medium sm:leading-[44px] font-neue -tracking-wider text-white">
            50%
          </span>
          <span className="text-[16px] sm:text-[20px] font-thin leading-[20px]  font-work-sans -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
            Roll Over
          </span>
        </motion.div>
        <motion.div
          className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
          variants={itemVariants}
        >
          <span className="text-[24px] leading-[24px] sm:text-[44px] font-medium sm:leading-[44px] font-neue -tracking-wider text-white">
            50%
          </span>
          <span className="text-[16px] sm:text-[20px] font-thin leading-[20px]  font-work-sans -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
            Shared
          </span>
        </motion.div>
        <motion.div
          className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
          variants={itemVariants}
        >
          <span className="text-[24px] leading-[24px] sm:text-[44px] font-medium sm:leading-[44px] font-neue -tracking-wider text-white">
            2 Weeks
          </span>
          <div className="flex flex-col">
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-work-sans -tracking-wider text-[#ffffffb3] text-center">
              Shared
            </span>
            <span className="text-[#ffffffb3] font-work-sans font-thin text-[20px] leading-[20px] -tracking-wider">
              &#91; <span className="text-[#FF532E]">FRI - FRI</span> &#93;
            </span>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-1 sm:gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
          variants={itemVariants}
        >
          <BirdIcon className="sm:size-[60px] size-[45px]" />
          <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] -tracking-wider text-[#ffffffb3] max-w-[155px] text-center font-work-sans">
            Early bird stakers get {""}
            <span className="text-[#FF532E]">$PREAI</span> bonuses
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StakingOverview;
