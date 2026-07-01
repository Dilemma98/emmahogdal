import "../stylesheets/projects.css";
import { useEffect, useState } from "react";
// import Switch from "./switch";
// import ProjectImage from "./projectImage";

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
  tags?: string[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`projectSlide${project.featured ? " featured" : ""}`}>
    <div
      className="projectSlideBg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${project.images?.[0] ?? project.image})` }}
    />
    <div className="projectSlideContent">
      {project.inProgress && <div className="workingOnBadge">Pågående</div>}
      <h3>{project.title}</h3>
      <div className="projectTags">
        {project.tags?.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="projectLinks">
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.live ? "Live" : "GitHub"}
          </a>
        )}
        {!project.link && project.privaterepo && (
          <p className="privateNote">Kodbas inte offentligt tillgänglig.</p>
        )}
      </div>
    </div>
  </div>
);

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
  <div className="projectGroup one">
    <h3 className="featuredOrNotHeader">Utvalda projekt</h3>
    <div className="projectSlides">
      {featuredProjects.map((project, i) => (
        <ProjectCard key={`featured-${i}`} project={project} />
      ))}
    </div>
  </div>

  <div className="projectGroup">
    <h3 className="featuredOrNotHeader">Övriga projekt</h3>
    <div className="projectSlides">
      {otherProjects.map((project, i) => (
        <ProjectCard key={`other-${i}`} project={project} />
      ))}
    </div>
  </div>
</section>
  );
};

export default Portfolio;