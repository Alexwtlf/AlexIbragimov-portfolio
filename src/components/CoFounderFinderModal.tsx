import { useEffect, useRef, useState } from "react";
import { Bot, ExternalLink, MessageSquare, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// =============================================================================
// STATE MACHINE TYPES
// =============================================================================

type Mode = "select" | "loading" | "result";
type Path = "technical" | "nontechnical" | null;

interface CoFounderFinderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function CoFounderFinderModal({
  open,
  onOpenChange,
}: CoFounderFinderModalProps) {
  const [mode, setMode] = useState<Mode>("select");
  const [path, setPath] = useState<Path>(null);
  const timeoutRef = useRef<number | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      // Small delay to let close animation finish
      const resetTimeout = setTimeout(() => {
        setMode("select");
        setPath(null);
      }, 200);
      return () => clearTimeout(resetTimeout);
    }
  }, [open]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSelectPath = (selectedPath: Path) => {
    setPath(selectedPath);
    setMode("loading");

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Transition to result after 5 seconds
    timeoutRef.current = window.setTimeout(() => {
      setMode("result");
    }, 5000);
  };

  const handleClose = () => {
    // Clear timeout on close
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-accent-cyan">
            Find your co-founder
          </DialogTitle>
          {mode === "select" && (
            <DialogDescription>
              Choose the type of co-founder you're looking for.
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Step A: Select */}
        {mode === "select" && <SelectStep onSelect={handleSelectPath} />}

        {/* Step B: Loading */}
        {mode === "loading" && <LoadingStep path={path} />}

        {/* Step C: Result */}
        {mode === "result" && (
          <ResultStep path={path} onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
}

// =============================================================================
// STEP A: SELECT
// =============================================================================

interface SelectStepProps {
  onSelect: (path: Path) => void;
}

function SelectStep({ onSelect }: SelectStepProps) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <Button
        onClick={() => onSelect("technical")}
        className="w-full py-6 text-base bg-accent-cyan text-black hover:bg-accent-cyan/90"
      >
        Technical
      </Button>
      <Button
        onClick={() => onSelect("nontechnical")}
        variant="outline"
        className="w-full py-6 text-base border-2 border-accent-cyan hover:bg-secondary"
      >
        Non-technical
      </Button>
    </div>
  );
}

// =============================================================================
// STEP B: LOADING
// =============================================================================

interface LoadingStepProps {
  path: Path;
}

function LoadingStep({ path }: LoadingStepProps) {
  const searchText =
    path === "technical"
      ? "Searching for available technical co-founders…"
      : "Searching for available non-technical co-founders…";

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-6">
      {/* Radar Animation */}
      <div className="relative w-32 h-32">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-accent-cyan opacity-20" />
        {/* Middle ring */}
        <div className="absolute inset-4 rounded-full border-2 border-accent-cyan opacity-40" />
        {/* Inner ring */}
        <div className="absolute inset-8 rounded-full border-2 border-accent-cyan opacity-60" />
        {/* Center dot */}
        <div className="absolute inset-[3.25rem] rounded-full bg-accent-cyan" />
        {/* Scanning line */}
        <div
          className="absolute inset-0 origin-center animate-spin"
          style={{ animationDuration: "2s" }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left"
            style={{
              background: "linear-gradient(to right, hsl(var(--accent-cyan)), transparent)",
            }}
          />
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-20" />
      </div>

      <p className="text-muted-foreground text-center animate-pulse">
        {searchText}
      </p>
    </div>
  );
}

// =============================================================================
// STEP C: RESULT
// =============================================================================

interface ResultStepProps {
  path: Path;
  onClose: () => void;
}

function ResultStep({ path, onClose }: ResultStepProps) {
  if (path === "technical") {
    return <TechnicalResult onClose={onClose} />;
  }
  return <NonTechnicalResult onClose={onClose} />;
}

// Technical Result
function TechnicalResult({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-4">Result</h3>

      <div className="space-y-3 mb-6">
        <p className="text-muted-foreground">
          <span className="mr-2">❌</span>
          No senior technical co-founders available.
        </p>
        <p className="text-foreground">
          <span className="mr-2">✅</span>
          One Vibe Coder found nearby.
        </p>
      </div>

      <div className="flex gap-3 mb-4">
        <Button
          disabled
          className="flex-1 opacity-50 cursor-not-allowed bg-accent-cyan text-black"
        >
          Pay $99
        </Button>
        <Button variant="outline" onClick={onClose} className="flex-1">
          Close
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Payments not supported. Neither are good co-founders.
      </p>
    </div>
  );
}

// Non-Technical Result
function NonTechnicalResult({ onClose }: { onClose: () => void }) {
  const AI_PARTNERS = [
    {
      name: "ChatGPT",
      url: "https://chat.openai.com/",
      icon: MessageSquare,
    },
    {
      name: "Claude",
      url: "https://claude.ai/",
      icon: Sparkles,
    },
    {
      name: "Gemini",
      url: "https://gemini.google.com/",
      icon: Bot,
    },
  ];

  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-4 text-accent-cyan">
        Perfect matches found
      </h3>

      <div className="space-y-3 mb-6">
        {AI_PARTNERS.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent-cyan transition-colors group"
          >
            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-cyan transition-colors" />
            <span className="flex-1 font-medium">{name}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mb-4">
        Best non-technical co-founders available 24/7.
        <br />
        No equity. No drama.
      </p>

      <Button variant="outline" onClick={onClose} className="w-full">
        Close
      </Button>
    </div>
  );
}
