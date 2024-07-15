import React from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const EarnWithMaeve = () => {
  return (
    <motion.section
      className="relative py-20 lg:pt-[398px] lg:pb-[258px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src="/assets/maeve/section-4/CABG.png"
        alt=""
        className="absolute bottom-[-46px] object-cover lg:object-none lg:bottom-0 w-full"
        variants={itemVariants}
      />
      <motion.img
        src="/assets/maeve/section-4/graph.png"
        alt=""
        className="absolute h-full lg:h-auto bottom-[-13%] lg:bottom-[-58%] w-full"
        variants={itemVariants}
      />

      <motion.div
        className="max-w-[1600px] mx-auto w-full relative z-10 px-4 lg:px-0"
        variants={containerVariants}
      >
        <motion.h3
          className="max-w-[718px] font-neue font-medium text-[64px] leading-[64px] -tracking-normal text-white"
          variants={itemVariants}
        >
          Earn 100% of MAEVE's profits
        </motion.h3>
        <motion.div
          className="flex flex-wrap max-w-[660px] gap-3 lg:gap-1 mt-[38px] relative z-10"
          variants={containerVariants}
        >
          <motion.button
            className="max-w-[260px] w-full py-[14px] backdrop-blur-md bg-[#2DBDEA] rounded-full font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal text-white"
            variants={itemVariants}
          >
            Stake $PREAI
          </motion.button>
          <motion.button
            className="max-w-[260px] backdrop-blur-md w-full py-[14px] bg-[#FFFFFF0D] border-2 border-[#FFFFFF1A] rounded-full font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal text-white"
            variants={itemVariants}
          >
            Learn More
          </motion.button>
          <motion.a
            href="https://twitter.com/predictingai"
            target="_blank"
            className="text-white group size-16 backdrop-blur-md flex items-center bg-[#FFFFFF0D] justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg"
            variants={itemVariants}
          >
            <FaXTwitter className="group-hover:text-orangeBg" />
          </motion.a>
          <motion.a
            href="https://t.me/predictorstg"
            target="_blank"
            className="text-white group size-16 backdrop-blur-md flex items-center bg-[#FFFFFF0D] justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg"
            variants={itemVariants}
          >
            <PiTelegramLogo className="group-hover:text-orangeBg" />
          </motion.a>
        </motion.div>
        {/* <motion.img
          src="/assets/maeve/section-4/card.png"
          alt=""
          className="absolute right-0 bottom-0 w-full max-w-[580.4px]"
          variants={itemVariants}
        /> */}
      </motion.div>
    </motion.section>
  );
};

export default EarnWithMaeve;
