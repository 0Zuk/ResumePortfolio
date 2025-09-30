import { GraduationCap, Server, Cloud } from "lucide-react";
export const SkillsSection = () => {
    return (
        <section id="skills">
            <div className="container mx-auto px-4 py-12">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex gap-8 justify-between">
                        {/* Front-End */}
                        <div className="flex items-start gap-4 w-1/3">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <GraduationCap className="text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Front-End skills</h4>
                                <ul className="mt-4 space-y-2 text-foreground/90 text-primary text-glow">
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Tailwind CSS</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                        {/* Back-End */}
                        <div className="flex items-start gap-4 w-1/3 justify-center">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Server className="text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Back-End skills</h4>
                                <ul className="mt-4 space-y-2 text-foreground/90 text-primary text-glow">
                                    <li>Node.js</li>
                                    <li>C#</li>
                                    <li>ASP.net</li>
                                    <li>SQL</li>
                                    <li>APIs</li>
                                </ul>
                            </div>
                        </div>
                        {/* Infrastructure */}
                        <div className="flex items-start gap-4 w-1/3 justify-end">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Cloud className="text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg pd-5">Infrastructure</h4>
                                <ul className="mt-4 space-y-2 text-foreground/90 text-primary text-glow">
                                    <li>Docker</li>
                                    <li>GitHub Actions</li>
                                    <li>Git</li>
                                    <li>AWS (Soon)</li>
                                    <li>CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}