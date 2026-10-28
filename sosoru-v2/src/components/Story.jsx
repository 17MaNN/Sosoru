import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

import Frame from './Frame'
import KumikoDivider from './KumikoDivider'
import SectionTitle from './SectionTitle'
import { images, story } from '../data/content'

const EASE = [0.22, 1, 0.36, 1]

/** Reveals a block of text word by word, which reads as line by line. */
function LineReveal({ text, className = '', delay = 0 }) {
  const reduce = useReducedMotion()

  if (reduce) return <p className={className}>{text}</p>

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.35 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.028, delayChildren: delay } } }}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: '0.35em' },
            shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.p>
  )
}

export default function Story() {
  const photoRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ['start end', 'end start'],
  })
  // 20px of travel in total, front to back.
  const y = useTransform(scrollYProgress, [0, 1], [-10, 10])

  return (
    <section id="story" className="relative overflow-hidden py-section">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none font-jp text-[38vw] leading-none sm:left-auto sm:right-[-3%] sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:text-[22vw]"
        style={{ color: 'rgba(20, 20, 20, 0.045)' }}
      >
        部屋
      </span>

      <div className="shell relative grid gap-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-24">
        <div className="grid gap-9">
          <SectionTitle index={story.eyebrow} en={story.en} jp={story.jp} lead={story.lead} />

          <LineReveal
            text={story.statement}
            className="max-w-[26ch] font-display text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.24] text-ink"
          />

          <div className="grid gap-5">
            {story.paragraphs.map((paragraph, index) => (
              <LineReveal
                key={paragraph}
                text={paragraph}
                delay={0.05 * index}
                className="max-w-read text-[15.5px] text-ink/65"
              />
            ))}
          </div>

          <KumikoDivider />

          <dl className="grid gap-px sm:grid-cols-3">
            {story.facts.map((fact) => (
              <div key={fact.label} className="border-t border-honey/30 py-5 sm:pr-5">
                <dt className="eyebrow text-ink/40">{fact.label}</dt>
                <dd className="mt-2 font-display text-[1.15rem] leading-snug text-ink/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={photoRef} className="lg:pt-16">
          <motion.div style={reduce ? undefined : { y }} className="will-change-transform">
            <Frame
              src={images.heroPortrait}
              alt="The Sosoru dining room: palms, timber tables and the lattice run beyond."
              ratio="3 / 4"
              position="55% 58%"
              jp="部屋"
              caption="The room, photographed"
            />
          </motion.div>

          <p className="mt-6 border-l border-honey/40 pl-4 text-[13px] leading-relaxed text-ink/50">
            Sunken booths along the lattice, a bonsai by the window, vintage prints on the wall.
          </p>
        </div>
      </div>
    </section>
  )
}
