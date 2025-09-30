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
              Passionate Fullstack developer & with a creative mindset.
            </h3>

            <p className="text-muted-foreground">
              I'm soon to graduate as a fullstack developer at Newton
              kompetensutbildning. Some of my skills include C#, JavaScript,
              React, Node.js, HTML, CSS, SQL and Git. I'm always open to learning
              new technologies and improving my skills. I work well in teams and
              I am a problem solver.
            </p>

            <p className="text-muted-foreground">
              I'm a dedicated .Net fullstack developer with a passion for
              crafting innovative web solutions. With expertise in both frontend
              and backend technologies, I thrive on transforming ideas into
              functional and visually appealing applications. My journey in web
              development is driven by a commitment to continuous learning and a
              desire to create seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                href="/Resume/Resume-Pontus.pdf"
                className="cosmic-button"
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

