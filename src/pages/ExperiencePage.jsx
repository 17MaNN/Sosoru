import { ArrowUpRight } from 'lucide-react'

import Frame from '../components/Frame'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Seating from '../components/Seating'
import { experiencePage, images, pages } from '../data/content'
import { Link } from '../lib/router'
import usePageMeta from '../lib/usePageMeta'

export default function ExperiencePage() {
  usePageMeta(pages.experience)

  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={experiencePage.title}
        jp={experiencePage.jp}
        lead={experiencePage.lead}
      />

      <Seating />

      <section className="pb-section">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <Reveal>
            <Frame
              src={images.roomWide}
              alt="The Sosoru dining room: palms, timber tables, cushioned chairs and the lattice run."
              ratio="16 / 10"
              jp="広間"
              caption="The dining room in service"
            />
          </Reveal>

          <div>
            <SectionTitle
              index="Hospitality"
              en={experiencePage.hospitality.heading}
              jp="おもてなし"
            />

            <div className="mt-5 grid gap-4">
              {experiencePage.hospitality.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.05}>
                  <p className="max-w-read text-ink/65">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Link
              to="/gallery"
              className="group mt-7 flex w-fit items-center gap-2.5 border-b border-ink/25 pb-1.5 font-ui text-[10px] uppercase tracking-[0.24em] text-ink/70 transition-colors hover:border-honey hover:text-ink"
            >
              See the room in photographs
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-honey/25 py-section">
        <div className="shell">
          <p className="eyebrow text-honey">Evening, in order</p>

          <ol className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {experiencePage.moments.map((moment, index) => (
              <Reveal key={moment.title} className="border-t border-honey/30 py-6 sm:pr-8">
                <span className="text-[9px] tracking-[0.22em] text-ink/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-[1.35rem] leading-tight text-ink">{moment.title}</h3>
                <p className="mt-2 text-ink/60">{moment.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
