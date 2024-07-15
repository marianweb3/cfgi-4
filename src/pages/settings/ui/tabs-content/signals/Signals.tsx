import { useState } from "react";
import { ArrowUpRightIcon } from "../../../../../components/UI/SVGIcons";
import { FaArrowDown, FaArrowUp, FaExpandAlt } from "react-icons/fa"; // Example icons, replace with your own
import CustomDropdown from "../../../../../components/UI/common/form-controls/inputs/CustomDropdown";
import Checkbox from "../../../../../components/UI/common/form-controls/other/Checkbox";
import Counter from "../../../../../components/UI/common/form-controls/other/Counter";
import Dropdown from "../../../../../components/UI/common/form-controls/other/Dropdown";
import ToggleButton from "../../../../../components/UI/common/form-controls/other/ToggleButton";
import ToggleSwitch from "../../../../../components/UI/common/form-controls/other/ToggleSwitch";
import Modal from "../../../../../components/UI/common/modals/Modal";
import PriceAlert from "../../../../../components/UI/common/form-controls/other/PriceAlert";
import SelectableBlocksContainer from "./sections/SelectableBlocksContainer";

const tableData = [
  {
    token: "Bitcoin",
    timeSpan: "15.min",
    indicator: "W&N",
    direction: "up",
    score: "Fear",
    date: "2024-05-07 12:28:02",
    tokenLogo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    tokenSymbol: "BTC",
  },
  {
    token: "Bitcoin",
    timeSpan: "15.min",
    indicator: "W&N",
    direction: "up",
    score: "Fear",
    date: "2024-05-07 12:28:02",
    tokenLogo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    tokenSymbol: "BTC",
  },
  {
    token: "Bitcoin",
    timeSpan: "15.min",
    indicator: "W&N",
    direction: "up",
    score: "Fear1",
    date: "2024-05-07 12:28:02",
    tokenLogo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    tokenSymbol: "BTC",
  },
];

const Signals = () => {
  const [dropdownValue, setDropdownValue] = useState("Wise");
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleDropdownChange = (event: any) => {
    setDropdownValue(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col gap-10 lg:px-4">
      <div className="bg-[#141414] rounded-[32px] bg-noise border-2 border-[#FFFFFF1A] relative min-h-[404px] w-full overflow-hidden flex items-center justify-center pb-10">
        <div className="absolute inset-0 bg-[#141414] bg-opacity-[0.8] rounded-[32px]"></div>
        <img
          src="/assets/settings/signals/orange-ellipse.svg"
          alt="Orange Ellipse"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full"
        />
        <img
          src="/assets/settings/signals/factory_milk.svg"
          alt="Factory Milk"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
        <img
          src="/assets/settings/signals/alerts.svg"
          alt="Alerts"
          className="absolute top-10 left-1/2 transform -translate-x-1/2"
        />
        <div className="relative z-10 bg-[#FFFFFF1A] rounded-lg lg:rounded-full p-4 border-2 border-[#FFFFFF1A] max-w-[940px] items-center lg:items-stretch flex-wrap w-full min-h-[232px] flex flex-row gap-4 lg:gap-1 lg:backdrop-blur-lg">
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] flex flex-col items-center justify-center rounded-full grow p-4 lg:p-0">
            <span className="font-medium text-[32px] lg:text-[44px] leading-[32px] lg:leading-[44px] tracking-wider text-white">
              7
            </span>
            <span className="font-thin text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] tracking-wider text-[#ffffffb1] text-center">
              Received Alerts
            </span>
          </div>
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] flex flex-col items-center justify-center rounded-full grow p-4 lg:p-0">
            <span className="font-medium text-[32px] lg:text-[44px] leading-[32px] lg:leading-[44px] tracking-wider text-white">
              7
            </span>
            <span className="font-thin text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] tracking-wider text-[#ffffffb1] text-center">
              Received Alerts
            </span>
          </div>
          <div className="bg-[#141414] border-2 border-[#FFFFFF1A] flex flex-col items-center justify-center rounded-full grow p-4 lg:p-0">
            <span className="font-medium text-[32px] lg:text-[44px] leading-[32px] lg:leading-[44px] tracking-wider text-white">
              7
            </span>
            <span className="font-thin text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] tracking-wider text-[#ffffffb1] text-center">
              Received Alerts
            </span>
          </div>
        </div>
      </div>

      <section className="p-4">
        <div className="mb-6 flex flex-col gap-[6px] pl-4">
          <h2 className="font-semibold text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-wider text-white">
            Simple Alerts
          </h2>
          <p className="font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22.4px] tracking-wider text-[#ffffffb2]">
            Change notification and alert settings.
          </p>
        </div>
        <div className="rounded-[32px] overflow-hidden border-2 border-[#FFFFFF1A]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-[#141414] text-[#FFFFFF] border-2 border-b border-[#FFFFFF1A] first:border-none">
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide">
                    Token
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Time span
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Indicator
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Direction
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Value / Score
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Target price
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Price Cross
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Email
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Notification
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Status
                  </th>
                  <th className="px-4 py-[14px] sm:py-[18px] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-semibold tracking-wide text-center">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="bg-mainBlack text-[#FFFFFF] border-b border-[#FFFFFF1A]"
                  >
                    <td className="px-4 py-4 text-center font-semibold text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-wide">
                      <img
                        src={row.tokenLogo}
                        alt={`${row.token} logo`}
                        className="inline-block size-5"
                      />
                      {row.tokenSymbol}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-wide">
                      {row.timeSpan}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-wide">
                      {row.indicator}
                    </td>
                    <td className="px-4 py-4 flex justify-center">
                      <button className="size-8 sm:size-12 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] flex items-center justify-center rounded-full">
                        <ArrowUpRightIcon />
                      </button>
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.score === "Fear" ? (
                        <Counter />
                      ) : (
                        <Dropdown
                          options={["Wise", "Good", "Explosive", "Naive"]}
                          value={dropdownValue}
                          onChange={handleDropdownChange}
                        />
                      )}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-wide">
                      -
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-wide">
                      -
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Checkbox />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Checkbox />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <ToggleSwitch />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="size-6 sm:size-8 bg-red-500 text-white flex items-center justify-center rounded-full">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <button
        onClick={handleOpenModal}
        className="bg-orangeBg text-white px-[30px] py-[15px] rounded-full font-semibold text-[20px] tracking-tighter leading-[30px] max-w-[172px] border-2 border-[#FFFFFF1A]"
      >
        Create Alert
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={"Create a new Alert"}
      >
        <div className="grid grid-cols-2 gap-5">
          <CustomDropdown
            label="1. Country"
            options={["Select a Country", "USA", "Canada", "UK"]}
            value={"USA"}
            onChange={() => handleDropdownChange("country")}
          />
          <CustomDropdown
            label="2. Country"
            options={["Select a Country", "USA", "Canada", "UK"]}
            value={"USA"}
            onChange={() => handleDropdownChange("country")}
          />
          <CustomDropdown
            label="3. Country"
            options={["Select a Country", "USA", "Canada", "UK"]}
            value={"USA"}
            onChange={() => handleDropdownChange("country")}
          />
          <CustomDropdown
            label="4. Country"
            options={["Select a Country", "USA", "Canada", "UK"]}
            value={"USA"}
            onChange={() => handleDropdownChange("country")}
          />
        </div>
        <SelectableBlocksContainer />

        <div className="flex items-start flex-col">
          <label className="block mb-2 font-semibold text-gray-400">
            5. Percentual
          </label>
          <Counter />
        </div>
        <div className="flex items-start flex-col mt-4">
          <label className="block mb-2 font-semibold text-gray-400">
            6. Direction
          </label>
          <div className="flex items-center gap-4">
            <ToggleButton
              icon={<FaArrowDown className="-rotate-45" />}
              label="Cross Down"
              isActive={activeButton === "Cross Down"}
              onClick={() => setActiveButton("Cross Down")}
            />
            <ToggleButton
              icon={<FaArrowUp className="rotate-[45deg]" />}
              label="Cross Up"
              isActive={activeButton === "Cross Up"}
              onClick={() => setActiveButton("Cross Up")}
            />
            <ToggleButton
              icon={<FaExpandAlt />}
              label="Auto"
              isActive={activeButton === "Auto"}
              onClick={() => setActiveButton("Auto")}
            />
          </div>
        </div>
        <p className="font-work-sans text-[20px] leading-[24px] text-[#ffffff4d]">
          If the percentual value is lower than 50, you will receive an alert
          when the indicator is below the value introduced, if it’s higher, you
          will receive it when the value higher.
        </p>
        <PriceAlert />

        <div className="flex items-center justify-center flex-col mt-5">
          <div className="flex items-center gap-4 py-5">
            <Checkbox />
            <span className="text-[20px] leading-[24px] font-bold font-work-sans text-white">
              Do you want to enable the alert once created? (only for paid
              plans)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {}}
              className="bg-orangeBg text-white px-[30px] py-[15px] rounded-full font-semibold text-[20px] tracking-tighter leading-[30px] max-w-[172px] border-2 border-[#FFFFFF1A]"
            >
              Create Alert
            </button>
            <button
              onClick={() => {}}
              className="text-white px-[30px] py-[15px] font-semibold text-[20px] tracking-tighter leading-[30px] max-w-[172px] bg-[#FFFFFF0F] border-2 border-[#FFFFFF1A] rounded-full"
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Signals;
