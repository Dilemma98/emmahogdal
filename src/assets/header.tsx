import "./header.css";
import backgroundImage from "./imgs/bgHeader.png";
import portrait from "./imgs/me.jpeg";

const stack = ["C#", ".NET", "React", "TypeScript", "JavaScript", "REST API", "PostgreSQL"];

export default function Header(){
    return(
        <header>
            <div
                className="header-bg"
                // style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <img className="portrait" src={portrait} alt="Emma Högdal" />
            <h1>Emma Högdal</h1>
            <h2>.NET Developer</h2>
            <ul className="stack">
                {stack.map((t) => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
        </header>
    );
}
