
import "./header.css";
import portrait from "./imgs/me.jpeg";

const categories = [
  {
    name: "Backend",
    technologies: [
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    name: "Frontend",
    technologies: [
      { name: "React", icon: "devicon-react-original colored" },
      {
        name: "TypeScript",
        icon: "devicon-typescript-original colored",
      },
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain colored",
      },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
    ],
  },
 {
  name: "Databas & API",
  technologies: [
    {
      name: "Supabase",
      icon: "devicon-supabase-plain colored",
    },
    {
      name: "Swagger / OpenAPI",
      icon: "devicon-swagger-plain colored",
    },
  ],
},
  {
  name: "Verktyg",
  technologies: [
    {
      name: "Visual Studio Code",
      icon: "devicon-vscode-plain colored",
    },
    {
      name: "GitHub",
      icon: "devicon-github-original",
    },
  ],
},
];

export default function Header() {
  return (
    <header>
      <div className="header-bg" />

      <img
        className="portrait"
        src={portrait}
        alt="Emma Högdal"
      />

      <h1>Emma Högdal</h1>
      <h2>.NET Developer</h2>

      <div className="stack-categories">
        {categories.map((category) => (
          <section
            className="stack-category"
            key={category.name}
          >
            <h3>{category.name}</h3>

            <ul className="stack">
              {category.technologies.map(({ name, icon }) => (
                <li key={name} className="stack-item">
                  {icon ? (
                    <i className={icon} aria-hidden="true" />
                  ) : (
                    <span className="api-icon" aria-hidden="true">
                      API
                    </span>
                  )}

                  <span className="hide">{name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </header>
  );
}