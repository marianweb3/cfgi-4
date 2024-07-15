import { ArrowUpRightIcon } from "../../../SVGIcons";

const ButtonArrowUpRight = ({ className }: { className?: string }) => {
  return (
    <button
      className={`size-12 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] flex items-center justify-center rounded-full shrink-0 ${className}`}
    >
      <ArrowUpRightIcon />
    </button>
  );
};

export default ButtonArrowUpRight;
