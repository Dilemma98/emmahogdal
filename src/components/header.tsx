import { NavLink , Link} from "react-router-dom";
import "../stylesheets/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Emma Högdal</Link>
      </h1>

      <nav className="navBar">
        <ul>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/workexperience"
              className={({ isActive }) => isActive ? "active workLink" : "workLink"}
            >
              <span className="desktopText">Work Experience</span>
              <span className="mobileText">Work Exp.</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;