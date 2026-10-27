const BASE =
  'inline-flex items-center justify-center gap-3 rounded border px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-500 ease-craft disabled:cursor-not-allowed disabled:opacity-45'

const VARIANTS = {
  solid: 'border-ink bg-ink text-cream hover:border-honey hover:bg-honey hover:text-ink',
  honey: 'border-honey bg-honey text-ink hover:border-ink hover:bg-ink hover:text-cream',
  outline: 'border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream',
  light: 'border-cream/40 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-ink',
  quiet: 'border-transparent bg-transparent px-0 py-2 text-ink/70 hover:text-honey',
}

const SIZES = {
  sm: 'px-5 py-3 text-[10px]',
  md: '',
  lg: 'px-9 py-5',
}

export default function Button({
  children,
  href,
  variant = 'solid',
  size = 'md',
  icon: Icon,
  iconLeft = false,
  className = '',
  ...rest
}) {
  const classes = [BASE, VARIANTS[variant] ?? VARIANTS.solid, SIZES[size], className]
    .filter(Boolean)
    .join(' ')

  const glyph = Icon ? <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden /> : null
  const body = (
    <>
      {iconLeft ? glyph : null}
      <span>{children}</span>
      {iconLeft ? null : glyph}
    </>
  )

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : null)}
        {...rest}
      >
        {body}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {body}
    </button>
  )
}
