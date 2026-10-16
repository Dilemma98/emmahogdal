
import "./projects.css";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  liveLink?: string;
  featured: boolean;
  inProgress: boolean;
  privaterepo?: boolean;
  live?: boolean | string;
  images?: string[];
  tags?: string[];
}

const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path}`;

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  return (
    <div
      className="projectModalBackdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="projectModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="projectModalClose"
          onClick={onClose}
          aria-label="Stäng projekt"
          autoFocus
        >
          ×
        </button>

        <div className="projectModalHeader">
          {project.inProgress && (
            <span className="badge">Pågående</span>
          )}

          <p className="projectModalEyebrow">
            PROJEKT
          </p>

          <h2 id="project-modal-title">
            {project.title}
          </h2>

          <div className="projectTags">
            {project.tags?.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="projectModalBody">
          <h3>Om projektet</h3>

          <p className="projectModalDescription">
            {project.description}
          </p>

          {images.length > 0 && (
            <div className="projectModalGallery">
              <h3>Projektbilder</h3>

              <div className="projectModalImages">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={assetUrl(image)}
                    alt={`${project.title} – bild ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="projectModalLinks">
            {project.live && project.liveLink && (
              <a
                className="projectLink"
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                Live ↗
              </a>
            )}

            {project.link && (
              <a
                className="projectLink"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {!project.link && project.privaterepo && (
              <p className="privateNote">
                Kodbasen är inte offentlig.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const img = project.images?.[0] ?? project.image;

  return (
    <article
      className={`projectCard${project.featured ? " featured" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={`Visa detaljer om ${project.title}`}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <div
        className="projectBg"
        style={{
          backgroundImage: `url("${assetUrl(img)}")`,
        }}
      />

      <div className="projectContent">
        {project.inProgress && (
          <span className="badge">Pågående</span>
        )}

        <h4>{project.title}</h4>

        <div className="projectTags">
          {project.tags?.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <span className="projectCardHint">
          Utforska projektet <span aria-hidden="true">↗</span>
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Kunde inte hämta projekten.");
        }

        return res.json();
      })
      .then((data: Project[]) => {
        setProjects(
          [...data].sort(
            (a, b) =>
              Number(b.featured) - Number(a.featured),
          ),
        );
      })
      .catch((error) =>
        console.error("Fel vid hämtning:", error),
      );
  }, []);

  return (
    <section className="projects">
      <h3>Projekt</h3>

      <div className="projectGrid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
