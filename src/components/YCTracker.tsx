export function YCTracker() {
  return (
    <section id="yc-tracker" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          YC Attempts Tracker
        </h2>
        
        <div className="flex items-center gap-8 md:gap-12 mb-6">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground mt-1">Applications</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground mt-1">Rejections</div>
          </div>
          <div>
            <div className="text-lg md:text-xl font-medium text-foreground">Still building.</div>
            <div className="text-sm text-muted-foreground mt-1">Status</div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Rejected ≠ stopped.
        </p>
      </div>
    </section>
  );
}
