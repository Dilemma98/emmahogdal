import imgUrl from "../assets/images/imgMe.jpg";
import "../stylesheets/imgMe.css";

const ImgMe = () => {
  return(
    <div style={{marginTop: "6em"}}>
     <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
     </div>
  );
};

export default ImgMe;
