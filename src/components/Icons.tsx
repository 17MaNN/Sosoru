type IconProps = {
  className?: string
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.2 10.8 10.8 3.2M4.4 3.2h6.4v6.4" strokeLinecap="square" />
    </svg>
  )
}

export function Plus({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 1v10M1 6h10" strokeLinecap="square" />
    </svg>
  )
}

export function PlateGlyph({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="15.5" />
      <circle cx="20" cy="20" r="9" opacity="0.55" />
      <path d="M20 4.5v5M20 30.5v5M4.5 20h5M30.5 20h5" opacity="0.6" />
    </svg>
  )
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 7H2M6 3 2 7l4 4" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}
