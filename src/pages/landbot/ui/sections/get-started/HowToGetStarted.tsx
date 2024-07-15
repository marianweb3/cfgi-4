import { PiTelegramLogo } from "react-icons/pi";

const HowToGetStarted = () => {
  return (
    <section className="mt-20 max-w-[1600px] mx-auto w-full rounded-[32px] lg:overflow-hidden relative min-h-[700px] lg:min-h-[500px] mb-20 lg:mb-[220px] py-20 px-10 lg:px-0 lg:py-0">
      <img
        src="/assets/landbot/bannerBG.png"
        alt="Waves"
        className="w-full h-full absolute left-0 top-0 rounded-b-[60px] object-cover"
      />
      <img
        src="/assets/landbot/forestLB.svg"
        alt="forestLB"
        className="absolute -bottom-[10%] -left-1/2 translate-x-1/2 lg:!left-[-35%] lg:top-[-20%] z-10 w-[822.9px]"
      />

      <div className="lg:absolute right-[10%] lg:transform lg:top-1/2 lg:-translate-y-1/2 z-20">
        <div className="px-8 py-10 pr-[80px] pb-[30px] flex-col gap-4 backdrop-blur-md z-10 max-w-[829px] rounded-[47.73px] landbot-card-container relative flex items-start">
          <h1 className="text-white font-neue text-[36px] leading-[36px] md:text-[64px] md:leading-[64px] font-bold relative z-10">
            How To Get Started
          </h1>
          <p className="font-work-sans font-medium text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] -tracking-tight text-white">
            Add LandBot to your group right away or get your referral code to
            earn up to 50% commission
          </p>
          <img
            src="/assets/landbot/aim-2.svg"
            alt="aim"
            className="absolute top-[-27%] right-[-7%]"
          />
        </div>
        <div className="mt-[27px] flex flex-col gap-10 max-w-[710px] relative z-20">
          <div className="flex max-w-[368px] gap-1">
            <button className="max-w-[300px] w-full button-green-shadow py-[14px] bg-[#00FF00] rounded-full font-work-sans font-medium text-[24px] leading-[36px] -tracking-normal text-white">
              t.me/landbot
            </button>
            <a
              href="https://t.me/predictorstg"
              target="_blank"
              className="text-white group shrink-0 size-16 flex items-center justify-center rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF33] grow hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg"
            >
              <PiTelegramLogo className="group-hover:text-orangeBg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
