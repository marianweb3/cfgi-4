import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const pointerVariants = {
  hidden: { rotate: 9 },
  visible: { rotate: 112, transition: { duration: 2 } },
};

const WNIndex = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="w-full pb-[130px] relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
    >
      <div className="max-w-[1600px] w-full flex items-center mx-auto lg:flex-nowrap flex-wrap lg:gap-[140px] relative">
        <img
          src="/assets/maeve/section-3/bg-sf.png"
          alt=""
          className="absolute top-0 w-full lg:w-[1165px] h-[647px] z-[0] object-cover lg:left-[-15%]"
        />
        <div className="lg:max-w-[650.12px] w-full relative ">
          <motion.img
            src="/assets/maeve/section-3/top-first.svg"
            alt=""
            className="absolute top-0"
            initial={{ opacity: 0, top: -20 }}
            animate={
              isInView ? { opacity: 1, top: 0 } : { opacity: 0, top: -20 }
            }
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="/assets/maeve/section-3/top-second.svg"
            alt=""
            className="absolute top-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, top: 0 }}
            animate={
              isInView ? { opacity: 1, top: 80 } : { opacity: 0, top: 0 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src="/assets/maeve/section-3/top-third.svg"
            alt=""
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, top: 60 }}
            animate={
              isInView ? { opacity: 1, top: 100 } : { opacity: 0, top: 60 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.img
            src="/assets/maeve/section-3/middle-left.svg"
            alt=""
            className="absolute top-[100px] left-1/4 transform -translate-x-1/2"
            initial={{ opacity: 0, left: "10%" }}
            animate={
              isInView
                ? { opacity: 1, left: "25%" }
                : { opacity: 0, left: "10%" }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.img
            src="/assets/maeve/section-3/middle-last.svg"
            alt=""
            className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, bottom: 60 }}
            animate={
              isInView
                ? { opacity: 1, bottom: 100 }
                : { opacity: 0, bottom: 60 }
            }
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.img
            src="/assets/maeve/section-3/bottom-prelast.svg"
            alt=""
            className="absolute bottom-[140px] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, bottom: 100 }}
            animate={
              isInView
                ? { opacity: 1, bottom: 140 }
                : { opacity: 0, bottom: 100 }
            }
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.img
            src="/assets/maeve/section-3/bottom-right.svg"
            alt=""
            className="absolute bottom-[10%] right-[10%]"
            initial={{ opacity: 0, right: "5%" }}
            animate={
              isInView
                ? { opacity: 1, right: "10%" }
                : { opacity: 0, right: "5%" }
            }
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.img
            src="/assets/maeve/section-3/top-third.svg"
            alt=""
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, top: 60 }}
            animate={
              isInView ? { opacity: 1, top: 100 } : { opacity: 0, top: 60 }
            }
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.img
            src="/assets/maeve/section-3/center-ellipse.svg"
            alt=""
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          />
          <motion.img
            src="/assets/maeve/section-3/label.svg"
            alt=""
            className="absolute top-[43%] z-[1] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, top: "40%" }}
            animate={
              isInView ? { opacity: 1, top: "43%" } : { opacity: 0, top: "40%" }
            }
            transition={{ duration: 0.8, delay: 1.8 }}
          />
          <motion.img
            src="/assets/maeve/section-3/ometr.svg"
            alt=""
            className="absolute w-[84%] lg:w-auto top-[4%] left-[52%] transform -translate-x-1/2"
            initial={{ opacity: 0, top: "0%" }}
            animate={
              isInView ? { opacity: 1, top: "4%" } : { opacity: 0, top: "0%" }
            }
            transition={{ duration: 0.8, delay: 2 }}
          />
          <motion.img
            src="/assets/maeve/section-3/pointer.svg"
            alt=""
            className="absolute  top-[8%] lg:top-[17%] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, rotate: 9 }}
            animate={
              isInView ? { opacity: 1, rotate: 50 } : { opacity: 0, rotate: 9 }
            }
            transition={{ duration: 2, delay: 2.2 }}
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[664px] relarive z-10 px-4 lg:px-0">
          <SectionHeader sectionNumber={3} title={"Wise & Naive Index"} />
          <motion.p
            className="text-[#FFFFFFB2] font-work-sans text-[20px] leading-[30px] font-extralight -tracking-normal"
            variants={itemVariants}
          >
            Our Wise & Naive Index is the best market scoring sentiment Index in
            crypto. Our trading calls are also{" "}
            <span className="text-white">the best in the business.</span>
          </motion.p>
          <motion.p
            className="text-[#FFFFFFB2] font-work-sans text-[20px] leading-[30px] font-extralight -tracking-normal"
            variants={itemVariants}
          >
            The beta test results speak for themselves: an average{" "}
            <span className="text-white">return of 18% per month</span> across
            all 100 tokens. No matter if a token is in a range, if a token is
            dumping, or if a token is pumping- it’s{" "}
            <span className="text-white">18% each month.</span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default WNIndex;
