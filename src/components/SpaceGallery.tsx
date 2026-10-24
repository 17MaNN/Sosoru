import LatticeStudy from './LatticeStudy'

export default function SpaceGallery() {
  return (
    <section className="space" id="space" aria-labelledby="space-title">
      <div className="shell">
        <div className="section-head">
          <p className="label section-head__index" data-reveal>
            04 — Our space
          </p>
          <div className="section-head__main">
            <h2 className="h2" id="space-title" data-reveal>
              Timber, paper <em>and light.</em>
            </h2>
            <p className="section-head__note note" data-reveal style={{ ['--reveal-delay' as string]: '70ms' }}>
              The room, photographed. More original interior photography is
              being commissioned before launch.
            </p>
          </div>
        </div>
      </div>

      <figure className="space__wide" data-reveal>
        <img
          src="/images/interior-room-wide.webp"
          alt="Palms, timber tables and cushioned chairs, the timber lattice run and the bar beyond at Sosoru."
          width={1100}
          height={620}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span>The dining room in service — palms, timber and the bar beyond</span>
        </figcaption>
      </figure>

      <div className="shell">
        <div className="space__grid">
          <figure className="space__figure space__figure--tall" data-reveal>
            <img
              src="/images/interior-screen.webp"
              alt="A timber lattice screen, the bar counter and backlit shelving in the evening."
              width={460}
              height={620}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Lattice screens, the bar beyond</figcaption>
          </figure>

          <figure
            className="space__figure space__figure--square"
            data-reveal
            style={{ ['--reveal-delay' as string]: '80ms' }}
          >
            <img
              src="/images/interior-table.webp"
              alt="A round timber table set with glassware, cushioned chairs and potted palms."
              width={620}
              height={620}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Tables set for the evening service</figcaption>
          </figure>

          <figure
            className="space__figure space__study"
            data-reveal
            style={{ ['--reveal-delay' as string]: '160ms' }}
          >
            <LatticeStudy />
            <figcaption>Interior study — lattice, pendants and table</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
