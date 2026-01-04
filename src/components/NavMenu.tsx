import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "What I do", href: "#what-i-do" },
  { label: "YC Tracker", href: "#yc-tracker" },
  { label: "Contacts", href: "#contacts" },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-muted-foreground transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="absolute right-0 top-full mt-2 z-50 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px] animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
