import { ProjectCard } from "./ProjectCard";
import { Stage } from "./StageIndicator";

interface Project {
  name: string;
  description: string;
  stage: Stage;
  icon: string;
  waitlistUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Configure your projects here
// For waitlist forms, add your Typeform/Tally/Google Form URL
// The project name will be automatically appended as ?project=ProjectName
const PROJECTS: Project[] = [
  {
    name: "Project Alpha",
    description: "AI-powered tool for founders to validate ideas faster.",
    stage: "Building",
    icon: "⚡",
    waitlistUrl: "https://tally.so/r/your-form-id", // Replace with your form URL
  },
  {
    name: "Project Beta",
    description: "Distribution-first newsletter platform for builders.",
    stage: "Exploration",
    icon: "📬",
    waitlistUrl: "https://tally.so/r/your-form-id", // Replace with your form URL
  },
  {
    name: "ShipFast Kit",
    description: "Open-source boilerplate for launching MVPs in days.",
    stage: "Live",
    icon: "🚀",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/shipfast",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
