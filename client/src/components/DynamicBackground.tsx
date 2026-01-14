import { useEffect, useState } from "react";

export function DynamicBackground() {
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold is roughly the first section (one viewport height)
      setIsHero(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Static Hero Colors - Official Albor Palette
  const darkBase = '#2169D1';
  const glowColor = '#F1BD76';

  return (
    <>
      {/* Base dark layer - always dark */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none"
        style={{
          backgroundColor: darkBase,
        }}
      />

      {/* Static Glow - Only visible in hero section */}
      <div
        className="fixed inset-0 -z-40 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 75%)`,
          opacity: isHero ? 1 : 0,
          filter: 'blur(80px)',
        }}
      />
    </>
  );
}
