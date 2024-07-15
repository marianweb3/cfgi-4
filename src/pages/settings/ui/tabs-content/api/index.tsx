import { useState } from "react";
import DeveloperApi from "./developer-api/DeveloperApi";
import Documentation from "./documentation/Documentation";

const APIServices = ({ showImage }: { showImage: boolean }) => {
  const [showDocumentation, setShowDocumentation] = useState(false);

  const handleButtonClick = () => {
    setShowDocumentation(true);
  };

  return (
    <div className="bg-[#1C1C1C] rounded-[32px] w-full border-2 border-[#FFFFFF1A]">
      <img
        src="/assets/big-ellipse.png"
        alt="Big Ellipse"
        className={`absolute top-0 left-0 h-full transition-all duration-300 ease-in-out ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      />
      {!showDocumentation ? (
        <>
          <DeveloperApi onApplyClick={handleButtonClick} />
        </>
      ) : (
        <Documentation />
      )}
    </div>
  );
};

export default APIServices;
