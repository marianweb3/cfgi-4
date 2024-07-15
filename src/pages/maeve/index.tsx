import Layout from "../../components/UI/Layout";
import MaeveBanner from "./ui/banner/MaeveBanner";
import EarnWithMaeve from "./ui/earn-with-maeve/EarnWithMaeve";
import Profits from "./ui/profits/Profits";
import UpcomingFeatures from "./ui/upcoming-features/UpcomingFeatures";
import ValuationEngine from "./ui/valuation-engine/ValuationEngine";
import WNIndex from "./ui/wn-index/WNIndex";

const MaevePage = () => {
  return (
    <Layout
      staking={{
        logo: "/assets/header/maeve.svg",
        links: [
          { label: "$PREAI Staking", href: "#" },
          { label: "$PREAI", href: "#" },
          { label: "Wise & Naive", href: "#" },
          { label: "LandBot", href: "#" },
          { label: "M.A.E.V.E", href: "#" },
        ],
        className: "bg-mainBlack",
      }}
      theme="maeve"
      className=""
    >
      <MaeveBanner />
      <ValuationEngine />
      <Profits />
      <WNIndex />
      <UpcomingFeatures />
      <EarnWithMaeve />
    </Layout>
  );
};

export default MaevePage;
