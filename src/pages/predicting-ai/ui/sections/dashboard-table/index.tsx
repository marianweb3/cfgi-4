import TableData from "../../../../../constants/predicting-ai/dashboard-table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DashboardTable = () => {
  return (
    <section className="mt-20 lg:mt-[149px] relative">
      <div className="w-full h-[382px] bg-mainBlack z-[1] absolute top-[-52px] left-0"></div>
      <div className="max-w-[1440px] mx-auto w-full overflow-x-auto relative z-[2] rounded-t-[32px] border-2 border-[#FFFFFF1A]">
        <table className="min-w-full text-left ">
          <thead className="">
            <TableHeader />
          </thead>
          <tbody>
            {TableData.map((row, index) => (
              <TableRow data={row} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardTable;
