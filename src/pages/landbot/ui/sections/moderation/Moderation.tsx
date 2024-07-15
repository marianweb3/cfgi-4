import React from "react";
import SectionHeader from "../../../../../components/UI/common/titles/SectionHeader";

const moderationItems = [
  { src: "/assets/landbot/ca-block-grey.svg", label: "CA Block" },
  { src: "/assets/landbot/link-grey.svg", label: "Link Block" },
  { src: "/assets/landbot/bot-block-grey.svg", label: "Bot Block" },
  { src: "/assets/landbot/pictures-grey.svg", label: "Forward Block" },
  { src: "/assets/landbot/nsfw-block-grey.svg", label: "NSFW Block" },
  { src: "/assets/landbot/anti-flood-grey.svg", label: "Anti-Flood" },
  {
    src: "/assets/landbot/message-max-length-grey.svg",
    label: "Message Max Length",
  },
  { src: "/assets/landbot/blacklist-grey.svg", label: "Blacklist" },
];

const Moderation = () => {
  return (
    <section className="mt-20 md:mt-[175px] relative lg:px-0 px-4">
      <img
        src="/assets/landbot/left-ellipse-6.png"
        alt=""
        className="absolute left-0 top-[-20%] md:block hidden"
      />
      <div className="max-w-[1600px] mx-auto w-full flex flex-col justify-between gap-16 relative z-10">
        <SectionHeader sectionNumber={6} title={"Moderation"} />
        <div className="flex flex-wrap justify-center gap-8">
          {moderationItems.map((item, index) => (
            <div
              key={index}
              className="size-[150px] overflow-hidden lg:size-[283px] flex items-center justify-center bg-[#040704] border-2 border-[#114911] flex-col gap-4 rounded-full"
            >
              <img src={item.src} alt={item.label} />
              {index <= 4 ? (
                <img
                  src="/assets/landbot/line-gor.svg"
                  alt="Line"
                  className="absolute size-[105px] lg:size-auto"
                />
              ) : null}
              <span className="font-work-sans font-extralight text-[24px] leading-[36px] tracking-normal text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/assets/landbot/right-ellipse-6.png"
        alt=""
        className="absolute right-0 top-[-20%] md:block hidden"
      />
    </section>
  );
};

export default Moderation;
