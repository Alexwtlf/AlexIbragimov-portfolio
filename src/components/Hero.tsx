const FLOW_ITEMS = ["Experiments", "MVPs", "companies"];

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
        <p className="text-lg md:text-xl text-muted-foreground mb-6 flex flex-wrap items-center gap-1">
          {FLOW_ITEMS.map((item, index) => (
            <span key={item} className="flex items-center">
              <span
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {item}
              </span>
              {index < FLOW_ITEMS.length - 1 && (
                <span
                  className="opacity-0 animate-fade-in-up mx-1"
                  style={{ animationDelay: `${index * 0.3 + 0.15}s` }}
                >
                  →
                </span>
              )}
            </span>
          ))}
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
