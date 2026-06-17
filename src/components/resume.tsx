import { useEffect, useState } from "react";
import "../stylesheets/resume.css";

interface WorkExperience {
  title: string;
  employer: string;
  location: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  type: string;
  period: string;
  title: string;
  description: string;
}

export default function Resume() {
  const [work, setWork] = useState<WorkExperience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/workexperience.json")
      .then((res) => res.json())
      .then(setWork)
      .catch(console.error);

    fetch(import.meta.env.BASE_URL + "data/education.json")
      .then((res) => res.json())
      .then(setEducation)
      .catch(console.error);
  }, []);

  return (
    <div className="resumePage">
      <div className="resumeColumns">

        <div className="resumeColumn">
          <h2 className="resumeColumnTitle">Utbildning</h2>
          {education.map((edu, i) => (
            <div className="resumeCard" key={i}>
              <span className="resumePeriod">{edu.period}</span>
              <h3 className="resumeCardTitle">{edu.title}</h3>
              <p className="resumeCardSub">{edu.school} · {edu.type}</p>
              <p className="resumeCardDesc">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="resumeDivider" />

        <div className="resumeColumn">
          <h2 className="resumeColumnTitle">Arbetslivserfarenhet</h2>
          {work.map((job, i) => (
            <div className="resumeCard" key={i}>
              <span className="resumePeriod">{job.period}</span>
              <h3 className="resumeCardTitle">{job.title}</h3>
              <p className="resumeCardSub">{job.employer} · {job.location}</p>
              <p className="resumeCardDesc">{job.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}