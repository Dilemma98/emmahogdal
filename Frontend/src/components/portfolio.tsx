import "../stylesheets/portfolio.css";
import { useEffect, useState } from "react";
import Switch from "./switch";

// Interface for Project
interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    // Fetching projects from json-file
    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'data/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => console.error("Fel vid hämtning:", error));
    }, []);

    return(
        <div id="portfolio">
            <h2>Portfolio</h2>
            <div className="info">A selection of my recent projects, developed both independently and collaboratively during my studies.</div>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <h3>{project.title}</h3>
                        <img src={import.meta.env.BASE_URL + project.image} alt={project.title} />
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank">GitHub</a>
                    </div>
                ))}
            </div>
            <Switch />
        </div>
    );
}

export default Portfolio;