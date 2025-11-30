import { useEffect, useState } from "react";

export function DynamicBackground() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.max(0, Math.min(1, docHeight > 0 ? scrollTop / docHeight : 0));
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Brand colors for dawn progression
  const brandColors = [
    '#EEAA4A', // Yellow (sunrise)
    '#EF660B', // Orange (full sunrise)
    '#8F73FE', // Purple (pre-dawn)
    '#217DFE', // Blue (early dawn)
  ];

  // Dark base that stays throughout
  const darkBase = '#070911';

  // Determine which transition we're in (0-3)
  const stage = Math.min(Math.floor(scrollPercent * 4), 3);
  const stageProgress = (scrollPercent * 4) - stage;

  // Interpolate between current and next brand color
  const interpolateColor = (start: string, end: string, factor: number) => {
    const s = parseInt(start.slice(1), 16);
    const e = parseInt(end.slice(1), 16);

    const r1 = (s >> 16) & 255, g1 = (s >> 8) & 255, b1 = s & 255;
    const r2 = (e >> 16) & 255, g2 = (e >> 8) & 255, b2 = e & 255;

    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);

    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
  };

  // Get current glow color
  let glowColor;
  if (stage < 3) {
    glowColor = interpolateColor(brandColors[stage], brandColors[stage + 1], stageProgress);
  } else {
    glowColor = brandColors[3];
  }

  // Opacity decreases as we scroll (brightest at hero, dims as you scroll)
  const glowOpacity = 0.6 - (scrollPercent * 0.35); // 60% to 25%

  return (
    <>
      {/* Base dark layer - always dark */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none"
        style={{
          backgroundColor: darkBase,
        }}
      />

      {/* Dawn glow - transitions through brand colors */}
      <div
        className="fixed inset-0 -z-40 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 85%)`,
          opacity: glowOpacity,
          filter: 'blur(80px)',
        }}
      />
    </>
  );
}
