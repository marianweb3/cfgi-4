import { motion } from "framer-motion";

const PreaiBanner = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      className="min-h-[800px] lg:min-h-[1156px] h-full flex items-center justify-start relative min-[3500px]:max-w-[1800px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col relative z-20 pl-5 lg:pl-20 2xl:px-0">
        <motion.h1
          className="font-neue text-[48px] sm:text-[72px] md:text-[144px] leading-[48px] sm:leading-[72px] md:leading-[144px] -tracking-normal font-bold text-white"
          variants={textVariants}
        >
          <span className="text-[#FF532E]">$</span>PREAI
        </motion.h1>
        <motion.p
          className="mt-[20px] sm:mt-[30px] md:mt-[45px] text-white font-neue font-medium text-[20px] sm:text-[30px] md:text-[40px] leading-[20px] sm:leading-[30px] md:leading-[40px] -tracking-normal max-w-[616px]"
          variants={textVariants}
        >
          /the token of useful utility, that pays its community
        </motion.p>

        <motion.div
          className="mt-10 sm:mt-15 md:mt-20 flex flex-col sm:flex-row gap-4 max-w-[616px]"
          variants={textVariants}
        >
          <motion.button
            className="bg-[#FF532E] rounded-full py-2 sm:py-3 md:py-4 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full text-white font-work-sans font-semibold text-[20px] sm:text-[25px] md:text-[30px] leading-[30px] sm:leading-[35px] md:leading-[45px] -tracking-normal"
            whileHover={{ scale: 1.1 }}
          >
            Buy
          </motion.button>
          <motion.button
            className="bg-[#FFFFFF0D] border-2 border-[#FFFFFF1A] backdrop-blur-md rounded-full py-2 sm:py-3 md:py-4 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full text-white font-work-sans font-semibold text-[20px] sm:text-[25px] md:text-[30px] leading-[30px] sm:leading-[35px] md:leading-[45px] -tracking-normal"
            whileHover={{ scale: 1.1 }}
          >
            Chart
          </motion.button>
        </motion.div>
      </div>
      <motion.img
        src="/assets/preai/bottom-bg.png"
        alt="Bottom bg"
        className="absolute bottom-0 w-full left-0 z-[1000]"
        variants={imageVariants}
      />
      <motion.img
        src="/assets/preai/bg-web.png"
        alt="Bottom bg"
        className="absolute right-0 top-0 z-[2] h-full object-cover xl:object-fill"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.img
        src="/assets/preai/bottom-ellipse.png"
        alt="Bottom bg"
        className="absolute right-0 bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
      <motion.img
        src="/assets/preai/middle-ellipse.png"
        alt="Bottom bg"
        className="absolute right-0 top-0 h-full 2xl:h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.img
        src="/assets/preai/ai-coins.png"
        alt="Bottom bg"
        className="absolute right-[-24%] md:right-[5%] top-[48%] sm:top-[0%] 2xl:top-[12%] z-[3] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </motion.section>
  );
};

export default PreaiBanner;
