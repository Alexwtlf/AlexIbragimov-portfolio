import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StageIndicator, Stage } from "./StageIndicator";

interface ProjectCardProps {
  name: string;
  description: string;
  stage: Stage;
  icon?: string;
  waitlistUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  name,
  description,
  stage,
  icon = "🧪",
  waitlistUrl,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const isLive = stage === "Live";

  const handleWaitlistClick = () => {
    if (waitlistUrl) {
      // Open external form with project name prefilled
      const url = new URL(waitlistUrl);
      url.searchParams.set("project", name);
      window.open(url.toString(), "_blank");
    }
  };

  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="flex items-start gap-4 mb-4">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mb-6">
        <StageIndicator currentStage={stage} />
      </div>

      <div className="flex items-center gap-3">
        {isLive ? (
          <>
            {demoUrl && (
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open(demoUrl, "_blank")}
                className="gap-2"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View demo
              </Button>
            )}
            {githubUrl && (
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
          </>
        ) : (
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
