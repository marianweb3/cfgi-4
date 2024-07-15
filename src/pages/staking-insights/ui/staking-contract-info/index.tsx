import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";

const stakingContractData = [
  { number: "1", text: "$PREAI Entry Requirement" },
  { number: "2", text: "Weeks Staking Length", highlight: true },
  { number: "", text: "Fair Payout System" },
  { number: "ETH", text: "Rewards", highlight: true },
  { number: "", text: "Claim or Accumulate" },
];

const StakingContractInfo = () => {
  return (
    <section className="mt-20 lg:mt-[191px] max-w-[1440px] w-full mx-auto px-4 lg:px-0 overflow-hidden">
      <SectionHeader sectionNumber={2} title={"$PREAI Staking Contract"} />
      <div className="mt-10 md:mt-16 flex lg:flex-row flex-col gap-[74px] items-start">
        <div className="lg:max-w-[619px] bg-[#141414] rounded-[32px] bg-noise border-2 border-[#FFFFFF1A] relative w-full overflow-hidden flex items-center justify-center py-6 px-8">
          <div className="absolute inset-0 bg-[#141414] bg-opacity-[0.8] rounded-[32px] "></div>
          <div className="flex flex-col relative z-10 w-full">
            {stakingContractData.map((data, index) => (
              <div
                className="flex justify-between items-center py-4 w-full border-t-2 border-[#FFFFFF1A] first:border-none"
                key={index}
              >
                <span className="font-work-sans font-light text-[24px] leading-[36px] -tracking-wider text-white">
                  <span className="text-[#FF532E]">{data.number}</span>{" "}
                  {data.text}
                </span>
                <div className="size-[10px] rounded-full bg-[#FF532E]" />
              </div>
            ))}
          </div>

          <img
            src="/assets/staking-insights/right-center-ellipse.png"
            alt="Ellipse"
            className="absolute right-0 h-full"
          />
        </div>
        <StakingInfo />
      </div>
    </section>
  );
};

export default StakingContractInfo;

const StakingInfo = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 relative">
      <img
        src="/assets/staking-insights/moving-star.png"
        alt="Moving Star"
        className="absolute right-0"
      />
      <h3 className="font-neue font-medium text-[40px] leading-[40px] -tracking-wider text-white mb-6">
        /how it works?
      </h3>
      <div className="font-work-sans font-thin text-[20px] leading-[30px] -tracking-wider text-white mb-8">
        <p>Stake $PREAI to get rewarded in ETH from our revenue.</p>
        <p>Send it into the DApp for at least 2 weeks.</p>
      </div>
      <ul className="list-disc space-y-2 mb-10 border-l border-[#FFFFFF40] pl-[64px]">
        <li className="text-[#fff] font-thin text-[20px] leading-[30px] -tracking-wider font-work-sans">
          If your tokens are 1% of the staking pool, you get 1% of the rewards.
        </li>
        <li className="text-[#fff] font-thin text-[20px] leading-[30px] -tracking-wider font-work-sans">
          If your tokens are 0.395% of the staking pool, you get 0.395% of the
          rewards.
        </li>
        <li className="text-[#fff] font-thin text-[20px] leading-[30px] -tracking-wider font-work-sans">
          If your tokens are 34% of the staking pool, you get 34% of the
          rewards.
        </li>
      </ul>
      <ul className="list-disc space-y-2 border-l border-[#FFFFFF40] ">
        <li className="text-[#ffffffb3] text-[24px] leading-[36px] font-medium -tracking-wider flex gap-1 pl-[32px]">
          If
          <span className="text-[#FF532E]">1,000,000</span>
          tokens are staked:
        </li>
        <li className="text-[#ffffffb3] font-thin text-[20px] leading-[30px] -tracking-wider ml-[64px]">
          Having <span className="text-white font-normal">10,000</span> tokens
          staked would give you{" "}
          <span className="text-white font-normal">1%</span> of the rewards.
        </li>
        <li className="text-[#ffffffb3] text-[20px] font-thin leading-[30px] -tracking-wide ml-[64px]">
          Having <span className="text-white font-normal">1,000</span> tokens
          staked would give you 0.1% of the rewards.
        </li>
        <li className="text-[#ffffffb3] text-[20px] font-thin leading-[30px] -tracking-wide ml-[64px]">
          Everything is split equally.
        </li>
      </ul>
    </div>
  );
};
