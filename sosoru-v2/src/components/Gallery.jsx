import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import SectionTitle from './SectionTitle'
import { gallery } from '../data/content'
import { lockScroll } from '../lib/useLenis'

const EASE = [0.22, 1, 0.36, 1]

export default function Gallery() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(null)
  const open = index !== null
  const shot = open ? gallery[index] : null

  const step = useCallback((direction) => {
    setIndex((current) => {
      if (current === null) return current
      return (current + direction + gallery.length) % gallery.length
    })
  }, [])

  useEffect(() => {
    if (!open) return
    lockScroll(true)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIndex(null)
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lockScroll(false)
    }
  }, [open, step])

  return (
    <section id="gallery" className="bg-ink py-section text-cream">
      <div className="shell">
        <SectionTitle
          index="06 — Photographs"
          en="The room, in pieces"
          jp="写真"
          tone="dark"
          lead="Timber, lattice and low light, photographed at Sosoru. Tap any frame to see it full."
        />

        <div className="mt-10 columns-2 gap-4 [&>*]:mb-4 lg:columns-3">
          {gallery.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className="group relative block w-full break-inside-avoid overflow-hidden border border-honey/25 text-left"
              aria-label={`Open photograph: ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: item.ratio, objectPosition: item.position }}
                className="w-full object-cover transition-transform duration-1200 ease-craft group-hover:scale-[1.05]"
              />

              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
              />

              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-baseline gap-2.5 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span aria-hidden className="font-jp text-[12px] leading-none text-honey">
                  {item.jp}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-cream/80">
                  {item.caption}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photograph ${index + 1} of ${gallery.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink/95 px-4 py-5 backdrop-blur-sm sm:px-8"
          >
            <div className="flex items-center justify-between text-cream/60">
              <p className="text-[9px] uppercase tracking-[0.24em]">
                {String(index + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </p>
              <button
                type="button"
                onClick={() => setIndex(null)}
                aria-label="Close photograph"
                className="flex h-10 w-10 items-center justify-center border border-cream/20 transition-colors hover:border-cream hover:text-cream"
              >
                <X className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) step(1)
                    else if (info.offset.x > 60) step(-1)
                  }}
                  initial={reduce ? false : { opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  style={{ touchAction: 'pan-y' }}
                  className="max-h-[76vh] max-w-full cursor-grab object-contain active:cursor-grabbing"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photograph"
                className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-cream hover:text-cream sm:flex"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photograph"
                className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-cream hover:text-cream sm:flex"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-cream/10 pt-4">
              <p className="text-[12px] text-cream/60 sm:text-[13px]">{shot.caption}</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-cream/35 sm:hidden">Swipe</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
