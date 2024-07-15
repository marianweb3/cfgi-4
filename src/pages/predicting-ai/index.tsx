import Layout from "../../components/UI/Layout";
import Banner from "./ui/Banner";
import AboutWN from "./ui/sections/about-wn/AboutWN";
import DashboardTable from "./ui/sections/dashboard-table";

const PredictingAI = () => {
  return (
    <>
      <img
        src={"/assets/orange-ellipse.svg"}
        alt=""
        className="absolute top-[-20px] left-[-20px] z-[1]"
      />

      <Layout>
        <Banner />
        <DashboardTable />
        <AboutWN />
      </Layout>
    </>
  );
};

export default PredictingAI;
