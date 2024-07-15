import Layout from "../../components/UI/Layout";
import { TabsProvider } from "../../providers/TabsContext";
import TabContent from "./ui/tabs-container/tab-content";
import Tabs from "./ui/tabs-container/tabs";

const SettingsPage = () => {
  return (
    <Layout>
      <TabsProvider>
        <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-10 items-start mb-[130px]">
          <Tabs />
          <TabContent />
        </div>
      </TabsProvider>
    </Layout>
  );
};

export default SettingsPage;
