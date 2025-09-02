import React from "react";

const Projects = () => {
  const projects = [
    "LinkedIn Clone",
    "Zerodha Clone",
    "Todo Apps",
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              {project}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
