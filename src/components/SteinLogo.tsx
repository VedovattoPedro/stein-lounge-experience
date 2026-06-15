export function SteinLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="20"
          fontWeight="500"
          fill="currentColor"
          letterSpacing="1"
        >
          S
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg tracking-[0.25em] uppercase">Stein</span>
        <span className="text-[0.55rem] tracking-[0.4em] uppercase text-muted-foreground mt-0.5">
          Premium
        </span>
      </div>
    </div>
  );
}
