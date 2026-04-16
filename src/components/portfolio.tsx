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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Fel vid hämtning:", error));
  }, []);

   return (
    <section id="portfolio">
      {/* <h2>Portfolio</h2> */}

      <h3 className="featuredOrNotHeader">Featured projects</h3>

      <div className="projects featured">
        {featuredProjects.map((project, i) => (
          <div className="projectCard" key={i}>
            {project.image && (
              <img src={project.image} alt={project.title} />
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.link && (
              <a className="ghButton" href={project.link} target="_blank" rel="noreferrer">
                Live
              </a>
            )}

            {project.inProgress && (
              <div className="workingOnBadge">In progress</div>
            )}
          </div>
        ))}
        <div className="projectCard infoCard">
          <p className="info">
            A selection of my most relevant work including fullstack applications,
            mobile development and real-time systems.
          </p>
        </div>
      </div>

      {/* OTHER */}
      <h3 className="featuredOrNotHeader">Other projects</h3>

      <div className="projects">
        {otherProjects.map((project, i) => (
          <div className="projectCard" key={i}>
            {project.image && (
              <img src={project.image} alt={project.title} />
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.link && (
              <a className="ghButton" href={project.link} target="_blank" rel="noreferrer">
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
