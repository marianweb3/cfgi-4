const Dropdown = ({ options, value, onChange }: any) => {
  return (
    <div className="relative bg-transparent rounded-xl border-2 border-[#323232]">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-transparent text-white py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none"
      >
        {options.map((option: any, index: any) => (
          <option
            key={index}
            value={option}
            className="bg-transparent text-white"
          >
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 1.414l-4 4.764a1 1 0 01-1.414 0l-4-4.764a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
