import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import Button from './Button'
import { brand, contact, navLinks } from '../data/content'
import useActiveSection from '../lib/useActiveSection'
import { lockScroll } from '../lib/useLenis'

const EASE = [0.22, 1, 0.36, 1]

const LATTICE = {
  backgroundImage:
    'repeating-linear-gradient(45deg, #C98F4F 0 1px, transparent 1px 34px), repeating-linear-gradient(-45deg, #C98F4F 0 1px, transparent 1px 34px)',
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const reduce = useReducedMotion()
  const active = useActiveSection(navLinks.map((link) => link.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    lockScroll(open)
    if (!open) return

    panelRef.current?.querySelector('button')?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lockScroll(false)
    }
  }, [open])

  // A wider viewport switches to the desktop nav; the overlay has nothing to do.
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)')
    const onChange = (event) => event.matches && setOpen(false)
    wide.addEventListener('change', onChange)
    return () => wide.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-700 ease-craft',
          scrolled
            ? 'border-ink/10 bg-cream/95 text-ink backdrop-blur-sm'
            : 'border-transparent bg-transparent text-cream',
        ].join(' ')}
      >
        <div className="shell flex h-header items-center justify-between gap-6">
          <a href="#top" className="flex items-baseline gap-2.5" aria-label={`${brand.name} — top of page`}>
            <span className="font-display text-[1.75rem] leading-none tracking-[0.01em]">
              {brand.name}
            </span>
            <span className="font-jp text-[11px] leading-none text-honey">{brand.kanji}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-active={active === id}
                  aria-current={active === id ? 'true' : undefined}
                  className="relative py-2 text-[10px] uppercase tracking-[0.24em] after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-honey after:transition-transform after:duration-500 after:ease-craft hover:after:scale-x-100 data-[active=true]:after:scale-x-100"
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              href="#reservations"
              size="sm"
              variant={scrolled ? 'solid' : 'light'}
              className="hidden sm:inline-flex"
            >
              Reserve
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="nav-overlay"
              className="group flex items-center gap-3 py-2 text-[10px] uppercase tracking-[0.24em] md:hidden"
            >
              <span>Menu</span>
              <span aria-hidden className="grid gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-4 bg-current transition-[width] duration-500 group-hover:w-6" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="nav-overlay"
            ref={panelRef}
            key="overlay"
            initial={{ x: reduce ? 0 : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: reduce ? 0 : '100%' }}
            transition={{ duration: reduce ? 0 : 0.62, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink text-cream md:hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.14]" style={LATTICE} />

            <div className="relative flex h-header shrink-0 items-center justify-between px-6">
              <span className="flex items-baseline gap-2.5">
                <span className="font-display text-[1.6rem] leading-none">{brand.name}</span>
                <span className="font-jp text-[11px] leading-none text-honey">{brand.kanji}</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  toggleRef.current?.focus()
                }}
                className="flex items-center gap-3 py-2 text-[10px] uppercase tracking-[0.24em]"
              >
                <span>Close</span>
                <span aria-hidden className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <motion.nav
              aria-label="Mobile"
              className="relative flex flex-1 flex-col justify-center gap-1 px-6 py-10"
              initial="hidden"
              animate="shown"
              variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-4"
                >
                  <span className="text-[9px] tracking-[0.24em] text-honey/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[2rem] leading-none transition-colors duration-500 group-hover:text-honey">
                    {link.label}
                  </span>
                </motion.a>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                className="mt-8 grid gap-3 text-[13px] text-cream/65"
              >
                <a href={contact.phone.href} className="tracking-[0.08em]">
                  {contact.phone.label}
                </a>
                <a href={contact.maps.href} target="_blank" rel="noreferrer">
                  {brand.locality}
                </a>
                <a href={contact.instagram.href} target="_blank" rel="noreferrer">
                  {contact.instagram.handle}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
