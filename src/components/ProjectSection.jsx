import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Runfix",
    description:
      "Built full-stack app for auto repair tracking and real-time updates.",
    image: "/projects/runfix.png",
    tag: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demoUrl: "#projects",
    githubUrl: "https://github.com/RUNFix/Runfix",
  },
  {
    id: 2,
    title: "WheelsUN",
    description:
      "Developed auth service and API gateway in a microservices GCP app.",
    image: "/projects/wheels_un.png",
    tag: ["Flutter", "GCP", "Spring Boot", "MySQL", "PostgreSQL", "Docker"],
    demoUrl: "#projects",
    githubUrl: "https://github.com/WheelsUN-2024-1",
  },
  {
    id: 3,
    title: "AppleNet",
    description:
      "Created CNN model to classify apple ripeness using deep learning.",
    image: "/projects/appleNet.png",
    tag: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
    ],
    demoUrl: "#projects",
    githubUrl: "https://github.com/JnerdQ/proyecto-redes-neuronales",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Check out my standout projects each built with modern tech, and
          creative problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tag.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 ">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projects.demoUrl}
                      target=""
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/JnerdQ?tab=repositories"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
