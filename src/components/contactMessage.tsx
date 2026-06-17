import "../stylesheets/contactMessage.css";

type Props = {
    message: string;
    isError?: boolean;
    onClose: () => void;
}

export default function Message({ message, isError = false, onClose }: Props) {
    return (
        <div className="overlay" onClick={onClose}>
            <div className="messageBox" onClick={e => e.stopPropagation()}
                style={{ background: "#fff" }}>
                <button className="closeBtn" onClick={onClose}>✕</button>
                <div className="iconCircle" style={{ background: isError ? "#fdf0f0" : "#edf7ef" }}>
                    <i className={isError ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-check"}
                       style={{ color: isError ? "#ab3434" : "#43784d", fontSize: "28px" }} />
                </div>
                <p className="modalTitle">{isError ? "Något gick fel" : "Skickat!"}</p>
                <p className="modalText">{message}</p>
                <button className="modalBtn" onClick={onClose}
                    style={{ background: isError ? "#ab3434" : "#43784d" }}>
                    {isError ? "Försök igen" : "Stäng"}
                </button>
            </div>
        </div>
    );
}