import { brandLogo } from '../data/brand'
import { navLinks, site } from '../data/site'

type SiteFooterProps = {
  inert?: boolean
}

export default function SiteFooter({ inert }: SiteFooterProps) {
  return (
    <footer className="footer" id="footer" inert={inert || undefined}>
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              className="footer__wordmark"
              href="#top"
              aria-label="Sosoru — back to the top of the page"
            >
              {brandLogo.available ? (
                <img
                  className="footer__logo"
                  src={brandLogo.light}
                  alt=""
                  height={76}
                  width={Math.round(76 * brandLogo.ratio)}
                />
              ) : (
                'Sosoru'
              )}
            </a>
            <p className="footer__tagline">
              A Pan-Asian restaurant and bar on Rajpur Road, Dehradun. Timber,
              lattice screens, low warm light and a long evening ahead.
            </p>
            <p className="footer__hours">{site.hoursShort}</p>
          </div>

          <div className="footer__columns">
            <div className="footer__col">
              <h3>Explore</h3>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3>Visit</h3>
              <address>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.region}
              </address>
              <ul style={{ marginTop: '0.9rem' }}>
                <li>
                  <a href={site.phone.href}>{site.phone.display}</a>
                </li>
                <li>
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                    Google Maps
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Follow</h3>
              <ul>
                {site.socials.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label} {social.handle}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#reservations">Reservations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__fineprint">
            <p>
              <strong>Preview content.</strong> The menu, dish photography and
              reservation workflow are placeholders awaiting verified data from
              the restaurant. No prices, awards, reviews or dishes beyond the
              supplied photographs are claimed.
            </p>
            <p>
              Contact details and hours were checked against public listings in{' '}
              {site.lastChecked}. Confirm them with Sosoru before launch.
            </p>
          </div>

          <div className="footer__legal">
            <span>© 2026 Sosoru</span>
            <a className="footer__top-link" href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
