import Education from "../components/education";
import Switch from "../components/switch";
import "../stylesheets/education.css";

const EducationPage = () => {
    return (
        <div className="page">
            <div className="educationPage">
            <Education />
            <Switch />
        </div>
        </div>
    );
}

export default EducationPage;