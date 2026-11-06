import Reveal from './Reveal'
import { Link } from '../lib/router'
import { ChevronRight } from 'lucide-react'

/** The quiet masthead every inner page opens with. */
export default function PageHeader({ eyebrow, title, jp, lead, trail = 'Home', children }) {
  return (
    <header className="border-b border-honey/25 bg-cream pb-12 pt-header">
      <div className="shell pt-10 sm:pt-14">
        <Reveal className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.22em] text-ink/35">
          <Link to="/" className="transition-colors hover:text-honey">
            {trail}
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} aria-hidden />
          <span className="text-ink/60">{eyebrow}</span>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Reveal delay={0.05}>
              <h1 className="max-w-[18ch] font-display text-display text-ink">
                {title}
              </h1>
            </Reveal>

            {lead ? (
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-read text-ink/65">{lead}</p>
              </Reveal>
            ) : null}

            {children}
          </div>

          {jp ? (
            <Reveal delay={0.18} className="hidden lg:block">
              <p
                aria-hidden
                className="font-jp text-[clamp(3rem,6vw,5rem)] leading-none tracking-[0.08em] text-honey/30"
              >
                {jp}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </header>
  )
}
