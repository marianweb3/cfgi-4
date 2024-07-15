import { motion } from "framer-motion";
import { itemVariants } from "./framer-animation";
import { useState } from "react";

const PREAIStakingCard = () => {
  const [hover, setHover] = useState(false);

  const ellipseVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const trajectoryVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const starContainerVariants = {
    hidden: { top: "65%", right: "12%", height: "40px", width: "40px" },

    visible: {
      top: "12%",
      right: "12%",
      height: "80px",
      width: "80px",
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const cornerVariants = {
    hidden: { width: "20px", height: "20px", rotate: 0 },
    visible: {
      width: "40px",
      height: "40px",
      rotate: 360,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="min-h-[532px] lg:!min-h-[auto] bg-[#141414] rounded-[32px] border-2 border-[#FFFFFF1A] relative w-full overflow-hidden items-center justify-between p-8 flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute inset-0 bg-[#141414] bg-opacity-[0.8] rounded-[32px] "></div>
      <div className="w-full flex items-center justify-between relative z-30">
        <div className="flex flex-col max-w-[150px]">
          <span className="font-work-sans font-semibold text-[20px] leading-[30px] -tracking-wider text-[#FF532E]">
            /01
          </span>
          <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider">
            $PREAI Staking
          </h3>
        </div>
      </div>

      <img
        src={"/assets/overview/web.png"}
        alt=""
        className="absolute h-full w-full object-cover"
      />
      <img
        src={"/assets/overview/coins-ai.png"}
        alt=""
        className={`absolute bottom-0 right-0 z-10`}
      />

      <motion.img
        src={"/assets/overview/trajectory.svg"}
        alt=""
        className="absolute bottom-[-10%] h-full w-full object-contain"
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        variants={trajectoryVariants}
      />
      <motion.img
        src={"/assets/overview/orange-bottom-ellipse.png"}
        alt=""
        className="absolute bottom-0 h-full w-full"
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        variants={ellipseVariants}
      />

      <motion.div
        className="absolute z-[9] right-[30px] "
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        variants={starContainerVariants}
      >
        <img
          src="/assets/overview/star.png"
          alt="star"
          className="absolute size-10"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src="/assets/overview/top-left-corner.png"
          alt="top-left-corner"
          className="absolute"
          style={{ top: 0, left: 0 }}
          variants={cornerVariants}
        />
        <motion.img
          src="/assets/overview/top-right-corner.png"
          alt="top-right-corner"
          className="absolute"
          style={{ top: 0, right: 0 }}
          variants={cornerVariants}
        />
        <motion.img
          src="/assets/overview/bottom-left-corner.png"
          alt="bottom-left-corner"
          className="absolute"
          style={{ bottom: 0, left: 0 }}
          variants={cornerVariants}
        />
        <motion.img
          src="/assets/overview/bottom-right-corner.png"
          alt="bottom-right-corner"
          className="absolute"
          style={{ bottom: 0, right: 0 }}
          variants={cornerVariants}
        />
      </motion.div>
    </motion.div>
  );
};

export default PREAIStakingCard;
