import { useEffect, useRef } from "react";
import "../styles/about.css";

export default function About() {
  const linesRef = useRef([]);

  useEffect(() => {
  const handleScroll = () => {
    linesRef.current.forEach((line) => {
      const rect = line.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.85;
      const end = vh * 0.3;

      const progress = (start - rect.top) / (start - end);
      const clamped = Math.min(Math.max(progress, 0), 1);

      line.style.opacity = 0.15 + clamped * 0.85;
      line.style.transform = `translateY(${32 - clamped * 32}px)`;
      line.style.color = `color-mix(in srgb, var(--text-muted), var(--text-primary) ${clamped * 100}%)`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>

        {[
          "What's up? I'm a full-stack dev who loves building clean, scalable products.",
          "I've shipped real-world apps across stacks that people actually use.",
          "When I'm not coding, I'm investing in growth — mentally, physically, creatively."
        ].map((text, i) => (
          <p
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="about-line"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
