import { useState, useEffect } from "react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Interactive <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my latest projects and see how I bring ideas to life
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl p-6 transform transition-transform duration-300 hover:shadow-xl"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-bold mb-2 font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button 
                className="w-full bg-primary bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-external-link-alt"></i>
                View Project
              </button>
            </div>
          ))}
        </div>

        {/* No projects found */}
        {filteredProjects.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
