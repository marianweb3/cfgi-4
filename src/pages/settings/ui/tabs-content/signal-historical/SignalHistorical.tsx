import { ArrowUpRightIcon } from "../../../../../components/UI/SVGIcons";

const tableData = [
  {
    token: "Bitcoin",
    timeSpan: "15.min",
    indicator: "W&N",
    direction: "up",
    score: "Fear",
    date: "2024-05-07 12:28:02",
    tokenLogo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    tokenSymbol: "BTC",
  },
  {
    token: "Bitcoin",
    timeSpan: "15.min",
    indicator: "W&N",
    direction: "up",
    score: "Fear",
    date: "2024-05-07 12:28:02",
    tokenLogo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    tokenSymbol: "BTC",
  },
  {
    token: "Bitcoin",
    timeSpan: "15.min",
    indicator: "W&N",
    direction: "up",
    score: "Fear",
    date: "2024-05-07 12:28:02",
    tokenLogo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    tokenSymbol: "BTC",
  },
  // Add more data as required
];

const SignalHistorical = () => {
  return (
    <section>
      <div className="mb-6 flex flex-col gap-[6px] pl-4">
        <h2 className="font-semibold text-[40px] leading-[44px] tracking-wider text-white">
          Historical Signals
        </h2>
        <p className="font-medium text-[16px] leading-[22.4px] tracking-wider text-[#ffffffb2]">
          Check out your latest notified signals.
        </p>
      </div>
      <div className="rounded-[32px] overflow-hidden border-2 border-[#FFFFFF1A]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-[#141414] text-[#FFFFFF] border-2 border-b border-[#FFFFFF1A] first:border-none">
                <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide sticky left-0 bg-[#141414] z-10">
                  Token
                </th>
                <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
                  Time span
                </th>
                <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
                  Indicator
                </th>
                <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
                  Direction
                </th>
                <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
                  Score
                </th>
                <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="bg-mainBlack text-[#FFFFFF] border-b border-[#FFFFFF1A]"
                >
                  <td className="px-6 py-4 flex items-center gap-[10px] font-bold text-[20px] leading-[28px] tracking-wide sticky left-0 bg-mainBlack z-10">
                    <img
                      src={row.tokenLogo}
                      alt={`${row.token} logo`}
                      className="inline-block size-5"
                    />
                    {row.token}
                    <span className="text-[#ffffff4c] font-medium text-[20px] leading-[28px] tracking-wide">
                      {row.tokenSymbol}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">{row.timeSpan}</td>
                  <td className="px-6 py-4 text-center">{row.indicator}</td>
                  <td className="px-6 py-4 flex justify-center">
                    <button className="size-12 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] flex items-center justify-center rounded-full">
                      <ArrowUpRightIcon />
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">{row.score}</td>
                  <td className="px-6 py-4 text-center">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SignalHistorical;
