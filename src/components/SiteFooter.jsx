import { useEffect, useRef, useState } from 'react'

import BrandLogo from './BrandLogo'
import KumikoDivider from './KumikoDivider'
import Petals from './Petals'
import { address, brand, contact, hours, navLinks } from '../data/content'
import { Link } from '../lib/router'

export default function SiteFooter() {
  const [petals, setPetals] = useState(false)
  const timer = useRef(null)

  const shake = () => {
    setPetals(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setPetals(false), 4000)
  }

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <footer className="relative border-t border-honey/30 pb-0 pt-14">
      <div className="shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Link to="/" aria-label={`${brand.name} — home`} className="inline-block">
              <BrandLogo height={40} />
            </Link>
            <p className="mt-3 max-w-[38ch] text-ink/55">{brand.footerNote}</p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={contact.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="border-b border-ink/20 pb-0.5 font-ui text-[10px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:border-honey hover:text-ink"
              >
                Instagram {contact.instagram.handle}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid content-start gap-2.5">
            <p className="eyebrow text-ink/35">Sections</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="w-fit font-ui text-[14px] text-ink/65 transition-colors hover:text-honey"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="grid content-start gap-5">
            <div>
              <p className="eyebrow text-ink/35">Find us</p>
              <address className="mt-2 text-[13.5px] not-italic leading-relaxed text-ink/65">
                {address.lines[0]}
                <br />
                {address.lines[1]}
                <br />
                {address.lines[2]}
              </address>
            </div>
            <div>
              <p className="eyebrow text-ink/35">Hours</p>
              <p className="mt-2 text-[13.5px] text-ink/65">{hours.short}</p>
            </div>
            <div className="grid gap-1.5 text-[13.5px]">
              <a className="transition-colors hover:text-honey" href={contact.phone.href}>
                {contact.phone.label}
              </a>
              <a
                className="transition-colors hover:text-honey"
                href={contact.whatsapp.href}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-honey/25 pt-6">
          <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-ink/35">
            © {new Date().getFullYear()} Sosoru · Rajpur Road, Dehradun
          </p>

          <button
            type="button"
            onClick={shake}
            aria-label="Shake the bonsai"
            title="Shake the bonsai"
            className="group flex items-center gap-2.5 text-ink/40 transition-colors hover:text-honey"
          >
            <svg
              viewBox="0 0 48 48"
              className="h-9 w-9 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M16 33h16l-2.5 9h-11z" />
              <path d="M18.5 33h11" />
              <path d="M24 33c0-7 1-11 0-15" />
              <path d="M24 22c-4.5.4-7-1.6-7-4.4 2.2-2.1 5.4-1.6 6.7.7" />
              <path d="M24 17.5c3.4-.6 5.8-2.8 5.8-5.6-2.6-1.3-6 .1-6 3.2" />
              <ellipse cx="15" cy="12.5" rx="5" ry="3.4" transform="rotate(-18 15 12.5)" />
              <ellipse cx="32.5" cy="9" rx="4.6" ry="3" transform="rotate(12 32.5 9)" />
            </svg>
            <span className="text-[9px] uppercase tracking-[0.22em]">Bonsai</span>
          </button>
        </div>
      </div>

      <KumikoDivider variant="lattice" className="mt-8" />

      {petals ? <Petals /> : null}
    </footer>
  )
}
