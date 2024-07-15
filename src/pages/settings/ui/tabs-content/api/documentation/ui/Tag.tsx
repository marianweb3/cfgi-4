interface TagProps {
  text: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
}

const Tag = ({ text, borderColor, bgColor, textColor }: TagProps) => {
  return (
    <div
      className={`py-[10px] px-5 rounded-full border-2 ${borderColor} ${bgColor}`}
    >
      <span
        className={`font-black ${textColor} text-[20px] leading-[22px] tracking-wider`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tag;
