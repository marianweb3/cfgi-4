interface KeyValueProps {
  keyText: string;
  valueText: string;
}

const KeyValue = ({ keyText, valueText }: KeyValueProps) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-center py-[10px] px-5 border-2 border-[#FF532E] bg-[#FF532E1A] rounded-full text-[#FF532E] text-[20px] leading-[22px] font-bold">
        {keyText}
      </div>
      <span className="text-white font-medium text-[24px] leading-[26.4px] tracking-wider max-w-[794px]">
        {valueText}
      </span>
    </div>
  );
};

export default KeyValue;
