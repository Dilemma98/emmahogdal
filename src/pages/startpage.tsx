import MainPart from "../components/mainpart";
import "../stylesheets/startPage.css";
import Switch from "../components/switch";

const StartPage = () => {
    localStorage.getItem("darkMode");
    return (
        <>
            <div className="page">
                 <MainPart />
            </div>
            <Switch />
        </>
    );
}

export default StartPage;