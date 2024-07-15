import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MenuIcon, ShareIcon } from "../../../../components/UI/SVGIcons";

const MobileAppInstructions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref}>
      <img
        src="/assets/mobiles/mobile-preview.png"
        alt="Mobile Preview"
        className="max-w-[300px] w-full mx-auto absolute left-1/2 transform -translate-x-1/2 lg:hidden block"
      />

      <motion.section
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative flex max-w-[1440px] w-full mx-auto lg:mt-[52px] bg-[#141414fb] rounded-[32px] p-[30px] border border-[#FFFFFF1A] mb-[154px] mt-[520px]"
      >
        <div className="flex flex-col gap-10">
          <motion.h2
            variants={itemVariants}
            className="font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider text-white"
          >
            Stay wise at all times with our mobile apps
          </motion.h2>

          <div className="flex flex-col gap-5 pl-5">
            <motion.img
              variants={itemVariants}
              src="/assets/bitcoin/material-symbols_android.svg"
              alt="material-symbols_android"
              className="size-6"
            />
            <motion.h3
              variants={itemVariants}
              className="font-work-sans font-thin text-[36px] leading-[36px] -tracking-wider text-white"
            >
              <span className="font-bold">Android -</span> Google Chrome
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="pl-5 text-white text-[18px] leading-[30px] space-y-2 !p-0"
            >
              <p className="gap-[1px] md:gap-[4px] lg:gap-[6px] text-[20px] leading-[30px] -tracking-wider text-[#ffffffb2]">
                1. Tap the <span className="font-bold">Menu icon</span>{" "}
                <MenuIcon />
                (in upper right-hand corner) and tap{" "}
                <span className="font-bold">Add to homescreen</span>.
              </p>
              <p className="flex text-[20px] leading-[30px] -tracking-wider text-[#ffffffb2]">
                2. Enter a name for the shortcut and it will be added to your
                home screen.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 pl-5">
            <motion.img
              variants={itemVariants}
              src="/assets/bitcoin/ic_baseline-apple.svg"
              alt="ic_baseline-apple"
              className="size-6"
            />
            <motion.h3
              variants={itemVariants}
              className="font-work-sans font-thin text-[36px] leading-[36px] -tracking-wider text-white"
            >
              <span className="font-bold">IOS -</span> Safari
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="pl-5 text-white text-[18px] leading-[30px] space-y-2 !p-0"
            >
              <p className="gap-[6px] items-center text-[20px] leading-[30px] -tracking-wider text-[#ffffffb2]">
                1. Tap the <span className="font-bold">Menu icon</span>{" "}
                <ShareIcon />
                (in upper right-hand corner) and tap{" "}
                <span className="font-bold">Add to homescreen</span>.
              </p>
              <p className="flex text-[20px] leading-[30px] -tracking-wider text-[#ffffffb2]">
                2. Enter a name for the shortcut and it will be added to your
                home screen.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="outer-container ml-auto xl:block hidden">
          <div className="inner-container">
            <img
              src="/assets/mobiles/mobile-preview.png"
              alt="Mobile Preview"
              className="w-full h-full "
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MobileAppInstructions;
