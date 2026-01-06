import { Mail, Github, Linkedin } from "lucide-react";

// X (Twitter) icon - not available in lucide-react
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Email",
    href: "mailto:ibragimov.alejandro@gmail.com", // Replace with your email
    icon: Mail,
  },
  {
    name: "X",
    href: "https://x.com/alexwtlf", // Replace with your handle
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexibragimov/", // Replace with your profile
    icon: Linkedin,
  },
];

export function LetsConnect() {
  return (
    <section id="connect" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Let's connect
        </h2>
        
        <p className="text-base text-muted-foreground mb-8 max-w-lg">
          Open to a strong technical co-founder and early collaborators.
          If you build fast and care about distribution — let's talk.
        </p>
        
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-background border border-border hover:border-foreground/20 transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5 text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
