import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Overview from "./scenes/overview";
import Script from "./scenes/script";
import Reports from "./scenes/reports";
import Case from "./scenes/test_case";
import Campaign from "./scenes/test_campaign";
import Suite from "./scenes/test_suite";
import Geography from "./scenes/geography";
import CampaignList from "./scenes/campaignlist";
import CaseList from "./scenes/caselist";
import SuiteList from "./scenes/suitelist";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/script" element={<Script />} />
              <Route path="/cases" element={<CaseList />} />
              <Route path="/suites" element={<SuiteList />} />
              <Route path="/campaigns" element={<CampaignList />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/test_case" element={<Case />} />
              <Route path="/test_campaign" element={<Campaign />} />
              <Route path="/test_suite" element={<Suite />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
