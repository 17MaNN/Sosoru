export default function Frame({
  src,
  alt,
  ratio = '4 / 5',
  position = '50% 50%',
  caption,
  jp,
  priority = false,
  zoom = true,
  className = '',
  children,
}) {
  return (
    <figure className={`group ${className}`}>
      <div className="border border-honey/40 p-[5px]">
        <div className="overflow-hidden bg-cream" style={{ aspectRatio: ratio }}>
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={priority ? 'high' : undefined}
            style={{ objectPosition: position }}
            className={[
              'h-full w-full object-cover',
              zoom
                ? 'transition-transform duration-1200 ease-craft group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100'
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </div>
      </div>

      {jp || caption ? (
        <figcaption className="mt-3 flex items-baseline gap-2.5 text-[10px] uppercase tracking-[0.2em] text-ink/50">
          {jp ? (
            <span className="font-jp text-[12px] leading-none tracking-normal text-honey">{jp}</span>
          ) : null}
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      ) : null}

      {children}
    </figure>
  )
}
