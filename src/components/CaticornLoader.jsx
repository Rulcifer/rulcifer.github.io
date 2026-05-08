import { useEffect, useState } from "react";

/**
 * Two cute cats loading animation:
 * - Devil Cat (dark, two horns, forked tail)
 * - Angel Cat (light, halo, tiny wings)
 * They orbit around each other playfully.
 */
export const CaticornLoader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 select-none">
      <div className="cats-orbit-stage">
        {/* Central sparkle/glow */}
        <div className="cats-center-glow" />

        {/* Orbit ring visual */}
        <div className="cats-orbit-ring" />

        {/* ── Devil Cat (orbits clockwise) ── */}
        <div className="cat-orbit cat-orbit-devil">
          <svg
            width="80"
            height="80"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cat-self-bounce"
          >
            {/* Body */}
            <ellipse cx="100" cy="132" rx="42" ry="35" fill="#2a3440" />
            {/* Belly */}
            <ellipse cx="100" cy="139" rx="26" ry="20" fill="#344250" />

            {/* Head */}
            <circle cx="100" cy="82" r="36" fill="#2a3440" />

            {/* Left ear */}
            <path d="M70 60 L62 32 L84 52 Z" fill="#2a3440" />
            <path d="M72 56 L66 38 L82 52 Z" fill="#0096FF" opacity="0.25" />
            {/* Right ear */}
            <path d="M130 60 L138 32 L116 52 Z" fill="#2a3440" />
            <path d="M128 56 L134 38 L118 52 Z" fill="#0096FF" opacity="0.25" />

            {/* Devil Horns */}
            <path d="M72 42 C68 28 64 18 68 14 C72 20 76 30 72 42" fill="url(#devilHorn)" />
            <path d="M128 42 C132 28 136 18 132 14 C128 20 124 30 128 42" fill="url(#devilHorn)" />
            {/* Horn highlights */}
            <path d="M69 30 Q68 24 70 18" stroke="#fff" strokeWidth="1" opacity="0.2" fill="none" strokeLinecap="round" />
            <path d="M131 30 Q132 24 130 18" stroke="#fff" strokeWidth="1" opacity="0.2" fill="none" strokeLinecap="round" />

            {/* Eyes ^_^ */}
            <path d="M83 80 Q88 73 93 80" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M107 80 Q112 73 117 80" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Blush */}
            <circle cx="77" cy="88" r="5" fill="#0096FF" opacity="0.12" />
            <circle cx="123" cy="88" r="5" fill="#0096FF" opacity="0.12" />

            {/* Nose + :3 mouth */}
            <ellipse cx="100" cy="89" rx="3" ry="2.5" fill="#4a5a6a" />
            <path d="M93 94 Q97 99 100 94" stroke="#4a5a6a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M100 94 Q103 99 107 94" stroke="#4a5a6a" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Whiskers */}
            <g opacity="0.4">
              <line x1="65" y1="84" x2="80" y2="87" stroke="#4a5a6a" strokeWidth="1" />
              <line x1="62" y1="91" x2="79" y2="91" stroke="#4a5a6a" strokeWidth="1" />
              <line x1="135" y1="84" x2="120" y2="87" stroke="#4a5a6a" strokeWidth="1" />
              <line x1="138" y1="91" x2="121" y2="91" stroke="#4a5a6a" strokeWidth="1" />
            </g>

            {/* Paws */}
            <ellipse cx="80" cy="161" rx="9" ry="6" fill="#344250" />
            <ellipse cx="120" cy="161" rx="9" ry="6" fill="#344250" />

            {/* Devil tail */}
            <path d="M142 132 Q162 118 158 98 Q155 85 163 76" stroke="#2a3440" strokeWidth="7" strokeLinecap="round" fill="none" className="cat-tail-wag" />
            <path d="M158 76 L166 66 L161 78 L170 72 L163 80" stroke="#0096FF" strokeWidth="2" strokeLinecap="round" fill="none" className="cat-tail-wag" opacity="0.8" />

            <defs>
              <linearGradient id="devilHorn" x1="100" y1="10" x2="100" y2="45" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0096FF" />
                <stop offset="100%" stopColor="#2a3440" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Angel Cat (orbits counter-clockwise, opposite side) ── */}
        <div className="cat-orbit cat-orbit-angel">
          <svg
            width="80"
            height="80"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cat-self-bounce cat-self-bounce-alt"
          >
            {/* Body */}
            <ellipse cx="100" cy="132" rx="42" ry="35" fill="#c8d6e5" />
            {/* Belly */}
            <ellipse cx="100" cy="139" rx="26" ry="20" fill="#dfe6ed" />

            {/* Head */}
            <circle cx="100" cy="82" r="36" fill="#c8d6e5" />

            {/* Left ear */}
            <path d="M70 60 L62 32 L84 52 Z" fill="#c8d6e5" />
            <path d="M72 56 L66 38 L82 52 Z" fill="#ffc048" opacity="0.25" />
            {/* Right ear */}
            <path d="M130 60 L138 32 L116 52 Z" fill="#c8d6e5" />
            <path d="M128 56 L134 38 L118 52 Z" fill="#ffc048" opacity="0.25" />

            {/* Halo ✨ */}
            <ellipse cx="100" cy="38" rx="22" ry="6" stroke="#ffc048" strokeWidth="3" fill="none" className="angel-halo" />
            <ellipse cx="100" cy="38" rx="22" ry="6" stroke="#fff" strokeWidth="1" fill="none" opacity="0.3" />

            {/* Tiny wings */}
            <path d="M58 110 Q40 85 50 65 Q55 75 58 95 Q48 70 42 55 Q52 72 58 100" fill="#dfe6ed" opacity="0.7" className="angel-wing-l" />
            <path d="M142 110 Q160 85 150 65 Q145 75 142 95 Q152 70 158 55 Q148 72 142 100" fill="#dfe6ed" opacity="0.7" className="angel-wing-r" />

            {/* Eyes ^_^ */}
            <path d="M83 80 Q88 73 93 80" stroke="#ffc048" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M107 80 Q112 73 117 80" stroke="#ffc048" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Blush */}
            <circle cx="77" cy="88" r="5" fill="#ff9ebc" opacity="0.2" />
            <circle cx="123" cy="88" r="5" fill="#ff9ebc" opacity="0.2" />

            {/* Nose + cute mouth */}
            <ellipse cx="100" cy="89" rx="3" ry="2.5" fill="#a0b0c0" />
            <path d="M95 93 Q100 98 105 93" stroke="#a0b0c0" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Whiskers */}
            <g opacity="0.35">
              <line x1="65" y1="84" x2="80" y2="87" stroke="#a0b0c0" strokeWidth="1" />
              <line x1="62" y1="91" x2="79" y2="91" stroke="#a0b0c0" strokeWidth="1" />
              <line x1="135" y1="84" x2="120" y2="87" stroke="#a0b0c0" strokeWidth="1" />
              <line x1="138" y1="91" x2="121" y2="91" stroke="#a0b0c0" strokeWidth="1" />
            </g>

            {/* Paws */}
            <ellipse cx="80" cy="161" rx="9" ry="6" fill="#dfe6ed" />
            <ellipse cx="120" cy="161" rx="9" ry="6" fill="#dfe6ed" />

            {/* Fluffy angel tail */}
            <path d="M142 132 Q158 118 155 100 Q152 88 158 78" stroke="#c8d6e5" strokeWidth="7" strokeLinecap="round" fill="none" className="cat-tail-wag-alt" />
            <circle cx="158" cy="76" r="5" fill="#dfe6ed" opacity="0.6" className="cat-tail-wag-alt" />
          </svg>
        </div>

        {/* Floating particles between them */}
        <div className="cats-particles">
          <span className="particle particle-1">✦</span>
          <span className="particle particle-2">♡</span>
          <span className="particle particle-3">✧</span>
          <span className="particle particle-4">⋆</span>
        </div>
      </div>

      {/* Loading text */}
      <div className="flex items-center gap-1 mt-2">
        <span className="text-sm text-muted-foreground tracking-wider font-medium">
          Loading
        </span>
        <span className="text-sm text-primary font-medium w-4 text-left">{dots}</span>
      </div>
    </div>
  );
};
