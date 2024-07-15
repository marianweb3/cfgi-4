import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TelegramBot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="max-w-[1600px] mx-auto w-full mt-20 md:mt-[170px] flex flex-col lg:flex-row justify-between px-4">
      <div className="flex flex-col lg:flex-row grow" ref={ref}>
        <div className="flex flex-col gap-4 max-w-[90%] md:max-w-[70%] lg:max-w-[472px]">
          <motion.span
            className="text-white font-work-sans font-thin text-[24px] sm:text-[32px] leading-[24px] sm:leading-[32px] -tracking-wider flex items-center gap-4"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            /02
            <svg
              width="45"
              height="2"
              viewBox="0 0 45 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.4"
                x2="45"
                y2="1.4"
                stroke="white"
                strokeWidth="1.2"
              />
            </svg>
          </motion.span>
          <motion.h2
            className="text-white font-neue font-medium text-[36px] sm:text-[48px] lg:text-[64px] leading-[36px] sm:leading-[48px] lg:leading-[64px] -tracking-wider max-w-[90%] md:max-w-[70%] lg:max-w-[840px]"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Do I need <br />
            <span className="text-[#00FF00]">a telegram bot </span>
            for my group?
          </motion.h2>
        </div>
        <img
          src="/assets/landbot/green-ds-aim.svg"
          alt="DS"
          className="w-20 sm:w-24 lg:w-[97px] mt-6 lg:mt-0"
        />
      </div>
      <div className="text-[#FFFFFFB2] max-w-[90%] md:max-w-[80%] lg:max-w-[715px] flex flex-col gap-8 mt-8 lg:mt-0">
        <p className="font-work-sans text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] font-extralight -tracking-normal">
          <span className="text-white">
            Currently Telegram has 196 million daily active users
          </span>
          , expected to grow to 1 billion by 2025.
        </p>
        <p className="font-work-sans text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] font-extralight -tracking-normal">
          With Landbot, the increase in users{" "}
          <span className="text-white">
            {" "}
            will be safe, secure and easy as ever
          </span>
          . We know project teams are as busy as ever. So Landbot will make sure
          your{" "}
          <span className="text-white">
            {" "}
            telegram group runs smooth without you
          </span>
          . Think of Landbot as part of the team!
        </p>
        <p className="font-work-sans text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] font-extralight -tracking-normal">
          From making a great first impression when people join your group to
          standing out with a unique ranking system,{" "}
          <span className="text-white">
            LandBot has it all. Every tool you need
          </span>{" "}
          to shape your group to your liking is just a few clicks away.{" "}
          <span className="text-white">It's that easy.</span>
        </p>
      </div>
    </section>
  );
};

export default TelegramBot;
