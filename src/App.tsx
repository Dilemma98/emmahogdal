import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/header";
import Projects from "./assets/projects";
import ContactMe from "./assets/contactMe";
import Timeline from "./assets/timeline";
import SideContact from "./assets/sideContact";
import SideNav from "./assets/sideNav";
import CustomCursor from "./assets/customCursor";

const themes = [
  "salvia", "dimbla", "plommon", "farg",
  "lavendel", "havsdimma", "persika", "skogsnatt",
  "midnatt", "aurora", "papper", "citron",
  "rosenkvarts", "sand", "mynta", "himmel", "terrakotta", "linne",
  "kol", "vinrod", "solnedgang", "neon",
];

function App() {
  const [theme, setTheme] = useState("dimbla");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      {/* <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ position: "fixed", top: 12, left: 12, zIndex: 999 }}
      >
        {themes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select> */}

      <CustomCursor />
      <section className="section hero" id="home">
        <Header />
      </section>
      <section className="section" id="projects">
        <Projects />
      </section>
      <section className="section timeline" id="experiences">
        <Timeline />
      </section>
      <section className="section" id="contactMe">
        <ContactMe />
      </section>
      <SideContact />
      <SideNav />
    </div>
  );
}

export default App;