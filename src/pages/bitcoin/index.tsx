import { motion } from "framer-motion";
import Layout from "../../components/UI/Layout";
import BitcoinDashboard from "./ui/bitcoin-dashboard";
import BitcoinNaiveAlgorithmSection from "./ui/bitcoin-naive-algorithms";
import History from "./ui/history";
import MobileAppInstructions from "./ui/mobile-app-instructions";
import WiseNaiveAlgorithms from "./ui/wise-naive-algorithms";

const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const BitcoinPage = () => {
  return (
    <Layout>
      <div className="flex flex-col max-w-[1440px] w-full mx-auto mt-[52px] ">
        <motion.h3
          className="font-bold text-[64px] leading-[64px] tracking-wider text-white"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className="text-orangeBg">/</span> Bitcoin
        </motion.h3>
        <div className="flex flex-col gap-[100px]">
          <BitcoinDashboard />
          <History />
          <WiseNaiveAlgorithms />
          <BitcoinNaiveAlgorithmSection />
          <MobileAppInstructions />
        </div>
      </div>
    </Layout>
  );
};

export default BitcoinPage;
