function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;