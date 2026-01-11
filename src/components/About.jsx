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
          "I'm Hanshika Jasuja, a passionate full-stack developer with 1.5 years of experience in crafting clean and scalable web applications.",
          "My journey in tech began with a curiosity for how things work, leading me to explore various programming languages and frameworks.",
          "I specialize in building user-friendly interfaces and robust backend systems, ensuring seamless performance across platforms.",
          "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow developers to create innovative solutions.",
          "Currently, I’m expanding my expertise in AI and Machine Learning, exploring how intelligent systems can enhance user experiences and data-driven decision-making.",
          "Curious by nature and detail-oriented in execution, I believe great products are built at the intersection of thoughtful design, solid engineering, and continuous learning.",
          "Let’s connect and build something extraordinary together!",
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
