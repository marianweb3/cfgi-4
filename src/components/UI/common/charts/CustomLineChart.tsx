import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomXAxisTick from "./chart-adjustments/CustomXAxisTick";

interface CustomLineChartProps {
  data: {
    time: string;
    price: number;
  }[];
  height: number;
}

const CustomLineChart = ({ data, height }: CustomLineChartProps) => {
  const interval = Math.ceil(data.length / 10);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="#333" vertical={false} />
        <XAxis dataKey="time"    tick={({ x, y, payload, index }) => (
            <CustomXAxisTick
              x={x}
              y={y}
              payload={payload}
              index={index}
              interval={interval}
            />
          )} />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#FF7F27" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
