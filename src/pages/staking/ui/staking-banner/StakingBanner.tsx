// @ts-nocheck

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import { TOKEN_ABI } from "../../../../abi/erc20";
import { STAKE_ABI } from "../../../../abi/stake";
import { ethers } from "ethers";
import StakingModal from "../../../../components/UI/common/modals/StakingModal";
import FullScreenLoader from "../../../../components/UI/common/modals/loader/FullScreenLoader";
import { config } from "../../../../config";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StakingBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stakingBalance, setStakingBalance] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [rate, setRate] = useState(0);
  const [current, setCurrent] = useState(0);
  const [perDay, setPerDay] = useState(0);

  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const tokenAddress = config.tokenContract;
  const stakeAddress = config.stakingContract;

  const onStake = async (amount) => {
    const amountWei = ethers.parseUnits(amount.toString(), "ether");

    if (walletProvider) {
      try {
        setIsModalOpen(false);
        setIsLoading(true);
        const provider = new BrowserProvider(walletProvider);
        const signer = await provider.getSigner();
        const TokenContract = new Contract(tokenAddress, TOKEN_ABI, signer);

        const tokenBalance = await TokenContract.balanceOf(address);
        const tokenBalanceEth = parseInt(ethers.formatEther(tokenBalance));

        if (tokenBalance < amountWei) {
          setIsLoading(false);
          toast.error("Not enoungth token balance");
          return;
        }

        const STAKECONTRACT = new Contract(stakeAddress, STAKE_ABI, signer);
        const tx = await TokenContract.approve(stakeAddress, amountWei, {
          gasLimit: 290000,
        });
        await tx.wait();
        const tx2 = await STAKECONTRACT.stakeTokens(tokenAddress, amountWei, {
          gasLimit: 290000,
        });
        await tx2.wait();
        await axios.post(`${config.api}/app/stake`, {
          address: address,
          amount: amount,
          balance: tokenBalanceEth,
        });
        toast.success("Staked", {
          position: "top-center",
        });
        setIsLoading(false);
        setTimeout(() => {
          info();
        }, 5000);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        toast.error("Rejected", {
          position: "top-center",
        });
      }
    }
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const unstake = async () => {
    if (walletProvider) {
      try {
        const provider = new BrowserProvider(walletProvider);
        const signer = await provider.getSigner();
        const STAKECONTRACT = new Contract(stakeAddress, STAKE_ABI, signer);
        const balance = await STAKECONTRACT.balances(address);
        if (!balance) {
          return;
        }
        const unlock = await STAKECONTRACT.unlockTime(address);
        if (parseInt(unlock) > new Date().getTime() / 1000) {
          toast.error("Tokens are only available after unlock");
          return;
        }

        setIsLoading(true);
        const tx2 = await STAKECONTRACT.unstakeTokens(tokenAddress, balance, {
          gasLimit: 290000,
        });
        await tx2.wait();
        await axios.post(`${config.api}/app/unstake`, { address: address });
        toast.success("Unstaked", {
          position: "top-center",
        });
        setIsLoading(false);
        setTimeout(() => {
          info();
        }, 5000);
      } catch {
        setIsLoading(false);
      }
    }
  };

  const onWithdraw = async () => {
    if (walletProvider) {
      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
      const STAKECONTRACT = new Contract(stakeAddress, STAKE_ABI, signer);
      const balance = await STAKECONTRACT.balances(address);
      if (!balance) {
        return;
      }
      const unlock = await STAKECONTRACT.unlockTime(address);
      const d = new Date(parseInt(unlock) * 1000);
      const datestring =
        ("0" + d.getDate()).slice(-2) +
        "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "-" +
        d.getFullYear() +
        " " +
        ("0" + d.getHours()).slice(-2) +
        ":" +
        ("0" + d.getMinutes()).slice(-2);
      toast.success("Unlock time: " + datestring, {
        position: "top-center",
      });
    }
  };

  const info = async () => {
    if (walletProvider) {
      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
      const STAKECONTRACT = new Contract(stakeAddress, STAKE_ABI, signer);
      const balance = await STAKECONTRACT.balances(address);
      const total = await STAKECONTRACT.contractBalance();
      const totalInt = parseFloat(ethers.formatUnits(total, 18));
      setTotalStaked(totalInt);
      if (balance) {
        const unlock = await STAKECONTRACT.unlockTime(address);

        const rewordEth = await STAKECONTRACT.rewordBalance();
        const balanceInt = parseFloat(ethers.formatUnits(balance, 18));
        const rewordEthInt = parseFloat(ethers.formatUnits(rewordEth, 18));
        setStakingBalance(balanceInt);

        const startTime = (parseInt(unlock) - 604800 * 2) * 1000;
        const percents = (balanceInt / totalInt) * 100;
        const part = (percents / 100) * rewordEthInt;
        const perDay = part / 14;
        const perSeconds = perDay / 86400;

        const date1 = new Date(startTime);
        const date2 = new Date();

        const seconds = (date2.getTime() - date1.getTime()) / 1000;

        setCurrent(seconds * perSeconds);
        setPerDay(perDay);
      }
    }
  };

  useEffect(() => {
    info();
  }, [walletProvider]);

  const leftImageVariant = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
  };

  const rightImageVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
  };

  const otherImagesVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 1 } },
  };

  return (
    <section className="max-w-[1600px] mx-auto w-full bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] flex flex-col gap-6 justify-center py-10 min-h-[800px] relative overflow-hidden p-2 md:p-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariant}
        className="backdrop-blur-lg self-center rounded-[96px] p-2 md:p-[30px] border-2 border-[#FFFFFF1A] bg-[#FFFFFF1A] grid grid-cols-2 gap-4 relative z-10"
      >
        {/* My Staked Balance */}
        <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white px-[50px] pt-[55px] pb-[35px] relative rounded-full flex flex-col items-end justify-center col-span-2 lg:col-span-1">
          <div className="w-full flex justify-between items-center gap-2">
            <span className="text-[16px] sm:text-[20px] md:text-[24px] font-medium leading-[20px] sm:leading-[24px] md:leading-[24px] -tracking-wider text-[#ffffff4d]">
              $PREAI
            </span>
            <span className="text-[28px] sm:text-[32px] md:text-[36px] font-medium leading-[28px] sm:leading-[32px] md:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              {stakingBalance}
            </span>
          </div>
          <span className="text-[18px] sm:text-[22px] md:text-[24px] font-thin leading-[24px] sm:leading-[30px] md:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
            $ {stakingBalance * rate}
          </span>
          <div className="backdrop-blur-3xl text-[#ffffffb3] flex items-center gap-[10px] max-w-[255px] w-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF1A] font-work-sans text-[20px] leading-[30px] -tracking-wider rounded-full px-6 py-1 md:py-[10px] tag-shadow border-2 border-[#FFFFFF1A]">
            My Staked Balance
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_1908)">
                <path
                  d="M18 7H21C21.2652 7 21.5196 7.10536 21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H18V7ZM4 9V19H20V9H4ZM4 5V7H16V5H4ZM15 13H18V15H15V13Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1908">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Total Staked */}
        <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white px-[50px] pt-[55px] pb-[35px] relative rounded-full flex flex-col items-end justify-center col-span-2 lg:col-span-1">
          <div className="w-full flex justify-between items-center gap-2">
            <span className="text-[16px] sm:text-[20px] md:text-[24px] font-medium leading-[20px] sm:leading-[24px] md:leading-[24px] -tracking-wider text-[#ffffff4d]">
              $PREAI
            </span>
            <span className="text-[28px] sm:text-[32px] md:text-[36px] font-medium leading-[28px] sm:leading-[32px] md:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              {totalStaked}
            </span>
          </div>
          <span className="text-[18px] sm:text-[22px] md:text-[24px] font-thin leading-[24px] sm:leading-[30px] md:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
            $ {totalStaked * rate}
          </span>
          <div className="backdrop-blur-3xl text-[#ffffffb3] max-w-[205px] w-full flex items-center gap-[10px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF1A] font-work-sans text-[20px] leading-[30px] -tracking-wider rounded-full px-6 py-1 md:py-[10px] tag-shadow border-2 border-[#FFFFFF1A]">
            Total Staked
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_1921)">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 7.522 4.943 3.732 9 2.458V4.582C7.28092 5.28005 5.8578 6.55371 4.97406 8.18512C4.09032 9.81652 3.80088 11.7043 4.15525 13.5255C4.50963 15.3468 5.48579 16.9883 6.91676 18.1693C8.34774 19.3503 10.1446 19.9975 12 20C13.5938 20 15.1513 19.524 16.4728 18.6332C17.7944 17.7424 18.82 16.4773 19.418 15H21.542C20.268 19.057 16.478 22 12 22ZM21.95 13H11V2.05C11.329 2.017 11.663 2 12 2C17.523 2 22 6.477 22 12C22 12.337 21.983 12.671 21.95 13ZM13 4.062V11H19.938C19.7154 9.23761 18.9129 7.59934 17.6568 6.34324C16.4007 5.08713 14.7624 4.28459 13 4.062Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1921">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Profit Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex flex-wrap gap-4 justify-center col-span-2 relative border-2 border-[#FFFFFF1A] bg-[#FFFFFF1A] py-4 px-[18px] rounded-[32px] xl:rounded-full">
          {/* Current */}
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white px-[50px] py-[34px] rounded-full flex flex-col items-end justify-center md:min-w-[324px]">
            <span className="text-[36px] font-medium leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              {current.toFixed(5)}
            </span>
            <span className="text-[24px] font-thin leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              Current
            </span>
          </div>

          {/* 24h */}
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white px-[50px] py-[34px] rounded-full flex flex-col items-end justify-center md:min-w-[324px]">
            <span className="sm:text-[36px] text-[28px] leading-[28px] font-medium sm:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              {perDay.toFixed(5)}
            </span>
            <span className="text-[24px] font-thin leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              24h
            </span>
          </div>

          {/* Week */}
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white px-[50px] py-[34px] rounded-full flex flex-col items-end justify-center md:min-w-[324px]">
            <span className="sm:text-[36px] text-[28px] leading-[28px] font-medium sm:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              {(perDay * 7).toFixed(5)}
            </span>
            <span className="text-[24px] font-thin leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              Week
            </span>
          </div>

          {/* Month */}
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white px-[50px] py-[34px] rounded-full flex flex-col items-end justify-center md:min-w-[324px]">
            <span className="sm:text-[36px] text-[28px] leading-[28px] font-medium sm:leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              {(perDay * 30).toFixed(5)}
            </span>
            <span className="text-[24px] font-thin leading-[36px] font-neue -tracking-wider text-[#ffffffb3]">
              Month
            </span>
          </div>

          <div className="text-[#ffffffb3] flex items-center gap-[10px] max-w-[255px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-2xl bg-[#FFFFFF1A] z-20 font-work-sans text-[20px] leading-[30px] -tracking-wider rounded-full px-6 py-1 md:py-[10px] tag-shadow border-2 border-[#FFFFFF1A]">
            Profit
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 7.05L16.95 12L12 16.95L7.05 12L12 7.05ZM12 9.879L9.879 12L12 14.121L14.121 12L12 9.879Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-4 max-w-[1440px] w-full mx-auto relative z-10"
      >
        <motion.button
          variants={item}
          onClick={onOpenModal}
          className="bg-[#FF532E] hover:border-orangeBg hover:bg-transparent hover:text-orangeBg transition-all duration-300 ease-in-out rounded-full border-2 border-[#FFFFFF33] px-[50px] py-4 grow flex items-center justify-between font-work-sans text-white font-medium text-[24px] leading-[36px] -tracking-wider"
        >
          Stake
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 24V11.775L12.6 15.675L10.5 13.5L18 6L25.5 13.5L23.4 15.675L19.5 11.775V24H16.5ZM6 30V27H30V30H6Z"
              fill="white"
            />
          </svg>
        </motion.button>
        <motion.button
          onClick={unstake}
          variants={item}
          className="bg-[#FFFFFF0D] hover:border-orangeBg hover:bg-transparent hover:text-orangeBg transition-all duration-300 ease-in-out rounded-full border-2 border-[#FFFFFF33] px-[50px] py-4 backdrop-blur-lg grow flex items-center justify-between font-work-sans text-white font-medium text-[24px] leading-[36px] -tracking-wider"
        >
          Unstake
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 24L10.5 16.5L12.6 14.325L16.5 18.225V6H19.5V18.225L23.4 14.325L25.5 16.5L18 24ZM6 30V27H30V30H6Z"
              fill="white"
            />
          </svg>
        </motion.button>
        <motion.button
          variants={item}
          onClick={onWithdraw}
          className="bg-[#FFFFFF0D]  hover:border-orangeBg hover:bg-transparent hover:text-orangeBg transition-all duration-300 ease-in-out rounded-full border-2 border-[#FFFFFF33] px-[50px] py-4 backdrop-blur-lg grow flex items-center justify-between font-work-sans text-white font-medium text-[24px] leading-[36px] -tracking-wider"
        >
          Withdraw
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 24L10.5 16.5L12.6 14.325L16.5 18.225V6H19.5V18.225L23.4 14.325L25.5 16.5L18 24ZM6 30V22.5H9V27H27V22.5H30V30H6Z"
              fill="white"
            />
          </svg>
        </motion.button>
      </motion.div>

      <motion.img
        initial="hidden"
        animate="visible"
        variants={leftImageVariant}
        src="/assets/top-left-ellipse.png"
        alt="top left ellipse"
        className="absolute top-0 left-0"
      />
      <motion.img
        initial="hidden"
        animate="visible"
        variants={rightImageVariant}
        src="/assets/bottom-right-green-ellipse.png"
        alt="bottom right green ellipse"
        className="absolute bottom-0 right-0"
      />
      <motion.img
        initial="hidden"
        animate="visible"
        variants={otherImagesVariant}
        src="/assets/donute.png"
        alt="donut"
        className="absolute bottom-0 right-0"
      />
      <motion.img
        initial="hidden"
        animate="visible"
        variants={otherImagesVariant}
        src="/assets/Union.png"
        alt="union"
        className="absolute top-0 left-0"
      />
      <motion.img
        initial="hidden"
        animate="visible"
        variants={otherImagesVariant}
        src="/assets/staking.svg"
        alt="staking"
        className="absolute top-[3rem] left-1/2 transform -translate-x-1/2"
      />
      <StakingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStake={onStake}
      />
      <FullScreenLoader isLoading={isLoading} message="Processing..." />
      <ToastContainer />
    </section>
  );
};

export default StakingBanner;
