import { useEffect, useRef, useState } from "react";

// =============================================================================
// ANIMATED COUNTER - spins like a speedometer
// =============================================================================

interface AnimatedCounterProps {
  target: number;
  duration?: number; // in ms
  label: string;
}

function AnimatedCounter({ target, duration = 3000, label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setIsAnimating(true);
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const startTime = Date.now();
    const maxValue = target + 20; // Overshoot for slot machine effect

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 0.8) {
        // Fast spinning phase (0-80% of time)
        const spinSpeed = Math.sin(progress * Math.PI * 10) * 5;
        const baseValue = Math.floor(progress * maxValue * 1.5) % 10;
        setDisplayValue(Math.abs(Math.floor(baseValue + spinSpeed)) % 10);
      } else {
        // Settling phase (80-100% of time)
        const settleProgress = (progress - 0.8) / 0.2;
        const easeOut = 1 - Math.pow(1 - settleProgress, 3);
        setDisplayValue(Math.round(target * easeOut));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref}>
      <div 
        className={`text-4xl md:text-5xl font-bold tabular-nums ${
          isAnimating ? "text-accent-cyan" : "text-foreground"
        } transition-colors duration-300`}
      >
        {displayValue}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

// =============================================================================
// COMPONENT
// =============================================================================

export function YCTracker() {
  return (
    <section id="yc-tracker" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          YC Attempts Tracker
        </h2>
        
        <div className="flex items-center gap-8 md:gap-12 mb-6">
          <AnimatedCounter target={1} label="Applications" />
          <AnimatedCounter target={1} label="Rejections" />
        </div>
        
        <p className="text-sm text-muted-foreground">
          Rejected ≠ stopped.
        </p>
      </div>
    </section>
  );
}
