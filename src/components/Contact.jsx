import React from "react";
import "../styles/contact.css";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import avatar_relax from "../assets/avatar_relax.png";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      
      <h2 className="contact-title">
        That's all folks! <span>🤠</span>
      </h2>

      <p className="contact-subtitle">
        Want to know more about me?
      </p>

      <div className="contact-actions">
        <a
          href="/Hanshika_Jasuja_resume.pdf"
          target="_blank"
          className="contact-btn"
        >
          Get Resume
        </a>

        <div className="contact-icons">
          <a
            href="https://instagram.com/hanshika_creates"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:hanshikajasuj@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="contact-avatar">
        <img src={avatar_relax} alt="avatar resting" />
      </div>
    </section>
  );
}
;
