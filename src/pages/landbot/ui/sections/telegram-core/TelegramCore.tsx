import { motion } from "framer-motion";
import SectionHeader from "../../../../../components/UI/common/titles/SectionHeader";

const TelegramCore = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="lg:px-0 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="pt-10 pl-6 md:pl-[67px] pb-10 md:pb-[106px] mt-[180px] max-w-[1600px] mx-auto w-full bg-[#141414] border-2 border-[#FFFFFF1A] bg-noise relative rounded-[32px] overflow-hidden">
        <motion.img
          src="/assets/landbot/sky-section-1.png"
          alt="Sky Section"
          className="absolute top-0 left-0 w-full h-full"
          variants={textVariants}
        />
        <motion.img
          src="/assets/landbot/lines.png"
          alt="Lines"
          className="absolute top-0 left-0 w-full h-full"
          variants={textVariants}
        />
        <motion.img
          src="/assets/landbot/top-left-ellipse.png"
          alt="Top Left Ellipse"
          className="absolute top-0 left-0 w-[200px] md:w-[400px] lg:w-[851px] z-20"
          variants={textVariants}
        />
        <motion.img
          src="/assets/landbot/middle-ellipse.png"
          alt="Middle Ellipse"
          className="absolute right-0 top-0"
          variants={textVariants}
        />
        <motion.img
          src="/assets/landbot/bottom-right-ellipse.png"
          alt="Bottom Right Ellipse"
          className="absolute bottom-0 right-0 w-full"
          variants={textVariants}
        />
        <motion.div
          className="max-w-[90%] md:max-w-[70%] lg:max-w-[806px] relative flex flex-col gap-5 z-10"
          variants={containerVariants}
        >
          <SectionHeader
            sectionNumber={1}
            title={
              "A Telegram group is the core of every single crypto project"
            }
          />
          <motion.p
            className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-work-sans font-thin text-[#FFFFFFB2] max-w-[90%] md:max-w-[70%] lg:max-w-[580px]"
            variants={textVariants}
          >
            It is the place where{" "}
            <span className="text-[#00FF00]">the community comes together</span>
            , it's where{" "}
            <span className="text-[#00FF00]">momentum is celebrated</span>, it's
            where hype is forged and where holders can feel like they are
            <span className="text-[#00FF00]">
              {" "}
              part of something safe and secure
            </span>
            .
          </motion.p>
        </motion.div>
        <motion.img
          src="/assets/landbot/icons.svg"
          alt="Icons"
          className="absolute right-0 top-0 w-20 md:w-32 lg:w-[600px]"
          variants={textVariants}
        />
      </div>
    </motion.section>
  );
};

export default TelegramCore;
