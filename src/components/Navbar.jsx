import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="avatar" className="avatar" />
      </div>

      <ul className="nav-center">
        <li><a href="#hero">Introduction</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">My Stack</a></li>
        
      </ul>

      <div className="nav-right">
        <a href="/Hanshika_Jasuja_resume.pdf" target="_blank" className="resume-btn">
          Resume
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
