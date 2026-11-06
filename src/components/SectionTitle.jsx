import Reveal from './Reveal'

export default function SectionTitle({
  index,
  en,
  jp,
  lead,
  align = 'left',
  tone = 'ink',
  className = '',
}) {
  const dark = tone === 'dark'
  const centred = align === 'center'

  return (
    <Reveal
      as="header"
      className={[
        'grid gap-5',
        centred ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {index ? (
        <p className={['eyebrow', dark ? 'text-cream/55' : ''].join(' ')}>{index}</p>
      ) : null}

      <div
        className={['flex gap-5', centred ? 'justify-center' : 'items-start justify-between'].join(
          ' ',
        )}
      >
        <h2
          className={[
            'text-display-sm',
            dark ? 'text-cream' : 'text-ink',
            centred ? 'max-w-[24ch]' : 'max-w-[20ch]',
          ].join(' ')}
        >
          {en}
        </h2>

        {jp ? (
          <span
            aria-hidden
            className={[
              'mt-1 hidden shrink-0 font-jp text-[13px] leading-none tracking-[0.1em] sm:block',
              '[writing-mode:vertical-rl]',
              dark ? 'text-honey' : 'text-honey',
            ].join(' ')}
          >
            {jp}
          </span>
        ) : null}
      </div>

      {lead ? (
        <p className={['max-w-read', dark ? 'text-cream/70' : 'text-ink/65'].join(' ')}>{lead}</p>
      ) : null}
    </Reveal>
  )
}
