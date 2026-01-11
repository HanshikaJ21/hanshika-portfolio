import { useRef } from "react";
import "../styles/projects-slider.css";
import growwclone from "../assets/groww_clone.png";

const dummyProjects = [
  {
    id: 1,
    title: "Groww Clone",
    img: growwclone,
  },
  {
    id: 2,
    title: "Project Two",
    img: "https://picsum.photos/600/400?2",
  },
  {
    id: 3,
    title: "Project Three",
    img: "https://picsum.photos/600/400?3",
  },
];

export default function ProjectsSlider() {
  const cardsRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.04;
    const moveY = (y - rect.height / 2) * 0.04;

    card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.04)`;
  };

  const resetParallax = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    card.style.transform = "translate(0, 0) scale(1)";
  };

  return (
    <section className="projects-slider" id="projects">
      <div className="slider-track">
        {[...dummyProjects, ...dummyProjects].map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="project-card"
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => resetParallax(index)}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
