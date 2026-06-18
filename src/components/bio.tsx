// import "../stylesheets/bio.css";

// function AnimatedText({ text }: { text: string }) {
//   return (
//     <>
//       {text.split("").map((char, i) => (
//         <span
//           key={i}
//           className="bioChar"
//           style={{ animationDelay: `${i * 0.16}s` }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </span>
//       ))}
//     </>
//   );
// }

// export default function Bio() {
//   return (
//     <div className="bio">
//       <h1 className="bioTitle first">
//         &lt; /&gt;
//         <br/>
//         Emma Högdal</h1>
//       <h2 className="bioSubtitle">
//         <AnimatedText text="Fullstack .NET Developer" />
//       </h2>
//       <hr className="bioHr" />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import "../stylesheets/bio.css";

const titles = [
  "Fullstack .NET Developer",
  "React Enthusiast",
];

function AnimatedText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="bioChar"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function Bio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bio">
      <h1 className="bioTitle first">
        &lt; /&gt;
        <br />
        Emma Högdal
      </h1>
      <h2 className="bioSubtitle">
        <AnimatedText key={index} text={titles[index]} />
      </h2>
      <hr className="bioHr" />
    </div>
  );
}