/**
 * A line study of the dining room's defining details: the timber lattice, the
 * globe pendants and the low table. Deliberately an illustration rather than a
 * photograph, and captioned as such in the gallery.
 */
export default function LatticeStudy() {
  const slats = Array.from({ length: 22 }, (_, index) => 42 + index * 18)

  return (
    <svg
      viewBox="0 0 480 560"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Line drawing of the timber lattice screen, two globe pendant lights and a low dining table at Sosoru."
    >
      <defs>
        <radialGradient id="study-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C5A477" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C5A477" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="study-slat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C5A477" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C5A477" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <rect width="480" height="560" fill="#2E211A" />

      <ellipse cx="158" cy="128" rx="168" ry="150" fill="url(#study-glow)" />
      <ellipse cx="344" cy="228" rx="96" ry="86" fill="url(#study-glow)" opacity="0.7" />

      {/* Ceiling beams */}
      <g stroke="#C5A477" strokeOpacity="0.22" strokeWidth="1">
        <line x1="0" y1="24" x2="480" y2="24" />
        <line x1="0" y1="46" x2="480" y2="46" />
      </g>

      {/* Pendants */}
      <g stroke="#C5A477" strokeOpacity="0.55" strokeWidth="1">
        <line x1="158" y1="46" x2="158" y2="108" />
        <line x1="344" y1="46" x2="344" y2="212" />
      </g>
      <circle cx="158" cy="122" r="15" fill="#F4F0E8" fillOpacity="0.92" />
      <circle cx="344" cy="226" r="10" fill="#F4F0E8" fillOpacity="0.78" />

      {/* Noren panel behind the lattice */}
      <g opacity="0.5">
        <rect x="286" y="150" width="150" height="86" fill="#F4F0E8" fillOpacity="0.1" />
        <line x1="361" y1="150" x2="361" y2="236" stroke="#F4F0E8" strokeOpacity="0.28" />
      </g>

      {/* Lattice screen */}
      <g stroke="url(#study-slat)" strokeWidth="1.6">
        {slats.map((x) => (
          <line key={x} x1={x} y1="140" x2={x} y2="432" />
        ))}
      </g>
      <g stroke="#C5A477" strokeOpacity="0.4" strokeWidth="1">
        <line x1="30" y1="140" x2="450" y2="140" />
        <line x1="30" y1="286" x2="450" y2="286" />
        <line x1="30" y1="432" x2="450" y2="432" />
      </g>

      {/* Table and chairs */}
      <g stroke="#C5A477" strokeOpacity="0.7" strokeWidth="1.4" fill="none">
        <rect x="112" y="462" width="256" height="6" rx="3" fill="#C5A477" fillOpacity="0.85" stroke="none" />
        <line x1="146" y1="468" x2="146" y2="524" />
        <line x1="334" y1="468" x2="334" y2="524" />
        <path d="M96 500v-42h26v42" strokeOpacity="0.45" />
        <path d="M358 500v-42h26v42" strokeOpacity="0.45" />
      </g>

      {/* Floor line */}
      <line x1="0" y1="548" x2="480" y2="548" stroke="#C5A477" strokeOpacity="0.2" />
    </svg>
  )
}
