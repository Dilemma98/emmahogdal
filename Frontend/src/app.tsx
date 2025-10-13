import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import StartPage from "./pages/startpage";
import EducationPage from "./pages/educationpage";
import WorkExpPage from "./pages/workexppage";
import "../src/components/stylesheets/header.css";

const App = () => {
  return (
    <Router>
      <Header /> {/* Header syns på alla sidor */}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/workexperience" element={<WorkExpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
