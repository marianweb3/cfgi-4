import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";

const benefits = [
  {
    icon: "/assets/preai/landbot-icons/icon1.svg",
    text: "Higher referral commission payouts with LandBot",
  },
  {
    icon: "/assets/preai/landbot-icons/icon2.svg",
    text: "Unlimited access to our custom tools in LandBot",
  },
  {
    icon: "/assets/preai/landbot-icons/icon3.svg",
    text: "Access to gain free advertising on LandBot",
  },
  {
    icon: "/assets/preai/landbot-icons/icon4.svg",
    text: "Cheaper cost per advertisement slot with LandBot",
  },
  {
    icon: "/assets/preai/landbot-icons/icon5.svg",
    text: "Priority booking in advertisement slots with LandBot",
  },
  {
    icon: "/assets/preai/landbot-icons/icon6.svg",
    text: "Free cloned versions of LandBot for a more customised Telegram",
  },
];

const LandBotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderTextWithHighlight = (text: string) => {
    const parts = text.split("LandBot");
    return (
      <>
        {parts[0]}
        <span className="text-[#00FF00]">LandBot</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.section
      className="mt-[100px] bg-black border-2 border-[#00C600] landbot-section-green-shadow rounded-[64px] p-4 2xl:p-16 pt-[100px] relative"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="border-2 border-[#00C600] px-4 py-4 2xl:px-12 2xl:py-7 landbot-tag-gradient rounded-[32px] absolute top-0 left-5 2xl:left-16 transform -translate-y-1/2 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white font-neue font-bold text-[48px] leading-[48px] -tracking-normal">
          LandBot
        </span>
      </motion.div>
      <motion.img
        src="/assets/preai/landbot-icons/forestLB.svg"
        alt=""
        className="absolute top-0 right-6 transform -translate-y-1/2 z-10 size-[100px] 2xl:size-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 relative z-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="rounded-full bg-[#FFFFFF0F] border-2 border-[#FFFFFF1A] min-h-[160px] 2xl:min-h-[224px] px-8 2xl:px-12 flex items-center gap-8"
            variants={itemVariants}
          >
            <img
              src={benefit.icon}
              alt={`Icon ${index + 1}`}
              className="size-16"
            />
            <span className="font-work-sans font-extralight text-[#ffffffb3] text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[33.6px] -tracking-normal">
              {renderTextWithHighlight(benefit.text)}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <motion.img
        src="/assets/preai/landbot-icons/bottom-left-ellipse.png"
        alt="Ellipse"
        className="absolute bottom-0 left-0 rounded-bl-[64px]"
        variants={itemVariants}
      />
      <motion.img
        src="/assets/preai/landbot-icons/top-right-ellipse.png"
        alt="Ellipse"
        className="absolute top-0 right-0 rounded-tr-[64px]"
        variants={itemVariants}
      />
    </motion.section>
  );
};

export default LandBotSection;
