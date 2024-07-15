import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomXAxisTick from "./chart-adjustments/CustomXAxisTick";
import CustomBar from "./chart-adjustments/CustomBar";

interface CustomBarChartProps {
  data: {
    time: string;
    history: number;
    color: string;
  }[];
  height: number;
}

const CustomBarChart = ({ data, height }: CustomBarChartProps) => {
  const interval = Math.ceil(data.length / 8);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#2C2C2C33" vertical={false} />
        <XAxis
          dataKey="time"
          tick={({ x, y, payload, index }) => (
            <CustomXAxisTick
              x={x}
              y={y}
              payload={payload}
              index={index}
              interval={interval}
            />
          )}
        />
        <Tooltip />
        <Bar dataKey="history" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
