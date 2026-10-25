import { SocialLinks } from "./SocialLinks";

export function LetsConnect() {
  return (
    <section id="connect" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Let's connect
        </h2>
        
        <p className="text-base text-muted-foreground mb-8 max-w-lg">
          Open to a technical co-founder and early collaborators.
          If you build fast and care about distribution — let's talk.
        </p>
        
        <SocialLinks />
      </div>
    </section>
  );
}
