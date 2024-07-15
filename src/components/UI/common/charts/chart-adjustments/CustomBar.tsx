import React from "react";
import { BarProps } from "recharts";

interface CustomBarProps extends BarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  payload: { color: string };
}

const CustomBar: React.FC<CustomBarProps | any> = ({
  x,
  y,
  width,
  height,
  payload,
}) => {
  const fillColor = payload.color;

  return <rect x={x} y={y} width={width} height={height} fill={fillColor} />;
};

export default CustomBar;
