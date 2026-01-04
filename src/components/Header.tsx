import { NavMenu } from "./NavMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-wide px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">AI</span>
        <NavMenu />
      </div>
    </header>
  );
}
