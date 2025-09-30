import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from  "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
export const Home = () => {
  return  <div className ="min-h-screen bg-background text-foreground  overflow-x-hidden">

    {/*Theme Toggle Button*/}
    <ThemeToggle/>
    {/*background effect*/}
    <StarBackground/>
    {/*Navbar*/}
    <Navbar/>
    {/*Main Section*/}
    <div className="pt-20">
      <main>
        <HeroSection/>
        {/*About Me Section*/}
        <AboutSection/>
        {/*Skills Section*/}
        <SkillsSection/>
        {/*Projects Section*/}
        <ProjectsSection/>
        {/*Contact Section*/}
        <ContactSection/>
      </main>
      </div>
    {/*Footer*/}
  </div>;
};
    