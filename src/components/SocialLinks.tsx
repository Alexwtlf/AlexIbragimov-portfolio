import { Mail, Linkedin, Instagram } from "lucide-react";

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
    href: "mailto:alex@athana.ai",
    icon: Mail,
  },
  {
    name: "X",
    href: "https://x.com/alexwtlf",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexibragimov/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alexibragimov17",
    icon: Instagram,
  },
];

// Hero uses the small row, Let's connect the full-size one
export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const small = size === "sm";

  return (
    <div className={`flex items-center ${small ? "gap-3" : "gap-4"}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${small ? "p-2" : "p-2.5"} rounded-lg bg-background border border-border hover:border-foreground/20 transition-colors`}
          aria-label={link.name}
        >
          <link.icon className={`${small ? "h-4 w-4" : "h-5 w-5"} text-foreground`} />
        </a>
      ))}
    </div>
  );
}
