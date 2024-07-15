import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const sections = [
  {
    title: "Predicting",
    links: [
      { href: "/home", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/whitepaper", label: "Whitepaper" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Our Products",
    links: [
      { href: "/token", label: "$XXXXX Token" },
      { href: "/index", label: "Wise & Naive™ Index" },
      { href: "/bot", label: "PredictingAI TG Bot" },
      { href: "/staking", label: "Staking / Revshare DApp" },
    ],
  },
  {
    title: "",
    links: [
      { href: "/tradingview", label: "TradingView Bot" },
      { href: "/subscription", label: "Subscription Based Platform" },
      { href: "/top100", label: "PredictingAI Top 100 Protocol" },
    ],
  },
];

const Footer = ({
  theme,
}: {
  theme?: "landbot" | "staking" | "maeve" | "default";
}) => {
  const socialButtons = [
    {
      icon: (
        <FaXTwitter
          className={` ${
            theme === "default"
              ? "group-hover:text-orangeBg"
              : theme === "landbot"
              ? "group-hover:text-[#00FF00]"
              : ""
          }`}
        />
      ),
      href: "https://twitter.com/predictingai",
    },
    {
      icon: (
        <PiTelegramLogo
          className={` ${
            theme === "default"
              ? "group-hover:text-orangeBg"
              : theme === "landbot"
              ? "group-hover:text-[#00FF00]"
              : ""
          }`}
        />
      ),
      href: "https://t.me/predictorstg",
    },
  ];

  return (
    <footer className="bg-[#141414] text-white rounded-t-[64px] border-t-2 border-[#FFFFFF1A] font-work-sans relative overflow-hidden">
      <img
        src={
          theme === "default"
            ? `/assets/footer/orange-ellipse.svg`
            : theme === "landbot"
            ? "/assets/footer/footer-green-ellipse.png"
            : ""
        }
        alt=""
        className="absolute bottom-0"
      />
      <img
        src={
          theme === "default"
            ? `/assets/footer/top-ellipse.svg`
            : theme === "landbot"
            ? "/assets/footer/footer-middle-green-ellipse.png"
            : ""
        }
        alt=""
        className="absolute right-5 top-[-50px]"
      />
      <div className="w-full py-[50px] px-10 md:px-20 flex flex-col lg:flex-row justify-between items-start gap-10 relative z-[2]">
        <div className="flex flex-col gap-[62px]">
          <div className="flex items-start flex-col gap-5">
            <img src={"/assets/logo.svg"} alt="" className="w-[248.49px]" />
            <div className="flex gap-1">
              {socialButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white group size-16 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:bg-transparent transition-all duration-300 ease-in-out ${
                    theme === "default"
                      ? "hover:border-orangeBg"
                      : theme === "landbot"
                      ? "hover:border-[#00FF00]"
                      : ""
                  }`}
                >
                  {button.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-7">
            <img src="/assets/footer/copy-of-verified-seal.svg" alt="" />
            <img
              src="/assets/footer/copy-of-assured-checkmark---gold.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 order-3 sm:order-2">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white py-[10px] pl-[10px]">
            {sections[0].title}
          </h3>
          {sections[0].links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-[20px] leading-[30px] font-medium text-[#B9B9B9] transition-text duration-300 ease-in-out py-[10px] pl-[10px]  ${
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-[126px] items-start col-span-2 order-2 sm:order-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] leading-[28px] font-semibold text-white py-[10px] pl-[10px]">
              {sections[1].title}
            </h3>
            {sections[1].links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-[20px] leading-[30px] font-medium text-[#B9B9B9] transition-text duration-300 ease-in-out py-[10px] pl-[10px]  ${
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
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] leading-[28px] font-semibold text-white py-[10px] pl-[10px]">
              {sections[2].title}
            </h3>
            {sections[2].links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-[20px] leading-[30px] font-medium text-[#B9B9B9] transition-text duration-300 ease-in-out py-[10px] pl-[10px]  ${
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
