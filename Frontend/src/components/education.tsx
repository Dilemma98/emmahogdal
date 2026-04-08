import { useEffect, useState } from "react";
import "../stylesheets/education.css";

interface Education {
  period: string;
  title: string;
  type: string;
  description: string;
  school: string;
  current?: boolean;
}

const Education = () => {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error("Fel vid hämtning", error));
  }, []);

  const sorted = [...education].reverse();

  return (
    <div id="education">
      <h2>Education</h2>
      <div className="timeline-wrapper">
        <div className="timeline-track">
          <div className="timeline-line" />⦿
          {sorted.map((item, index) => (
            <div
              key={index}
              className={`timeline-item${item.description ? " timeline-item--hoverable" : ""}`}
            >
              <div className={`timeline-dot${item.current ? " timeline-dot--current" : ""}`} />
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-meta">{item.school} · {item.type}</p>
              </div>
              {item.description && (
                <div className="timeline-tooltip">{item.description}</div>
              )}
            </div>
          ))}
        ►
        </div>
      </div>
    </div>
  );
};

export default Education;