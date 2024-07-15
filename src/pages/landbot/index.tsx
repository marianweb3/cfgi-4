import Layout from "../../components/UI/Layout";
import LandBotBanner from "./ui/banner/Banner";
import Bots from "./ui/sections/bots/Bots";
import Extras from "./ui/sections/extras/Extras";
import Filters from "./ui/sections/filters/Filters";
import HowToGetStarted from "./ui/sections/get-started/HowToGetStarted";
import Moderation from "./ui/sections/moderation/Moderation";
import OurFeatures from "./ui/sections/our-features/OurFeatures";
import Profit from "./ui/sections/profit/Profit";
import TelegramBot from "./ui/sections/telegram-bot/TelegramBot";
import TelegramCore from "./ui/sections/telegram-core/TelegramCore";

const LandBotPage = () => {
  return (
    <Layout
      staking={{
        logo: "/assets/header/landbot.svg",
        links: [
          { label: "TG Bot", href: "#" },
          { label: "Features", href: "#" },
          { label: "Filters", href: "#" },
          { label: "Bots", href: "#" },
          { label: "Moderation", href: "#" },
          { label: "Extras", href: "#" },
        ],
      }}
      theme="landbot"
    >
      <LandBotBanner />
      <TelegramCore />
      <TelegramBot />
      <OurFeatures />
      <Filters />
      <Bots />
      <Moderation />
      <Extras />
      <Profit />
      <HowToGetStarted />
    </Layout>
  );
};

export default LandBotPage;
