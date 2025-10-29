import "../stylesheets/mainpart.css";
import ContactMe from "./contact";
import AboutMe from "./about";
import ImgMe from "../components/imgMe";
import TechStack from "./techStack";

const MainPart = () => {
    return(
        <div className="mainPart">
            <ImgMe />
           <div className="text">
            <AboutMe />
            <TechStack />
           </div>
           <ContactMe />
        </div>
    );
}

export default MainPart;