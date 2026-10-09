import "./App.css";
import Header from "./assets/header";
import Projects from "./assets/projects";
import ContactMe from "./assets/contactMe";
import Timeline from "./assets/timeline";
import SideContact from "./assets/sideContact";
import SideNav from "./assets/sideNav";
import CustomCursor from "./assets/customCursor";

function App() {
  return (
    <div className="App">
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