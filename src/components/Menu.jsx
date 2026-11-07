import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Plus, X } from 'lucide-react'

import DietMark from './DietMark'
import SectionTitle from './SectionTitle'
import { menuCategories } from '../data/content'
import { usePicks } from '../lib/picks'

const FILTERS = [
  { id: 'all', label: 'Everything' },
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non-veg' },
]

const matches = (item, filter) =>
  filter === 'all' || (filter === 'veg' ? item.veg : !item.veg)

const POURS = new Set(['drinks', 'sober'])

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const [filter, setFilter] = useState('all')
  const [showPicks, setShowPicks] = useState(false)
  const tabRefs = useRef([])
  const { picks, toggle, remove, has } = usePicks()

  const active = menuCategories.find((category) => category.id === activeId) ?? menuCategories[0]
  const groups = active.groups
    .map((group) => ({ ...group, items: group.items.filter((item) => matches(item, filter)) }))
    .filter((group) => group.items.length)
  const total = groups.reduce((count, group) => count + group.items.length, 0)
  const pickId = (item) => `${active.id}-${item.name}`

  const onTabKey = (event, index) => {
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % menuCategories.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + menuCategories.length) % menuCategories.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = menuCategories.length - 1
    else return

    event.preventDefault()
    setActiveId(menuCategories[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="menu" className="relative pb-section">
      <div className="shell">
        <SectionTitle
          index="The menu"
          en={`${menuCategories.length} sections, one long evening`}
          jp="品書"
          lead={active.blurb}
        />

        <div className="mt-9 flex flex-col gap-5 border-b border-ink/15 lg:flex-row lg:items-end lg:justify-between">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap gap-x-7 gap-y-2"
          >
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={activeId === category.id}
                aria-controls={`menu-panel-${category.id}`}
                tabIndex={activeId === category.id ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => onTabKey(event, index)}
                className={`relative shrink-0 pb-3.5 pt-1 transition-colors duration-300 ${
                  activeId === category.id ? 'text-ink' : 'text-ink/60 hover:text-ink'
                }`}
              >
                <span className="flex items-baseline gap-2">
                  <span
                    className={`font-ui text-[9px] tracking-[0.2em] ${
                      activeId === category.id ? 'text-honey' : 'text-ink/35'
                    }`}
                  >
                    {category.index}
                  </span>
                  <span className="font-display text-[1.2rem] font-semibold leading-none sm:text-[1.5rem]">
                    {category.label}
                  </span>
                </span>
                {activeId === category.id ? (
                  <motion.span
                    layoutId="menu-underline"
                    className="absolute inset-x-0 -bottom-px h-[3px] bg-honey"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                ) : null}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 pb-3">
            <div role="group" aria-label="Dietary filter" className="flex border border-ink/15">
              {FILTERS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={filter === option.id}
                  onClick={() => setFilter(option.id)}
                  className={`px-3.5 py-2 text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    filter === option.id
                      ? 'bg-ink text-cream'
                      : 'text-ink/55 hover:bg-ink/5 hover:text-ink'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPicks((value) => !value)}
                aria-expanded={showPicks}
                className="flex items-center gap-2 border border-ink/20 px-3.5 py-2 text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 hover:border-ink"
              >
                My picks
                <span
                  className={`flex h-5 min-w-5 items-center justify-center px-1 text-[10px] tracking-normal ${
                    picks.length ? 'bg-honey text-ink' : 'bg-ink/10 text-ink/50'
                  }`}
                >
                  {picks.length}
                </span>
              </button>

              <AnimatePresence>
                {showPicks ? (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 top-full z-30 mt-2 w-[19rem] border border-honey/50 bg-cream p-4 shadow-warm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="eyebrow text-ink/40">Your picks</p>
                      <button
                        type="button"
                        onClick={() => setShowPicks(false)}
                        aria-label="Close picks"
                        className="text-ink/40 transition-colors hover:text-ink"
                      >
                        <X className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                      </button>
                    </div>

                    {picks.length ? (
                      <ul className="mt-3 grid gap-2">
                        {picks.map((pick) => (
                          <li key={pick.id} className="flex items-center gap-2.5 border-b border-ink/10 pb-2">
                            <DietMark veg={pick.veg} />
                            <span className="flex-1 text-[13px] leading-tight">{pick.name}</span>
                            <span className="text-[13px] text-ink/60">
                              {pick.price ? `₹${pick.price}` : ''}
                            </span>
                            <button
                              type="button"
                              onClick={() => remove(pick.id)}
                              aria-label={`Remove ${pick.name}`}
                              className="text-ink/35 transition-colors hover:text-seal"
                            >
                              <X className="h-3 w-3" strokeWidth={2} aria-hidden />
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-[13px] leading-relaxed text-ink/55">
                        Nothing yet. Tap the plus beside a dish, or let the mood picker choose.
                      </p>
                    )}

                    {picks.length ? (
                      <p className="mt-3 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink/40">
                        Show this list at the table
                      </p>
                    ) : null}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          id={`menu-panel-${active.id}`}
          aria-labelledby={`menu-tab-${active.id}`}
          tabIndex={-1}
          className="mt-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${active.id}-${filter}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-ink/15 pb-3">
                <h3 className="font-display text-[1.55rem] leading-none text-ink sm:text-[1.85rem]">
                  {active.title}
                </h3>
                {active.jp ? (
                  <span className="font-jp text-[12px] tracking-[0.28em] text-ink/35">{active.jp}</span>
                ) : null}
                <span className="ml-auto text-[9px] uppercase tracking-[0.22em] text-ink/35">
                  {total} {POURS.has(active.id) ? 'pours' : 'plates'}
                </span>
              </div>

              {groups.map((group, groupIndex) => (
                <div key={group.title ?? groupIndex} className="mt-8 first:mt-6">
                  {group.title ? (
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h4 className="eyebrow text-honey">{group.title}</h4>
                      {group.note ? (
                        <span className="text-[11px] leading-relaxed tracking-[0.03em] text-ink/45">
                          {group.note}
                        </span>
                      ) : null}
                      <span aria-hidden className="ml-auto hidden h-px w-16 bg-ink/15 sm:block" />
                    </div>
                  ) : group.note ? (
                    <p className="text-[11px] tracking-[0.03em] text-ink/45">{group.note}</p>
                  ) : null}

                  <ul className="mt-1 grid gap-x-14 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-start gap-3 border-b border-ink/10 py-4"
                      >
                        <DietMark veg={item.veg} className="mt-[7px]" />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-3">
                            <h5 className="font-display text-[1.18rem] leading-snug text-ink">
                              {item.name}
                            </h5>
                            <span
                              aria-hidden
                              className="hidden h-px flex-1 border-b border-dotted border-ink/25 sm:block"
                            />
                            <span className="whitespace-nowrap font-display text-[1.02rem] text-ink/75">
                              {item.price ? `₹${item.price}` : ''}
                            </span>
                          </div>

                          {item.desc ? (
                            <p className="mt-1 max-w-[46ch] text-[13.5px] leading-relaxed text-ink/60">
                              {item.desc}
                            </p>
                          ) : null}

                          {item.tag ? (
                            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-honey">
                              {item.tag}
                            </p>
                          ) : null}
                        </div>

                        <button
                          type="button"
                          onClick={() => toggle({ ...item, id: pickId(item) })}
                          aria-pressed={has(pickId(item))}
                          aria-label={
                            has(pickId(item))
                              ? `Remove ${item.name} from picks`
                              : `Add ${item.name} to picks`
                          }
                          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-300 ${
                            has(pickId(item))
                              ? 'border-honey bg-honey text-ink'
                              : 'border-ink/20 text-ink/60 hover:border-ink hover:text-ink'
                          }`}
                        >
                          {has(pickId(item)) ? (
                            <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                          ) : (
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {total === 0 ? (
                <p className="py-10 text-[14px] text-ink/50">
                  No {filter === 'veg' ? 'vegetarian' : 'non-vegetarian'} dishes in this section — try
                  another tab.
                </p>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-9 max-w-read text-[11.5px] leading-relaxed text-ink/40">
          Prices in rupees. Dishes carrying several prices are priced by protein or by serve. Tell the
          kitchen about allergies before ordering.
        </p>
      </div>
    </section>
  )
}
