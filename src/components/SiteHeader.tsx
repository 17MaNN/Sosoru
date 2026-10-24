import { useEffect, useRef } from 'react'
import { brandLogo } from '../data/brand'
import { navLinks, site } from '../data/site'
import { useBodyScrollLock, useScrolled } from '../lib/hooks'

type SiteHeaderProps = {
  active: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SiteHeader({ active, open, onOpenChange }: SiteHeaderProps) {
  const scrolled = useScrolled(24)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useBodyScrollLock(open)

  const close = () => onOpenChange(false)

  useEffect(() => {
    if (!open) return

    overlayRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onOpenChange])

  // Close the overlay if the viewport grows into the desktop layout.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) onOpenChange(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [onOpenChange])

  // Keep keyboard focus inside the overlay while it is open.
  const trapFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return
    const nodes = overlayRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    if (!nodes?.length) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    const activeEl = document.activeElement

    if (event.shiftKey && (activeEl === first || activeEl === toggleRef.current)) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && activeEl === last) {
      event.preventDefault()
      toggleRef.current?.focus()
    }
  }

  return (
    <>
      <header
        className="header"
        data-scrolled={scrolled}
        data-menu-open={open}
      >
        <div className="shell header__inner">
          <a
            className="wordmark"
            href="#top"
            aria-label="Sosoru — back to the top of the page"
            onClick={close}
          >
            {brandLogo.available ? (
              <>
                <img
                  className="wordmark__img wordmark__img--light"
                  src={brandLogo.light}
                  alt=""
                  height={40}
                  width={Math.round(40 * brandLogo.ratio)}
                />
                <img
                  className="wordmark__img wordmark__img--ink"
                  src={brandLogo.ink}
                  alt=""
                  height={40}
                  width={Math.round(40 * brandLogo.ratio)}
                />
              </>
            ) : (
              <>
                <span className="wordmark__name">Sosoru</span>
                <span className="wordmark__sub">Pan-Asian · Dehradun</span>
              </>
            )}
          </a>

          <nav className="header__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="header__link"
                href={link.href}
                aria-current={
                  active === link.href.replace('#', '') ? 'true' : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a className="btn header__reserve" href="#reservations">
              Reserve
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="nav-overlay"
              onClick={() => onOpenChange(!open)}
            >
              <span className="menu-toggle__label">{open ? 'Close' : 'Menu'}</span>
              <span className="menu-toggle__bars" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="nav-overlay"
        ref={overlayRef}
        className="nav-overlay"
        data-open={open}
        aria-hidden={!open}
        onKeyDown={trapFocus}
      >
        <p className="label" style={{ color: 'var(--oak)' }}>
          Menu
        </p>

        <nav className="nav-overlay__links" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              className="nav-overlay__link"
              href={link.href}
              style={{ ['--i' as string]: index }}
              onClick={close}
            >
              <span className="nav-overlay__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-overlay__footer">
          <a href={site.phone.href}>{site.phone.display}</a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">
            81A Rajpur Road, Dehradun
          </a>
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noreferrer"
          >
            Instagram {site.socials[0].handle}
          </a>
          <span>{site.hoursShort}</span>
        </div>
      </div>
    </>
  )
}
