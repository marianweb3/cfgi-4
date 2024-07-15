import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const LandBotBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="w-full flex items-center justify-center md:min-h-[1081.13px] flex-col md:flex-row relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src="/assets/landbot/bannerBG.png"
        alt="Waves"
        className="w-full absolute left-0 top-0 rounded-b-[60px] min-h-[1100px] object-cover lg:min-h-auto md:max-h-[1081.13px]"
        variants={itemVariants}
      />
      <motion.img
        src="/assets/landbot/forestLB.svg"
        alt="forestLB"
        className="md:absolute right-[-3%] top-[-35%] z-10 md:hidden block"
        variants={itemVariants}
      />
      <motion.div
        className="max-w-[1600px] mx-auto w-full relative z-[10] px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        <motion.div
          className="px-8 py-20 pr-[80px] pb-[30px] backdrop-blur-md z-10 max-w-[932px] rounded-[47.73px] landbot-card-container relative flex flex-col md:flex-row items-start"
          variants={itemVariants}
        >
          <motion.img
            src="/assets/landbot/telegram.svg"
            alt="Telegram"
            className="absolute right-[10%] top-[-30%] hidden md:block"
            variants={itemVariants}
          />
          <motion.img
            src="/assets/landbot/discrod.svg"
            alt="Telegram"
            className="absolute right-[-14%] top-[-56%] hidden md:block"
            variants={itemVariants}
          />
          <motion.h1
            className="text-white font-neue text-[50px] leading-[50px] md:text-[169.03px] md:leading-[163.12px] font-bold relative z-10"
            variants={itemVariants}
          >
            Land <span className="text-[#ffffff9c]">Bot</span>
          </motion.h1>
        </motion.div>
        <motion.div
          className="mt-[27px] flex flex-col gap-10 max-w-[710px]"
          variants={containerVariants}
        >
          <motion.p
            className="text-[#FFFFFF] font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal"
            variants={itemVariants}
          >
            LandBot is the number one telegram bot solution for all projects.
            Imagine having Safeguard, Rosebot, every buy bot and AI bot in
            existence… together – in one.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row max-w-[436px] gap-1"
            variants={itemVariants}
          >
            <button className="max-w-[300px] w-full button-green-shadow py-[14px] bg-[#00FF00] rounded-full font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal text-white">
              t.me/landbot
            </button>
            <a
              href="https://twitter.com/predictingai"
              target="_blank"
              className="text-white group size-16 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg"
            >
              <FaXTwitter className="group-hover:text-orangeBg" />
            </a>
            <a
              href="https://t.me/predictorstg"
              target="_blank"
              className="text-white group size-16 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg"
            >
              <PiTelegramLogo className="group-hover:text-orangeBg" />
            </a>
          </motion.div>
        </motion.div>
        <motion.img
          src="/assets/landbot/forestLB.svg"
          alt="forestLB"
          className="md:absolute right-[-3%] top-[-35%] z-10 hidden md:block"
          variants={itemVariants}
        />
      </motion.div>
    </motion.section>
  );
};

export default LandBotBanner;
