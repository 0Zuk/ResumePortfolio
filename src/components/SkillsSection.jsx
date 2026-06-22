import { GraduationCap, Server, Wrench } from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 py-12">
        <div className="gradient-border p-6 card-hover">

          <div className="flex flex-col md:flex-row gap-8 justify-between">

            {/* Front-End */}
            <div className="flex items-start gap-4 md:w-1/3 w-full">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Front-End</h4>
                <ul className="mt-4 space-y-2 text-foreground/90 text-primary text-glow">
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>HTML</li>
                </ul>
              </div>
            </div>

            {/* Back-End */}
            <div className="flex items-start gap-4 md:w-1/3 w-full md:justify-center">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Server className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Back-End</h4>
                <ul className="mt-4 space-y-2 text-foreground/90 text-primary text-glow">
                  <li>C# / .NET</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>REST API</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>

            {/* Tools & Other */}
            <div className="flex items-start gap-4 md:w-1/3 w-full md:justify-end">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Wrench className="text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Tools & Other</h4>
                <ul className="mt-4 space-y-2 text-foreground/90 text-primary text-glow">
                  <li>Git</li>
                  <li>Bitbucket</li>
                  <li>Agile Development</li>
                  <li>Prompt Engineering</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
