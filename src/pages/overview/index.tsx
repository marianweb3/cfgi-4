import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Layout from "../../components/UI/Layout";
import LandBotCard from "../../components/UI/common/cards/overview/LandBotCard";
import MAEVECard from "../../components/UI/common/cards/overview/MAEVECard";
import WiseNaiveCard from "../../components/UI/common/cards/overview/WiseNaiveCard";
import SectionInformation from "./ui/section-information/SectionInformation";
import PREAIStakingCard from "../../components/UI/common/cards/overview/PREAIStakingCard";
import PREAICard from "../../components/UI/common/cards/overview/PREAICard";

const headerData = {
  logo: "/assets/header/predict-crypto.svg",
  links: [
    { label: "$PREAI Staking", href: "#" },
    { label: "$PREAI", href: "#" },
    { label: "Wise & Naive", href: "#" },
    { label: "LandBot", href: "#" },
    { label: "M.A.E.V.E", href: "#" },
  ],
  showActionButton: false,
  className: "max-w-[1760px] mx-auto w-full",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const OverviewPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Layout staking={headerData} hideFooter={true}>
      <img
        src="/assets/overview/waves.png"
        alt="Waves"
        className="w-full absolute left-0 top-0"
      />
      <img
        src="/assets/overview/ellipse.png"
        alt="Waves"
        className="absolute left-0 top-0"
      />
      <SectionInformation />

      <section className="relative max-w-[1760px] mx-auto w-full">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-[38] rounded-lg"></div>

        {/* Coming Soon Text */}
        <div className="absolute inset-0 flex items-center justify-center z-[39] flex-col">
          <ComingSoonIcon />
          <h2 className="font-neue font-medium lg:text-[64px] text-[40px] leading-[40px] lg:leading-[64px] text-white">
            Coming Soon
          </h2>
        </div>
        <img
          src="/assets/overview/bottom-ellipse.png"
          alt="Ellipse"
          className="absolute bottom-0 z-[37]"
        />
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 mt-[100px] max-w-[1760px] mx-auto w-full px-4 xl:px-0 relative z-30"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <PREAIStakingCard />
          <PREAICard />
          <WiseNaiveCard showButton={false} />
          <LandBotCard showButton={false} />
          <MAEVECard showButton={false} />
        </motion.div>
      </section>

      <div className="max-w-[1760px] mx-auto w-full my-[66px] flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap gap-5 px-4 md:px-0">
        <div className="flex gap-7 items-center justify-center md:justify-start">
          <img src="/assets/footer/copy-of-verified-seal.svg" alt="" />
          <img
            src="/assets/footer/copy-of-assured-checkmark---gold.svg"
            alt=""
            className="rounded-full"
          />
          <span className="font-work-sans font-thin text-[16px] md:text-[20px] leading-[20px] -tracking-normal max-w-[214px] text-[#FFFFFF4D] text-center md:text-left">
            KYC'd, Audited & Verified by{" "}
            <span className="text-[#FFFFFF80]">AssureDefi™</span>
          </span>
        </div>
        <div className="flex items-center gap-5 mt-5 md:mt-0">
          <span className="font-work-sans font-thin text-[16px] md:text-[20px] leading-[20px] -tracking-normal text-[#FFFFFF4D] text-center">
            Contact Support
          </span>
          <svg
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1.12744"
              width="62"
              height="62"
              rx="31"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
            />
            <g opacity="0.45">
              <path
                d="M37.9062 26.711C37.5781 25.9938 37.1117 25.3493 36.5164 24.7985C35.307 23.6759 33.7016 23.0571 32 23.0571C30.2984 23.0571 28.693 23.6759 27.4836 24.7962C26.8883 25.3493 26.4219 25.9915 26.0938 26.711C25.7516 27.461 25.5781 28.2556 25.5781 29.0759V29.7087C25.5781 29.854 25.6953 29.9712 25.8406 29.9712H27.1063C27.2516 29.9712 27.3687 29.854 27.3687 29.7087V29.0759C27.3687 26.7438 29.4453 24.8478 32 24.8478C34.5547 24.8478 36.6312 26.7438 36.6312 29.0759C36.6312 30.0321 36.2914 30.9321 35.6469 31.6821C35.0094 32.4251 34.1094 32.9571 33.1133 33.1821C32.5437 33.311 32.0305 33.6321 31.6672 34.0915C31.3052 34.5493 31.1079 35.1157 31.107 35.6993V36.4353C31.107 36.5806 31.2242 36.6978 31.3695 36.6978H32.6352C32.7805 36.6978 32.8977 36.5806 32.8977 36.4353V35.6993C32.8977 35.3313 33.1531 35.0079 33.507 34.9282C34.8758 34.6188 36.118 33.8806 37.0062 32.8493C37.4539 32.3267 37.8031 31.7454 38.0445 31.1149C38.2953 30.461 38.4219 29.7743 38.4219 29.0759C38.4219 28.2556 38.2484 27.4587 37.9062 26.711ZM32 38.5728C31.2758 38.5728 30.6875 39.161 30.6875 39.8853C30.6875 40.6095 31.2758 41.1978 32 41.1978C32.7242 41.1978 33.3125 40.6095 33.3125 39.8853C33.3125 39.161 32.7242 38.5728 32 38.5728Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default OverviewPage;

const ComingSoonIcon = () => {
  return (
    <svg
      width="146"
      height="153"
      viewBox="0 0 146 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3392_8054)">
        <path
          d="M93.4375 76.5V82.75C102.916 82.75 110.625 90.4594 110.625 99.9375C110.625 109.416 102.916 117.125 93.4375 117.125C83.9594 117.125 76.25 109.416 76.25 99.9375H70C70 104.573 71.3746 109.104 73.9499 112.959C76.5253 116.813 80.1857 119.817 84.4684 121.591C88.751 123.365 93.4635 123.829 98.0099 122.925C102.556 122.02 106.733 119.788 110.01 116.51C113.288 113.233 115.52 109.056 116.425 104.51C117.329 99.9635 116.865 95.251 115.091 90.9684C113.317 86.6857 110.313 83.0253 106.459 80.4499C102.604 77.8746 98.073 76.5 93.4375 76.5Z"
          fill="white"
        />
        <path
          d="M93.4375 107.75C95.5095 107.75 97.4966 106.927 98.9618 105.462C100.427 103.997 101.25 102.01 101.25 99.9377C101.25 97.8657 100.427 95.8785 98.9618 94.4134C97.4966 92.9483 95.5095 92.1252 93.4375 92.1252C92.4313 92.1252 91.4781 92.3314 90.5938 92.6783L75.3344 77.4158L70.9156 81.8346L86.1781 97.0971C85.8185 98.0012 85.6309 98.9646 85.625 99.9377C85.625 102.01 86.4481 103.997 87.9132 105.462C89.3784 106.927 91.3655 107.75 93.4375 107.75ZM110.625 67.1252H104.375V56.4189L70 36.3689L60.625 41.8377V67.1252H54.375V40.0408C54.3754 39.4951 54.5187 38.959 54.7906 38.4858C55.0625 38.0127 55.4537 37.619 55.925 37.3439L68.425 30.0502C68.903 29.7713 69.4465 29.6243 70 29.6243C70.5535 29.6243 71.097 29.7713 71.575 30.0502L109.075 51.9252C109.547 52.2005 109.938 52.5947 110.21 53.0684C110.482 53.5422 110.625 54.0789 110.625 54.6252V67.1252ZM41.875 45.2502H48.125V76.5002H41.875V45.2502Z"
          fill="white"
        />
        <path
          d="M63.75 120.222L30.925 101.075C30.4532 100.8 30.0618 100.406 29.7898 99.9318C29.5179 99.458 29.3748 98.9213 29.375 98.375V54.625H35.625V96.5813L66.9 114.825L63.75 120.222Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3392_8054"
          x="-8.8"
          y="-2.3"
          width="157.6"
          height="157.6"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="14.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3392_8054"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3392_8054"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
