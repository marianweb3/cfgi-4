import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";
import LandBotCard from "../../../../components/UI/common/cards/overview/LandBotCard";
import MAEVECard from "../../../../components/UI/common/cards/overview/MAEVECard";
import WiseNaiveCard from "../../../../components/UI/common/cards/overview/WiseNaiveCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const ProductOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mt-20 lg:mt-[191px] max-w-[1440px] w-full mx-auto flex flex-col gap-16 mb-20 lg:mb-[200px] px-4 xl:px-0 overflow-hidden">
      <SectionHeader
        sectionNumber={3}
        title={"Learn About Our Products & Revenue Streams"}
      />
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <WiseNaiveCard />
        <LandBotCard />
        <MAEVECard />
      </motion.div>
    </section>
  );
};

export default ProductOverview;
