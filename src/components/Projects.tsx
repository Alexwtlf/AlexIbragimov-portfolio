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
    name: "VcodingList",
    description: "Launching media platform for AI native builders.",
    stage: "MVP",
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
    stage: "MVP",
    logoUrl: "/logos/quenser.png",
    demoUrl: "https://quenser.com/"
  },
  {
    name: "Freedom Countdown",
    description: "A countdown to the future you promised yourself.",
    stage: "Exploration",
    logoUrl: "/logos/Freedom-Countdown.png",
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
