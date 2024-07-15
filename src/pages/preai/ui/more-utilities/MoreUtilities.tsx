import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialButtons from "../../../../components/UI/common/form-controls/buttons/SocialButtons";

const MoreUtilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="2xl:pt-[255px] pt-20 min-[450px]:pb-20 2xl:pb-[330px] relative px-4 2xl:px-0"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <motion.img
        src="/assets/preai/middle-left-ellipse.png"
        alt=""
        className="absolute left-0 top-[-40%]"
        variants={itemVariants}
      />
      <div className="relative max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col gap-10 2xl:gap-20 relative z-10">
          <motion.h2
            className="font-neue font-medium 2xl:text-[64px] text-[40px] leading-[40px] 2xl:leading-[64px] -tracking-normal text-white max-w-[557px]"
            variants={itemVariants}
          >
            And more useful <span className="text-[#FF532E]">utilities</span>{" "}
            are yet to come
          </motion.h2>
          <motion.div
            className="flex max-w-[130px] gap-1"
            variants={itemVariants}
          >
            <SocialButtons />
          </motion.div>
        </div>
        <div className="2xl:static relative h-[400px] 2xl:h-auto block min-[450px]:hidden 2xl:block">
          <motion.img
            src="/assets/preai/more-utilities/token.png"
            alt=""
            className="absolute right-0 bottom-[37%] 2xl:bottom-0 2xl:top-0 z-[9]"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/more-utilities/lines.svg"
            alt=""
            className="absolute 2xl:right-[-4%] 2xl:top-[-85%] z-[9]"
            variants={itemVariants}
          />

          <motion.img
            src="/assets/preai/more-utilities/coin1.svg"
            alt=""
            className="absolute right-[72%] 2xl:right-[47%] top-[20%] 2xl:top-[-4%] z-[9] size-12 2xl:size-auto"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/more-utilities/coin2.svg"
            alt=""
            className="absolute right-[47%] 2xl:right-[29%] top-[9%] 2xl:top-[-40%] z-[9] size-12 2xl:size-auto"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/more-utilities/coin3.svg"
            alt=""
            className="absolute right-[21%] 2xl:right-[10%] top-[9%] 2xl:top-[-40%] z-[9] size-12 2xl:size-auto"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/more-utilities/coin5.svg"
            alt=""
            className="absolute right-[55%] 2xl:right-[34%] top-[28%] 2xl:top-[20%] z-[9] size-12 2xl:size-auto"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/preai/more-utilities/coin4.svg"
            alt=""
            className="absolute right-[9%] 2xl:right-[3%] top-[30%] 2xl:top-[40%] z-[9] size-12 2xl:size-auto"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/grey-chart.svg"
            alt=""
            className="absolute top-0 right-0 w-full object-contain"
            variants={itemVariants}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MoreUtilities;
