function Projects() {
  const projects = [
    {
      title: "React Tic-Tac-Toe",
      description: "A Tic-Tac-Toe game built with React."
    },
    {
      title: "Image Gallery",
      description: "Interactive JavaScript image gallery."
    },
    {
      title: "Bouncing Balls",
      description: "Animated bouncing balls project."
    },
    {
      title: "Silly Story Generator",
      description: "Random story generator using JavaScript."
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;