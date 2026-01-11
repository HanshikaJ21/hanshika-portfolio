import "../styles/hero.css";
import heroImg from "../assets/hero.png";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <h1>
          Hello <span className="wave">👋</span>, I'm <br />
          <span className="name">Hanshika Jasuja</span>
        </h1>

        <p>
          A full-stack chill dev with 1.5 years of experience building clean,
          scalable products with interfaces so simple even a kid can use.
          Currently learning <strong>AI & ML</strong> to build smarter systems.
          Let’s build something extraordinary.
        </p>

        {/* ACTION BUTTONS */}
        <div className="hero-actions">
          <a href="#contact" className="primary-btn">
            Contact Me
          </a>

          <a href="#portfolio" className="secondary-btn">
            View Projects
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="socials">
          <a
            href="https://www.instagram.com/hanshika_creates"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/HanshikaJ21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/YOUR_TWITTER"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="hero-img-wrapper">
          <img src={heroImg} alt="Hanshika illustration" />
        </div>
      </div>
    </section>
  );
}
