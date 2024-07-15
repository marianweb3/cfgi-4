import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PerformanceCard from "./PerformanceCard";

const data = [
  { title: "Price", time: "00:18", history: 30, color: "#FF7F27" },
  { title: "Volume", time: "01:18", history: 20, color: "#FFBF27" },
  { title: "Volume Share", time: "02:18", history: 27, color: "#FFD72A" },
  { title: "Momentum", time: "03:18", history: 18, color: "#8CC208" },
  { title: "Volatility", time: "04:18", history: 23, color: "#2D7A08" },
  { title: "Whale Watch", time: "05:18", history: 35, color: "#FF7F27" },
  { title: "Exchanges", time: "06:18", history: 25, color: "#FFD72A" },
  { title: "Indicators", time: "07:18", history: 15, color: "#8CC208" },
  { title: "Community", time: "08:18", history: 30, color: "#FF7F27" },
  { title: "Research", time: "09:18", history: 28, color: "#FFD72A" },
];

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, delayChildren: 0.3, staggerChildren: 0.3 },
  },
};

const WiseNaiveAlgorithms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="flex flex-col flex-wrap mt-[52px]">
      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
        className="text-white font-work-sans font-medium text-[40px] leading-[44px] tracking-wider mb-[60px]"
      >
        Wise & Naive Algorithms
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {data.map((d, i) => (
          <PerformanceCard
            key={i}
            data={data}
            title={d.title}
            progress={36}
            status="36% - DOWNTREND MARKET"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default WiseNaiveAlgorithms;
