import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StageIndicator, Stage } from "./StageIndicator";

interface ProjectCardProps {
  name: string;
  description: string;
  stage: Stage;
  icon?: string;
  logoUrl?: string; // Image logo (takes priority over emoji icon)
  waitlistUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  onDemoClick?: () => void; // Custom handler for demo button
}

export function ProjectCard({
  name,
  description,
  stage,
  icon = "🧪",
  logoUrl,
  waitlistUrl,
  demoUrl,
  githubUrl,
  onDemoClick,
}: ProjectCardProps) {
  const isLive = stage === "Live";
  const isMVP = stage === "MVP";
  const showDemoButton = (isLive || isMVP) && (demoUrl || onDemoClick);

  const handleWaitlistClick = () => {
    if (waitlistUrl) {
      // Open external form with project name prefilled
      const url = new URL(waitlistUrl);
      url.searchParams.set("project", name);
      window.open(url.toString(), "_blank");
    }
  };

  const handleDemoClick = () => {
    // Use custom handler if provided, otherwise open demoUrl
    if (onDemoClick) {
      onDemoClick();
    } else if (demoUrl) {
      window.open(demoUrl, "_blank");
    }
  };

  return (
    <div className="flex h-full flex-col p-6 rounded-lg border border-border bg-card">
      {/* Logo or emoji icon — same 32px box either way */}
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="w-8 h-8 rounded-md object-contain mb-4"
        />
      ) : (
        <span className="flex w-8 h-8 items-center justify-center rounded-md bg-muted text-lg leading-none mb-4">
          {icon}
        </span>
      )}

      {/* One line for the name, the description takes what it needs below */}
      <h3
        className="text-lg font-semibold text-card-foreground mb-1 truncate"
        title={name}
      >
        {name}
      </h3>
      <p className="text-sm leading-5 text-muted-foreground min-h-[2.5rem] mb-5">
        {description}
      </p>

      {/* Stage + buttons sit on the card's floor, so they line up across a row */}
      <div className="mt-auto mb-6">
        <StageIndicator currentStage={stage} />
      </div>

      <div className="flex items-center gap-3">
        {/* View demo button - shown for Live and MVP stages */}
        {showDemoButton && (
          <Button
            variant="default"
            size="sm"
            onClick={handleDemoClick}
            className="gap-2"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View demo
          </Button>
        )}

        {/* GitHub button - shown for Live stage */}
        {isLive && githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
            className="gap-2"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </Button>
        )}

        {/* Waitlist button - shown for early stages (Idea, Exploration, Building) */}
        {!isLive && !isMVP && (
          <Button
            variant="default"
            size="sm"
            onClick={handleWaitlistClick}
            disabled={!waitlistUrl}
          >
            Join waitlist
          </Button>
        )}
      </div>
    </div>
  );
}
