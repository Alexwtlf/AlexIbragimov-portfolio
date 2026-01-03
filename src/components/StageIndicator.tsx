const STAGES = ["Idea", "Exploration", "Building", "MVP", "Live"] as const;
type Stage = typeof STAGES[number];

interface StageIndicatorProps {
  currentStage: Stage;
}

export function StageIndicator({ currentStage }: StageIndicatorProps) {
  const currentIndex = STAGES.indexOf(currentStage);

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between mb-2">
        {/* Track line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-stage-track" />
        
        {/* Stage dots */}
        {STAGES.map((stage, index) => (
          <div
            key={stage}
            className={`relative z-10 w-2.5 h-2.5 rounded-full transition-colors ${
              index <= currentIndex
                ? "bg-stage-active"
                : "bg-stage-inactive"
            }`}
          />
        ))}
      </div>
      
      {/* Stage labels */}
      <div className="flex items-center justify-between">
        {STAGES.map((stage, index) => (
          <span
            key={stage}
            className={`text-xs transition-colors ${
              index === currentIndex
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
}

export { STAGES };
export type { Stage };
