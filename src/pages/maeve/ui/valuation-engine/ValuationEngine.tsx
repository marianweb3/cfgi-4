import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";

const ValuationEngine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="max-w-[1800px] w-full lg:pt-[51px] pb-[130px] flex items-center flex-wrap 2xl:flex-nowrap justify-center mx-auto lg:gap-[90px]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="w-[921px] h-[551.9px] lg:h-[605.9px] relative">
        <motion.img
          src="/assets/maeve/section-1/background.svg"
          alt="Background"
          className="h-full w-full absolute top-0 left-0"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/chart.svg"
          alt="Chart"
          className="absolute top-[29%] !w-[75%] lg:w-auto lg:top-[12%] translate-y-1/2"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/short-line.svg"
          alt="Short Line first"
          className="absolute bottom-[63%] left-[25.5%] lg:left-[29.5%]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/good.svg"
          alt="Good"
          className="absolute top-[13%] left-[8%] lg:left-[21%]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/short-line.svg"
          alt="Short Line second"
          className="absolute left-[54.1%] top-[24.5%] lg:top-[17%] lg:left-[59.5%]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/explosive.svg"
          alt="Explosive"
          className="absolute top-[14%] w-[40%] lg:w-auto lg:top-0 left-[36%] lg:left-[47%]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/long-line.svg"
          alt="Long Line"
          className="absolute left bottom-[47%] right-[30%] lg:bottom-[36%] lg:right-[26%]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/wise.svg"
          alt="Wise"
          className="absolute left-[54.7%] top-[23%] w-[28%] lg:w-auto lg:top-[29%] lg:left-[63.7%]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/aim.svg"
          alt="Aim"
          className="absolute bottom-[37%] right-[17%] w-[16%] lg:w-auto lg:bottom-[16%] lg:right-[15%] z-[10]"
          variants={itemVariants}
        />
        <motion.img
          src="/assets/maeve/section-1/card.png"
          alt="Card"
          className="absolute bottom-[34%] lg:bottom-[8%] w-[62%] lg:w-auto right-[-17%] z-0"
          variants={itemVariants}
        />
      </div>
      <div className="flex flex-col gap-6 max-w-[740px] px-4 lg:px-0">
        <SectionHeader
          sectionNumber={1}
          title={"Markets and Emotion Valuation Engine"}
        />
        <motion.p
          className="text-[#FFFFFFB2] font-work-sans text-[20px] leading-[30px] font-extralight -tracking-normal"
          variants={itemVariants}
        >
          MAEVE stands for Markets and Emotion Valuation Engine.
        </motion.p>
        <motion.p
          className="text-[#FFFFFFB2] font-work-sans text-[20px] leading-[30px] font-extralight -tracking-normal"
          variants={itemVariants}
        >
          She is programmed to keep learning from the history of our Wise &
          Naive Index and its real-time results. MAEVE will automatically trade
          the top 100 coins/tokens within crypto with the aim of closing a
          profitable trade every single time.
        </motion.p>
        <motion.p
          className="text-[#FFFFFFB2] font-work-sans text-[20px] leading-[30px] font-extralight -tracking-normal"
          variants={itemVariants}
        >
          Simply put: the deeper we are into wise/optimal territory, the more
          assets MAEVE will buy. The deeper we are into explosive/naive
          territory, the more assets MAEVE will sell.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ValuationEngine;
