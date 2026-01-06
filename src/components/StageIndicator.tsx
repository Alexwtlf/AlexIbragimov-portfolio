const STAGES = ["Idea", "Exploration", "Building", "MVP", "Live"] as const;
type Stage = typeof STAGES[number];

interface StageIndicatorProps {
  currentStage: Stage;
}

// =============================================================================
// STAGE INDICATOR COLORS
// Gradient: muted teal → accent-cyan (--accent-cyan / #08fdd8)
// Note: Gradient is computed dynamically, endpoint matches CSS variable
// =============================================================================

const INACTIVE_DOT_COLOR = "hsl(0, 0%, 30%)";
const INACTIVE_TEXT_COLOR = "hsl(0, 0%, 55%)";

// Accent cyan HSL values (must match --accent-cyan in index.css)
const ACCENT_CYAN_H = 170;
const ACCENT_CYAN_S = 98;
const ACCENT_CYAN_L = 51;

/**
 * Calculate stage color based on position in gradient
 * Start: hsl(170, 30%, 25%) - muted teal
 * End:   hsl(170, 98%, 51%) - accent-cyan (#08fdd8)
 */
const getStageColor = (index: number, total: number) => {
  const progress = index / (total - 1);
  const saturation = 30 + progress * (ACCENT_CYAN_S - 30);
  const lightness = 25 + progress * (ACCENT_CYAN_L - 25);
  return `hsl(${ACCENT_CYAN_H}, ${saturation}%, ${lightness}%)`;
};

export function StageIndicator({ currentStage }: StageIndicatorProps) {
  const currentIndex = STAGES.indexOf(currentStage);
  const progressPercentage = (currentIndex / (STAGES.length - 1)) * 100;

  // Create gradient stops for the progress line
  const gradientStops = STAGES.slice(0, currentIndex + 1)
    .map((_, i) => {
      const percent = (i / (STAGES.length - 1)) * 100;
      const adjustedPercent = currentIndex > 0 ? (percent / progressPercentage) * 100 : 0;
      return `${getStageColor(i, STAGES.length)} ${adjustedPercent}%`;
    })
    .join(", ");

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between mb-2">
        {/* Base track line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-stage-track" />
        
        {/* Filled progress line with gradient */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 transition-all duration-300"
          style={{ 
            width: `${progressPercentage}%`,
            background: currentIndex > 0 
              ? `linear-gradient(to right, ${gradientStops})`
              : getStageColor(0, STAGES.length)
          }}
        />
        
        {/* Stage dots */}
        {STAGES.map((stage, index) => (
          <div
            key={stage}
            className="relative z-10 w-2.5 h-2.5 rounded-full transition-colors"
            style={{
              backgroundColor: index <= currentIndex 
                ? getStageColor(index, STAGES.length)
                : INACTIVE_DOT_COLOR
            }}
          />
        ))}
      </div>
      
      {/* Stage labels */}
      <div className="flex items-center justify-between">
        {STAGES.map((stage, index) => (
          <span
            key={stage}
            className="text-xs transition-colors"
            style={{
              color: index === currentIndex 
                ? getStageColor(index, STAGES.length)
                : INACTIVE_TEXT_COLOR,
              fontWeight: index === currentIndex ? 500 : 400
            }}
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
