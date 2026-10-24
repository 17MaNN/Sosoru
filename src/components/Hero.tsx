import { useEffect, useRef } from 'react'
import { site } from '../data/site'
import { ArrowUpRight } from './Icons'

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wide = window.matchMedia('(min-width: 900px)')
    if (reduce.matches || !wide.matches) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const node = mediaRef.current
        if (!node) return
        const offset = Math.min(window.scrollY, window.innerHeight)
        node.style.transform = `translate3d(0, ${offset * 0.12}px, 0)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media" ref={mediaRef} aria-hidden="true">
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet="/images/interior-hero-portrait.webp"
          />
          <img
            src="/images/interior-hero.webp"
            alt=""
            width={1100}
            height={700}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__content">
          <p className="label hero__eyebrow">
            Pan-Asian restaurant &amp; bar — Dehradun
          </p>

          <h1 className="display hero__title" id="hero-title">
            A quieter kind of <em>feast.</em>
          </h1>

          <p className="hero__sub">
            Timber beams, lattice screens and low warm light on Rajpur Road.
            Sushi, robata, ramen and sake, served slowly.
          </p>

          <div className="hero__actions">
            <a className="btn btn--light" href="#reservations">
              Reserve a table
              <ArrowUpRight className="btn__arrow" />
            </a>
            <a className="btn btn--quiet btn--light" href="#menu">
              Explore the menu
            </a>
          </div>
        </div>

        <dl className="hero__meta">
          <div>
            <dt>Find us</dt>
            <dd>
              81A Rajpur Road
              <br />
              Dilaram Bazar, Dehradun
            </dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd className="hero__hours">{site.hoursShort}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>
              <a href={site.phone.href}>{site.phone.display}</a>
            </dd>
          </div>
          <div className="hero__scroll" aria-hidden="true">
            Scroll
          </div>
        </dl>
      </div>
    </section>
  )
}
