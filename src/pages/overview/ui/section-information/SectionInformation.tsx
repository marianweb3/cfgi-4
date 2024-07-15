import { motion } from "framer-motion";

const SectionInformation = () => {
  return (
    <section className="mt-10 md:mt-20 max-w-[1760px] mx-auto w-full relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-0">
      <motion.div
        className="font-neue font-bold text-[32px] lg:text-[64px] leading-[32px] lg:leading-[64px] -tracking-normal text-white max-w-[800px] inline-flex items-center space-x-2 mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          No one can see the future, but we can help you{" "}
          <span className="text-[#FF532E]">predict</span>
          <img src="/dots.svg" alt="dots" className="inline-block" />
          <span className="pl-3">it</span>
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 max-w-[692px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white font-neue font-medium text-[20px] lg:text-[40px] leading-[20px] lg:leading-[40px] -tracking-normal">
          /the all in one, for everyone
        </span>
        <p className="text-[#ffffff99] font-work-sans font-thin text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] -tracking-normal">
          We have one goal - to create and bring truly useful products, services
          & tools into crypto. Useful products get used. Products that get used,
          can get monetised. Our goal is to break monopolies within crypto and
          send the revenue from monetisation straight back into $PREAI and the
          PredictingAI ecosystem.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionInformation;
