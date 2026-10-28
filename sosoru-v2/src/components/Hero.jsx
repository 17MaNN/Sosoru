import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import Button from './Button'
import { brand, contact, images } from '../data/content'

const EASE = [0.22, 1, 0.36, 1]

// Written out in full so Tailwind can see the animation classes.
const LANTERNS = [
  { left: '4%', top: '16%', size: 300, delay: '-1s', drift: 'animate-bob' },
  { left: '74%', top: '8%', size: 240, delay: '-4.5s', drift: 'animate-bob-slow' },
  { left: '58%', top: '58%', size: 360, delay: '-2.5s', drift: 'animate-bob' },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-cream">
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0"
        initial={reduce ? false : { scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: EASE }}
      >
        <picture>
          <source media="(min-width: 900px)" srcSet={images.hero} />
          <img
            src={images.heroPortrait}
            alt=""
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[50%_45%]"
          />
        </picture>
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/90 via-ink/35 to-ink/55"
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2]">
        {LANTERNS.map((lantern) => (
          <div
            key={lantern.left + lantern.top}
            className={`absolute ${lantern.drift}`}
            style={{ left: lantern.left, top: lantern.top, animationDelay: lantern.delay }}
          >
            <div
              className="animate-glow"
              style={{
                width: lantern.size,
                height: lantern.size,
                borderRadius: '50%',
                animationDelay: lantern.delay,
                filter: 'blur(12px)',
                background:
                  'radial-gradient(circle, rgba(201,143,79,0.55) 0%, rgba(201,143,79,0.18) 40%, transparent 68%)',
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-14">
        <div className="shell">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="max-w-xl border border-honey/25 bg-cream p-7 text-ink shadow-warm sm:p-9"
          >
            <div className="flex items-start justify-between gap-6 border-b border-ink/10 pb-5">
              <div>
                <p className="font-display text-[2.15rem] leading-none tracking-[0.01em] text-ink">
                  {brand.name}
                </p>
                <p className="mt-2 font-jp text-[12px] tracking-[0.34em] text-honey">{brand.kanji}</p>
              </div>
              <p className="max-w-[11ch] text-right text-[9px] uppercase leading-[1.8] tracking-[0.22em] text-ink/45">
                {brand.tagline}
                <br />
                {brand.locality}
              </p>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2rem,7vw,3rem)] leading-[1.02] tracking-[-0.01em] text-ink">
              A quieter kind of <em className="text-honey">feast</em>
            </h1>

            <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.75] text-ink/65">
              {brand.heroSub}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#reservations" variant="solid" icon={ArrowUpRight}>
                Reserve a table
              </Button>
              <Button href="#menu" variant="outline">
                View menu
              </Button>
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-ink/40">
              {contact.phone.label}
            </p>
          </motion.div>
        </div>

        <div className="shell mt-8 hidden items-center justify-end gap-3 text-cream/60 sm:flex">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="relative block h-12 w-px bg-cream/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-line bg-honey" />
          </span>
        </div>
      </div>
    </section>
  )
}
