import { SocialLinks } from "./SocialLinks";

export function LetsConnect() {
  return (
    <section id="connect" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Let's connect
        </h2>
        
        <p className="text-base text-muted-foreground mb-8 max-w-lg">
          Building Athana. Hiring a founding engineer and a head of growth
          with the round.
        </p>
        
        <SocialLinks />
      </div>
    </section>
  );
}
