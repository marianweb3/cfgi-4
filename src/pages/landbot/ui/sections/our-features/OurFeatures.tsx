import SectionHeader from "../../../../../components/UI/common/titles/SectionHeader";

const OurFeatures = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mt-20 md:mt-[223px] flex flex-col justify-between gap-16 lg:px-0 px-4">
      <SectionHeader sectionNumber={3} title={"Our features"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-[32px] overflow-hidden relative bg-[#141414] border-2 border-[#FFFFFF1A] pt-6 px-7 min-h-[601px]">
          <div className="text-white relative z-30">
            <h2 className="font-neue font-medium text-[40px] leading-[60px] -tracking-normal">
              Group Entry
            </h2>
            <div className="flex items-center mb-2 gap-1">
              <img
                src="/assets/landbot/landbot-robot.svg"
                alt="Landbot Robot"
                className="size-6"
              />
              <span className="text-[#00FF00] text-xl font-bold ml-2">
                Antibot Portal
              </span>
            </div>
            <p className="text-[#FFFFFF99] font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal mb-6">
              Keep spam and bots out of your group by using our automated
              antibot portal.
            </p>
            <div className="flex items-center mb-1 gap-2">
              <img
                src="/assets/landbot/check.svg"
                alt="Landbot Robot"
                className="size-6"
              />

              <span className="text-[#00FF00] text-xl font-bold ml-2">
                Automatic Approval
              </span>
            </div>
            <p className="text-[#FFFFFF99] font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal mb-6">
              Automatically approve members to your telegram group.
            </p>
          </div>
          <div className="absolute inset-0 bg-[#141414] bg-opacity-[.8] w-full h-full z-10 rounded-[32px]"></div>

          <img
            src="/assets/landbot/sky-section-1.png"
            alt="Sky"
            className="absolute top-0 left-0 h-full w-full"
          />
          <img
            src="/assets/landbot/card-icons.png"
            alt="Sky"
            className="absolute bottom-0 right-0 object-contain w-full z-20"
          />
        </div>
        <div className="rounded-[32px] overflow-hidden relative bg-[#141414] border-2 border-[#FFFFFF1A] pt-6 px-7 min-h-[601px]">
          <div className="text-white relative z-30">
            <h2 className="font-neue font-medium text-[40px] leading-[60px] -tracking-normal">
              Welcome
            </h2>
            <div className="flex items-center mb-2 gap-1">
              <img
                src="/assets/landbot/custom-message.svg"
                alt="Landbot Robot"
                className="size-6"
              />
              <span className="text-[#00FF00] text-xl font-bold ml-2">
                Custom Messages
              </span>
            </div>
            <p className="text-[#FFFFFF99] font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal mb-6">
              Say goodbye to generic and impersonal welcome messages and make
              every group member feel welcome with customised welcome messages
            </p>
            <div className="flex items-center mb-1 gap-2">
              <img
                src="/assets/landbot/clarity_filter-solid.svg"
                alt="Landbot Robot"
                className="size-6"
              />

              <span className="text-[#00FF00] text-xl font-bold ml-2">
                Chat Cleaning
              </span>
            </div>
            <p className="text-[#FFFFFF99] font-work-sans font-extralight text-[20px] leading-[30px] -tracking-normal mb-6">
              Our bot can clean up your chat and make sure what’s important
              isn’t lost.
            </p>
          </div>
          <div className="absolute inset-0 bg-[#141414] bg-opacity-[.8] w-full h-full z-10 rounded-[32px]"></div>

          <img
            src="/assets/landbot/sky-section-1.png"
            alt="Sky"
            className="absolute top-0 left-0 h-full w-full"
          />
          <img
            src="/assets/landbot/card-2-icons.svg"
            alt="Sky"
            className="absolute bottom-0 right-0 object-contain w-full z-20"
          />
          <img
            src="/assets/landbot/clouds.png"
            alt="Sky"
            className="absolute bottom-0 left-[-20px] object-contain w-full z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
