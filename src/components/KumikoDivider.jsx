const hex = (value, alpha) => {
  const n = parseInt(value.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

export default function KumikoDivider({ variant = 'rule', tone = 'honey', className = '' }) {
  const stroke = tone === 'cream' ? '#F4EFE6' : '#C98F4F'

  if (variant === 'lattice') {
    return (
      <div
        aria-hidden
        className={`h-7 w-full ${className}`}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${hex(stroke, 0.5)} 0 1px, transparent 1px 15px), repeating-linear-gradient(-45deg, ${hex(stroke, 0.5)} 0 1px, transparent 1px 15px)`,
          maskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
        }}
      />
    )
  }

  return (
    <div aria-hidden className={`flex items-center gap-5 ${className}`}>
      <span className="h-px flex-1" style={{ background: hex(stroke, 0.4) }} />
      <svg
        width="38"
        height="16"
        viewBox="0 0 38 16"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        className="shrink-0"
      >
        <path d="M19 1.5 25.5 8 19 14.5 12.5 8Z" />
        <path d="M12.5 8h13M19 1.5v13" strokeOpacity="0.55" />
        <path d="M0 8h10M28 8h10" strokeOpacity="0.4" />
      </svg>
      <span className="h-px flex-1" style={{ background: hex(stroke, 0.4) }} />
    </div>
  )
}
