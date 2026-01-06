import { useEffect, useRef, useState } from "react";

// =============================================================================
// SKILLS DATA
// Each skill has: before (plain), accent (cyan), after (plain)
// =============================================================================

const SKILLS = [
  { before: "", accent: "Product & MVPs", after: " — from zero to launch" },
  { before: "Product Design — ", accent: "UX-first", after: ", fast iteration" },
  { before: "Frontend — ", accent: "React / Next.js", after: "" },
  { before: "Early-stage execution — ", accent: "weekly shipping", after: "" },
  { before: "Social distribution — ", accent: "30M+", after: " organic views" },
];

const HEADING_TEXT = "What I do";

// =============================================================================
// COMPONENT
// =============================================================================

export function WhatIDo() {
  const [headingText, setHeadingText] = useState("");
  const [headingDone, setHeadingDone] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startTypingAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTypingAnimation = () => {
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex <= HEADING_TEXT.length) {
        setHeadingText(HEADING_TEXT.slice(0, charIndex));
        charIndex++;
        setTimeout(typeNextChar, 80);
      } else {
        setHeadingDone(true);
      }
    };

    typeNextChar();
  };

  return (
    <section id="what-i-do" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          {headingText}
          {!headingDone && <span className="text-accent-cyan animate-pulse">|</span>}
        </h2>
        <ul className="space-y-3">
          {SKILLS.map((skill, index) => (
            <li key={index} className="font-medium">
              {skill.before && <span className="text-foreground">{skill.before}</span>}
              <span className="text-accent-cyan">{skill.accent}</span>
              {skill.after && <span className="text-foreground">{skill.after}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
