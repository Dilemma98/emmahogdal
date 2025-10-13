import "../components/stylesheets/switch.css";
import { useState, useEffect } from "react";

const Switch = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        const body = document.body;

        if(darkMode) {
            body.classList.add("darkMode");
            body.classList.remove("lightMode");
        } else {
            body.classList.add("lightMode");
            body.classList.remove("darkMode");
        }
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const darkModeSwitch = () => setDarkMode(!darkMode);

    return (
        <div className="darkmodeLightmodeBtn" onClick={darkModeSwitch}>
            {darkMode ? (
                <i className="fa-solid fa-sun"></i>
            ) : (
                <i className="fa-solid fa-moon"></i>
            )}
        </div>
    );
}

export default Switch;