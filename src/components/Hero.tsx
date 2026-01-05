import { useEffect, useState } from "react";

const TYPING_TEXT = "NYC · Open to strong technical co-founder";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [displayText, isDeleting]);

  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Alex Ibragimov
        </h1>
        <p className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Founder building <span style={{ color: "#08fdd8" }}>MVPs</span> in public.
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
