import { useEffect, useState } from "react";
import type { Project } from "./portfolio";

const ProjectImage = ({ project }: { project: Project }) => {
  const images = project.images ?? [project.image];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="imageWrapper">
        <img src={images[currentImage]} alt={project.title} />
      </div>
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 6,
          }}
        >
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentImage(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: i === currentImage ? "#009688" : "#ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectImage;
