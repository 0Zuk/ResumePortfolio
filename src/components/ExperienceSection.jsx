import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    company: "Stiimo",
    role: "Internship",
    period: "2026",
    description:
      "Developed new features in a fast-growing project using Python, Django and Django REST Framework with React on the frontend. The project was in active development with rapid iterations, requiring me to quickly get up to speed with an existing codebase and independently design and build REST API endpoints to support new features — including a one-time-use signing page where customers received a unique link via email. Worked agile in a team with continuous communication and fast deliveries.",
  },
  {
    company: "Oican Wear",
    role: "Internship",
    period: "2025 – 2026",
    description:
      "Responsible for planning and building an order portal where business customers could place and manage orders and handle invoices. Stack: Next.js (headless architecture), Shopify APIs for product data, Prisma ORM with PostgreSQL, and Tailwind CSS. Also handled ongoing maintenance and development of the company's Shopify integration — building new features and fixing bugs.",
  },
  {
    company: "Golf Outlet",
    role: "Sales Associate",
    period: "2025 – Present",
    description:
      "Daily customer contact, helping customers find the right equipment. Responsible for the register and inventory management.",
  },
  {
    company: "Mekonomen",
    role: "Sales Associate",
    period: "2023 – 2024",
    description:
      "Customer contact, problem-solving around spare parts, register management, inventory and stocktaking.",
  },
  {
    company: "SGA",
    role: "Sales Associate",
    period: "2022 – 2023",
    description:
      "Helped customers find the right car care products and accessories. Responsible for inventory and stocktaking.",
  },
  {
    company: "Mekonomen",
    role: "Sales Associate",
    period: "2020 – 2022",
    description:
      "Customer contact and problem-solving around spare parts. Responsible for the register, inventory and stocktaking.",
  },
];

const education = [
  {
    school: "Newton Kompetensutveckling",
    program: "Systemutveckling .NET",
    period: "2024 – 2026",
    detail: "400 YH Credits",
  },
  {
    school: "Webutveckling 1",
    program: "HTML, CSS, JavaScript",
    period: "2023",
    detail: "",
  },
  {
    school: "Elektriker Gymnasiet",
    program: "El och energi",
    period: "2016 – 2019",
    detail: "",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience &amp; <span className="text-primary">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative border-l border-primary/30 pl-6 space-y-8">
              {workExperience.map((job, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-xs text-muted-foreground mb-1">{job.period}</p>
                  <h4 className="font-semibold">{job.company}</h4>
                  <p className="text-sm text-primary mb-2">{job.role}</p>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="relative border-l border-primary/30 pl-6 space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
                  <h4 className="font-semibold">{edu.school}</h4>
                  <p className="text-sm text-primary">{edu.program}</p>
                  {edu.detail && (
                    <p className="text-sm text-muted-foreground">{edu.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
