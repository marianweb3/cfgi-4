import ActionButton from "../../../../../../components/UI/common/form-controls/buttons/ActionButton";

const DeveloperApi = ({ onApplyClick }: { onApplyClick: () => void }) => {
  return (
    <div className="relative text-white z-[10] p-10 overflow-hidden">
      <div className="relative z-10">
        <div className="mb-[60px] flex flex-col gap-9">
          <h2 className="font-semibold text-[40px] leading-[44px] tracking-wider text-white">
            Wise & Naive Developer API
          </h2>
          <p className="font-medium text-[16px] leading-[22.4px] tracking-wider text-[#FFFFFF]">
            Gain access to real-time{" "}
            <span className="text-[#ffffff99]">and</span> historical data for
            any time frame you choose.
          </p>
          <p className="font-medium text-[16px] leading-[22.4px] tracking-wider text-[#FFFFFF]">
            Get scores <span className="text-[#FFFFFF99]"> and </span>{" "}
            indicators for every supported currency{" "}
            <span className="text-[#FFFFFF99]">across all time spans.</span>
          </p>
          <p className="font-medium text-[16px] leading-[22.4px] tracking-wider text-[#FFFFFF]">
            Enjoy unlimited calls, premium-level support,{" "}
            <span className="text-[#FFFFFF99]">and</span> a genuine partnership
            <span className="text-[#FFFFFF99]">
              {" "}
              focused on developing usefulness.
            </span>
          </p>
        </div>
        <ActionButton
          label="Apply Now To Become An Official $PREAIPartner"
          className="bg-orangeBg text-white"
          onClick={onApplyClick}
        />
      </div>
      <img
        src="/assets/bottom-right-ellipse.png"
        alt=""
        className="absolute bottom-0 right-0 rounded-br-[32px]"
      />
      <img
        src="/assets/factory_milk.svg"
        alt=""
        className="absolute bottom-0 right-0 rounded-br-[32px]"
      />
    </div>
  );
};

export default DeveloperApi;
