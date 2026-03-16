import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project">
        <h3>WebCAD Platform</h3>
        <p>Browser based 2D/3D design platform with collaboration.</p>

        <a href="https://github.com/yourusername/project">
          GitHub
        </a>
      </div>

      <div className="project">
        <h3>Expense Tracker UI</h3>
        <p>Financial literacy app designed in Figma.</p>
      </div>

    </section>
  );
};

export default Projects;