import { useState } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { StakingHeaderProps } from "./types";
import SocialButtons from "../common/form-controls/buttons/SocialButtons";

// 1. Get projectId
const projectId = "6c0f11b30530ec4b68a7958a5f5c713e";

// 2. Set chains
const mainnet = {
  chainId: 11155111,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://ethereum-sepolia-rpc.publicnode.com",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.5 },
  },
};

const StakingHeader = ({
  logo,
  links,
  showActionButton,
  className,
  theme = "default",
  fixedHeder,
}: StakingHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={` text-white my-12 w-full z-[1001] ${
        theme === "maeve" || fixedHeder ? "fixed top-0" : ""
      }`}
    >
      <div
        className={`max-w-[1600px] mx-auto w-full flex-row flex justify-between backdrop-blur-md items-center bg-[#0000001A] rounded-full border-2 border-[#FFFFFF1A] px-8 py-2 sm:pr-2 ${className}`}
      >
        <Link to="/" className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-[150px] md:w-auto" />
        </Link>
        <nav className="hidden lg:flex space-x-[50px]">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-white font-medium text-[20px] leading-[30px] tracking-tighter transition-all duration-300 ease-in-out ${
                theme === "default"
                  ? "hover:text-orangeBg"
                  : theme === "landbot"
                  ? "hover:text-[#00FF00]"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex lg:hidden space-x-4">
          <button
            onClick={handleMenuToggle}
            className={`text-white group size-10 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33]
                hover:bg-transparent transition-all duration-300 ease-in-out  ${
                  theme === "default"
                    ? "hover:border-orangeBg hover:text-orangeBg"
                    : theme === "landbot"
                    ? "hover:text-[#00FF00] hover:border-[#00FF00]"
                    : ""
                }`}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <span
                className={`block w-6 h-[2px] bg-white mb-1 transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white mt-1 transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </motion.div>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4 mx-auto sm:mx-0 mt-4 sm:mt-0 w-full sm:w-auto lg:items-center">
          <SocialButtons />
          <w3m-button />
          {/* <button className="bg-orangeBg hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg text-white px-8 py-2 rounded-full font-semibold text-[20px] tracking-tighter leading-[30px] border-2 border-[#FFFFFF33] grow">
            Connect Wallet
          </button> */}
        </div>
      </div>
      <motion.nav
        className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#000000CC] backdrop-blur-lg z-[40] flex flex-col items-center justify-center space-y-6"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        key={isOpen ? "open" : "closed"} // This key ensures the animation runs again on reopen
      >
        <IoCloseCircleOutline
          onClick={handleMenuToggle}
          className="text-white text-4xl absolute top-6 right-6 cursor-pointer"
        />
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className={`text-white font-medium text-[30px]  leading-[40px] tracking-tighter transition-all duration-300 ease-in-out
               ${
                 theme === "default"
                   ? "hover:text-orangeBg"
                   : theme === "landbot"
                   ? "hover:text-[#00FF00]"
                   : ""
               }
              `}
            variants={itemVariants}
          >
            {link.label}
          </motion.a>
        ))}
        <div className="flex flex-col items-center space-y-4 mt-8">
          <div className="flex gap-5">
            <SocialButtons />
          </div>
          <w3m-button />
          {/* <button className="bg-orangeBg hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg text-white px-8 py-2 rounded-full font-semibold text-[20px] tracking-tighter leading-[30px] border-2 border-[#FFFFFF33] grow">
            Connect Wallet
          </button> */}
        </div>
      </motion.nav>
    </header>
  );
};

export default StakingHeader;
