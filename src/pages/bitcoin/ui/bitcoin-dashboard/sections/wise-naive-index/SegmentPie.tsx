const SegmentPie = ({ rotate = 20 }: { rotate?: number }) => {
  const rotation = (rotate - 50) * 1.8;
  return (
    <div className="relative flex items-center justify-center">
      <img src="/assets/bitcoin/pie.svg" alt="Pie" className="w-full" />
      <img
        src="/assets/bitcoin/pointer.svg"
        alt="Pointer"
        className="absolute -bottom-[60%] size-[200px] transform transition-transform duration-300 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default SegmentPie;
