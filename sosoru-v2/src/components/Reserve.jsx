import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import { contact, reservations, whatsappNumber } from '../data/content'
import { lockScroll } from '../lib/useLenis'

const EASE = [0.22, 1, 0.36, 1]

const today = new Date().toISOString().slice(0, 10)

const field =
  'w-full border border-ink/20 bg-cream px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-honey'
const labelClass = 'text-[9px] uppercase tracking-[0.2em] text-ink/45'

export default function Reserve({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    time: reservations.times[3],
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    setSent(false)
    lockScroll(true)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lockScroll(false)
    }
  }, [open, onClose])

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    const message = [
      `Table request — ${form.name}`,
      `Guests: ${form.guests}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Phone: ${form.phone}`,
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[95] flex items-start justify-center overflow-y-auto bg-ink/70 px-4 py-8 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reserve-title"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative w-full max-w-lg border border-honey/40 bg-cream p-6 text-ink shadow-warm sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close reservation form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-ink/15 text-ink/50 transition-colors hover:border-ink hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </button>

            {sent ? (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 1.7, opacity: 0, rotate: -16 }}
                  animate={{ scale: 1, opacity: 1, rotate: -7 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 15, delay: 0.1 }}
                  className="mx-auto mt-2 flex h-28 w-28 items-center justify-center border-2 border-seal text-seal"
                >
                  <span className="flex h-full w-full items-center justify-center border border-seal/60">
                    <span className="text-center">
                      <span className="block font-jp text-[1.7rem] leading-none">予約</span>
                      <span className="mt-1.5 block text-[8px] uppercase tracking-[0.2em]">sent</span>
                    </span>
                  </span>
                </motion.div>

                <h2 id="reserve-title" className="mt-6 font-display text-[1.9rem] leading-tight">
                  Your request is on its way
                </h2>

                <p className="mx-auto mt-3 max-w-[34ch] text-[14px] leading-relaxed text-ink/60">
                  WhatsApp should have opened with the details. If it did not,{' '}
                  <a
                    className="border-b border-honey pb-0.5 text-ink"
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    open the chat
                  </a>{' '}
                  and paste your message. The restaurant confirms there.
                </p>

                <dl className="mx-auto mt-6 grid max-w-xs gap-2 border-t border-ink/10 pt-4 text-[13px]">
                  {[
                    ['Guests', form.guests],
                    ['Date', form.date],
                    ['Time', form.time],
                  ].map(([term, value]) => (
                    <div key={term} className="flex items-baseline justify-between gap-4">
                      <dt className="text-[9px] uppercase tracking-[0.2em] text-ink/40">{term}</dt>
                      <dd className="tabular-nums">{value}</dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-7 border border-ink px-6 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 hover:bg-ink hover:text-cream"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow text-honey">{reservations.eyebrow}</p>
                <h2 id="reserve-title" className="mt-3 font-display text-[2rem] leading-tight">
                  {reservations.en}
                </h2>
                <p className="mt-2 max-w-[40ch] text-[13.5px] leading-relaxed text-ink/60">
                  {reservations.lead}
                </p>

                <form onSubmit={submit} className="mt-6 grid gap-4">
                  <div className="grid gap-1.5">
                    <label className={labelClass} htmlFor="reserve-name">
                      Name
                    </label>
                    <input
                      id="reserve-name"
                      required
                      autoFocus
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      className={field}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <label className={labelClass} htmlFor="reserve-phone">
                        Phone
                      </label>
                      <input
                        id="reserve-phone"
                        required
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+\s-]{8,16}"
                        value={form.phone}
                        onChange={update('phone')}
                        className={field}
                        placeholder="+91 …"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className={labelClass} htmlFor="reserve-date">
                        Date
                      </label>
                      <input
                        id="reserve-date"
                        required
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={update('date')}
                        className={field}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <label className={labelClass} htmlFor="reserve-guests">
                        Guests
                      </label>
                      <select
                        id="reserve-guests"
                        value={form.guests}
                        onChange={update('guests')}
                        className={field}
                      >
                        {reservations.guests.map((count) => (
                          <option key={count} value={count}>
                            {count} {count === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-1.5">
                      <label className={labelClass} htmlFor="reserve-time">
                        Time
                      </label>
                      <select
                        id="reserve-time"
                        value={form.time}
                        onChange={update('time')}
                        className={field}
                      >
                        {reservations.times.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 bg-ink px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-cream transition-colors duration-500 hover:bg-honey hover:text-ink"
                  >
                    Send on WhatsApp
                  </button>

                  <p className="text-[11px] leading-relaxed text-ink/40">
                    This opens WhatsApp with your details filled in. Nothing is booked until the restaurant
                    replies — for same-day tables, call {contact.phone.label}.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
