import { useState } from "react";
import "./contactMe.css";
import backgroundImg from "./imgs/bgHeader.png";

// Byt ut dessa mot dina egna uppgifter
const EMAIL = "emma.h98@outlook.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/emma-h%C3%B6gdal-07167b326/";
const GITHUB_URL = "https://github.com/Dilemma98";

const links = [
  {
    label: "E-post",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: "fa-solid fa-envelope",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Se min profil och erfarenhet",
    href: LINKEDIN_URL,
    icon: "fa-brands fa-linkedin",
    external: true,
  },
  {
    label: "GitHub",
    value: "Se mina projekt och min kod",
    href: GITHUB_URL,
    icon: "fa-brands fa-github",
    external: true,
  },
];

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Om kopiering inte stöds görs ingenting; e-postlänken fungerar ändå
    }
  };

  return (
    <section className="contactMe" id="contact">
      <div
        className="bg"
        // style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      <div className="contactInner">
        <div className="contactText">
          <h3>Kontakta mig</h3>

          <p>
            Har du ett spännande projekt på gång, eller söker du en
            nyexaminerad utvecklare till ditt team?
          </p>

          <p>
            Jag är nyexaminerad fullstack-utvecklare inom .NET och ser fram
            emot nästa steg i min utvecklingsresa. Hör gärna av dig!
          </p>
        </div>

        <div className="contactLinks">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <span className="iconWrap" aria-hidden="true">
                    <i className={link.icon} />
                  </span>
                  <span className="linkText">
                    <strong>{link.label}</strong>
                    <small>{link.value}</small>
                  </span>
                  {link.external && (
                    <i
                      className="fa-solid fa-arrow-up-right-from-square external"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className="copyBtn" onClick={copyEmail}>
            <i
              className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"}
              aria-hidden="true"
            />
            {copied ? "E-postadressen är kopierad" : "Kopiera e-postadress"}
          </button>
          <span className="srOnly" role="status" aria-live="polite">
            {copied ? "E-postadressen kopierades" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}