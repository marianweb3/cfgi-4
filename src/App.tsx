import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PredictingAI from "./pages/predicting-ai";
import SettingsPage from "./pages/settings";
import TermsAndConditions from "./pages/terms-and-conditions";
import BitcoinPage from "./pages/bitcoin";
import StakingPage from "./pages/staking";
import StakingInsights from "./pages/staking-insights";
import OverviewPage from "./pages/overview";
import LandBotPage from "./pages/landbot";
import MaevePage from "./pages/maeve";
import PreaiPage from "./pages/preai";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/predictingai" element={<PredictingAI />} />
        <Route path="/bitcoin" element={<BitcoinPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        {/* Staking  */}
        <Route path="/" element={<OverviewPage />} />
        <Route path="/staking" element={<StakingPage />} />
        <Route path="/preai" element={<PreaiPage />} />
        <Route path="/landbot" element={<LandBotPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/maeve" element={<MaevePage />} />
        <Route path="/staking-insights" element={<StakingInsights />} />
      </Routes>
    </Router>
  );
}

export default App;
