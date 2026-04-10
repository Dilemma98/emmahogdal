import Header from "./components/header";
import StartPage from "./pages/startpage";
import EducationPage from "./pages/educationpage";
import WorkExpPage from "./pages/workexppage";
import PortfolioPage from "./pages/portfoliopage";
import "./stylesheets/header.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import DownloadCvBtn from "./components/downloadCV";

const AppContent = () => {
  const location = useLocation();
  const showBtn = ["/education", "/workexperience"].includes(location.pathname);

  return (
    <>
      <Header />
      {showBtn && <DownloadCvBtn />}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/workexperience" element={<WorkExpPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;