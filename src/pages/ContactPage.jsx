import { ArrowUpRight } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Visit from '../components/Visit'
import Button from '../components/Button'
import { contactPage, pages, reservations } from '../data/content'
import usePageMeta from '../lib/usePageMeta'

export default function ContactPage({ onReserve }) {
  usePageMeta(pages.contact)

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={contactPage.title}
        jp={contactPage.jp}
        lead={contactPage.lead}
      />

      <Visit />

      <section className="py-section">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="eyebrow text-honey">{reservations.eyebrow}</p>
            <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.06] text-ink">
              {contactPage.booking.heading}
            </h2>
            <p className="mt-4 max-w-read text-ink/65">
              {contactPage.booking.body}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button onClick={onReserve} variant="solid" icon={ArrowUpRight}>
                Reserve a table
              </Button>
            </div>
          </div>

          <Reveal className="border border-honey/30 p-6 sm:p-8">
            <p className="eyebrow text-ink/40">Good to know</p>
            <ul className="mt-4 grid gap-3 text-ink/65">
              {contactPage.notes.map((note) => (
                <li key={note} className="flex gap-3 border-b border-ink/10 pb-3 last:border-0 last:pb-0">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 bg-honey" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
