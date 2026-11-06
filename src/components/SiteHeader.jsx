import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import BrandLogo from './BrandLogo'
import { brand, contact, navGroups, navLinks } from '../data/content'
import { Link, useRouter } from '../lib/router'
import { lockScroll } from '../lib/useLenis'

const EASE = [0.22, 1, 0.36, 1]

const LATTICE = {
  backgroundImage:
    'repeating-linear-gradient(45deg, #C98F4F 0 1px, transparent 1px 34px), repeating-linear-gradient(-45deg, #C98F4F 0 1px, transparent 1px 34px)',
}

function NavLink({ link, active, onClick }) {
  const { navigate } = useRouter()

  return (
    <motion.a
      href={link.href}
      aria-current={active ? 'page' : undefined}
      onClick={(event) => {
        onClick?.()
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
        event.preventDefault()
        navigate(link.href)
      }}
      whileHover={{ scale: 1.09 }}
      animate={{ scale: active ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={`relative block whitespace-nowrap py-2 font-ui text-[10px] uppercase tracking-[0.24em] transition-colors duration-300 ${
        active ? 'text-ink' : 'text-ink/55 hover:text-ink'
      }`}
    >
      {link.label}
      {active ? (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-x-0 -bottom-0.5 h-px bg-honey"
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
      ) : null}
    </motion.a>
  )
}

export default function SiteHeader({ onReserve }) {
  const { path, navigate } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    lockScroll(true)

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

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 900px)')
    const onChange = (event) => event.matches && setOpen(false)
    wide.addEventListener('change', onChange)
    return () => wide.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header
        data-scrolled={scrolled}
        className={`fixed inset-x-0 top-0 z-50 border-b bg-cream transition-[border-color,box-shadow] duration-500 ${
          scrolled ? 'border-ink/12 shadow-[0_1px_24px_-18px_rgba(20,20,20,0.5)]' : 'border-honey/20'
        }`}
      >
        <div className="shell grid h-header grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="flex items-center justify-start gap-8 min-[900px]:justify-end">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="nav-overlay"
              aria-label="Open the page index"
              className="group flex items-center gap-3 py-2 font-ui text-[9px] uppercase tracking-[0.24em] text-ink/70 min-[900px]:hidden"
            >
              <span aria-hidden className="grid gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-4 bg-current transition-[width] duration-500 group-hover:w-6" />
              </span>
              <span aria-hidden>Index</span>
            </button>

            <nav aria-label="Primary" className="hidden items-center gap-9 min-[900px]:flex">
              {navGroups.left.map((link) => (
                <NavLink key={link.href} link={link} active={path === link.href} />
              ))}
            </nav>
          </div>

          <Link
            to="/"
            aria-label={`${brand.name} — home`}
            className="flex items-center justify-center px-2 py-1"
          >
            <BrandLogo height={42} />
          </Link>

          <div className="flex items-center justify-end gap-9 min-[900px]:justify-start">
            <nav aria-label="Primary, continued" className="hidden items-center gap-9 min-[900px]:flex">
              {navGroups.right.map((link) => (
                <NavLink key={link.href} link={link} active={path === link.href} />
              ))}
            </nav>

            <button
              type="button"
              onClick={onReserve}
              className="border border-ink px-3.5 py-2 font-ui text-[9px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-cream min-[900px]:hidden"
            >
              Reserve
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
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink text-cream min-[900px]:hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.14]" style={LATTICE} />

            <div className="relative flex h-header shrink-0 items-center justify-between px-6">
              <span className="bg-cream px-3 py-2">
                <BrandLogo height={32} />
              </span>

              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  toggleRef.current?.focus()
                }}
                className="flex items-center gap-3 py-2 font-ui text-[9px] uppercase tracking-[0.24em]"
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
                  aria-current={path === link.href ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    setOpen(false)
                    navigate(link.href)
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-4"
                >
                  <span className="text-[9px] tracking-[0.24em] text-honey/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-display text-[2rem] leading-none transition-colors duration-500 group-hover:text-honey ${
                      path === link.href ? 'text-honey' : ''
                    }`}
                  >
                    {link.label}
                  </span>
                </motion.a>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                className="mt-8 grid gap-3"
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    onReserve()
                  }}
                  className="w-full border border-honey bg-honey px-5 py-3.5 font-ui text-[10px] uppercase tracking-[0.22em] text-ink"
                >
                  Reserve a table
                </button>

                <div className="mt-3 grid gap-2.5 font-ui text-[13px] text-cream/60">
                  <a href={contact.phone.href}>{contact.phone.label}</a>
                  <a href={contact.maps.href} target="_blank" rel="noreferrer">
                    {brand.locality}
                  </a>
                  <a href={contact.instagram.href} target="_blank" rel="noreferrer">
                    {contact.instagram.handle}
                  </a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
