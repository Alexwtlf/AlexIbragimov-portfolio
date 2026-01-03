export function Hero() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Alex Ibragimov
        </h1>
        <p className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Building products in public.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Experiments → MVPs → companies.
        </p>
        <p className="text-base text-muted-foreground max-w-lg mb-4">
          Early-stage founder focused on shipping fast and obsessing over distribution.
        </p>
        <p className="text-sm text-muted-foreground">
          NYC · Open to strong technical co-founder
        </p>
      </div>
    </section>
  );
}
