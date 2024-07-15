import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const SocialButtons = ({
  theme = "default",
}: {
  theme?: "landbot" | "staking" | "maeve" | "default";
}) => {
  return (
    <>
      <a
        href="https://twitter.com/predictingai"
        target="_blank"
        className={`text-white group size-16 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:bg-transparent transition-all duration-300 ease-in-out
              
              ${
                theme === "default"
                  ? "hover:border-orangeBg hover:text-orangeBg"
                  : theme === "landbot"
                  ? "hover:text-[#00FF00] hover:border-[#00FF00]"
                  : ""
              }`}
      >
        <FaXTwitter
          className={` ${
            theme === "default"
              ? "group-hover:text-orangeBg"
              : theme === "landbot"
              ? "group-hover:text-[#00FF00]"
              : ""
          }`}
        />
      </a>
      <a
        href="https://t.me/predictorstg"
        target="_blank"
        className={`text-white group size-16 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:bg-transparent transition-all duration-300 ease-in-out
              
              ${
                theme === "default"
                  ? "hover:border-orangeBg hover:text-orangeBg"
                  : theme === "landbot"
                  ? "hover:text-[#00FF00] hover:border-[#00FF00]"
                  : ""
              }`}
      >
        <PiTelegramLogo
          className={` ${
            theme === "default"
              ? "hover:border-orangeBg hover:text-orangeBg"
              : theme === "landbot"
              ? "hover:text-[#00FF00] hover:border-[#00FF00]"
              : ""
          }`}
        />
      </a>
    </>
  );
};

export default SocialButtons;
