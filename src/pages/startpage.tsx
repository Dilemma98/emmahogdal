import MainPart from "../components/mainpart";
import "../stylesheets/startPage.css";
import Switch from "../components/switch";

import { useEffect } from "react";

const StartPage = () => {
    useEffect(() => {
          localStorage.getItem("darkMode");
// const logSize = () => {
//   alert(`${screen.width} x ${screen.height}`);
// };

//   logSize();

//   window.addEventListener("resize", logSize);

//   return () => window.removeEventListener("resize", logSize);
}, []);
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