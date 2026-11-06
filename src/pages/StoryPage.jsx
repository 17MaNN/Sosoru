import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Story from '../components/Story'
import { pages, storyPage } from '../data/content'
import usePageMeta from '../lib/usePageMeta'

export default function StoryPage() {
  usePageMeta(pages.story)

  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={storyPage.title}
        jp={storyPage.jp}
        lead={storyPage.lead}
      />

      <Story />

      <section className="bg-ink py-section text-cream">
        <div className="shell">
          <p className="eyebrow text-cream/45">In practice</p>
          <h2 className="mt-3 max-w-[24ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.08]">
            {storyPage.practice}
          </h2>

          <div className="mt-10 grid gap-px border-t border-cream/15 md:grid-cols-3">
            {storyPage.blocks.map((block) => (
              <Reveal key={block.title} className="border-b border-cream/10 py-7 md:pr-7">
                <span aria-hidden className="font-jp text-[12px] tracking-[0.2em] text-honey">
                  {block.jp}
                </span>
                <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-cream">{block.title}</h3>
                <p className="mt-2.5 text-cream/60">{block.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="eyebrow text-honey">{storyPage.kitchen.label}</p>
            <blockquote className="mt-4 max-w-[26ch] font-display text-[clamp(1.5rem,3.2vw,2.15rem)] leading-[1.28] text-ink">
              {storyPage.kitchen.quote}
            </blockquote>
          </div>

          <div className="grid gap-4">
            {storyPage.kitchen.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="max-w-read text-ink/65">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
