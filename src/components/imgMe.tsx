import imgMe from "../assets/me.webp";
import "../stylesheets/imgMe.css";

export default function ImgMe() {
  return (
    <div className="imgMe">
      <img src={imgMe} alt="Emma Högdal" className="meImage" />
      {/* <p>v1.0 released -98 in Härjedalen</p> */}
    </div>
  );
}