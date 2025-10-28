import "../stylesheets/mainpart.css";
const ContactMe = () => {
    return (
        <div id="contactMe">
            <h2>Contact me</h2>
            <div className="links">
                <a href="mailto:emmaah98@outlook.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Dilemma98" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    );
}

export default ContactMe;