import imgUrl from "../assets/images/imgMe.jpg";
import "../components/stylesheets/imgMe.css";

const ImgMe = () => {
    return(
        <div>
            <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
        </div>
    );
}

export default ImgMe;