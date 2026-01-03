export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="container-narrow">
        <p className="text-sm text-muted-foreground text-center">
          © {year} Alex Ibragimov — Building in public.
        </p>
      </div>
    </footer>
  );
}
