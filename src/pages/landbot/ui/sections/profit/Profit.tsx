import SectionHeader from "../../../../../components/UI/common/titles/SectionHeader";

const Profit = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mt-5 md:mt-[50px] flex items-center justify-between flex-wrap gap-16 mb-10 px-4 lg:px-">
      <div>
        <img
          src="/assets/landbot/discount.png"
          alt=""
          className="size-[450px] md:size-[775.7px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-6 max-w-[651px]">
        <SectionHeader sectionNumber={8} title={"50% Profit"} />
        <div className="flex flex-col gap-4">
          <p className="font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal text-[#FFFFFFB2]">
            With our referral system offering{" "}
            <span className="text-white">50% profit sharing</span> and an
            airdrop of revenue-sharing ‘land’ for successful referrals. We plan
            to continue our growth through affiliate, community, and influencer
            marketing, establishing itself as an essential tool in the crypto
            space.
          </p>
          <p className="font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal text-[#FFFFFFB2]">
            Opt for an{" "}
            <span className="text-[#00C600]">ad free subscription</span> or
            chose to have community friendly adverts on and{" "}
            <span className="text-white">enjoy LandBot for free!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profit;
