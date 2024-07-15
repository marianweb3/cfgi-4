import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SegmentPie from "../../../../../pages/bitcoin/ui/bitcoin-dashboard/sections/wise-naive-index/SegmentPie";
import { ArrowUpRightIcon } from "../../../SVGIcons";
import { itemVariants } from "./framer-animation";

const WiseNaiveCard = ({ showButton = true }: { showButton?: boolean }) => {
  const [rotate, setRotate] = useState(36);
  const [hover, setHover] = useState(false);
  const targetRotate = 118;
  const initialRotate = 20;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hover) {
      interval = setInterval(() => {
        setRotate((prevRotate) => {
          if (prevRotate < targetRotate) {
            return prevRotate + 2;
          } else {
            clearInterval(interval);
            return targetRotate;
          }
        });
      }, 100);
    } else {
      interval = setInterval(() => {
        setRotate((prevRotate) => {
          if (prevRotate > initialRotate) {
            return prevRotate - 1;
          } else {
            clearInterval(interval);
            return initialRotate;
          }
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [hover]);
  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#141414] rounded-[32px] font-work-sans border-2 border-[#FFFFFF1A] relative w-full overflow-hidden items-center justify-between p-8 flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute inset-0 bg-[#141414] bg-opacity-[0.8] rounded-[32px] "></div>
      <div className="w-full flex items-center justify-between relative z-30">
        <div className="flex flex-col">
          <span className="font-work-sans font-semibold text-[20px] leading-[30px] -tracking-wider text-[#FF532E]">
            /01
          </span>
          <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider">
            Wise & Naive
          </h3>
        </div>
        {showButton ? (
          <motion.button
            className={`size-16 bg-[#1B1B1B] hover:border-orangeBg hover:text-orangeBg border-2 border-[#FFFFFF1A] relative z-20 flex items-center justify-center rounded-full shrink-0 overflow-hidden`}
            initial={{
              width: "40px",
              height: "40px",
              backgroundColor: "#1B1B1B",
            }}
            animate={
              hover
                ? {
                    width: "150px",
                    height: "40px",
                    backgroundColor: "#FF532E",
                  }
                : {
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#1B1B1B",
                  }
            }
            transition={{ duration: 0.5 }}
          >
            {hover ? (
              <>
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  animate={
                    hover ? { x: -10, opacity: 1 } : { x: 50, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-white shrink-0"
                >
                  Learn More
                </motion.span>
              </>
            ) : null}
            <ArrowUpRightIcon className="absolute right-3" />
          </motion.button>
        ) : null}
      </div>
      <SegmentPie rotate={rotate} />
      <div className="mt-5 flex flex-col gap-1 relative z-10 items-center">
        <span className="font-bold font-neue text-[72px] leading-[60.48px] text-white">
          {rotate}
        </span>
        <img
          src="/assets/bitcoin/wise.svg"
          alt=""
          className="w-[59.24px] !h-5"
        />
      </div>
      <img
        src={"/assets/staking-insights/background-card-1.png"}
        alt=""
        className="absolute top-[-20px] h-full w-full object-cover"
      />
      <img
        src={"/assets/staking-insights/bottom-card-1-union.png"}
        alt=""
        className={`absolute top-[26%] left-[-15%] h-full w-full object-contain transition-opacity duration-300 ease-in-out `}
      />
      <img
        src={"/assets/staking-insights/top-card-1-union.png"}
        alt=""
        className="absolute top-[-25%] h-full w-full object-contain"
      />
      <img
        src={"/assets/staking-insights/card-1-yellow-ellipse.png"}
        alt=""
        className={`absolute bottom-0 transition-opacity duration-300 ease-in-out ${
          rotate >= 57 && rotate <= 99 ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={"/assets/staking-insights/card-1-orange-ellipse.png"}
        alt=""
        className={`absolute bottom-0 transition-opacity duration-300 ease-in-out ${
          rotate >= 101 && rotate <= 118 ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

export default WiseNaiveCard;
