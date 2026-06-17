import "../stylesheets/bio.css";

function AnimatedText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="bioChar"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function Bio() {
  return (
    <div className="bio">
      <h1 className="bioTitle first">
        &lt; /&gt;
        <br/>
        Emma Högdal</h1>
      <h2 className="bioSubtitle">
        <AnimatedText text="Fullstack Developer" />
      </h2>
      <hr className="bioHr" />
    </div>
  );
}