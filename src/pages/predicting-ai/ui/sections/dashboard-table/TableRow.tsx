import ButtonArrowUpRight from "../../../../../components/UI/common/form-controls/buttons/ButtonArrowUpRight";
import TableCell from "./TableCell";
import Sparkline from "./chart/SparklineProps";

interface RowData {
  currency: string;
  id: string;
  wn: string;
  last7Days: { value: number }[];
  shortName: string;
  price: string;
}

interface TableRowProps {
  data: RowData;
}

const TableRow = ({ data }: TableRowProps) => {
  return (
    <tr className="bg-mainBlack text-[#FFFFFF] border-b border-[#FFFFFF1A]">
      <TableCell className="flex items-center gap-[10px] font-bold text-[20px] leading-[28px] tracking-wide z-10 sticky left-0 bg-mainBlack px-2 md:px-6">
        <img
          src={`https://assets.coincap.io/assets/icons/${data.shortName.toLocaleLowerCase()}@2x.png`}
          alt={`${data.currency} logo`}
          className="inline-block size-5"
        />
        {data.currency}
        <span className="text-[#ffffff4c] font-medium text-[20px] leading-[28px] tracking-wide md:block hidden">
          {data.shortName}
        </span>
      </TableCell>
      <TableCell className="text-center">
        <div
          className={`mx-auto w-max font-bold text-[14px] leading-[19.6px] tracking-wide px-[10px] py-1 border rounded-full ${getWnClassNames(
            data.wn
          )}`}
        >
          {data.wn}
        </div>
      </TableCell>
      <TableCell className="text-center">
        <Sparkline data={data.last7Days} />
      </TableCell>
      <TableCell className="text-right font-bold text-[20px] leading-[28px] tracking-wide">
        {data.price}
      </TableCell>
      <TableCell className="flex justify-center">
        <ButtonArrowUpRight />
      </TableCell>
    </tr>
  );
};

export default TableRow;

export const getWnClassNames = (wn: string) => {
  switch (wn) {
    case "EXPLOSIVE":
      return "text-[#FF7F27] bg-[#FEB33433] border-[#FF7F27]";
    case "GOOD":
      return "text-[#FFE227] bg-[#FEFE3344] border-[#FFE227]";
    case "WISE":
      return "text-[#7FFF27] bg-[#C7FE3333] border-[#7FFF27]";
    default:
      return "text-[#FFFFFF] bg-[#FFFFFF33] border-[#FFFFFF]";
  }
};
