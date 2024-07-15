import {
  tokens,
  timeSpans,
  queryParameters,
} from "../../../../../../constants/settings/documentation";
import HeaderTitle from "./ui/HeaderTitle";
import KeyValue from "./ui/KeyValue";
import Tag from "./ui/Tag";

const Documentation = () => {
  return (
    <div className="flex flex-col p-[46px]">
      <h2 className="font-semibold text-[40px] leading-[44px] tracking-wider text-white mb-[46px]">
        Documentation
      </h2>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-5 items-start">
          <HeaderTitle
            text="How to use the api key?"
            subText="The API URL format is the following one:"
          />
          <div className="py-5 px-[30px] rounded-full bg-[#FF532E1A] border-2 border-orangeBg bg-[url('/assets/orange-rectangles.png')] bg-cover bg-center">
            <span className="font-medium text-[#CBCBCB] text-[20px] leading-[23.46px]">
              b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <HeaderTitle
            text="The number of results are limited to 1200 values. The query rate is limited to 1 query each 10 seconds."
            subText="You can pass the following parameters"
          />
          <Tag
            text="api_key"
            borderColor="border-orangeBg"
            bgColor="bg-[#FF532E1A]"
            textColor="text-orangeBg"
          />
        </div>

        <div className="flex flex-col gap-5 items-start">
          <HeaderTitle text="Your API key. Your current API key" />
          <Tag
            text="token"
            borderColor="border-orangeBg"
            bgColor="bg-[#FF532E1A]"
            textColor="text-orangeBg"
          />
        </div>

        <div className="flex flex-col gap-5 items-start">
          <HeaderTitle
            text="The token you want to get the historical from."
            subText="The enabled ones are the following:"
          />
          <div className="flex gap-[10px] flex-wrap">
            {tokens.map((token, index) => (
              <Tag
                key={index}
                text={token}
                borderColor="border-orangeBg"
                bgColor="bg-[#FF532E1A]"
                textColor="text-orangeBg"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <HeaderTitle text="The time span you want to get the historical from." />
          <div className="flex flex-col gap-6">
            {timeSpans.map((timeSpan) => (
              <div key={timeSpan.id} className="flex items-center gap-[10px]">
                <div className="flex items-center justify-center size-[42px] border-2 border-orangeBg bg-[#FF532E1A] rounded-full text-orangeBg text-[20px] leading-[22px] font-bold">
                  {timeSpan.id}
                </div>
                <div className="w-5 h-[2px] bg-orangeBg"></div>
                <span className="text-white font-medium text-[24px] leading-[26.4px] tracking-wider">
                  {timeSpan.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col gap-6">
            {queryParameters.map((param, index) => (
              <KeyValue
                key={index}
                keyText={param.tag}
                valueText={param.text}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <HeaderTitle text="How to use the api key?" />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
              <span className="text-[#ffffff99] font-thin text-[20px] leading-[32px] tracking-wider">
                1. Query to get the BTC data between two given dates. The period
                is established in 15 minutes.
              </span>

              <div className="py-5 px-[30px] rounded-full bg-[#FF532E1A] border-2 border-orangeBg bg-[url('/assets/orange-rectangles.png')] bg-cover bg-center">
                <span className="font-medium text-[#CBCBCB] text-[20px] leading-[23.46px]">
                  b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[#ffffff99] font-thin text-[20px] leading-[32px] tracking-wider">
                2. Query to get the latest 200 values of ETH. The period is
                established in 1 hour.
              </span>

              <div className="py-5 px-[30px] rounded-full bg-[#FF532E1A] border-2 border-orangeBg bg-[url('/assets/orange-rectangles.png')] bg-cover bg-center">
                <span className="font-medium text-[#CBCBCB] text-[20px] leading-[23.46px]">
                  b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7b3df83a4-2e6c-4a91-bb7c-6f8e9d1c24d7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
