import CursorGlow from './components/CursorGlow'
import Frame from './components/Frame'
import Hero from './components/Hero'
import KumikoDivider from './components/KumikoDivider'
import Reveal from './components/Reveal'
import SectionTitle from './components/SectionTitle'
import Signatures from './components/Signatures'
import SiteHeader from './components/SiteHeader'
import Story from './components/Story'
import { address, brand, contact, gallery, hours } from './data/content'
import useLenis from './lib/useLenis'

export default function App() {
  useLenis()

  return (
    <>
      <a
        href="#story"
        className="fixed left-4 top-4 z-[80] -translate-y-24 bg-ink px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cream transition-transform duration-300 focus:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader />
      <CursorGlow />

      <main>
        <Hero />
        <Story />

        <KumikoDivider className="shell" />

        <Signatures />

        <section id="gallery" className="bg-ink py-section text-cream">
          <div className="shell grid gap-10">
            <SectionTitle
              index="03 — Our space"
              en="Warm pine, paper and light"
              jp="空間"
              tone="dark"
              lead="Kumiko lattice, paper lanterns and a noren at the door. Photographed in the dining room."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.slice(0, 3).map((shot, index) => (
                <Reveal
                  key={shot.src}
                  delay={index * 0.08}
                  className={index === 0 ? 'sm:col-span-2' : ''}
                >
                  <Frame {...shot} className="[&_figcaption]:text-cream/55" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-honey/30 py-14">
          <div className="shell grid gap-10 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="grid gap-3">
              <p className="font-display text-[2rem] leading-none">{brand.name}</p>
              <p className="max-w-read text-[14.5px] leading-relaxed text-ink/55">
                {brand.footerNote}
              </p>
            </div>

            <address className="grid gap-6 text-[14px] not-italic text-ink/65 sm:justify-self-end sm:text-right">
              <div>
                <p className="eyebrow text-ink/35">Find us</p>
                <p className="mt-2 leading-relaxed">
                  {address.lines[0]}
                  <br />
                  {address.lines[1]}
                  <br />
                  {address.lines[2]}
                </p>
              </div>
              <div>
                <p className="eyebrow text-ink/35">Hours</p>
                <p className="mt-2">{hours.short}</p>
              </div>
              <div className="grid gap-1.5">
                <a className="transition-colors hover:text-honey" href={contact.phone.href}>
                  {contact.phone.label}
                </a>
                <a
                  className="transition-colors hover:text-honey"
                  href={contact.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.instagram.handle}
                </a>
              </div>
            </address>
          </div>

          <KumikoDivider variant="lattice" className="mt-12" />
        </footer>
      </main>
    </>
  )
}
