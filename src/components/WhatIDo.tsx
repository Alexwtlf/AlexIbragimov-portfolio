import { useEffect, useRef, useState } from "react";

// =============================================================================
// SKILLS DATA
// Each skill has parts: some plain text, some accented
// =============================================================================

interface SkillPart {
  text: string;
  accent?: boolean;
}

interface Skill {
  parts: SkillPart[];
}

const SKILLS: Skill[] = [
  {
    parts: [
      { text: "Product " },
      { text: " & MVPs", accent: true },
      { text: " — from zero to launch" },
    ],
  },
  {
    parts: [
      { text: "Product Design — " },
      { text: "UX-first", accent: true },
      { text: ", fast iteration" },
    ],
  },
  {
    parts: [
      { text: "Frontend — " },
      { text: "React / Next.js", accent: true },
    ],
  },
  {
    parts: [
      { text: "Early-stage execution — " },
      { text: "weekly shipping", accent: true },
    ],
  },
  {
    parts: [
      { text: "Social distribution — " },
      { text: "30M+", accent: true },
      { text: " organic views" },
    ],
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export function WhatIDo() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedChars, setTypedChars] = useState<number[]>(SKILLS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Get full text length for a skill
  const getFullText = (skill: Skill) =>
    skill.parts.map((p) => p.text).join("");

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
    let currentLine = 0;
    let currentChar = 0;

    const typeNextChar = () => {
      if (currentLine >= SKILLS.length) return;

      const fullText = getFullText(SKILLS[currentLine]);

      if (currentChar <= fullText.length) {
        setTypedChars((prev) => {
          const newChars = [...prev];
          newChars[currentLine] = currentChar;
          return newChars;
        });
        setVisibleLines(currentLine + 1);
        currentChar++;
        setTimeout(typeNextChar, 25); // Fast typing speed
      } else {
        // Move to next line
        currentLine++;
        currentChar = 0;
        setTimeout(typeNextChar, 150); // Pause between lines
      }
    };

    typeNextChar();
  };

  // Render skill text with proper accents based on typed chars
  const renderSkillText = (skill: Skill, charCount: number) => {
    let totalChars = 0;
    const elements: JSX.Element[] = [];

    skill.parts.forEach((part, partIndex) => {
      const partStart = totalChars;
      const partEnd = totalChars + part.text.length;
      totalChars = partEnd;

      // How much of this part should be visible
      const visibleLength = Math.max(0, Math.min(charCount - partStart, part.text.length));
      const visibleText = part.text.slice(0, visibleLength);

      if (visibleText) {
        elements.push(
          <span
            key={partIndex}
            className={part.accent ? "text-accent-cyan" : "text-foreground"}
          >
            {visibleText}
          </span>
        );
      }
    });

    return elements;
  };

  return (
    <section id="what-i-do" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          What I do
        </h2>
        <ul className="space-y-3">
          {SKILLS.map((skill, index) => (
            <li
              key={index}
              className={`font-medium transition-opacity duration-200 ${
                index < visibleLines ? "opacity-100" : "opacity-0"
              }`}
            >
              {renderSkillText(skill, typedChars[index])}
              {/* Typing cursor on current line */}
              {index === visibleLines - 1 &&
                typedChars[index] < getFullText(skill).length && (
                  <span className="text-accent-cyan animate-pulse">|</span>
                )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
