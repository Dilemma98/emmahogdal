import "../stylesheets/header.css";
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><NavLink to="home" className="darkMode" >Hem</NavLink></li>
          <li><NavLink to="projects" className={({ isActive}) => isActive ? "active" : "darkMode"} >Projekt</NavLink></li>
          <li><NavLink to="resume" className={({ isActive}) => isActive ? "active" : "darkMode"} >CV</NavLink></li>
          <li><NavLink to="contact" className={({ isActive}) => isActive ? "active" : "darkMode"} >Kontakt</NavLink></li>
          <li><NavLink to="about" className={({ isActive}) => isActive ? "active" : "darkMode"} >Om mig</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
