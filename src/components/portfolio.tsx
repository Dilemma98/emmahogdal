import "../stylesheets/portfolio.css";
import { useEffect, useState } from "react";
import Switch from "./switch";
import ProjectImage from "./projectImage";

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
  inProgress: boolean;
  privaterepo?: boolean;
  live?: boolean;
  images?: string[];
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  // const [currentImage, setCurrentImage] = useState(0);
  // const images = projects.images ?? [project.image]; 

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Fel vid hämtning:", error));
  }, []);

  // useEffect(() => {
  //   if(images.length <= 1) return
  //   const interval = setInterval(() => {
  //     setCurrentImage(prev => (prev + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [images.length]);

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const renderCard = (project: Project, key: string) => (
    <div className="projectCard" key={key}>
     <ProjectImage project={project} />
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
            Codebase not publicly available.
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
