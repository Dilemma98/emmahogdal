import Header from "./components/header";
import StartPage from "./pages/startpage";
import EducationPage from "./pages/educationpage";
import WorkExpPage from "./pages/workexppage";
import PortfolioPage from "./pages/portfoliopage";
import "./stylesheets/header.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DownloadCvBtn from "./components/downloadCV";
import "./app.css";
import CustomCursor from "./components/customCursor";

const AppContent = () => {
  const location = useLocation();
  const showBtn = ["/education", "/workexperience"].includes(location.pathname);

  return (
    <>
      <div className="bubble-container">
        {[
          { left: "30%", top: "2%", size: 50 },
          { left: "8%",  top: "12%", size: 120 },
          { left: "78%", top: "6%",  size: 80  },
          { left: "90%", top: "50%", size: 160 },
          { left: "4%",  top: "58%", size: 90  },
          { left: "50%", top: "20%", size: 60  },
          { left: "30%", top: "75%", size: 140 },
          { left: "40%", top: "40%", size: 60 },
          { left: "65%", top: "80%", size: 55  },
          { left: "20%", top: "40%", size: 100 },
          { left: "85%", top: "30%", size: 45  },
          { left: "55%", top: "55%", size: 75  },
          { left: "15%", top: "88%", size: 50  },
          { left: "72%", top: "42%", size: 110 },
          { left: "80%", top: "78%", size: 120 },
          { left: "2%", top: "80%", size: 80 },
        ].map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{ left: b.left, top: b.top, width: b.size, height: b.size }}
          />
        ))}
      </div>

      <Header />
      {showBtn && <DownloadCvBtn />}
      <CustomCursor />
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
