import { useEffect, useState } from "react";
import "./sideNav.css";

const SECTIONS = [
  { id: "home", label: "Hem" },
  { id: "projects", label: "Projekt" },
  { id: "experiences", label: "Erfarenhet" },
  { id: "contactMe", label: "Kontakta mig" },
];

export default function SideNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sideNav" aria-label="Sidor">
      <span className="navLine" aria-hidden="true" />
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? "location" : undefined}
        >
          <span className="navLabel">{label}</span>
          <span className="navDot" aria-hidden="true" />
        </a>
      ))}
      <span className="navLine" aria-hidden="true" />
    </nav>
  );
}