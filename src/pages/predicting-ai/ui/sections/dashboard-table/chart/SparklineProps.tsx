import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";

interface SparklineProps {
  data: { value: number; color?: string }[];
}

const Sparkline = ({ data }: SparklineProps) => {
  return (
    <ResponsiveContainer width={80} height={20} className={"mx-auto"}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || "#FF9F43"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Sparkline;
