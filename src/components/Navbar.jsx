import { useEffect, useState } from "react";
import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";

const sections = ["hero", "about", "portfolio", "skills"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="avatar" />
      </div>

      {/* CENTER (desktop only) */}
      <ul className="nav-center">
        {sections.map((sec) => (
          <li key={sec} className={active === sec ? "active" : ""}>
            <a href={`#${sec}`}>
              {sec === "hero"
                ? "Introduction"
                : sec === "skills"
                ? "My Stack"
                : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={closeMenu}>
            ✕
          </button>

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={closeMenu}
              className={active === sec ? "active" : ""}
            >
              {sec === "hero"
                ? "Introduction"
                : sec === "skills"
                ? "My Stack"
                : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}

          <a
            href="/Hanshika_Jasuja_resume.pdf"
            target="_blank"
            className="mobile-resume"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
