import "../stylesheets/sidebar.css";

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="line"></div>
            <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Dilemma98" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="mailto:emma.h98@outlook.com" ><i className="fa-solid fa-envelope"></i></a></li>
            </ul>
            <div className="line"></div>
        </nav>
    );
}