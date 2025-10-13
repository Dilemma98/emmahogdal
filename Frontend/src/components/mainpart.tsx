import "../components/stylesheets/mainpart.css";
import ContactMe from "./contact";
import AboutMe from "./about";

const MainPart = () => {
    return(
        <div className="mainPart">
            <AboutMe />
            <ContactMe />
        </div>
    );
}

export default MainPart;