import { useState } from "react";
import { cn } from "@/libs/utils";

const skills = [
  //Frontend Skills
  { name: "HTML", level: 100, category: "frontend" },
  { name: "CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "React", level: 100, category: "frontend" },
  /*   { name: "Next.js", level: 85, category: "frontend" }, */
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "Bootstrap", level: 100, category: "frontend" },

  //Backend Skills
  { name: "Node.js", level: 100, category: "backend" },
  { name: "Express.js", level: 100, category: "backend" },
  { name: "MongoDB", level: 100, category: "backend" },
  { name: "Django", level: 100, category: "backend" },
  { name: "FastAPI", level: 100, category: "backend" },
  { name: "PostgreSQL", level: 100, category: "backend" },
  { name: "MySQL", level: 100, category: "backend" },
  { name: "REST APIs", level: 100, category: "backend" },
  { name: "TypeScript", level: 100, category: "backend" },
  { name: "Python", level: 100, category: "backend" },
  { name: "Java", level: 100, category: "backend" },
  { name: "Spring Boot", level: 100, category: "backend" },
  /*  { name: "GraphQL", level: 70, category: "backend" }, */

  //Tools and Technologies
  { name: "Google Cloud", level: 100, category: "tools" },
  { name: "AWS", level: 100, category: "tools" },
  { name: "Git", level: 100, category: "tools" },
  { name: "GitHub", level: 100, category: "tools" },
  { name: "Docker", level: 100, category: "tools" },
  { name: "Kubernetes", level: 100, category: "tools" },
  { name: "Vite", level: 100, category: "tools" },
  { name: "Numpy", level: 100, category: "tools" },
  { name: "Pandas", level: 100, category: "tools" },
  { name: "Matplotlib", level: 100, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="contianer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My<span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* Revisar */}
              {/* <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
