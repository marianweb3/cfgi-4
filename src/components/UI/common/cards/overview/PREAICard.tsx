import { motion } from "framer-motion";
import { useState } from "react";
import { itemVariants } from "./framer-animation";

const PREAICard = () => {
  const [hover, setHover] = useState(false);

  const coinVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#141414] rounded-[32px]  border-2 border-[#FFFFFF1A] relative w-full overflow-hidden  p-8 flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="absolute inset-0 bg-[#141414] rounded-[32px] z-10"
        animate={{
          backgroundColor: hover
            ? "rgba(20, 20, 20, 0)"
            : "rgba(20, 20, 20, 0.7)",
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <div className="w-full flex items-start flex-col gap-10 relative z-10 h-full">
        <div className="w-full flex items-center justify-between relative z-10">
          <div className="flex flex-col">
            <span className="font-work-sans font-semibold text-[20px] leading-[30px] -tracking-wider text-[#FF532E]">
              /01
            </span>
            <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider">
              LandBot
            </h3>
          </div>
        </div>
        <motion.div
          className="self-center"
          animate={{ scale: hover ? 1.5 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/assets/overview/one-coin.png"
            alt="Forest LB"
            className="relative z-[12]"
          />
        </motion.div>
      </div>
      <img
        src="/assets/overview/preai-card-bg.png"
        className="absolute bottom-0 left-0 w-full h-full"
      />
      <img
        src="/assets/overview/preai-card-top-bg.png"
        className="absolute top-0 right-0 w-full h-full"
      />
      <motion.img
        src="/assets/overview/preai-card-yellow-ellipse.png"
        alt=""
        className={`absolute bottom-0 left-0 w-full transition-opacity duration-300 ease-in-out ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />

      <motion.img
        src="/assets/overview/coins/coin1.svg"
        className="absolute top-[33%] left-[-6%] size-[107.48px] z-10"
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        custom={0}
        variants={coinVariants}
      />
      <motion.img
        src="/assets/overview/coins/coin2.svg"
        className="absolute top-[13%] right-[27%] size-[60.11px]"
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        custom={1}
        variants={coinVariants}
      />
      <motion.img
        src="/assets/overview/coins/coin3.svg"
        className="absolute top-[44%] right-[8%] size-[81.86px]"
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        custom={2}
        variants={coinVariants}
      />
      <motion.img
        src="/assets/overview/coins/coin4.svg"
        className="absolute bottom-0 right-0 size-[159.08px]"
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        custom={3}
        variants={coinVariants}
      />
      <motion.img
        src="/assets/overview/hor-lines-active.svg"
        className="absolute bottom-[10%] right-0 w-full z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src="/assets/overview/hor-lines.svg"
        className="absolute bottom-[10%] right-0 w-full"
        initial={{ opacity: 1, scale: 1 }}
        animate={hover ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default PREAICard;
