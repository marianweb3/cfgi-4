import { motion, useInView } from "framer-motion";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";
import { useRef } from "react";
import { BirdIcon } from "../../../../components/UI/SVGIcons";
import ButtonArrowUpRight from "../../../../components/UI/common/form-controls/buttons/ButtonArrowUpRight";

const WhitePaper = () => {
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
    <section className="max-w-[1440px] mx-auto w-full flex flex-col gap-20 px-4 2xl:px-0">
      <SectionHeader sectionNumber={2} title={"Whitepaper"} />
      <div ref={ref} className="flex flex-wrap gap-5 justify-center">
        <motion.div
          className="max-w-[1016px] grow min-h-[404px] w-full bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] relative flex items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 xl:flex flex-wrap gap-4 justify-center col-span-2 border-2 border-[#FFFFFF1A] backdrop-blur-lg mb-[18px] sm:mb-0 mt-[150px] sm:mt-20 bg-[#FFFFFF1A] py-4 px-[18px] rounded-[32px] xl:rounded-full relative z-10"
            variants={containerVariants}
          >
            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
              variants={itemVariants}
            >
              <img src="/assets/preai/wallpaper/icon1.svg" alt="" />
              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                $PREAI Contract
              </span>
            </motion.div>

            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
              variants={itemVariants}
            >
              <img src="/assets/preai/wallpaper/icon2.svg" alt="" />

              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                Treasuries
              </span>
            </motion.div>

            <motion.div
              className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[150px] md:size-[200px]"
              variants={itemVariants}
            >
              <img src="/assets/preai/wallpaper/icon2.svg" alt="" />

              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
                Liquidity Pool
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
            src="/assets/preai/wallpaper/top-ellipse.png"
            alt=""
            className="absolute transform -translate-x-1/2 top-0"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/wallpaper/center-ellipse.png"
            alt=""
            className="absolute transform -translate-x-1/2 bottom-0"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/wallpaper/safety.svg"
            alt="staking"
            className="absolute top-0 transform -translate-x-1/2 z-[3]"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/staking-insights/ellipse-line-white.png"
            alt="staking"
            className="absolute top-[9rem] sm:top-[1.5rem] transform -translate-x-1/2 z-10"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/wallpaper/check.svg"
            alt="staking"
            className="absolute top-0 2xl:top-[-4.5rem] sm:-top-[4.5rem] left-[50%] sm:left-[49%] transform -translate-x-1/2 z-10"
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
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[175px] md:size-[200px]"
            variants={itemVariants}
          >
            <img src="/assets/preai/wallpaper/card1.svg" alt="" />

            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-work-sans -tracking-wider text-[#ffffffb3] max-w-[136px] text-center">
              Owned by offline devices
            </span>
          </motion.div>
          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[175px] md:size-[200px]"
            variants={itemVariants}
          >
            <img src="/assets/preai/wallpaper/card2.svg" alt="" />

            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] max-w-[136px] font-work-sans -tracking-wider text-[#ffffffb3] text-center">
              Needs both Co-Founders to operate
            </span>
          </motion.div>
          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] relative text-white rounded-full flex flex-col gap-[10px] items-center justify-center size-[175px] md:size-[200px]"
            variants={itemVariants}
          >
            <img src="/assets/preai/wallpaper/card3.png" alt="" />

            <div className="flex flex-col">
              <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] max-w-[136px] font-work-sans -tracking-wider text-[#ffffffb3] text-center">
                KYC Verified by Assure Defi
              </span>
            </div>

            <img
              src="/assets/preai/wallpaper/bottom-card-ellipse.png"
              alt=""
              className="absolute bottom-0 rounded-b-full"
            />
            <div className="absolute -bottom-3 -right-3">
              <ButtonArrowUpRight />
            </div>
          </motion.div>
          <motion.div
            className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-1 sm:gap-[10px] items-center justify-center size-[175px] md:size-[200px] relative"
            variants={itemVariants}
          >
            <img src="/assets/preai/wallpaper/card4.svg" alt="" />

            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] -tracking-wider text-[#ffffffb3] max-w-[155px] text-center font-work-sans">
              Liquidity is locked away for years
            </span>
            <div className="absolute -bottom-3 -right-3">
              <ButtonArrowUpRight />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhitePaper;
