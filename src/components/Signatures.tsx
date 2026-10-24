import { PlateGlyph } from './Icons'

type Signature = {
  index: string
  name: string
  description: string
  note: string
}

const signatures: Signature[] = [
  {
    index: '01',
    name: 'Maki, cut to order',
    description:
      'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top. Pickled ginger and wasabi at the edge of the plate.',
    note: 'Sushi & sashimi',
  },
  {
    index: '02',
    name: 'Katsu curry',
    description:
      'A panko-crusted cutlet, sliced over rice and soft egg, with spring onion curling across the top and a glossy curry beneath.',
    note: 'Rice & curries',
  },
  {
    index: '03',
    name: 'Kimchi fried rice',
    description:
      'Kimchi folded through rice with sesame, a fried egg on top and cool lettuce on the side to cut the heat.',
    note: 'Rice & curries',
  },
  {
    index: '04',
    name: 'Sake, poured cold',
    description:
      'A small ceramic carafe and cup, painted with plum blossom, brought to the table with the first plates.',
    note: 'The bar',
  },
]

export default function Signatures() {
  return (
    <section
      className="section signatures"
      id="kitchen"
      aria-labelledby="signatures-title"
    >
      <div className="shell">
        <div className="section-head">
          <p className="label section-head__index" data-reveal>
            02 — From the kitchen
          </p>
          <div className="section-head__main">
            <h2 className="h2" id="signatures-title" data-reveal>
              Four things worth <em>ordering first.</em>
            </h2>
            <p className="section-head__note note" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
              These four are photographed at Sosoru. Names, recipes and pricing
              are still pending the restaurant’s verified menu — treat them as a
              preview, not the final list.
            </p>
          </div>
        </div>

        <div className="sig-grid">
          {signatures.map((item, index) => (
            <article
              className="sig"
              key={item.name}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${index * 70}ms` }}
            >
              <div className="sig__top">
                <span className="sig__index">{item.index}</span>
                <span className="sig__marks">Photographed</span>
              </div>
              <h3 className="sig__name">{item.name}</h3>
              <p className="sig__desc">{item.description}</p>
              <div className="sig__foot">
                <span className="sig__note">{item.note}</span>
                <PlateGlyph className="sig__glyph" />
              </div>
            </article>
          ))}
        </div>

        <div className="signatures__foot">
          <p className="note" data-reveal>
            Dish photography and the full menu are being prepared with the
            restaurant. Until then, only dishes visible in the supplied
            photographs are described here — no prices, awards or reviews are
            claimed.
          </p>
          <a className="text-link" href="#menu" data-reveal>
            See the full preview menu
          </a>
        </div>
      </div>
    </section>
  )
}
