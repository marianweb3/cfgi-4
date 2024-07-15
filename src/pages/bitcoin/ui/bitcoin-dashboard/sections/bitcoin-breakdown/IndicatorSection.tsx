const indicators = [
  { name: "Price Score", color: "bg-green-500" },
  { name: "Volatility", color: "bg-green-400" },
  { name: "Volume", color: "bg-yellow-500" },
  { name: "Momentum", color: "bg-yellow-400" },
  { name: "Indicators", color: "bg-orange-500" },
  { name: "Community", color: "bg-orange-400" },
  { name: "Volume Share", color: "bg-yellow-600" },
  { name: "Research", color: "bg-yellow-600" },
  { name: "Whale Watch", color: "bg-orange-500" },
  { name: "Exchanges", color: "bg-orange-600" },
];

const IndicatorSection = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-16px)] flex items-center justify-between pl-[30px] pr-5 py-5 rounded-full border border-[#FFFFFF1A]"
          >
            <span className="text-white text-[20px]">{indicator.name}</span>
            <span className={`rounded-full h-6 w-6 ${indicator.color}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndicatorSection;
