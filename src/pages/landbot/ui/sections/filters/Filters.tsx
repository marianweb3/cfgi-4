import React from "react";
import SectionHeader from "../../../../../components/UI/common/titles/SectionHeader";

const filterItems = [
  { src: "/assets/landbot/videos.svg", label: "Videos" },
  { src: "/assets/landbot/gifs.svg", label: "Gifs" },
  { src: "/assets/landbot/pictures.svg", label: "Pictures" },
  { src: "/assets/landbot/links.svg", label: "Links" },
  { src: "/assets/landbot/more-options.svg", label: "Many More Options" },
];

const Filters = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mt-20 md:mt-[178px] flex flex-col justify-between gap-16 lg:px-0 px-4">
      <SectionHeader sectionNumber={4} title={"Filters"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-1">
        {filterItems.map((item, index) => (
          <div
            key={index}
            className="size-[200px] 2xl:size-[313px] flex items-center justify-center bg-[#040704] border-2 border-[#FFFFFF1A] flex-col gap-4 rounded-full"
          >
            <img src={item.src} alt={`${item.label} Icon`} />
            <span className="text-center font-work-sans font-extralight text-[24px] leading-[36px] tracking-normal text-[#FFFFFF99]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filters;
