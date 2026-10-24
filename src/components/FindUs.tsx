import { addressLines, site } from '../data/site'
import { ArrowUpRight } from './Icons'

export default function FindUs() {
  return (
    <section className="section find" id="find-us" aria-labelledby="find-title">
      <div className="shell">
        <div className="section-head">
          <p className="label section-head__index" data-reveal>
            07 — Find us
          </p>
          <div className="section-head__main">
            <h2 className="h2" id="find-title" data-reveal>
              Rajpur Road, <em>Dehradun.</em>
            </h2>
          </div>
        </div>

        <div className="find__grid">
          <div className="find__details" data-reveal>
            <div className="find__block">
              <h3 className="find__block-title">Address</h3>
              <address className="find__address">
                {addressLines.map((line) => (
                  <span key={line} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="find__block">
              <h3 className="find__block-title">Hours</h3>
              <dl className="hours">
                {site.hours.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="note" style={{ marginTop: '0.75rem' }}>
                Holiday and festival hours are confirmed by the restaurant, not
                listed here.
              </p>
            </div>

            <div className="find__block">
              <h3 className="find__block-title">Reach us</h3>
              <p>
                <a className="reservations__phone" href={site.phone.href}>
                  {site.phone.display}
                </a>
              </p>
              <p className="reservations__meta">
                Call for same-day tables and larger groups
              </p>
            </div>

            <div className="find__links">
              <a
                className="btn"
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
                <ArrowUpRight className="btn__arrow" />
              </a>
              <a
                className="text-link"
                href={site.socials[0].href}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <ArrowUpRight className="btn__arrow" />
              </a>
            </div>
          </div>

          <div
            className="find__card"
            data-reveal
            style={{ ['--reveal-delay' as string]: '100ms' }}
          >
            <div className="find__card-top">
              <p className="find__card-label">
                Dehradun
                <br />
                Uttarakhand
              </p>
              <p className="find__card-label" style={{ textAlign: 'right' }}>
                81A Rajpur Road
                <br />
                Dilaram Bazar
              </p>
            </div>

            <div className="find__pin">
              <span className="find__pin-dot" aria-hidden="true" />
              <span className="find__pin-label">Sosoru · 81A</span>
            </div>

            <span className="find__road" aria-hidden="true">
              Rajpur Road
            </span>

            <div className="find__card-bottom">
              <p className="body" style={{ maxWidth: '26ch' }}>
                Next to BIBA in Dilaram Bazar. Directions open in Google Maps.
              </p>
              <a
                className="text-link"
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
                <ArrowUpRight className="btn__arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
