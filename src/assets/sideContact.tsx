import "./sideContact.css";

export default function SideContact() {
  return (
    <nav className="sideContact" aria-label="Kontakt">
      <span className="sideLine" aria-hidden="true" />

      <a
        href="https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
      </a>

      <a
        href="https://github.com/Dilemma98"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github" aria-hidden="true"></i>
      </a>

      <a href="mailto:emma.h98@outlook.com" aria-label="Skicka e-post">
        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
      </a>

      <span className="sideLine" aria-hidden="true" />
    </nav>
  );
}