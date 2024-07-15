import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(50);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-between bg-black text-white border-2 border-[#323232] rounded-xl overflow-hidden">
      <button
        className="px-2 py-1 font-bold bg-[#1B1B1B] text-white border-r-2 border-[#333] p-3"
        onClick={decrement}
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.999 12.998H4.99902V10.998H18.999V12.998Z" fill="white" />
        </svg>
      </button>
      <span className="px-4 py-1 font-bold">{count}</span>
      <button
        className="px-2 py-1 font-bold bg-[#1B1B1B] text-white border-l-2 border-[#333] p-3"
        onClick={increment}
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3994 13H13.3994V19H11.3994V13H5.39941V11H11.3994V5H13.3994V11H19.3994V13Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
