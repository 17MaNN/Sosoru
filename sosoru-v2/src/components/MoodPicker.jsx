import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Plus, RotateCcw } from 'lucide-react'

import DietMark from './DietMark'
import { moodDishes, moodQuestions } from '../data/content'
import { usePicks } from '../lib/picks'

const EASE = [0.22, 1, 0.36, 1]

/** Exact matches first, then the closest dish, so no tap ever dead-ends. */
function choose(answers) {
  const exact = moodDishes.filter(
    (dish) =>
      dish.weight === answers.weight && dish.temp === answers.temp && dish.veg === answers.veg,
  )
  if (exact.length) return exact[Math.floor(Math.random() * exact.length)]

  const scored = moodDishes
    .map((dish) => ({
      dish,
      score:
        (dish.veg === answers.veg ? 2 : -4) +
        (dish.weight === answers.weight ? 1 : 0) +
        (dish.temp === answers.temp ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)

  const best = scored[0]?.score
  const pool = scored.filter((entry) => entry.score === best)
  return pool[Math.floor(Math.random() * pool.length)]?.dish ?? moodDishes[0]
}

const label = (key, value) => {
  const question = moodQuestions.find((item) => item.key === key)
  return question?.options.find((option) => option.value === value)?.label ?? ''
}

export default function MoodPicker() {
  const reduce = useReducedMotion()
  const { toggle, has } = usePicks()
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(null)

  const question = moodQuestions[step]
  const done = Boolean(result)

  const summary = useMemo(
    () => ['weight', 'veg', 'temp'].map((key) => label(key, answers[key])).filter(Boolean),
    [answers],
  )

  const onChoose = (key, value) => {
    const next = { ...answers, [key]: value }
    setAnswers(next)

    if (step < moodQuestions.length - 1) {
      setStep(step + 1)
    } else {
      setResult(choose(next))
      setStep(moodQuestions.length)
    }
  }

  const reset = () => {
    setAnswers({})
    setStep(0)
    setResult(null)
  }

  return (
    <section className="relative pb-section">
      <div className="shell">
        <div className="relative overflow-hidden border border-honey/40 bg-[#F2ECE1]">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-10 select-none font-jp text-[9rem] leading-none"
            style={{ color: 'rgba(201, 143, 79, 0.08)' }}
          >
            味
          </span>

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <p className="eyebrow text-honey">04 — Undecided?</p>

              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05] text-ink">
                What should I <em className="text-honey">eat?</em>
              </h2>

              <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-ink/60">
                Three taps and the kitchen decides for you. No wrong answers.
              </p>

              <div className="mt-7 flex items-center gap-2" aria-hidden>
                {moodQuestions.map((item, index) => (
                  <span
                    key={item.key}
                    className={`h-[3px] w-9 transition-colors duration-500 ${
                      index < step ? 'bg-honey' : 'bg-ink/15'
                    }`}
                  />
                ))}
                <span
                  className={`h-[3px] w-9 transition-colors duration-500 ${done ? 'bg-honey' : 'bg-ink/15'}`}
                />
              </div>

              <div className="mt-6 min-h-[13rem]">
                <AnimatePresence mode="wait" initial={false}>
                  {done ? (
                    <motion.div
                      key="answers"
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="grid gap-4"
                    >
                      <p className="font-display text-[1.35rem] leading-snug text-ink/80">
                        {summary.join(' · ')}
                      </p>
                      <button
                        type="button"
                        onClick={reset}
                        className="flex w-fit items-center gap-2 border-b border-ink/25 pb-1 text-[10px] uppercase tracking-[0.22em] text-ink/60 transition-colors hover:border-honey hover:text-ink"
                      >
                        <RotateCcw className="h-3 w-3" strokeWidth={1.5} aria-hidden />
                        Ask again
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={question.key}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="grid gap-4"
                    >
                      <p className="flex items-baseline gap-3 font-display text-[1.35rem] leading-snug text-ink">
                        <span aria-hidden className="font-jp text-[13px] text-honey">
                          {question.jp}
                        </span>
                        {question.prompt}
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {question.options.map((option) => (
                          <button
                            key={String(option.value)}
                            type="button"
                            onClick={() => onChoose(question.key, option.value)}
                            className="group flex flex-col items-start gap-1 border border-ink/20 bg-cream/60 px-4 py-3.5 text-left transition-colors duration-300 hover:border-ink hover:bg-cream"
                          >
                            <span className="text-[11px] uppercase tracking-[0.2em] text-ink group-hover:text-honey">
                              {option.label}
                            </span>
                            <span className="text-[12px] text-ink/50">{option.note}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-stretch">
              <AnimatePresence mode="wait" initial={false}>
                {done ? (
                  <motion.div
                    key={result.name}
                    initial={reduce ? false : { opacity: 0, y: 26, rotate: -1.2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="flex w-full flex-col justify-between border border-honey/50 bg-cream p-6 shadow-warm sm:p-7"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <p className="eyebrow text-honey">Tonight, then</p>
                        <span aria-hidden className="font-jp text-[11px] tracking-[0.2em] text-ink/30">
                          おすすめ
                        </span>
                      </div>

                      <div className="mt-5 flex items-start gap-3">
                        <DietMark veg={result.veg} className="mt-2" size="md" />
                        <h3 className="font-display text-[1.75rem] leading-[1.1] text-ink">{result.name}</h3>
                      </div>

                      <p className="mt-3 text-[14px] leading-relaxed text-ink/65">{result.desc}</p>

                      <p className="mt-4 font-display text-[1.1rem] text-ink/70">₹{result.price}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggle(result)}
                      className={`mt-6 flex items-center justify-center gap-2.5 border px-5 py-3.5 text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                        has(result.name)
                          ? 'border-honey bg-honey text-ink'
                          : 'border-ink bg-ink text-cream hover:border-honey hover:bg-honey hover:text-ink'
                      }`}
                    >
                      {has(result.name) ? (
                        <>
                          <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                          In your picks
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                          Add to my picks
                        </>
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex w-full flex-col justify-between border border-dashed border-ink/20 p-6 sm:p-7"
                  >
                    <div>
                      <p className="eyebrow text-ink/35">Your plate</p>
                      <p className="mt-5 max-w-[24ch] font-display text-[1.5rem] leading-[1.2] text-ink/30">
                        The right dish lands here.
                      </p>
                    </div>
                    <ul className="mt-8 grid gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink/25">
                      <li>— one of eight moods</li>
                      <li>— picked from the menu</li>
                      <li>— added to your picks</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
