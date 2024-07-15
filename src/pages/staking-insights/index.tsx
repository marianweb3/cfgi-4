import Layout from "../../components/UI/Layout";
import Banner from "./ui/banner";
import ProductOverview from "./ui/product-overview";
import StakingContractInfo from "./ui/staking-contract-info";
import StakingOverview from "./ui/staking-overview";

const headerData = {
  logo: "/assets/header/prei-staking.svg",
  links: [
    { label: "Telegram & Bots", href: "#" },
    { label: "Wise & Naive", href: "#" },
    { label: "Hedge Funds", href: "#" },
    { label: "Staking Contract", href: "#" },
  ],
};

const StakingInsights = () => {
  return (
    <Layout staking={headerData}>
      <Banner />
      <StakingOverview />
      <StakingContractInfo />
      <ProductOverview />
    </Layout>
  );
};

export default StakingInsights;
