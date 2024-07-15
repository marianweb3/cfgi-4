interface CustomXAxisTickProps {
  x: number;
  y: number;
  payload: { value: string };
}

const CustomXAxisTick = ({
  x,
  y,
  payload,
  index,
  interval,
}: CustomXAxisTickProps | any) => {
  if (index % interval !== 0) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y + 7})`}>
      <rect
        x={-30}
        y={-10}
        width={60}
        height={24}
        rx={12}
        fill="#1C1C1C"
        stroke="#333"
        strokeWidth={1}
      />
      <text
        x={0}
        y={0}
        dy={8}
        textAnchor="middle"
        fill="#999999"
        className="text-[12px] font-bold"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomXAxisTick;
