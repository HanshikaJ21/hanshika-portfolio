import { useEffect, useRef } from "react";
import "../styles/portfolio.css";
import growwclone from "../assets/groww_Clone.png";
import enterprise from "../assets/enterprise.png";
import ai from "../assets/ai_based.png";

const projects = [
  {
    id: 1,
    title: "Cloud based Custom Employee Incentive Generation",
    type: "Cloud based Web Application",
    image: ai,
    tags: ["Cloud", "Automation", "Full Stack"],
    description:
      "A comprehensive cloud-based solution for managing employee incentives, automating reward generation, and providing detailed reports."
  },
  {
    id: 2,
    title: "Barcode based ERP sales system",
    type: "Cloud based ERP Web App",
    image: enterprise,
    tags: ["Cloud", "Automation", "Full Stack"],
    description:
      "An integrated ERP system with barcode scanning for inventory management, sales tracking, and streamlined operations."
  },
  {
    id: 3,
    title: "AI-Powered Invoice File Organizer",
    type: "Web Application with back-end in Python",
    image: growwclone,
    tags: ["Cloud", "AI", "Full Stack"],
    description:
      "Smart document management system using AI to automatically categorize, extract data, and organize invoice files."
  },
  {
    id: 4,
    title: "Barcode based ERP sales system",
    type: "Cloud based ERP Web App",
    image: "enterprise",
    tags: ["Cloud", "Automation", "Full Stack"],
    description:
      "An integrated ERP system with barcode scanning for inventory management, sales tracking, and streamlined operations."
  },
  {
    id: 5,
    title: "AI-Powered Invoice File Organizer",
    type: "Web Application with back-end in Python",
    image: growwclone,
    tags: ["Cloud", "AI", "Full Stack"],
    description:
      "Smart document management system using AI to automatically categorize, extract data, and organize invoice files."
  },
  {
    id: 6,
    title: "Barcode based ERP sales system",
    type: "Cloud based ERP Web App",
    image: enterprise,
    tags: ["Cloud", "Automation", "Full Stack"],
    description:
      "An integrated ERP system with barcode scanning for inventory management, sales tracking, and streamlined operations."
  },
];

export default function Portfolio() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <h2>Selected Work</h2>

      <div className="portfolio-scroll" ref={scrollRef}>
        {projects.map((project) => (
          <article className="portfolio-card" key={project.id}>
            <div className="project-preview">
              <img src={project.image} alt={project.title} />
              <button className="work-btn">work</button>
            </div>

            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
