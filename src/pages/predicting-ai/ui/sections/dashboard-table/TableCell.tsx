import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const TableCell = ({ children, className }: TableCellProps) => {
  return <td className={`px-6 py-4 ${className}`}>{children}</td>;
};

export default TableCell;
