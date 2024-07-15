import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import { config } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BonusSection = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [totalBonus, setTotalBonus] = useState(0);
  const [availableBonus, setAvailablebonus] = useState(0);

  const bonus = async () => {
    const res = await axios.post(`${config.api}/app/get-bonus`, {
      address: address,
    });
    const data = res.data;
    setTotalBonus(data.bonus);
    setAvailablebonus(data.available);
  };

  const onClaim = async () => {
    try {
      const res = await axios.post(`${config.api}/app/claim-bonus`, {
        address: address,
      });
      toast.success("Binus send to your wallet", {
        position: "top-center",
      });
    } catch {
      toast.error("Bonus not available", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    bonus();
  }, [address]);

  return (
    <motion.section
      className="max-w-[1600px] mx-auto w-full relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src="/assets/staking-insights/bonus-block.svg"
        alt=""
        className="absolute lg:-top-[60%] -top-[20%] lg:left-[100px] z-[2]"
        variants={itemVariants}
      />

      <motion.img
        src="/assets/staking-insights/bonus.svg"
        alt=""
        className="absolute lg:-top-[60%] -top-[20%] left-[250px] lg:left-[350px]"
        variants={itemVariants}
      />
      <motion.div
        className="bg-[#FFFFFF1A] border-2 border-[#FFFFFF1A] rounded-[32px] lg:rounded-full mt-20 px-[18px] py-4 gap-4 flex items-center relative z-10 backdrop-blur-md lg:flex-row flex-col"
        variants={itemVariants}
      >
        <div className="rounded-full bg-[#141414] border-2 border-[#FFFFFF1A] py-[30px] px-[50px] justify-between items-start flex grow w-full lg:w-auto">
          <span className="font-neue font-medium text-[24px] leading-[24px] -tracking-normal text-[#ffffff4d]">
            $PREAI
          </span>
          <div className="flex flex-col items-end">
            <span className="font-neue font-medium text-[36px] leading-[36px] -tracking-normal text-[#fff]">
              {totalBonus}
            </span>
            <span className="font-neue font-thin text-[24px] leading-[36px] -tracking-normal text-[#ffffffb4]">
              Total
            </span>
          </div>
        </div>
        <div className="size-[94px] flex items-center justify-center">
          <img
            src={"/assets/staking-insights/ion_arrow-up-sharp.svg"}
            alt=""
            className="rotate-[90deg] lg:rotate-0"
          />
        </div>
        <div className="rounded-full bg-[#141414] border-2 border-[#FFFFFF1A] py-[30px] px-[50px] justify-between items-start flex grow w-full lg:w-auto">
          <span className="font-neue font-medium text-[24px] leading-[24px] -tracking-normal text-[#ffffff4d]">
            $PREAI
          </span>
          <div className="flex flex-col items-end">
            <span className="font-neue font-medium text-[36px] leading-[36px] -tracking-normal text-[#fff]">
              {availableBonus}
            </span>
            <span className="font-neue font-thin text-[24px] leading-[36px] -tracking-normal text-[#ffffffb4]">
              Total
            </span>
          </div>
        </div>

        <motion.button
          onClick={onClaim}
          className="rounded-full py-5 lg:py-0 w-full lg:max-w-[140px] grow lg:size-[140px] border-2 border-[#FFFFFF33] bg-[#00C600] font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal text-white flex items-center justify-center cursor-pointer hover:bg-transparent hover:border-[#00C600] hover:text-[#00C600] transition-all duration-300 ease-in-out"
          whileHover="hover"
        >
          Claim
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default BonusSection;
