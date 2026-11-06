import { ArrowUpRight } from 'lucide-react'

import Button from '../components/Button'
import Frame from '../components/Frame'
import Hero from '../components/Hero'
import KumikoDivider from '../components/KumikoDivider'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Signatures from '../components/Signatures'
import {
  address,
  brand,
  gallery,
  homeHighlights,
  hours,
  images,
  pages,
  story,
} from '../data/content'
import { Link } from '../lib/router'
import usePageMeta from '../lib/usePageMeta'

const money = (value) => (value ? `₹${value}` : '')

export default function Home({ onReserve }) {
  usePageMeta(pages.home)

  return (
    <>
      <Hero onReserve={onReserve} />

      <section className="py-section">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <SectionTitle index="01 — The room" en={story.en} jp={story.jp} />

          <div className="grid gap-6">
            <p className="font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.28] text-ink">
              {story.statement}
            </p>
            <p className="max-w-read text-ink/65">{story.lead}</p>

            <Link
              to="/story"
              className="group flex w-fit items-center gap-2.5 border-b border-ink/25 pb-1.5 font-ui text-[10px] uppercase tracking-[0.24em] text-ink/70 transition-colors hover:border-honey hover:text-ink"
            >
              Read our story
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <KumikoDivider className="shell" />

      <Signatures />

      <section className="pb-section">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Frame
                src={images.table}
                alt="A round timber table set with glassware and cushioned chairs."
                ratio="3 / 4"
                jp="卓"
              />
              <Frame
                src={images.screen}
                alt="The lattice screen and bar shelving in the evening."
                ratio="3 / 4"
                position="50% 45%"
                jp="格子"
                className="mt-10"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionTitle
              index="03 — The experience"
              en="Warm pine, paper and low light"
              jp="空間"
              lead="Kumiko lattice, paper lanterns and a noren at the door. Tables, a raised zashiki platform and a counter at the back of the room."
            />

            <Link
              to="/experience"
              className="group mt-7 flex w-fit items-center gap-2.5 border-b border-ink/25 pb-1.5 text-[10px] uppercase tracking-[0.24em] text-ink/70 transition-colors hover:border-honey hover:text-ink"
            >
              Step inside
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink py-section text-cream">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-cream/45">04 — From the menu</p>
              <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.06] text-cream">
                Three plates to start with
              </h2>
            </div>
            <Link
              to="/menu"
              className="group flex items-center gap-2.5 border-b border-cream/25 pb-1.5 font-ui text-[10px] uppercase tracking-[0.24em] text-cream/70 transition-colors hover:border-honey hover:text-honey"
            >
              The full menu
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-px border-t border-cream/15 sm:grid-cols-3">
            {homeHighlights.map((dish) => (
              <Reveal key={dish.name} className="border-b border-cream/10 py-7 sm:pr-7">
                <p className="eyebrow text-honey">{dish.note}</p>
                <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-cream">{dish.name}</h3>
                <p className="mt-2 text-cream/60">{dish.description}</p>
                <p className="mt-4 font-display text-[1.05rem] text-cream/75">{money(dish.price)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle index="05 — Photographs" en="The room, in pieces" jp="写真" />
            <Link
              to="/gallery"
              className="group flex items-center gap-2.5 border-b border-ink/25 pb-1.5 text-[10px] uppercase tracking-[0.24em] text-ink/70 transition-colors hover:border-honey hover:text-ink"
            >
              The gallery
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {gallery.slice(0, 3).map((shot, index) => (
              <Reveal key={shot.src} delay={index * 0.06}>
                <Frame {...shot} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-honey/25 bg-slate py-section text-cream">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="eyebrow text-cream/45">06 — Visit</p>
            <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.06]">
              {brand.locality}
            </h2>
            <p className="mt-4 max-w-read text-cream/65">
              {address.line1}, {address.line2}. {hours.short}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button onClick={onReserve} variant="honey" icon={ArrowUpRight}>
              Reserve a table
            </Button>
            <Button to="/contact" variant="light">
              Contact &amp; directions
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
