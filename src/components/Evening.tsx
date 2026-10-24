import { site } from '../data/site'
import { ArrowUpRight } from './Icons'

export default function Evening() {
  return (
    <section className="evening" aria-labelledby="evening-title">
      <div className="evening__media" aria-hidden="true">
        <img
          src="/images/interior-evening.webp"
          alt=""
          width={1100}
          height={780}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="evening__scrim" aria-hidden="true" />

      <div className="shell evening__grid">
        <div className="evening__content">
          <p className="label section-head__index" data-reveal>
            05 — After dark
          </p>
          <h2 className="display evening__title" id="evening-title" data-reveal>
            In the evening, the room is lit by <em>the pendants.</em>
          </h2>
          <p className="body evening__copy" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
            The ceiling drops into shadow, the lattice throws its lines across
            the floor, and the back of the room turns to the bar. Sake comes
            cold in small ceramics. The highballs are built tall. The kitchen
            keeps going until eleven.
          </p>
          <div className="evening__actions" data-reveal style={{ ['--reveal-delay' as string]: '150ms' }}>
            <a className="btn btn--light" href="#reservations">
              Reserve for the evening
              <ArrowUpRight className="btn__arrow" />
            </a>
            <a className="btn btn--quiet btn--light" href="#menu">
              The bar menu
            </a>
          </div>
        </div>

        <div className="evening__card" data-reveal>
          <p className="evening__card-title">Service</p>
          <dl className="evening__hours">
            {site.hours.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="label" style={{ color: 'rgba(244,240,232,0.55)' }}>
            Kitchen and bar close at 23:00
          </p>
          <a className="text-link" href={site.phone.href}>
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  )
}
