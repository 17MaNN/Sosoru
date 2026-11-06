import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { seating } from '../data/content'

const EASE = [0.22, 1, 0.36, 1]

const zone = (active) => ({
  fill: active ? 'rgba(201, 143, 79, 0.22)' : 'rgba(20, 20, 20, 0.03)',
  stroke: active ? '#C98F4F' : 'rgba(20, 20, 20, 0.22)',
  strokeWidth: active ? 1.4 : 1,
  transition: 'fill 400ms ease, stroke 400ms ease',
})

export default function Seating() {
  const [activeId, setActiveId] = useState(seating[0].id)
  const active = seating.find((option) => option.id === activeId) ?? seating[0]

  return (
    <section id="seating" className="pb-section">
      <div className="shell">
        <SectionTitle
          index="05 — Where you sit"
          en="Three ways to take a table"
          jp="席"
          lead="A room with tables, a raised zashiki platform and a counter at the back. Pick a seat and it shows itself."
        />

        <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <div role="group" aria-label="Seating area" className="flex flex-wrap gap-2">
              {seating.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={activeId === option.id}
                  onClick={() => setActiveId(option.id)}
                  className={`flex items-center gap-2 border px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    activeId === option.id
                      ? 'border-ink bg-ink text-cream'
                      : 'border-ink/20 text-ink/55 hover:border-ink hover:text-ink'
                  }`}
                >
                  <span aria-hidden className="font-jp text-[11px] text-honey">
                    {option.jp}
                  </span>
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-6 border border-honey/30 bg-cream p-4 sm:p-6">
              <svg viewBox="0 0 340 240" className="w-full" aria-hidden>
                <rect x="5" y="5" width="330" height="230" fill="none" stroke="rgba(20,20,20,0.22)" />

                {Array.from({ length: 9 }).map((_, index) => (
                  <line
                    key={index}
                    x1={16 + index * 7}
                    y1="16"
                    x2={16 + index * 7}
                    y2="224"
                    stroke="rgba(20,20,20,0.09)"
                  />
                ))}

                <text x="26" y="132" className="font-jp" fontSize="9" fill="rgba(20,20,20,0.3)">
                  格子
                </text>

                <g className="cursor-pointer" onClick={() => setActiveId('zashiki')}>
                  <rect x="178" y="24" width="138" height="80" style={zone(activeId === 'zashiki')} />
                  <rect x="196" y="46" width="46" height="34" fill="none" stroke="rgba(20,20,20,0.28)" />
                  <rect x="252" y="46" width="46" height="34" fill="none" stroke="rgba(20,20,20,0.28)" />
                  <text x="290" y="98" className="font-jp" fontSize="10" fill="rgba(20,20,20,0.4)">
                    座敷
                  </text>
                </g>

                <g className="cursor-pointer" onClick={() => setActiveId('table')}>
                  {[
                    [76, 76],
                    [134, 76],
                    [76, 148],
                    [134, 148],
                  ].map(([cx, cy]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="19" style={zone(activeId === 'table')} />
                  ))}
                  <text x="76" y="80" textAnchor="middle" className="font-jp" fontSize="9" fill="rgba(20,20,20,0.4)">
                    卓
                  </text>
                </g>

                <g className="cursor-pointer" onClick={() => setActiveId('bar')}>
                  <rect x="178" y="182" width="138" height="24" style={zone(activeId === 'bar')} />
                  {[196, 218, 240].map((cx) => (
                    <circle key={cx} cx={cx} cy="222" r="6" fill="none" stroke="rgba(20,20,20,0.3)" />
                  ))}
                  <text x="300" y="199" className="font-jp" fontSize="10" fill="rgba(20,20,20,0.4)">
                    酒場
                  </text>
                </g>

                <rect x="12" y="196" width="42" height="38" fill="none" stroke="rgba(20,20,20,0.22)" strokeDasharray="3 3" />
                <text x="33" y="219" textAnchor="middle" className="font-jp" fontSize="8" fill="rgba(20,20,20,0.35)">
                  入口
                </text>
              </svg>
            </div>

            <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-ink/35">
              Sketch of the floor — tap a zone
            </p>
          </div>

          <div>
            <div className="overflow-hidden border border-honey/30 p-[5px]">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={active.id}
                    src={active.image}
                    alt={active.alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="relative min-h-[10.5rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-5"
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-[1.5rem] leading-tight text-ink">{active.label}</h3>
                    <span aria-hidden className="font-jp text-[12px] text-honey">
                      {active.jp}
                    </span>
                  </div>
                  <p className="mt-2 max-w-read text-[14.5px] leading-relaxed text-ink/65">
                    {active.description}
                  </p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-ink/40">{active.note}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
