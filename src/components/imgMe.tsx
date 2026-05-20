import imgUrl from "../assets/images/imgMe.jpg";
import "../stylesheets/imgMe.css";
import FlowerWreath from "./flowerWreath";
import SantaHat from "./santaHat";

const getSeasonalDecoration = () => {
  const month = new Date().getMonth();

  if (month === 5) return <FlowerWreath />;
  if (month === 11) return <SantaHat />;

  return null;
};
const ImgMe = () => {
  const decoration = getSeasonalDecoration();
  return (
    <div className="imgDiv">
      <div className="imgWrapper">
        <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
        {decoration && <div className="surpriseHide">{decoration}</div>}
      </div>
      <div className="subtitles">
        <p className="subtitleStyle">v1.0 released -98 in Härjedalen</p>
        <hr />
        <p className="subtitleStyle">Built with curiosity and caffeine</p>
      </div>
    </div>
  );
};
export default ImgMe;
