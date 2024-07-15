import SectionHeader from "../../../../components/UI/common/titles/SectionHeader";

const UpcomingFeatures = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full flex flex-col gap-[14px] lg:px-0 px-4 relative z-10">
      <SectionHeader sectionNumber={4} title={"Upcoming Features"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="relative bg-[#141414] border-2 border-[#FFFFFF1A] overflow-hidden h-[480px] rounded-[32px]">
          <img
            src="/assets/maeve/section-4/upcoming-card.jpg"
            alt=""
            className="w-full h-[480px] rounded-[32px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md rounded-md">
            <div className="absolute top-4 left-4 flex items-center gap-4">
              <img
                src="/assets/maeve/section-4/info-block.svg"
                alt="Info Block"
              />
              <span className="text-[#FFF859] font-work-sans font-medium text-[24px] leading-[24p36pxx] -tracking-normal">
                Coming soon
              </span>
            </div>
            <div className="flex items-center justify-center h-full">
              <span className="text-white font-neue font-medium text-[58px] leading-[87px] -tracking-normal text-center">
                Lifetime Statistics
              </span>
            </div>
          </div>
        </div>
        <div className="relative bg-[#141414] border-2 border-[#FFFFFF1A] overflow-hidden h-[480px] rounded-[32px]">
          <img
            src="/assets/maeve/section-4/M.A.E.V.E.SELL.jpg"
            alt=""
            className="w-full rounded-[32px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md rounded-md">
            <div className="absolute top-4 left-4 flex items-center gap-4">
              <img
                src="/assets/maeve/section-4/info-block.svg"
                alt="Info Block"
              />
              <span className="text-[#FFF859] font-work-sans font-medium text-[24px] leading-[24p36pxx] -tracking-normal">
                Coming soon
              </span>
            </div>
            <div className="flex items-center justify-center h-full">
              <span className="text-white font-neue font-medium text-[58px] leading-[87px] -tracking-normal">
                Live Trades
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
