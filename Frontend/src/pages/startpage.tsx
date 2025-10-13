import MainPart from "../components/mainpart";
import "../components/stylesheets/startPage.css";
import Switch from "../components/switch";
import ImgMe from "../components/imgMe";

const StartPage = () => {
    localStorage.getItem("darkMode");
    return (
        <>
            <div className="startMain">
                 <ImgMe />
                 <MainPart />
            </div>
            <Switch />
        </>
    );
}

export default StartPage;