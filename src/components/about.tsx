import Img from "../assets/image.webp";
import BagImg from "../assets/bagImg.webp";
import GeocachingImg from "../assets/geocachingImg.webp";
import DeskImg from "../assets/deskImg.webp";

import "../stylesheets/about.css";

export default function About() {
  return (
    <div className="aboutDiv">
      <div className="text">
        <p>Hej! Kul att du hittade hit!</p>
        <p>
          Jag heter Emma och är en väldigt kreativ själ som gärna stickar, virkar eller syr.
          Och nu på senare tid, även programmerar.
        </p>
        <p>
          Mitt intresse för programmering väcktes under föräldraledigheten 2022.
          Nyfikenheten växte snabbt och ledde till studier inom webbutveckling
          och programmering, innan jag 2024 påbörjade min utbildning till
          fullstack-utvecklare inom .NET på Campus Värnamo och i maj 2026 tog jag examen.
        </p>
        <p>
          På fritiden spenderar jag gärna tid med min dotter. Förra sommaren introducerade jag henne för geocaching, och i år blev jag inspirerad att utveckla en egen
          geocaching-app som jag fortfarande arbetar vidare på. För mig handlar
          programmering om samma sak som alla mina kreativa intressen, att
          skapa något från grunden, lära mig nytt och hitta smarta lösningar på
          problem.
        </p>
      </div>
      <div className="images">
        <img src={Img} alt="Pic of Emma and her daughter" className="aboutImg" />
        <img src={GeocachingImg} className="geocachingImg" />
        <img src={BagImg} className="bagImg" />
        <img src={DeskImg} className="deskImg" />
      </div>
    </div>
  );
}
