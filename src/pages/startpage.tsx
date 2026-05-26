import MainPart from "../components/mainpart";
import "../stylesheets/startPage.css";
import Switch from "../components/switch";

import { useEffect } from "react";

const StartPage = () => {
  useEffect(() => {
    localStorage.getItem("darkMode");
  }, []);
  return (
    <>
      <div className="page">
        <MainPart />
      </div>
      <Switch />
    </>
  );
};

export default StartPage;
