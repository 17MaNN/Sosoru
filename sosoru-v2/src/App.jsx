import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'

import Button from './components/Button'
import Frame from './components/Frame'
import KumikoDivider from './components/KumikoDivider'
import Reveal from './components/Reveal'
import SectionTitle from './components/SectionTitle'
import { address, brand, contact, gallery, hours, images, signatures, story } from './data/content'
import useLenis from './lib/useLenis'

export default function App() {
  useLenis()

  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#story">
        Skip to content
      </a>

      <main id="top">
        {/* Opening band — replaced by the animated hero in stage 2. */}
        <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pb-14 pt-header text-cream">
          <img
            src={images.hero}
            alt=""
            aria-hidden
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_42%]"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-ink/55" />

          <div className="shell">
            <Reveal className="flex flex-col gap-6">
              <p className="eyebrow text-cream/70">
                {brand.tagline} — {brand.locality}
              </p>
              <h1 className="text-display max-w-[16ch]">
                {brand.intro.split(' ').slice(0, -1).join(' ')}{' '}
                <em className="not-italic text-honey">
                  {brand.intro.split(' ').slice(-1)}
                </em>
              </h1>
              <p className="max-w-read text-cream/75">{brand.heroSub}</p>
            </Reveal>

            <Reveal delay={0.12} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#reservations" variant="honey" icon={ArrowUpRight}>
                Reserve a table
              </Button>
              <Button href="#menu" variant="light">
                Explore the menu
              </Button>
            </Reveal>

            <Reveal
              delay={0.2}
              as="dl"
              className="mt-14 grid gap-6 border-t border-cream/15 pt-7 sm:grid-cols-3"
            >
              {[
                { icon: MapPin, term: 'Find us', desc: address.lines.slice(0, 2).join(', ') },
                { icon: Clock, term: 'Hours', desc: hours.short },
                { icon: Phone, term: 'Contact', desc: contact.phone.label },
              ].map(({ icon: Icon, term, desc }) => (
                <div key={term} className="flex items-start gap-3">
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-honey" strokeWidth={1.25} aria-hidden />
                  <div>
                    <dt className="eyebrow text-cream/55">{term}</dt>
                    <dd className="mt-1 text-[15px] text-cream/85">{desc}</dd>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <KumikoDivider variant="lattice" className="bg-ink" />

        <section id="story" className="py-section">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
            <div className="grid gap-10">
              <SectionTitle index={story.eyebrow} en={story.en} jp={story.jp} lead={story.lead} />

              <div className="grid gap-6">
                <p className="font-display text-[clamp(1.45rem,3vw,2.1rem)] leading-[1.3] text-ink/85">
                  {story.statement}
                </p>
                {story.paragraphs.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 0.08} as="p" className="max-w-read text-ink/65">
                    {paragraph}
                  </Reveal>
                ))}
              </div>

              <Reveal as="dl" className="grid gap-px border-t border-honey/35 sm:grid-cols-3">
                {story.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-honey/25 py-5 sm:px-5 sm:first:pl-0">
                    <dt className="eyebrow text-ink/45">{fact.label}</dt>
                    <dd className="mt-2 font-display text-[1.2rem] leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:pt-24">
              <Frame
                src={images.heroPortrait}
                alt="The Sosoru dining room: palms, timber tables and the lattice run beyond."
                ratio="3 / 4"
                position="55% 58%"
                jp="部屋"
                caption="The room, photographed"
              />
            </Reveal>
          </div>
        </section>

        <KumikoDivider className="shell" />

        <section id="signatures" className="pb-section">
          <div className="shell grid gap-10">
            <SectionTitle
              index="02 — From the kitchen"
              en="Four things worth ordering first"
              jp="台所"
              lead="Photographed at Sosoru. Names and recipes follow the kitchen's current list."
            />

            <div className="grid gap-px border-t border-honey/35 sm:grid-cols-2">
              {signatures.map((item, index) => (
                <Reveal
                  key={item.name}
                  delay={index * 0.06}
                  as="article"
                  className="group border-b border-honey/25 py-7 sm:px-7 sm:first:pl-0 sm:odd:pl-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="eyebrow text-ink/40">{item.index}</span>
                    <span className="eyebrow text-honey">{item.note}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[1.55rem] leading-tight">{item.name}</h3>
                  <p className="mt-3 max-w-read text-[15.5px] text-ink/65">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="space" className="bg-ink py-section text-cream">
          <div className="shell grid gap-10">
            <SectionTitle
              index="04 — Our space"
              en="Warm pine, paper and light"
              jp="空間"
              tone="dark"
              lead="Kumiko lattice, paper lanterns and a noren at the door. Photographed in the dining room."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.slice(0, 3).map((shot, index) => (
                <Reveal key={shot.src} delay={index * 0.08} className={index === 0 ? 'sm:col-span-2' : ''}>
                  <Frame
                    {...shot}
                    className="[&_figcaption]:text-cream/55"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-14">
          <div className="shell grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="grid gap-3">
              <p className="font-display text-[1.9rem] leading-none">{brand.name}</p>
              <p className="max-w-read text-[15px] text-ink/60">{brand.footerNote}</p>
            </div>
            <div className="grid gap-2 text-[15px]">
              <a className="hover:text-honey" href={contact.phone.href}>
                {contact.phone.label}
              </a>
              <a className="hover:text-honey" href={contact.instagram.href} target="_blank" rel="noreferrer">
                {contact.instagram.handle}
              </a>
            </div>
          </div>
          <KumikoDivider variant="lattice" className="mt-10" />
        </footer>
      </main>
    </>
  )
}
