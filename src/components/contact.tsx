import "../stylesheets/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Message from "./contactMessage";

export default function Contact() {

    const [message, setMessage] = useState("");
   const [isError, setIsError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
     .then(() => {
  formRef.current?.reset();

  setIsError(false);
  setMessage("Tack för ditt meddelande! Jag svarar så snart jag kan.");
  setShowMessage(true);
})
.catch(() => { setIsError(true); setMessage("Hoppsan, nu gick något fel. Testa gärna igen"); setShowMessage(true); })
  };
  return (
    <>
      <p>Har du någon fråga? Hör gärna av dig!</p>

      <form className="fields" ref={formRef} onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Från</label>
          <input
            id="email"
            name="from_email"
            type="email"
            placeholder="din@email.com"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="name">Namn</label>
          <input
            id="name"
            name="from_name"
            type="text"
            placeholder="Ditt namn"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Skriv ditt meddelande här..."
            name="message"
            required
          />
        </div>

        <button type="submit">
          Skicka <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>

      <div className="links">
        <a href="mailto:emma.h98@outlook.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Dilemma98" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

{showMessage && <Message message={message} isError={isError} onClose={() => setShowMessage(false)} />}
    </>
  );
}
