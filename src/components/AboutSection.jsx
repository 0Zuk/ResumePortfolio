import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Junior Fullstack Developer with a drive to learn.
            </h3>

            <p className="text-muted-foreground">
              I'm a driven and punctual junior fullstack developer with a strong interest in technology and a natural drive to learn new things by solving real-world problems. I thrive in teams and quickly pick up new technologies and workflows — something proven through my internships where I've delivered in unfamiliar codebases and frameworks.
            </p>

            <p className="text-muted-foreground">
              My technical skills range from foundational to solid across several technologies, with the most experience in .NET, C#, React, Next.js, TypeScript, Python and Django from real projects. I've built my own REST API endpoints, worked with headless architecture, and actively use AI tools and prompt engineering in my development process. I've also built my own application with a local LLM via Ollama that generated car listings based on user input.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <a href="#contact" className="cosmic-button text-readable">
                Contact Me
              </a>
              <a
                href="/Resume/Resume-Pontus.pdf"
                className="cosmic-button text-readable"
                download
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Code className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Fullstack Development</h4>
                  <p className="text-glow text-primary">
                    Building responsive and user-friendly web applications using
                    modern technologies. Also experienced in backend development with C# and .Net and databases like SQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <User className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  <p className="text-glow text-primary">
                    Designing intuitive and engaging user interfaces that enhance
                    user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Agile Development</h4>
                  <p className="text-glow text-primary">
                    Embracing Agile methodologies to deliver high-quality
                    software solutions efficiently.
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

