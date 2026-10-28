import { useEffect, useRef, useState } from 'react'
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react'

import SectionTitle from './SectionTitle'
import { signatures } from '../data/content'

const EASE = [0.22, 1, 0.36, 1]
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

/**
 * One card. Tilts towards the pointer, lifts its plate, and carries a struck
 * hanko seal. The plate shows a photograph when `src` exists, and a carved
 * kanji until dish photography arrives.
 */
function SignatureCard({ item }) {
  const reduce = useReducedMotion()
  const rotateX = useSpring(0, { stiffness: 190, damping: 18 })
  const rotateY = useSpring(0, { stiffness: 190, damping: 18 })

  const onMove = (event) => {
    if (reduce || event.buttons) return
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 7)
    rotateX.set(py * -7)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex w-[78vw] max-w-[22rem] shrink-0 flex-col border border-honey/35 bg-cream sm:w-[20rem]"
    >
      <div className="relative overflow-hidden">
        <div className="relative aspect-[5/4] overflow-hidden bg-[#ECE3D3]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35] transition-transform duration-1200 ease-craft group-hover:scale-[1.08]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(201,143,79,0.28) 0 1px, transparent 1px 26px), repeating-linear-gradient(-45deg, rgba(201,143,79,0.28) 0 1px, transparent 1px 26px)',
              maskImage: 'radial-gradient(circle at 50% 50%, #000, transparent 72%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000, transparent 72%)',
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-honey/30"
          />

          {item.src ? (
            <img
              src={item.src}
              alt={item.alt ?? ''}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 ease-craft group-hover:scale-[1.06]"
            />
          ) : (
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-jp text-[clamp(2.6rem,9vw,3.4rem)] leading-none tracking-[0.06em] text-honey/80 transition-transform duration-1200 ease-craft group-hover:scale-[1.07]"
            >
              {item.kanji}
            </span>
          )}

          <span aria-hidden className="absolute right-3 top-3 hanko">
            {item.seal}
          </span>
          <span aria-hidden className="absolute left-3 top-3 font-jp text-[11px] tracking-[0.2em] text-ink/30">
            {item.index}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.45rem] leading-tight text-ink">{item.name}</h3>
        <p className="mt-2.5 text-[14px] leading-[1.7] text-ink/60">{item.description}</p>
        <div className="mt-auto flex items-baseline justify-between gap-4 border-t border-honey/25 pt-4">
          <span className="eyebrow text-honey">{item.note}</span>
          <span className="eyebrow text-ink/35">Preview</span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Signatures() {
  const reduce = useReducedMotion()
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const x = useMotionValue(0)
  const [limit, setLimit] = useState(0)
  const [step, setStep] = useState(0)
  const [pos, setPos] = useState(0)
  const glowX = useTransform(x, (value) => (limit > 0 ? clamp(-value / limit, 0, 1) : 0))

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!track || !viewport) return
      setLimit(Math.max(0, track.scrollWidth - viewport.clientWidth))
      const first = track.children[0]
      const second = track.children[1]
      if (first && second) setStep(second.offsetLeft - first.offsetLeft)
    }

    measure()
    const observer = new ResizeObserver(measure)
    if (trackRef.current) observer.observe(trackRef.current)
    if (viewportRef.current) observer.observe(viewportRef.current)
    return () => observer.disconnect()
  }, [])

  const settle = (target) => {
    const next = clamp(target, 0, limit)
    setPos(next)
    animate(x, -next, reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 34 })
  }

  const onDragEnd = () => {
    const size = step || 1
    settle(Math.round(-x.get() / size) * size)
  }

  const atStart = pos <= 1
  const atEnd = pos >= limit - 1

  return (
    <section id="kitchen" className="relative overflow-hidden pb-section">
      <div className="shell">
        <SectionTitle
          index="02 — From the kitchen"
          en="Four things worth ordering first"
          jp="台所"
          lead="Named for dishes the kitchen serves nightly. Dish photography is still being shot, so the plates are carved until it lands."
        />
      </div>

      <div className="shell mt-8 flex items-center justify-between gap-6">
        <p className="flex items-center gap-2.5 text-[9px] uppercase tracking-[0.24em] text-ink/40">
          <MoveHorizontal className="h-3.5 w-3.5 text-honey" strokeWidth={1.5} aria-hidden />
          Drag to browse
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => settle(pos - (step || 1))}
            disabled={atStart}
            aria-label="Previous dishes"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => settle(pos + (step || 1))}
            disabled={atEnd}
            aria-label="Next dishes"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </button>
        </div>
      </div>

      <div ref={viewportRef} className="mt-6 overflow-hidden">
        <motion.div
          ref={trackRef}
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.055}
          dragMomentum={false}
          onDragEnd={onDragEnd}
          style={{ x }}
          className="flex w-max cursor-grab gap-5 px-6 active:cursor-grabbing sm:px-8 lg:px-12"
        >
          {signatures.map((item) => (
            <SignatureCard key={item.name} item={item} />
          ))}
        </motion.div>
      </div>

      <div className="shell mt-7 flex items-center gap-4">
        <span className="relative h-px flex-1 bg-ink/10">
          <motion.span
            className="absolute inset-y-0 left-0 origin-left bg-honey"
            style={{ scaleX: glowX, width: '38%' }}
          />
        </span>
        <span className="text-[9px] uppercase tracking-[0.24em] text-ink/35">
          {String(signatures.length).padStart(2, '0')} plates
        </span>
      </div>
    </section>
  )
}
