import { useTabs } from "../../../../../providers/TabsContext";
import {
  SignalsSVGIcon,
  ProfileSVGIcon,
  SignalHistoricalSVGIcon,
  PlansSVGIcon,
  NotificationsSVGIcon,
  APISVGIcon,
} from "../../icons";

const tabData = [
  { id: "signals", label: "Signals", icon: <SignalsSVGIcon /> },
  { id: "profile", label: "Profile", icon: <ProfileSVGIcon /> },
  {
    id: "signalHistorical",
    label: "Signal Historical",
    icon: <SignalHistoricalSVGIcon />,
  },
  { id: "plans", label: "Plans", icon: <PlansSVGIcon /> },
  {
    id: "notifications",
    label: "Notifications",
    icon: <NotificationsSVGIcon />,
  },
  { id: "api", label: "API", icon: <APISVGIcon /> },
];

const Tabs = () => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <div className="relative z-[1] flex items-center space-x-4 rounded-full bg-[#1B1B1B] border border-[#323232] px-[10px] py-[10px] overflow-x-auto scrollbar-hide whitespace-nowrap w-full xl:w-auto">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 md:px-6 md:py-4 flex items-center space-x-[5px] md:space-x-[10px] font-work-sans font-semibold text-[20px] leading-[30px] tracking-widest rounded-full ${
            activeTab === tab.id ? "bg-[#FF532E] text-white" : "text-[#8D8D8D]"
          } transition-colors duration-300 whitespace-nowrap`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
