import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold ">
              Passionate about Tech World.
            </h3>
            <p className="text-muted-foreground text-left">
              Passionate about technology, with a strong interest in software
              development, artificial intelligence, data engineering, and cloud
              computing. Committed to continuous learning and technological
              innovation, always eager to face new challenges and contribute to
              the advancement of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive web apps with React, Node.js, and
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> AI & Data</h4>
                  <p className="text-muted-foreground">
                    Working with machine learning, NLP, and neural networks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Backend</h4>
                  <p className="text-muted-foreground">
                    Building scalable backends and deploying to AWS and GCP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
