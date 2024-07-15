const TableHeader = () => {
  return (
    <tr className="bg-[#141414] text-[#FFFFFF] border-2 border-b border-[#FFFFFF1A] first:border-none">
      <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide sticky left-0 bg-[#141414]">
        Currency (Daily)
      </th>
      <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
        W&N
      </th>
      <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-center">
        Last 7 Days
      </th>
      <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide text-right">
        15 Minute Price
      </th>
      <th className="px-8 py-[18px] text-[20px] leading-[28px] font-semibold tracking-wide"></th>
    </tr>
  );
};

export default TableHeader;
