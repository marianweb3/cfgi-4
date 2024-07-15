import { motion } from "framer-motion";
import AISuggestion from "./sections/ai-suggestion/AISuggestion";
import BitcoinBreakdown from "./sections/bitcoin-breakdown/BitcoinBreakdown";
import CreateAlert from "./sections/create-alert/CreateAlert";
import WiseNaiveIndex from "./sections/wise-naive-index/WiseNaiveIndex";

const BitcoinDashboard = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 xl:grid-cols-[520px_1fr] gap-5 mt-12 mb-[20px]"
    >
      <WiseNaiveIndex />
      <BitcoinBreakdown />
      <AISuggestion />
      <CreateAlert />
    </motion.section>
  );
};

export default BitcoinDashboard;

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
