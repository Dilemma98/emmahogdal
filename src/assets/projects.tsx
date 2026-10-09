import "./projects.css";
import { useEffect, useState } from "react";

interface Project {
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

function ProjectCard({ project }: { project: Project }) {
  const img = project.images?.[0] ?? project.image;

  return (
    <article className={`projectCard${project.featured ? " featured" : ""}`}>
      <div
        className="projectBg"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${img})` }}
      />
      <div className="projectContent">
        {project.inProgress && <span className="badge">Pågående</span>}
        <h4>{project.title}</h4>
        <div className="projectTags">
          {project.tags?.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.link ? (
          <a
            className="projectLink"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            {project.live ? "Live" : "GitHub"}
          </a>
        ) : (
          project.privaterepo && (
            <p className="privateNote">Kodbasen är inte offentlig.</p>
          )
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) =>
        setProjects(
          [...data].sort((a, b) => Number(b.featured) - Number(a.featured)),
        ),
      )
      .catch((error) => console.error("Fel vid hämtning:", error));
  }, []);

  return (
    <section className="projects">
      <h3>Projekt</h3>
      <div className="projectGrid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
