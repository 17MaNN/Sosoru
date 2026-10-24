export default function Intro() {
  return (
    <section className="section intro" id="about" aria-labelledby="intro-title">
      <div className="shell">
        <div className="section-head">
          <p className="label section-head__index" data-reveal>
            01 — The room
          </p>
          <div className="section-head__main">
            <h2 className="h2" id="intro-title" data-reveal>
              The room is the <em>first course.</em>
            </h2>
          </div>
        </div>

        <div className="intro__grid">
          <figure className="intro__figure" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
            <img
              src="/images/interior-table.webp"
              alt="A timber table set for service, with grey cushioned chairs, a palm and the lattice screen behind."
              width={620}
              height={620}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="intro__caption">
              The dining room at dusk — Sosoru, Rajpur Road
            </figcaption>
          </figure>

          <div className="intro__content">
            <p className="body intro__statement display" data-reveal>
              Pale timber, heavy beams and globe pendants hung low enough to
              light only what is on the table.
            </p>

            <div className="intro__text" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
              <p className="body">
                Sosoru sits on Rajpur Road, behind a screen of pale timber.
                Inside, exposed beams cross the ceiling, lattice panels divide
                the tables, and plants grow out of the corners. The bar sits at
                the back of the room, behind a stone counter.
              </p>
              <p className="body">
                Nothing in the room shouts. It is built for conversation, for
                plates arriving one at a time, and for staying longer than you
                planned.
              </p>
            </div>

            <dl className="intro__facts" data-reveal style={{ ['--reveal-delay' as string]: '160ms' }}>
              <div className="intro__fact">
                <dt>Kitchen &amp; bar</dt>
                <dd>11:00 — 23:00</dd>
              </div>
              <div className="intro__fact">
                <dt>Cuisine</dt>
                <dd>Pan-Asian</dd>
              </div>
              <div className="intro__fact">
                <dt>The room</dt>
                <dd>Timber &amp; lattice</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
