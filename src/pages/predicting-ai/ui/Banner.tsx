import { motion } from "framer-motion";

import {
  CoinSVGIcon,
  ChartSVGIcon,
  DoubleSVGIcons,
} from "../../../components/UI/SVGIcons";

const Banner = () => {
  return (
    <section className="max-w-[1440px] mx-auto w-full py-8 px-4 z-[1]">
      <div className="flex flex-col lg:flex-row items-center  md:gap-[100px] relative z-[2]">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lg:pr-8 grow order-2 md:order-1"
        >
          <div className="max-w-[664px] flex flex-col gap-5 md:gap-10 mb-10 md:mb-[100px]">
            <h1 className="text-[100px] leading-[100px] font-bold mb-4 text-white">
              Wise &amp; Naive <span className="text-red-500">Index</span>
            </h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] leading-[40px] font-medium text-white"
            >
              /the market sentiment indicator.
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white text-[20px] leading-[28px]"
            >
              When the entire market is acting upon the same emotion, it's
              usually a good idea to do the opposite. Be wise, not naive.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center space-x-2 bg-[#14141482] text-white py-6 sm:py-8 px-6 sm:px-10 grow rounded-[32px] border-2 border-[#FFFFFF1A]"
            >
              <div className="flex flex-col gap-2 sm:gap-4 grow">
                <p className="font-semibold text-[24px] sm:text-[40px] leading-[24px] sm:leading-[40px] tracking-tighter text-white">
                  20
                </p>
                <p className="font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-tighter text-white">
                  Currencies and chains.
                </p>
              </div>
              <div className="bg-red-500 text-white size-16 sm:size-20 flex items-center justify-center rounded-full">
                <CoinSVGIcon />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center space-x-2 bg-[#14141482] text-white py-6 sm:py-8 px-6 sm:px-10 grow rounded-[32px] border-2 border-[#FFFFFF1A]"
            >
              <div className="flex flex-col gap-2 sm:gap-4 grow">
                <p className="font-semibold text-[24px] sm:text-[40px] leading-[24px] sm:leading-[40px] tracking-tighter text-white">
                  10
                </p>
                <p className="font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-tighter text-white">
                  Factors per Token.
                </p>
              </div>
              <div className="bg-red-500 text-white size-16 sm:size-20 flex items-center justify-center rounded-full">
                <ChartSVGIcon />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center space-x-2 bg-[#14141482] text-white py-6 sm:py-8 px-6 sm:px-10 grow rounded-[32px] border-2 border-[#FFFFFF1A]"
          >
            <div className="flex flex-col gap-2 sm:gap-4 grow">
              <p className="font-semibold text-[24px] sm:text-[40px] leading-[24px] sm:leading-[40px] tracking-tighter text-white">
                The First Ever
              </p>
              <p className="font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-tighter text-white">
                Hourly Market Sentiment Score
              </p>
            </div>
            <div className="bg-red-500 text-white size-16 sm:size-20 flex items-center justify-center rounded-full">
              <DoubleSVGIcons />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 lg:mt-0 order-1 md:order-2"
        >
          <img
            src={"/assets/mobiles/banner-phone.png"}
            alt="Wise & Naive Index"
            className="w-full rounded shadow-lg max-w-[269px] md:max-w-[440px]"
          />
        </motion.div>
      </div>
      <img
        src={"/assets/yellow-ellipse.svg"}
        alt=""
        className="absolute top-0 right-0 size-[1200px]"
      />
      <img
        src={"/assets/small-orage-eliipse.png"}
        alt=""
        className="absolute top-[50px] right-0 size-[1200px]"
      />
      <img
        src={"/assets/predictinai/banner-background.png"}
        alt=""
        className="absolute top-[-20px] h-[122%] z-[1] w-full object-cover"
      />
    </section>
  );
};

export default Banner;
