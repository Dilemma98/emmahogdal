import "./timeline.css";
import { useEffect, useState } from "react";

interface TimelineItem {
  period: string;
  title: string;
  place: string;
  type: "work" | "education";
  description: string;
  current?: boolean;
}
function Column({
  title,
  items,
  columns = 1,
}: {
  title: string;
  items: TimelineItem[];
  columns?: 1 | 2;
}) {
  // Dela upp i lika stora delar, nyast först
  const perCol = Math.ceil(items.length / columns);
  const chunks = Array.from({ length: columns }, (_, i) =>
    items.slice(i * perCol, (i + 1) * perCol),
  );

  return (
    <div className={`timelineColumn span${columns}`}>
      <h4 className="timelineColTitle">{title}</h4>
      <div className={`timelineSub cols${columns}`}>
        {chunks.map((chunk, i) => (
          <ol className="timelineList" key={i}>
            {chunk.map((item) => (
              <li
                className={`timelineItem ${item.type}`}
                key={item.title + item.period}
              >
                <span className="timelineDot" aria-hidden="true" />
                <div className="timelineCard">
                  <span className="timelinePeriod">{item.period}
                    {item.current && (
                    <span>Nuvarande</span>
                  )}
                  </span>
                  <h5>{item.title}</h5>
                  <p className="timelinePlace">{item.place}</p>
                  <p className="timelineDesc">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [items, setItems] = useState<TimelineItem[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/experiences.json")
      .then((res) => res.json())
      .then((data: TimelineItem[]) => setItems(data))
      .catch((error) => console.error("Fel vid hämtning:", error));
  }, []);

  return (
    <div className="timelineColumns">
      <Column
        title="Arbete"
        columns={2}
        items={items.filter((i) => i.type === "work")}
      />
      <Column
        title="Utbildning"
        items={items.filter((i) => i.type === "education")}
      />
    </div>
  );
}
