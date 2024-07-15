import { motion } from "framer-motion";

const MaeveBanner = () => {
  const bannerVariants = {
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
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const mainImageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.section
      className="h-[800px] md:h-[1210px] flex justify-center relative overflow-hidden !px-4 lg:!px-0 "
      initial="hidden"
      animate="visible"
      variants={bannerVariants}
    >
      <motion.img
        src="/assets/maeve/mario-verduzco-xSdFf1Lcx6o-unsplash.png"
        alt="mario verduzco"
        className="absolute top-0 -translate-x-1/2 left-1/2 transform"
        variants={mainImageVariants}
      />
      <motion.img
        src="/assets/maeve/gannt.svg"
        alt="gannt histogram"
        className="absolute top-0 -translate-x-1/2 h-full transform w-full opacity-[.37]"
        variants={itemVariants}
      />
      <motion.img
        src="/assets/maeve/line-histogram.svg"
        alt="line-histogram"
        className="absolute top-[5%] transform w-full h-full z-[0]"
        variants={itemVariants}
      />
      <motion.img
        src="/assets/maeve/line-histogram-2.svg"
        alt="line-histogram"
        className="absolute top-[5%] transform w-full h-full z-[0]"
        variants={itemVariants}
      />
      <motion.img
        src="/assets/maeve/line-chart.svg"
        alt="line chart"
        className="absolute top-[5%] transform w-full h-full z-[0]"
        variants={itemVariants}
      />
      <img
        src="/assets/maeve/darken.png"
        alt="bg"
        className="absolute top-0 transform  w-full h-full z-[0]"
      />

      <motion.div
        className="h-full w-full max-w-[1600px] mx-auto relative z-10 flex mt-[55%] lg:mt-0 lg:justify-center flex-col"
        variants={bannerVariants}
      >
        <motion.img
          src="/assets/maeve/logo.svg"
          alt="mario verduzco"
          className="relative max-w-[712.85px] top-0 lg:top-[11%] left-[-3%] transform z-[10]"
          variants={itemVariants}
        />
        <motion.div className="w-full flex justify-between">
          <motion.div
            className="mt-[150px] md:mt-[300px] ml-5 lg:ml-20 flex flex-col gap-4 relative max-w-[708px]"
            initial="hidden"
            animate="visible"
            variants={bannerVariants}
          >
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <img
                src="/assets/maeve/mdi_thunder.svg"
                alt="mdi_thunder"
                className="size-8"
              />
              <span className="text-[#FFF859] font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal">
                MAEVE is the most advanced AI trading bot in crypto.{" "}
              </span>
            </motion.div>
            <motion.p
              className="text-white font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal max-w-[545px]"
              variants={itemVariants}
            >
              Trading directly from our Wise & Naive Index with her unique
              algorithm, programmed for success.
            </motion.p>
            <motion.img
              src="/assets/maeve/lines.svg"
              alt="Lines"
              className="absolute top-[-110px] left-[-4%]"
              variants={itemVariants}
            />
          </motion.div>
          <motion.div
            className="relative z-10 hidden md:block"
            initial="hidden"
            animate="visible"
            variants={bannerVariants}
          >
            <motion.img
              src="/assets/maeve/card/main-card.svg"
              alt="Card"
              className="relative top-[-25%]"
              variants={mainImageVariants}
            />
            <motion.img
              src="/assets/maeve/card/aim.svg"
              alt="mario verduzco"
              className="absolute bottom-[15%] left-[-10%]"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/maeve/card/preloader.svg"
              alt="loader"
              className="absolute bottom-[29%] left-[-16%]"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/maeve/card/right-line.svg"
              alt="loader"
              className="absolute bottom-[55%] left-[-54%]"
              variants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MaeveBanner;
