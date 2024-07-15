import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";
import LandBotSection from "./LandBotSection";

const benefits = [
  {
    icon: "/assets/preai/holders-icons/icon1.svg",
    text: "Makes you eligible for all future airdrops",
  },
  {
    icon: "/assets/preai/holders-icons/icon2.svg",
    text: "Benefit from Buy Back and Burns",
  },
  {
    icon: "/assets/preai/holders-icons/icon3.svg",
    text: "Access to all future staking pools and revenue share",
  },
  {
    icon: "/assets/preai/holders-icons/icon4.svg",
    text: "Priority support and setup help",
  },
  {
    icon: "/assets/preai/holders-icons/icon5.svg",
    text: "Free subscriptions and alerts on PredictCrypto.com",
  },
  {
    icon: "/assets/preai/holders-icons/icon6.svg",
    text: "Access to the full history of the Wise & Naive Index",
  },
];

const HoldersBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="max-w-[1440px] w-full mx-auto px-4 2xl:px-0 mt-5"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <SectionHeader sectionNumber={1} title={"Holders’ Benefits"} />
      <motion.div className="mt-[75px] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="rounded-full bg-[#FFFFFF0F] border-2 border-[#FFFFFF1A] min-h-[140px] 2xl:min-h-[224px] px-12 flex items-center gap-8"
            variants={itemVariants}
          >
            <img
              src={benefit.icon}
              alt={`Icon ${index + 1}`}
              className="size-20"
            />
            <span className="font-work-sans font-light text-[#ffffffb3] text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[33.6px] -tracking-normal">
              {benefit.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <LandBotSection />
    </motion.section>
  );
};

export default HoldersBenefits;
