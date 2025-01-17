import React, { useState } from "react";

interface SelectableBlockProps {
  icon: string;
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SelectableBlock: React.FC<SelectableBlockProps> = ({
  icon,
  title,
  description,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`relative bg-[#1B1B1BCC] border-2 ${
        isSelected ? "border-[#FF532E]" : "border-[#323232]"
      } px-[30px] py-7 grow rounded-xl flex items-center justify-between cursor-pointer overflow-hidden`}
      onClick={onSelect}
    >
      <div className="flex flex-col justify-between relative z-20">
        <span
          className={`font-work-sans font-medium text-[24px] leading-[33.6px] ${
            isSelected ? "text-white" : "text-[rgba(255,255,255,0.4)]"
          }`}
        >
          {title}
        </span>
        <span
          className={`font-work-sans text-[20px] leading-[28px] -tracking-wider ${
            isSelected ? "text-white" : "text-[rgba(255,255,255,0.4)]"
          }`}
        >
          {description}
        </span>
      </div>
      <svg
        className={`relative z-[2] ${
          isSelected ? "fill-white" : "fill-[#767676]"
        }`}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10050_4876)">
          <path d="M27 3C31.887 3 36.45 4.35417 40.419 6.57502L34.749 9.85212C32.4 8.93128 29.7 8.41669 27 8.41669C21.2713 8.41669 15.7773 10.6994 11.7265 14.7627C7.67572 18.8261 5.40001 24.3371 5.40001 30.0835C5.40001 36.0689 7.80301 41.4856 11.718 45.3856H11.745C12.798 46.4419 12.798 48.1481 11.745 49.2044C10.692 50.2606 8.96401 50.2606 7.91101 49.2315C5.40006 46.7198 3.40858 43.7352 2.05096 40.4492C0.693347 37.1632 -0.0036488 33.6405 1.43644e-05 30.0835C1.43644e-05 22.9005 2.84465 16.0117 7.90813 10.9326C12.9716 5.85343 19.8392 3 27 3ZM54 30.0835C54 37.5585 50.976 44.3294 46.089 49.2315C45.036 50.2606 43.335 50.2606 42.282 49.2044C42.0317 48.9538 41.8331 48.6562 41.6976 48.3286C41.5621 48.0009 41.4924 47.6497 41.4924 47.295C41.4924 46.9403 41.5621 46.5891 41.6976 46.2614C41.8331 45.9338 42.0317 45.6362 42.282 45.3856C44.29 43.3796 45.8821 40.9947 46.9665 38.3683C48.0509 35.7419 48.6061 32.9262 48.6 30.0835C48.6 27.3751 48.087 24.6668 47.142 22.2293L50.409 16.5417C52.65 20.6043 54 25.1543 54 30.0835Z" />
          <path d="M50.6235 6.9438L32.8472 32.8063C30.7876 35.8027 26.5141 36.1953 23.943 33.6243C21.372 31.0532 21.7646 26.7797 24.761 24.7201L50.6235 6.9438Z" />
        </g>
        <defs>
          <clipPath id="clip0_10050_4876">
            <rect width="54" height="54" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {isSelected && (
        <img
          src="/assets/orange-ellipse.png"
          alt="Orange Ellipse"
          className="absolute bottom-0 left-0 w-full"
        />
      )}
    </div>
  );
};

const SelectableBlocksContainer = () => {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const blocks = [
    {
      id: "score",
      title: "Score",
      description: "Possible choices",
      icon: "/assets/score-icon.svg",
    },
    {
      id: "value",
      title: "Value (%)",
      description: "101 possible choices",
      icon: "/assets/value-icon.svg",
    },
  ];

  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
      {blocks.map((block) => (
        <SelectableBlock
          key={block.id}
          icon={block.icon}
          title={block.title}
          description={block.description}
          isSelected={selectedBlock === block.id}
          onSelect={() => setSelectedBlock(block.id)}
        />
      ))}
    </div>
  );
};

export default SelectableBlocksContainer;
