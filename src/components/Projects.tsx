import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Stage } from "./StageIndicator";
import { CoFounderFinderModal } from "./CoFounderFinderModal";

interface Project {
  name: string;
  description: string;
  stage: Stage;
  icon?: string;
  logoUrl?: string; // Image logo (takes priority over emoji icon)
  waitlistUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

// =============================================================================
// PROJECTS DATA
// Configure your projects here
// For waitlist forms, add your Typeform/Tally/Google Form URL
// The project name will be automatically appended as ?project=ProjectName
// =============================================================================

const PROJECTS: Project[] = [
  {
    name: "Athana.ai",
    description: "The agentic AI video studio.",
    stage: "Live",
    logoUrl: "/logos/athana.png",
    demoUrl: "https://www.athana.ai/",
  },
  {
    name: "Agentic Product Demo",
    description: "Product demo videos from code, not a screen recorder.",
    stage: "Live",
    logoUrl: "/logos/agentic-demo.png",
    githubUrl: "https://github.com/Alexwtlf/agentic-product-demo",
  },
  {
    name: "VcodingList",
    description: "Launch platform for AI-native builders.",
    stage: "Live",
    logoUrl: "/logos/vcodinglist-logo.svg",
    demoUrl: "https://www.vcodinglist.com/",
  },
  {
    name: "Co-Founder Finder",
    description: "Find your co-founder in seconds.",
    stage: "Live",
    logoUrl: "/logos/cofounder-finder.png",
    // demoUrl not used - opens interactive modal instead
  },
  {
    name: "Quenser",
    description: "Social Prediction Market.",
    stage: "Live",
    logoUrl: "/logos/quenser.png",
    demoUrl: "https://quenser.com/"
  },
  {
    name: "Q Vibe Studio",
    description: "A venture studio for solo founders in the era of vibe coding.",
    stage: "Building",
    logoUrl: "/logos/vibe-studio.png",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export function Projects() {
  const [coFounderModalOpen, setCoFounderModalOpen] = useState(false);

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Projects
        </h2>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
              // Special case: Co-Founder Finder opens modal instead of demoUrl
              onDemoClick={
                project.name === "Co-Founder Finder"
                  ? () => setCoFounderModalOpen(true)
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Co-Founder Finder Interactive Modal */}
      <CoFounderFinderModal
        open={coFounderModalOpen}
        onOpenChange={setCoFounderModalOpen}
      />
    </section>
  );
}
