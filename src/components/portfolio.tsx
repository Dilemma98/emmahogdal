import "../stylesheets/portfolio.css";
import { useEffect, useState } from "react";
import Switch from "./switch";

// Interface for Project
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
  inProgress: boolean;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [expandedOther, setExpandedOther] = useState<Set<number>>(new Set());

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Fel vid hämtning:", error));
  }, []);

  const toggleExpanded = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };
  const toggleExpandedOther = (i: number) => {
    setExpandedOther((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="portfolio">
      {/* <h2>Portfolio</h2> */}

      <h3 className="featuredOrNotHeader">Featured projects</h3>

      <div className="projects featured">
        {featuredProjects.map((project, i) => (
          <div className="projectCard" key={i}>
            {project.image && <img src={project.image} alt={project.title} />}

            <h3>{project.title}</h3>
            <p className={expanded.has(i) ? "" : "truncated"}>
              {project.description}
            </p>
            <div style={{display : "flex", flexDirection: "column"}}>
              <button className="readMore" onClick={() => toggleExpanded(i)}>
                {expanded.has(i) ? "▲": "▼" }
              </button>

              {project.link && (
                <a
                  className="ghButton"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              )}
            </div>

            {project.inProgress && (
              <div className="workingOnBadge">In progress</div>
            )}
          </div>
        ))}
        <div className="projectCard infoCard">
          <p className="info">
            A selection of my most relevant work including <b>fullstack</b>{" "}
            applications, <b> mobile</b> development and <b>real-time</b>{" "}
            systems.
          </p>
        </div>
      </div>

      {/* OTHER */}
      <h3 className="featuredOrNotHeader">Other projects</h3>

      <div className="projects">
        {otherProjects.map((project, i) => (
          <div className="projectCard" key={i}>
            {project.image && <img src={project.image} alt={project.title} />}

            <h3>{project.title}</h3>
             <p className={expandedOther.has(i) ? "" : "truncated"}>
              {project.description}
            </p>
                        <div style={{display : "flex", flexDirection: "column"}}>
              <button className="readMore" onClick={() => toggleExpanded(i)}>
                {expanded.has(i) ? "▲": "▼" }
              </button>
            </div>

            {project.link && (
              <a
                className="ghButton"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
      <Switch />
    </section>
  );
};

export default Portfolio;
