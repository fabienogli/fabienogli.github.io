import { Github, Youtube } from "lucide-react";

import projects from '../texts/projects.json';
import Box from "./Box";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-brutal-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-brutal-black border-b-4 border-brutal-black pb-4">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Box key={index}
              title={project.title}
              description={project.content.en}
              links={project.resources}
              />
                
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;