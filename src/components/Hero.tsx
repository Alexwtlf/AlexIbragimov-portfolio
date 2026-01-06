import { useEffect, useState, useRef } from "react";

const TYPING_TEXT = "NYC · Open to a tech co-founder who ships fast";
const MVP_TEXT = "MVPs";

export function Hero() {
  // NYC typing animation (loops)
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // MVPs typing animation (once on load)
  const [mvpText, setMvpText] = useState("");
  const [mvpDone, setMvpDone] = useState(false);
  const mvpStarted = useRef(false);

  // MVPs typing - runs once on mount
  useEffect(() => {
    if (mvpStarted.current) return;
    mvpStarted.current = true;

    let charIndex = 0;
    const typeNextChar = () => {
      if (charIndex <= MVP_TEXT.length) {
        setMvpText(MVP_TEXT.slice(0, charIndex));
        charIndex++;
        setTimeout(typeNextChar, 100); // Typing speed for MVPs
      } else {
        setMvpDone(true);
      }
    };

    // Small delay before starting
    setTimeout(typeNextChar, 500);
  }, []);

  // NYC typing animation (loops) - starts after MVPs is done
  useEffect(() => {
    // Wait for MVPs to finish first
    if (!mvpDone) return;

    const typeSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === TYPING_TEXT) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => setIsDeleting(false), pauseTime);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : TYPING_TEXT.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, mvpDone]);

  return (
    <section className="px-6 md:px-8 pt-36 sm:pt-40 md:pt-48 pb-16 md:pb-24 lg:pb-32">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Alex Ibragimov
        </h1>
        <p className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Founder building{" "}
          <span className="text-accent-cyan">
            {mvpText}
            {!mvpDone && <span className="animate-pulse">|</span>}
          </span>
          {" "}in public.
        </p>
        <p className="text-base text-muted-foreground max-w-lg mb-4">
          Fast iteration. Strong distribution.
        </p>
        <p className="text-sm text-muted-foreground h-5">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
}
