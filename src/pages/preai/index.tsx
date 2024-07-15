import Layout from "../../components/UI/Layout";
import Tokenomics from "../staking-insights/ui/tokenomics/Tokenomics";
import PreaiBanner from "./ui/banner/PreaiBanner";
import HoldersBenefits from "./ui/holders-benefits/HoldersBenefits";
import MoreUtilities from "./ui/more-utilities/MoreUtilities";
import WhitePaper from "./ui/whitepaper/WhitePaper";

const PreaiPage = () => {
  return (
    <Layout
      staking={{
        logo: "/assets/header/predict-crypto.svg",
        links: [
          { label: "Utility", href: "#" },
          { label: "Whitepaper", href: "#" },
          { label: "Whitepaper", href: "#" },
        ],
      }}
      fixedHeder={true}
    >
      <PreaiBanner />
      <HoldersBenefits />
      <MoreUtilities />
      <WhitePaper />
      <Tokenomics />
    </Layout>
  );
};

export default PreaiPage;
