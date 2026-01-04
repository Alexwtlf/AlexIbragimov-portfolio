import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { title: "Product & MVPs", description: "idea → shipped" },
  { title: "Product Design", description: "UX-first, fast iteration" },
  { title: "Frontend", description: "React / Next.js" },
  { title: "Prototyping & Experiments", description: "validate before scale" },
  { title: "Early-stage Execution", description: "weekly shipping" },
  { title: "Social Distribution", description: "30M+ organic views" },
];

export function WhatIDo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <section id="what-i-do" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          What I do
        </h2>
        <ul className="space-y-4">
          {SKILLS.map((skill, index) => (
            <li
              key={skill.title}
              className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 ${
                isVisible ? "opacity-0 animate-fade-in-up" : "opacity-0"
              }`}
              style={isVisible ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              <span className="font-medium text-foreground">{skill.title}</span>
              <span className="text-muted-foreground">{skill.description}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-8">
          Focused on early-stage products and fast iteration.
        </p>
      </div>
    </section>
  );
}
