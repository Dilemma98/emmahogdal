import CustomCursor from "./components/customCursor";
import Switch from "./components/switch";
import Header from "./components/header";
// import ImgMe from "./components/imgMe";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/homePage";
import ProjectsPage from "./pages/projectsPage";
import ResumePage from "./pages/resumePage";
    import ContactPage from "./pages/contactPage";
    import AboutPage from "./pages/aboutPage";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const AppContent = () => {
 return(
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
    <CustomCursor />
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Sidebar />
    <Switch />
  </>
 )
}
function App() {
   return(
    <Router>
    <AppContent />
    </Router>
   );
}

export default App
