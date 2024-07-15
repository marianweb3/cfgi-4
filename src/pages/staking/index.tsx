import Layout from "../../components/UI/Layout";
import BonusSection from "./ui/BonusSection";
import Leaderboard from "./ui/leaderboard/Leaderboard";
import StakingBanner from "./ui/staking-banner/StakingBanner";

const data = [
  { name: "Player 1", profit: "0.23131", token: "$PREAI" },
  { name: "Player 2", profit: "0.23131", token: "$PREAI" },
  { name: "Player 3", profit: "0.23131", token: "$PREAI" },
  { name: "Player 4", profit: "0.23131", token: "$PREAI" },
  { name: "Player 5", profit: "0.23131", token: "$PREAI" },
  { name: "Player 6", profit: "0.23131", token: "$PREAI" },
  { name: "Player 7", profit: "0.23131", token: "$PREAI" },
  { name: "Player 8", profit: "0.23131", token: "$PREAI" },
  { name: "Player 9", profit: "0.23131", token: "$PREAI" },
  { name: "Player 10", profit: "0.23131", token: "$PREAI" },
  { name: "Player 11", profit: "0.23131", token: "$PREAI" },
  { name: "Player 12", profit: "0.23131", token: "$PREAI" },
  { name: "Player 13", profit: "0.23131", token: "$PREAI" },
  { name: "Player 14", profit: "0.23131", token: "$PREAI" },
  { name: "Player 15", profit: "0.23131", token: "$PREAI" },
  { name: "Player 16", profit: "0.23131", token: "$PREAI" },
  { name: "Player 17", profit: "0.23131", token: "$PREAI" },
  { name: "Player 18", profit: "0.23131", token: "$PREAI" },
  { name: "Player 19", profit: "0.23131", token: "$PREAI" },
  { name: "Player 20", profit: "0.23131", token: "$PREAI" },
];

const StakingPage = () => {
  return (
    <Layout
      staking={{
        logo: "/assets/header/prei-staking.svg",
        links: [
          { label: "Telegram & Bots", href: "#" },
          { label: "Wise & Naive", href: "#" },
          { label: "Hedge Funds", href: "#" },
          { label: "Staking Contract", href: "#" },
        ],
      }}
      className="!px-4 lg:px-0"
    >
      <StakingBanner />
      <BonusSection />
      <Leaderboard data={data} />;
    </Layout>
  );
};

export default StakingPage;
