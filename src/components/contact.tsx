import "../stylesheets/mainpart.css";
import "../stylesheets/contact.css";

const ContactMe = () => {
  return (
    <div className="contactMe">
      <h2>Let´s connect!</h2>
      <div className="links">
                <a href="mailto:emma.h98@outlook.com" ><i className="fa-solid fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Dilemma98" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
      {/* <p>Har du någon fråga? Hör gärna av dig!</p>

      <div className="fields">
        <div className="field">
          <label htmlFor="email">Från</label>
          <input id="email" type="email" placeholder="din@email.com" />
        </div>

        <div className="field">
          <label htmlFor="name">Namn</label>
          <input id="name" type="text" placeholder="Ditt namn" />
        </div>

        <div className="field">
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Skriv ditt meddelande här..."
          />
        </div>

        <button>
          Skicka <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>

      <div className="links">
        <a href="mailto:emma.h98@outlook.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Dilemma98" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div> */}
    </div>
  );
};

export default ContactMe;
