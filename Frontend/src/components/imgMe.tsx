import imgUrl from "../assets/images/imgMe.jpg";
import "../stylesheets/imgMe.css";

const ImgMe = () => {
  return (
    <div className="imgDiv">
      <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
      <div className="subtitles">
        <p className="subtitleStyle">
        v1.0 released -98 in Härjedalen
      </p>
      <hr />
      <p className="subtitleStyle">
        Note to self: <br />
        "It's not a bug, it's a feature"
      </p>
      </div>
    </div>
  );
};

export default ImgMe;
