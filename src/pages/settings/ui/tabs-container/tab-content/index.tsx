import { useState, useEffect } from "react";
import { useTabs } from "../../../../../providers/TabsContext";

import Notifications from "../../tabs-content/notifications/Notifications";
import Profile from "../../tabs-content/profile/Profile";
import SignalHistorical from "../../tabs-content/signal-historical/SignalHistorical";
import APIServices from "../../tabs-content/api";
import Signals from "../../tabs-content/signals/Signals";

const TabContent = () => {
  const { activeTab } = useTabs();

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (activeTab === "api") {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "signals":
        return <Signals />;
      case "profile":
        return (
          <div className="bg-[#1C1C1C] rounded-[32px] w-full border-2 border-[#FFFFFF1A]">
            <Profile />{" "}
          </div>
        );
      case "signalHistorical":
        return <SignalHistorical />;
      case "plans":
        return <div>Plans Content</div>;
      case "notifications":
        return (
          <div className="bg-[#1C1C1C] rounded-[32px] w-full border-2 border-[#FFFFFF1A]">
            <Notifications />{" "}
          </div>
        );
      case "api":
        return <APIServices showImage={showImage} />;
      default:
        return <div>Signals Content</div>;
    }
  };

  return <div className="w-full">{renderContent()}</div>;
};

export default TabContent;
