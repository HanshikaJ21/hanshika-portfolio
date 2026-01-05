import "../styles/hero.css";
import heroImg from "../assets/hero.png";


export default function Hero() {
  return (
    <section id= "hero"className="hero">
      <div className="hero-left">
        <h1>
          Hello <span className="wave">👋</span>, I'm <br />
          <span className="name">Hanshika Jasuja</span>
        </h1>

        <p>
          A full-stack chill dev with X years of experience building clean,
          scalable products with interfaces so simple even a kid can use.
          Let’s build something extraordinary.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Contact Me</button>
          <button className="secondary-btn">View Projects</button>
        </div>

        <div className="socials">
          <i>📸</i>
          <i>❌</i>
          <i>💼</i>
          <i>🐙</i>
        </div>
      </div>

      <div className="hero-right">
  <div className="hero-img-wrapper">
    <img src={heroImg} alt="hero" />
  </div>
</div>

    </section>
  );
}
