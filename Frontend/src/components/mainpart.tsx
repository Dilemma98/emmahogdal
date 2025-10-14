import "../components/stylesheets/mainpart.css";
import ContactMe from "./contact";
import AboutMe from "./about";
import ImgMe from "../components/imgMe";

const MainPart = () => {
    return(
        <div className="mainPart">
            <ImgMe />
           <div className="text">
             <AboutMe />
            <ContactMe />
           </div>
        </div>
    );
}

export default MainPart;