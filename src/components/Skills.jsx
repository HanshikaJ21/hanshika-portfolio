import "../styles/skills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "PHP", "Python", "Java", "Node.js",
  "AI / ML", "Data Analytics", "Testing"
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>

      <div className="skills-constellation">
        {skills.map((skill, i) => (
          <span
            key={skill}
            className="skill-pill"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
