import { Link } from "react-router-dom";
import "../stylesheets/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1><Link to="/">Emma Högdal</Link></h1>
      <nav className="navBar">
        <ul>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li>
            <Link to="/workexperience" className="workLink">
              <span className="desktopText">Work Experience</span>
              <span className="mobileText">Work Exp.</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
