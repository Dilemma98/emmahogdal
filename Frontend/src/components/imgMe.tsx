import imgUrl from "../assets/images/imgMe.jpg";
import "../stylesheets/imgMe.css";

const subtitleStyle = {
  fontStyle: "italic",
  opacity: 0.9,
  fontSize: "0.85em",
  textAlign: "center" as const,
  lineHeight: "1.8",
  marginTop: "2em"
};

const ImgMe = () => {
  return (
    <div style={{ marginTop: "5em" }}>
      <img className="imgMe" src={imgUrl} alt="Bild på Emma" />
      <p style={subtitleStyle}>
        v1.0 released -98 in Sveg
        <br />
        Raised to be a 'Härjedaling' ♡
      </p>
      <hr />
      <p style={subtitleStyle}>
        Note to self: <br />
        "It's not a bug, it's a feature"
      </p>
    </div>
  );
};

export default ImgMe;
