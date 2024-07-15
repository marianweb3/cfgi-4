import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NumberInput from "../form-controls/inputs/NumberInput";
import FullScreenLoader from "./loader/FullScreenLoader";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStake: (amount: number) => void;
}

const modalVariants = {
  hidden: { opacity: 0, y: "-50%", scale: 0.9 },
  visible: { opacity: 1, y: "0%", scale: 1, transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const StakingModal = ({ isOpen, onClose, onStake }: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    if (isOpen || isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isLoading]);

  const handleStake = () => {
    if (amount <= 0) {
      toast.error("Amount must be more than zero.", {
        position: "top-center",
      });
      return;
    }

    onStake(amount);
  };

  return (
    <>
      <FullScreenLoader isLoading={isLoading} message="Processing..." />
      {isOpen && !isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            className="bg-[#1B1B1B] border-2 border-[#FFFFFF1A] rounded-xl p-6 text-white w-[90%] max-w-[500px] shadow-lg"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Stake Your Tokens</h2>
            <p className="mb-4">
              You need to confirm 2 transactions to proceed.
            </p>
            <NumberInput
              label="Amount"
              placeholder="Enter the amount"
              name="amount"
              value={amount}
              onChange={onAmountChange}
            />
            <button
              className="mt-4 w-full bg-[#FF532E] hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-full px-4 py-2 font-medium text-[20px] leading-[30px] -tracking-wider"
              onClick={handleStake}
            >
              Stake
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default StakingModal;
