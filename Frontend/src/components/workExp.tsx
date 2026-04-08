import "../stylesheets/workExp.css";
import { useEffect, useState } from "react";

interface Work {
  period: string;
  title: string;
  employer: string;
  location: string;
  description: string;
  current?: boolean;
}

const WorkExp = () => {
  const [work, setWork] = useState<Work[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/workexperience.json")
      .then((res) => res.json())
      .then((data) => setWork(data))
      .catch((error) => console.error("Fel vid hämtning", error));
  }, []);

  const sorted = [...work].reverse();
  const mid = Math.ceil(sorted.length / 2);
  const rowOne = sorted.slice(0, mid);
  const rowTwo = sorted.slice(mid);

  const renderItem = (item: Work, index: number) => {
    const classes = [
      "work-item",
      item.description ? "work-item--hoverable" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div key={index} className={classes}>
        <div className={`work-dot${item.current ? " work-dot--current" : ""}`} />
        <div className="work-content">
          <p className="work-period">{item.period}</p>
          <h4 className="work-title">{item.title}</h4>
          {item.employer && (
            <p className="work-meta">
              {item.employer}
              {item.location ? ` · ${item.location}` : ""}
            </p>
          )}
        </div>
        {item.description && (
          <div className="work-tooltip">{item.description}</div>
        )}
      </div>
    );
  };

  return (
    <div id="workExp">
      <h2>Work Experience</h2>
      <div className="work-wrapper">
        <div className="work-row">
          <div className="work-row-line" />
          {rowTwo.map((item, i) => renderItem(item, i))}►
        </div>
        <div className="work-row">
          <div className="work-row-line" />
          ⦿{rowOne.map((item, i) => renderItem(item, i))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;