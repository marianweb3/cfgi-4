import { useInView } from "framer-motion";
import { useRef } from "react";

const Profits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="px-4 lg:px-0">
      <div className="px-4 lg:px-0 overflow-hidden max-w-[1600px] w-full mx-auto mb-[130px] grow min-h-[500px] bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] relative flex items-center justify-center">
        <span className="flex items-center gap-4 z-10 font-work-sans font-thin text-[32px] leading-[32px] -tracking-wider text-white absolute top-8 left-8">
          / 02
          <svg
            width="45"
            height="2"
            viewBox="0 0 45 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-2.39565e-09"
              y1="1.4"
              x2="45"
              y2="1.4"
              stroke="white"
              stroke-width="1.2"
            />
          </svg>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex flex-wrap gap-2 justify-center col-span-2 border-2 border-[#FFFFFF1A] backdrop-blur-lg mb-[18px] sm:mb-0 mt-[150px] sm:mt-20 bg-[#FFFFFF1A] py-4 px-[18px] rounded-[32px] xl:rounded-full relative z-10">
          <div className="relative bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center w-[300px] h-[200px]">
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              100%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              $PREAI Stakers
            </span>
            <img
              src="/assets/maeve/section-2/aim2.svg"
              alt="Aim"
              className="absolute top-0 left-[-10%] lg:w-auto w-[27%]"
            />
          </div>

          <div className="z-10 relative bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center w-[300px] h-[200px]">
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              50%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              $PREAI Staking Pool
            </span>
            <img
              src="/assets/maeve/section-2/symbol.svg"
              alt="Aim"
              className="absolute right-[-26%] top-[8%] lg:-top-[10%] lg:-right-[42%] z-10 lg:w-auto w-[50%]"
            />
          </div>

          <div className="relative bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center w-[300px] h-[200px]">
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              50%
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              MAEVE Treasury*
            </span>
            <img
              src="/assets/maeve/section-2/message.svg"
              alt="Aim"
              className="absolute top-[-27%] right-0 lg:-top-[50%] lg:-right-[50%] z-10 lg:w-auto w-[50%]"
            />
          </div>
        </div>
        <img
          src="/assets/staking-insights/ellipse-line-white.png"
          alt="staking"
          className="absolute top-[9rem] sm:top-[3.5rem] transform -translate-x-1/4 z-10"
        />
        <img
          src="/assets/maeve/section-2/top-ellipse.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src="/assets/maeve/section-2/bottom-ellipse.png"
          alt=""
          className="absolute bottom-0 right-0"
        />
        <img
          src="/assets/maeve/section-2/OBJECTS.svg"
          alt=""
          className="absolute transform top-0 left-0 w-full"
        />
        <img
          src="/assets/maeve/section-2/graph.svg"
          alt=""
          className="absolute transform bottom-0 left-0 w-full"
        />
        <img
          src="/assets/maeve/section-2/profits.svg"
          alt="staking"
          className="absolute top-[4.5rem] w-[401.54px] z-[3]"
        />{" "}
      </div>
    </section>
  );
};
export default Profits;
