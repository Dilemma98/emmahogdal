import imgUrl from "../assets/images/imgMe3.jpg";
import "../stylesheets/imgMe.css";

const ImgMe = () => {
  return(
    <div style={{marginTop: "5em"}}>
     <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
     </div>
  );
};

export default ImgMe;
