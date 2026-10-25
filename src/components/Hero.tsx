import { useEffect, useState, useRef } from "react";
import { SocialLinks } from "./SocialLinks";

const TYPING_TEXT = "NYC · Founder of Athana · Building the future of AI filmmaking";
const ACCENT_TEXT = "new kind";

export function Hero() {
  // NYC typing animation (loops)
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Accent typing animation (once on load)
  const [mvpText, setMvpText] = useState("");
  const [mvpDone, setMvpDone] = useState(false);
  const mvpStarted = useRef(false);

  // Accent typing - runs once on mount
  useEffect(() => {
    if (mvpStarted.current) return;
    mvpStarted.current = true;

    let charIndex = 0;
    const typeNextChar = () => {
      if (charIndex <= ACCENT_TEXT.length) {
        setMvpText(ACCENT_TEXT.slice(0, charIndex));
        charIndex++;
        setTimeout(typeNextChar, 100);
      } else {
        setMvpDone(true);
      }
    };

    // Small delay before starting
    setTimeout(typeNextChar, 500);
  }, []);

  // NYC typing animation (loops) - starts after accent text is done
  useEffect(() => {
    // Wait for accent text to finish first
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
          A{" "}
          <span className="text-accent-cyan">
            {mvpText}
            {!mvpDone && <span className="animate-pulse">|</span>}
          </span>
          {" "}of founder.
        </p>
        <p className="text-base text-muted-foreground max-w-lg mb-4">
          One person with AI agents does the work of a startup team.
        </p>
        <p className="text-sm text-muted-foreground h-10 sm:h-5">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <div className="mt-6">
          <SocialLinks size="sm" />
        </div>
      </div>
    </section>
  );
}
