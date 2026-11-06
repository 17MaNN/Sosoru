import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'

import Button from './Button'
import SectionTitle from './SectionTitle'
import { address, contact, hours, visit } from '../data/content'

const todayIndex = (new Date().getDay() + 6) % 7

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address.mapQuery)}&output=embed`

export default function Visit() {
  return (
    <section id="visit" className="bg-slate py-section text-cream">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <SectionTitle
            index={visit.eyebrow}
            en={visit.en}
            jp={visit.jp}
            tone="dark"
            lead={visit.lead}
          />

          <div className="mt-9">
            <p className="eyebrow text-cream/45">Hours</p>
            <ul className="mt-3 border-t border-cream/15">
              {hours.days.map((row, index) => {
                const today = index === todayIndex
                return (
                  <li
                    key={row.day}
                    aria-current={today ? 'date' : undefined}
                    className={`flex items-baseline justify-between gap-4 border-b border-cream/10 py-2.5 text-[13.5px] ${
                      today ? 'text-cream' : 'text-cream/55'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full ${today ? 'bg-honey' : 'bg-transparent'}`}
                      />
                      {row.day}
                      {today ? (
                        <span className="text-[8px] uppercase tracking-[0.18em] text-honey">today</span>
                      ) : null}
                    </span>
                    <span className="tabular-nums tracking-[0.04em]">{row.hours}</span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-3 text-[11.5px] leading-relaxed text-cream/40">{hours.note}</p>
          </div>

          <div className="mt-8">
            <p className="eyebrow text-cream/45">The address</p>
            <address className="mt-3 flex gap-3 text-[14px] not-italic leading-relaxed text-cream/80">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-honey" strokeWidth={1.25} aria-hidden />
              <span>
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.city}, {address.region}
              </span>
            </address>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={contact.phone.href} variant="light" icon={Phone}>
              Call
            </Button>
            <Button href={contact.whatsapp.href} variant="honey" icon={MessageCircle}>
              WhatsApp
            </Button>
            <Button href={contact.maps.href} variant="light" icon={Navigation}>
              Directions
            </Button>
          </div>
        </div>

        <div className="self-start">
          <div className="border border-cream/15 p-[5px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate/60">
              <iframe
                title={`Map showing ${address.line1}, Dehradun`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/40">
              Dilaram Bazar · near BIBA
            </p>
            <a
              href={contact.maps.href}
              target="_blank"
              rel="noreferrer"
              className="border-b border-cream/25 pb-0.5 font-ui text-[10px] uppercase tracking-[0.2em] text-cream/70 transition-colors hover:border-honey hover:text-honey"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
