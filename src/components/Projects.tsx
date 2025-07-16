import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Campus2Career",
      description: "A career guidance platform for students with job listings, project archives, and a chatbot.",
      technologies: ["Laravel", "Blade", "Tailwind CSS", "Bootstrap", "PHP", "MySQL"],
      image: "/projects/c2c1.jpg",
      liveDemo: "",
      github: "https://github.com/kashafulhaq/campus2career.git"
    },
    {
      id: 2,
      title: "Esports Performance Tracker",
      description: "An esports performance tracker for players and coaches with match analytics, player stats, and team insights.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "ShadCN UI"],
      image: "/projects/esports.jpg",
      liveDemo: "",
      github: ""
    },
    {
      id: 3,
      title: "Personal Developer Portfolio",
      description: "A personal portfolio showcasing my projects, resume, and work experience.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Convex", "ShadCN UI"],
      image: "/projects/portfolio.jpg",
      liveDemo: "",
      github: ""
    },
    {
      id: 4,
      title: "React Blog App",
      description: "A responsive blog platform with post creation, listing, and smooth navigation between posts.",
      technologies: ["React", "JavaScript", "React Router", "Tailwind CSS", "Vite"],
      image: "/projects/blog1.jpg",
      liveDemo: "",
      github: ""
    },
    {
      id: 5,
      title: "Drone Navigator",
      description: "An interactive interface for controlling and visualizing drone routes, positions, and movement paths.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "/projects/drone5.jpg",
      liveDemo: "",
      github: ""
    },
    {
      id: 6,
      title: "Resume Builder App",
      description: "An interactive web app that lets users create, preview, and download professional resumes through a dynamic form interface.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "jsPDF"],
      image: "/projects/resume1.jpg",
      liveDemo: "",
      github: ""
    }
  ];

  return (
    <div id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      onClick={() => alert('Live demo will be available soon!')}
                      className="flex-1 bg-gray-300 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg cursor-not-allowed opacity-70"
                    >
                      Live Demo
                    </button>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      View Code
                    </a>
                  ) : (
                    <button
                      onClick={() => alert('GitHub repository will be public soon!')}
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-400 text-center py-2 px-4 rounded-lg cursor-not-allowed opacity-70"
                    >
                      View Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
