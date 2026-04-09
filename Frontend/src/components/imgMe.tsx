import imgUrl from "../assets/images/imgMe.jpg";
import "../stylesheets/imgMe.css";

const ImgMe = () => {
  return (
    <div style={{ marginTop: "6em" }}>
      <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
      <p
        style={{
          fontStyle: "italic",
          opacity: 0.7,
          fontSize: "0.85rem",
          textAlign: "center",
          lineHeight: "1.5"
        }}
      >
        v1.0 released ’98 in Sveg
        <br />
        Raised to be a 'Härjedaling'
      </p>
    </div>
  );
};

export default ImgMe;
