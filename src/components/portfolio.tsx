import "../stylesheets/portfolio.css";
import { useEffect, useState } from "react";
import Switch from "./switch";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
  inProgress: boolean;
  privaterepo?: boolean;
  live?: boolean;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Fel vid hämtning:", error));
  }, []);

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const renderCard = (project: Project, key: string) => (
    <div className="projectCard" key={key}>
      {project.image && <img src={project.image} alt={project.title} />}
      <h3>{project.title}</h3>
      <p className={expanded.has(key) ? "" : "truncated"}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className="readMore" onClick={() => toggleExpanded(key)}>
          {expanded.has(key) ? "▲" : "▼"}
        </button>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="ghButton">
            {project.live ? "Live" : "GitHub"}
          </a>
        )}
        {!project.link && project.privaterepo && (
          <p className="privateNote">
            Source code not publicly available.
          </p>
        )}
      </div>
      {project.inProgress && <div className="workingOnBadge">In progress</div>}
    </div>
  );

  return (
    <section id="portfolio">
      <h3 className="featuredOrNotHeader">Featured projects</h3>
      <div className="projects featured">
        {featuredProjects.map((project, i) =>
          renderCard(project, `featured-${i}`),
        )}
        {/* <div className="projectCard infoCard">
          <p className="info">
            A selection of my most relevant work including <b>fullstack</b>{" "}
            applications, <b>mobile</b> development and <b>real-time</b>{" "}
            systems.
          </p>
        </div> */}
      </div>

      <h3 className="featuredOrNotHeader">Other projects</h3>
      <div className="projects">
        {otherProjects.map((project, i) => renderCard(project, `other-${i}`))}
      </div>
      <Switch />
    </section>
  );
};

export default Portfolio;
