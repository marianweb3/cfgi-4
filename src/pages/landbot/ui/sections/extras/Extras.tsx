import { motion, useInView } from "framer-motion";
import { itemVariants } from "../../../../../components/UI/common/cards/overview/framer-animation";
import { useRef } from "react";

const Extras = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="px-4 lg:px-0">
      <div className="overflow-hidden max-w-[1600px] w-full mx-auto mt-[180px] grow min-h-[500px] bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] relative flex items-center justify-center">
        <span className="font-work-sans font-thin text-[32px] leading-[32px] -tracking-wider text-white absolute top-8 left-8">
          / 07
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex flex-wrap gap-2 justify-center col-span-2 border-2 border-[#FFFFFF1A] backdrop-blur-lg mb-[18px] sm:mb-0 mt-[150px] sm:mt-20 bg-[#FFFFFF1A] py-4 px-[18px] rounded-[32px] xl:rounded-full relative z-10">
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center w-[300px] h-[200px]">
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="24.9102"
                  y="34.0535"
                  width="13.5536"
                  height="20.9464"
                  fill="white"
                />
                <rect
                  x="40.1074"
                  y="41.0356"
                  width="10.2679"
                  height="13.9643"
                  fill="white"
                />
                <rect
                  x="13"
                  y="41.0358"
                  width="10.2679"
                  height="13.9643"
                  fill="white"
                />
                <path
                  d="M31.8931 9L34.5673 17.2301H43.2209L36.22 22.3166L38.8941 30.5467L31.8931 25.4602L24.8922 30.5467L27.5663 22.3166L20.5654 17.2301H29.219L31.8931 9Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              Ranking System
            </span>
          </div>

          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center w-[300px] h-[200px]">
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.7455 39.8742C54.7506 33.3242 50.3643 27.6014 44.1739 25.8769C43.7918 16.7595 36.2977 9.4624 27.1331 9.4624C17.7202 9.4624 10.0565 17.1596 10.0491 26.6212C10.0467 29.7047 10.8609 32.707 12.4095 35.3428L10.0986 43.7165L18.4314 41.4006C20.8407 42.8334 23.5592 43.6404 26.3656 43.7621C28.076 49.9862 33.7663 54.4 40.2831 54.4C42.8842 54.4 45.4143 53.7036 47.6378 52.3806L54.6711 54.3365L52.7308 47.2653C54.0488 45.0313 54.7435 42.4888 54.7455 39.8742ZM18.847 38.5536L13.8586 39.9404L15.2422 34.9273L14.9281 34.4329C13.4479 32.1023 12.6665 29.401 12.6687 26.6212C12.6749 18.6116 19.1626 12.0955 27.1311 12.0955C35.0995 12.0955 41.5771 18.6116 41.5709 26.6212C41.5646 34.6308 35.0769 41.1469 27.1084 41.1469C24.3429 41.1469 21.6565 40.3594 19.3386 38.8697L18.847 38.5536ZM50.9174 50.5604L47.2174 49.5312L46.7229 49.8545C44.8061 51.1056 42.5796 51.7669 40.2852 51.7669C35.1634 51.7669 30.6654 48.4382 29.0745 43.6651C36.9182 42.7562 43.1642 36.4828 44.0749 28.5991C48.8219 30.2022 52.13 34.7261 52.126 39.8742C52.1242 42.1806 51.4645 44.418 50.2184 46.3438L49.8963 46.8405L50.9174 50.5604Z"
                  fill="white"
                />
                <path
                  d="M25.707 33.5361H28.3266L28.3245 36.1692H25.705L25.707 33.5361Z"
                  fill="white"
                />
                <path
                  d="M29.6455 22.916C29.6449 23.6638 29.3415 24.3539 28.7913 24.8596L25.7125 27.6902L25.71 30.903H28.3295L28.3311 28.8497L30.5583 26.8022C31.6417 25.8062 32.2639 24.3899 32.2651 22.916C32.2673 20.0121 29.9191 17.6499 27.0301 17.6499C24.1411 17.6499 21.7892 20.0121 21.7869 22.916H24.4064C24.4076 21.4641 25.5835 20.283 27.028 20.283C28.4725 20.283 29.6466 21.4641 29.6455 22.916Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              Recurring Messages
            </span>
          </div>

          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] text-white rounded-full flex flex-col gap-[10px] items-center justify-center w-[300px] h-[200px]">
            <span className="text-[32px] sm:text-[44px] font-medium leading-[44px] font-neue -tracking-wider text-[#ffffffb3]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.7988 16.316C26.1833 16.8475 23.7425 18.0267 21.6991 19.7459C19.6558 21.4652 18.075 23.6697 17.1012 26.1581C16.1274 28.6466 15.7915 31.3397 16.1243 33.9916C16.4571 36.6435 17.4479 39.1696 19.0063 41.3394C20.5647 43.5091 22.6409 45.2533 25.0455 46.4127C27.4501 47.5721 30.1064 48.1098 32.7718 47.9766C35.4373 47.8434 38.0269 47.0436 40.3043 45.6502C42.5817 44.2569 44.4743 42.3143 45.8093 40C41.0668 39.9631 36.5311 38.0503 33.1907 34.6787C29.8503 31.307 27.9759 26.7497 27.976 22C27.976 20.04 28.2376 18.126 28.7988 16.316ZM12 32C12 20.954 20.9406 12 31.97 12H35.4328L33.6994 15C32.5432 17 31.97 19.378 31.97 22C31.9697 24.0672 32.4266 26.1089 33.3077 27.9783C34.1888 29.8477 35.4724 31.4985 37.0662 32.8121C38.66 34.1257 40.5246 35.0695 42.5258 35.5758C44.5271 36.082 46.6155 36.1381 48.641 35.74L52 35.086L50.9156 38.338C48.2696 46.274 40.7908 52 31.97 52C20.9406 52 12 43.046 12 32Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="text-[16px] sm:text-[20px] font-thin leading-[20px] font-neue -tracking-wider text-[#ffffffb3] max-w-[150px] text-center">
              Night Mode
            </span>
          </div>
        </div>

        <img
          src="/assets/landbot/extras-shape.svg"
          alt=""
          className="absolute transform bottom-0"
        />
        <img
          src="/assets/landbot/bottom-middle.png"
          alt=""
          className="absolute transform w-full bottom-0"
        />
        <img
          src="/assets/landbot/extras.svg"
          alt="staking"
          className="absolute top-[1.5rem] w-[348px] z-[3]"
        />
      </div>
    </section>
  );
};

export default Extras;
