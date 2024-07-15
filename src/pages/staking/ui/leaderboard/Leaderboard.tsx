// @ts-nocheck
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BrowserProvider, Contract } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { STAKE_ABI } from "../../../../abi/stake";
import { config } from "../../../../config";

const Leaderboard = ({
  data,
}: {
  data: {
    name: string;
    profit: string;
    token: string;
  }[];
}) => {

  const [visibleCount, setVisibleCount] = useState(10);
  const [stakes, setStakes] = useState([]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { walletProvider } = useWeb3ModalProvider();

  const load = async ()=>{

    if (walletProvider){

      const res = await axios.get(`${config.api}/app/stakes`);
      const data = res.data;

      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
  
      const STAKECONTRACT = new Contract(config.stakingContract, STAKE_ABI, signer);
      const rewordEth = await STAKECONTRACT.rewordBalance();
      const total = await STAKECONTRACT.contractBalance();
      const totalInt = parseFloat(ethers.formatUnits(total, 18));
      const rewordEthInt = parseFloat(ethers.formatUnits(rewordEth, 18));

      let users = [];

      data.forEach((stake)=>{

        const balanceInt = stake.amount;
    
        const percents = (balanceInt / totalInt) * 100;
        const part = (percents / 100) * rewordEthInt;
        const perDay = part / 14;
        const perSeconds = perDay / 86400;
  
        const date1 = new Date(stake.updatedAt);
        const date2 = new Date();
  
        const seconds = (date2.getTime() - date1.getTime()) / 1000;

        users.push({
          address: stake.address.slice(0, 30) + "....." + stake.address.slice(40) ,
          profit: (seconds * perSeconds).toFixed(5),
          token : "ETH"
        });
  
      });

      users = users.sort((a, b) => (b.profit - a.profit));

      setStakes(users);
      
    }
    
  }

  useEffect(()=>{
    
    load();

  },[walletProvider]);

  return (
    <section className="max-w-[1440px] mx-auto w-full mt-20">
      <div className="flex flex-wrap justify-between mb-6 px-4">
        <div>
          <h2 className="text-white text-[40px] leading-[40px] -tracking-wider font-bold font-work-sans mb-[6px]">
            Staking Leaderboard
          </h2>
          <p className="text-[#ffffffb3] text-[16px] font-medium leading-[22.4px] -tracking-wider">
            Qui aliquip et voluptate. Qui aliquip et voluptate.
          </p>
        </div>
        <button className="bg-orangeBg mt-3 md:mt-0 border-2 border-transparent hover:border-orangeBg transition-all duration-300 ease-in-out hover:bg-transparent text-white px-[30px] py-2 rounded-full flex items-center text-[20px] font-medium leading-[30px] font-work-sans gap-[10px] -tracking-wider">
          Guide{" "}
          <img
            src="/assets/ph_play-fill.svg"
            alt="ph_play-fill"
            className="size-6"
          />
        </button>
      </div>

      <div className="rounded-[32px] overflow-hidden border-2 border-[#FFFFFF1A] bg-[#141414] overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#141414] text-[#FFFFFF]">
            <tr>
              <th className="px-6 py-[18px] text-[20px] leading-[28px] -tracking-wider font-medium w-full font-work-sans">
                <img
                  src="/assets/material-symbols_leaderboard.svg"
                  alt="material-symbols_leaderboard"
                  className="w-10 h-6 float-left mr-6"
                />
                Address
              </th>
              <th className="px-6 py-[18px] pr-20 text-[20px] leading-[28px] -tracking-wider font-medium w-full font-work-sans">
                Profit
              </th>
              <th className="px-6 py-[18px] pr-20 text-[20px] leading-[28px] -tracking-wider font-medium w-full font-work-sans">
                Token
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {stakes.slice(0, 3).map((row, index) => (
                <motion.tr
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider bg-mainBlack text-[#FFFFFF] border-b border-[#FFFFFF1A] ${
                    index === 0
                      ? "player-1-drop-shadow text-[#ff532e]"
                      : index === 1
                      ? "player-2-drop-shadow !text-[#FFAE2D]"
                      : "player-3-drop-shadow !text-[#FFD72C]"
                  }`}
                >
                  <td className="px-6 py-4 flex items-center gap-[10px] font-bold text-[20px] leading-[28px] tracking-wide w-full">
                    <div
                      className={`size-10 rounded-full font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider text-white flex items-center justify-center shrink-0 ${
                        index === 0
                          ? "bg-[#ff532e]"
                          : index === 1
                          ? "bg-[#FFAE2D]"
                          : "bg-[#FFD72C]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {row.address}
                  </td>
                  <td className="px-6 py-4 pr-20 text-center font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider">
                    {row.profit}
                  </td>
                  <td className="px-6 py-4 pr-20 text-center font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider">
                    {row.token}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className="rounded-[32px] overflow-hidden border-2 border-[#FFFFFF1A] bg-[#1B1B1B] mt-6 overflow-x-auto">
        <table className="min-w-full text-left">
          <tbody>
            <AnimatePresence>
              {stakes.slice(3, visibleCount).map((row, index) => (
                <motion.tr
                  key={index + 3}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-mainBlack text-[#FFFFFF] border-b border-[#FFFFFF1A] flex"
                >
                  <td className="px-6 py-4 flex items-center gap-[10px] font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider flex-grow">
                    <span>{index + 4}</span>
                    {row.address}
                  </td>
                  <td className="px-6 py-4 pr-20 text-center font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider flex-shrink-0">
                    {row.profit}
                  </td>
                  <td className="px-6 py-4 pr-20 text-center font-work-sans font-medium text-[20px] leading-[28px] -tracking-wider flex-shrink-0">
                    {row.token}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      {visibleCount < data.length && (
        <div className="w-full mt-6 flex justify-center">
          <button
            onClick={showMore}
            className="font-work-sans font-medium text-[24px] leading-[36px] -tracking-wider text-white bg-[#FFFFFF0D] border-2 border-[#FFFFFF1A] px-[50px] py-4 rounded-full hover:border-orangeBg hover:text-orangeBg transition-all duration-300 ease-in-out hover:bg-transparent"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Leaderboard;
