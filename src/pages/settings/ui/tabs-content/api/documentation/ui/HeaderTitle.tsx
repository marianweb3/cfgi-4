interface HeaderProps {
  text: string;
  subText?: string;
}

const HeaderTitle = ({ text, subText }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-white font-semibold text-[32px] leading-[35.2px] tracking-wider max-w-[750px]">
        {text}
      </h3>
      {subText && (
        <span className="text-[#ffffff99] font-thin text-[20px] leading-[32px] tracking-wider">
          {subText}
        </span>
      )}
    </div>
  );
};

export default HeaderTitle;
