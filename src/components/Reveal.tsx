import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "pop";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const baseClass = variant === "pop" ? "reveal-pop" : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
