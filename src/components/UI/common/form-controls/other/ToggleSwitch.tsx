import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        isOn ? "bg-[#89D924]" : "bg-[#323232]"
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
