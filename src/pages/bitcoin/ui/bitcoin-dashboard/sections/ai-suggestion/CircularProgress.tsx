const CircularProgress = ({ percentage }: { percentage: number }) => {
  const radius = 40;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform rotate-[-90deg]"
      >
        <circle
          stroke="#2F2F2F"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#FF7F27"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          strokeLinecap="round"
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
