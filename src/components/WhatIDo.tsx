const SKILLS = [
  { title: "Product & MVPs", description: "idea → shipped" },
  { title: "Product Design", description: "UX-first, fast iteration" },
  { title: "Frontend", description: "React / Next.js" },
  { title: "Prototyping & Experiments", description: "validate before scale" },
  { title: "Early-stage Execution", description: "weekly shipping" },
  { title: "Social Distribution", description: "30M+ organic views" },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          What I do
        </h2>
        <ul className="space-y-4">
          {SKILLS.map((skill) => (
            <li key={skill.title} className="flex items-baseline gap-3">
              <span className="font-medium text-foreground">{skill.title}</span>
              <span className="text-muted-foreground">— {skill.description}</span>
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
