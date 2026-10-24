import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'

type Fields = {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  occasion: string
  notes: string
}

type FieldKey = keyof Fields
type Errors = Partial<Record<FieldKey, string>>
type Phase = 'idle' | 'submitting' | 'prepared' | 'sent' | 'error'

const EMPTY: Fields = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  occasion: '',
  notes: '',
}

const TIME_SLOTS = Array.from({ length: 23 }, (_, index) => {
  const minutes = 11 * 60 + 30 + index * 30
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const hour12 = hours % 12 === 0 ? 12 : hours % 12
  return {
    value: `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`,
    label: `${hour12}:${String(mins).padStart(2, '0')} ${hours < 12 ? 'am' : 'pm'}`,
  }
})

const OCCASIONS = ['Birthday', 'Anniversary', 'Business dinner', 'Family meal']

const pad = (value: number) => String(value).padStart(2, '0')

const isoDate = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

const todayISO = isoDate(new Date())

const maxISO = (() => {
  const date = new Date()
  date.setDate(date.getDate() + 90)
  return isoDate(date)
})()

const formatDate = (value: string) => {
  if (!value) return ''
  const date = new Date(`${value}T12:00:00`)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const formatTime = (value: string) =>
  TIME_SLOTS.find((slot) => slot.value === value)?.label ?? value

function validate(values: Fields): Errors {
  const errors: Errors = {}
  const digits = values.phone.replace(/\D/g, '')

  if (values.name.trim().length < 2) {
    errors.name = 'Please tell us who the table is for.'
  }

  if (!/^(?:(?:91)|0)?[6-9]\d{9}$/.test(digits)) {
    errors.phone = 'Enter a 10-digit Indian mobile number, with or without +91.'
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Check the email address, or leave it blank.'
  }

  if (!values.date) {
    errors.date = 'Choose a date for your table.'
  } else if (values.date < todayISO) {
    errors.date = 'Choose today or a future date.'
  } else if (values.date > maxISO) {
    errors.date = 'Requests can be made up to 90 days ahead.'
  }

  if (!values.time) {
    errors.time = 'Choose a time between 11:30 am and 10:30 pm.'
  }

  const guests = Number(values.guests)
  if (!Number.isInteger(guests) || guests < 1 || guests > 7) {
    errors.guests = 'Choose between 1 and 7 guests, or call for a larger party.'
  }

  if (values.notes.trim().length > 400) {
    errors.notes = 'Please keep notes under 400 characters.'
  }

  return errors
}

export default function Reservations() {
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [phase, setPhase] = useState<Phase>('idle')
  const summaryRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  const errorEntries = Object.entries(errors) as Array<[FieldKey, string]>

  useEffect(() => {
    if (phase === 'prepared' || phase === 'sent' || phase === 'error') {
      statusRef.current?.focus()
    }
  }, [phase])

  const update = (key: FieldKey, value: string) => {
    const next = { ...values, [key]: value }
    setValues(next)
    if (errors[key]) {
      const found = validate(next)
      setErrors((current) => ({ ...current, [key]: found[key] }))
    }
  }

  const handleBlur = (key: FieldKey) => {
    const found = validate(values)
    setErrors((current) => ({ ...current, [key]: found[key] }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setPhase('submitting')

    const endpoint = import.meta.env.VITE_RESERVATION_ENDPOINT as string | undefined

    if (!endpoint) {
      setPhase('prepared')
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim() || null,
          date: values.date,
          time: values.time,
          guests: Number(values.guests),
          occasion: values.occasion || null,
          notes: values.notes.trim() || null,
          source: 'website',
        }),
      })

      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setPhase('sent')
    } catch {
      setPhase('error')
    }
  }

  const message = [
    'Hello Sosoru, I would like to request a table.',
    '',
    `Name: ${values.name.trim()}`,
    `Date: ${formatDate(values.date)}`,
    `Time: ${formatTime(values.time)}`,
    `Guests: ${values.guests}`,
    values.occasion ? `Occasion: ${values.occasion}` : '',
    values.notes.trim() ? `Notes: ${values.notes.trim()}` : '',
    `Mobile: ${values.phone.trim()}`,
    values.email.trim() ? `Email: ${values.email.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const whatsappHref = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`
  const isResolved = phase === 'prepared' || phase === 'sent'

  const fieldError = (key: FieldKey) => errors[key]

  return (
    <section
      className="section reservations"
      id="reservations"
      aria-labelledby="reservations-title"
    >
      <div className="shell">
        <div className="section-head">
          <p className="label section-head__index" data-reveal>
            06 — Reservations
          </p>
          <div className="section-head__main">
            <h2 className="h2" id="reservations-title" data-reveal>
              Hold a <em>table.</em>
            </h2>
          </div>
        </div>

        <div className="reservations__grid">
          <div className="reservations__intro" data-reveal>
            <p className="body">
              Send a request and the restaurant will confirm it with you
              directly. This is a request, not a confirmed booking — nothing is
              held until Sosoru replies.
            </p>
            <p className="body">
              For the same evening, or for eight or more guests, calling is
              always faster.
            </p>

            <div className="reservations__contact">
              <a className="reservations__phone" href={site.phone.href}>
                {site.phone.display}
              </a>
              <p className="reservations__meta">{site.hoursShort}</p>
              <p className="reservations__meta">{site.address.line1} · {site.address.city}</p>
            </div>

            <p className="note">
              The reservation form is wired for a booking endpoint
              (VITE_RESERVATION_ENDPOINT). Until one is provided, completed
              requests are handed to the restaurant by phone or WhatsApp.
            </p>
          </div>

          <div data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
            {isResolved ? (
              <div
                className="form__status"
                ref={statusRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                style={{ background: 'rgba(235,227,214,0.55)', borderColor: 'var(--oak)' }}
              >
                <h3>
                  {phase === 'sent' ? 'Request sent' : 'Your request is ready'}
                </h3>
                <p>
                  {phase === 'sent'
                    ? 'Sosoru has received your request and will confirm by phone. If you do not hear back, call the restaurant directly.'
                    : 'This site is not connected to the restaurant’s booking system yet, so the request needs to be sent directly. Send it on WhatsApp or call — the details below are ready to go.'}
                </p>

                <dl className="form__summary">
                  <div>
                    <dt>Name</dt>
                    <dd>{values.name}</dd>
                  </div>
                  <div>
                    <dt>Date</dt>
                    <dd>{formatDate(values.date)}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{formatTime(values.time)}</dd>
                  </div>
                  <div>
                    <dt>Guests</dt>
                    <dd>{values.guests}</dd>
                  </div>
                  {values.occasion ? (
                    <div>
                      <dt>Occasion</dt>
                      <dd>{values.occasion}</dd>
                    </div>
                  ) : null}
                  {values.notes.trim() ? (
                    <div>
                      <dt>Notes</dt>
                      <dd>{values.notes}</dd>
                    </div>
                  ) : null}
                </dl>

                <div className="form__status-actions">
                  <a
                    className="btn btn--solid"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {phase === 'sent' ? 'Message the restaurant' : 'Open WhatsApp'}
                  </a>
                  <a className="btn" href={site.phone.href}>
                    Call {site.phone.display}
                  </a>
                  <button
                    type="button"
                    className="btn btn--quiet"
                    onClick={() => {
                      setPhase('idle')
                      setValues(EMPTY)
                      setErrors({})
                    }}
                  >
                    Start again
                  </button>
                </div>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__head">
                  <h3 className="form__title">Request a table</h3>
                  <p className="form__fineprint">
                    Open daily, 11:00 — 23:00. We will only use these details to
                    arrange this booking.
                  </p>
                </div>

                {errorEntries.length > 0 ? (
                  <div
                    className="form__error-summary"
                    ref={summaryRef}
                    tabIndex={-1}
                    role="alert"
                  >
                    <strong>Please check the highlighted fields.</strong>
                    <ul>
                      {errorEntries.map(([key, message]) => (
                        <li key={key}>
                          <a href={`#field-${key}`}>{message}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="form__grid">
                  <div className="form__row">
                    <div className="field" data-invalid={Boolean(fieldError('name'))}>
                      <label className="field__label" htmlFor="field-name">
                        Name
                      </label>
                      <input
                        id="field-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(event) => update('name', event.target.value)}
                        onBlur={() => handleBlur('name')}
                        aria-invalid={fieldError('name') ? true : undefined}
                        aria-describedby={fieldError('name') ? 'error-name' : undefined}
                      />
                      {fieldError('name') ? (
                        <p className="field__error" id="error-name">
                          {fieldError('name')}
                        </p>
                      ) : null}
                    </div>

                    <div className="field" data-invalid={Boolean(fieldError('phone'))}>
                      <label className="field__label" htmlFor="field-phone">
                        Mobile
                      </label>
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(event) => update('phone', event.target.value)}
                        onBlur={() => handleBlur('phone')}
                        aria-invalid={fieldError('phone') ? true : undefined}
                        aria-describedby={fieldError('phone') ? 'error-phone' : undefined}
                      />
                      {fieldError('phone') ? (
                        <p className="field__error" id="error-phone">
                          {fieldError('phone')}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="form__row">
                    <div className="field" data-invalid={Boolean(fieldError('date'))}>
                      <label className="field__label" htmlFor="field-date">
                        Date
                      </label>
                      <input
                        id="field-date"
                        name="date"
                        type="date"
                        min={todayISO}
                        max={maxISO}
                        value={values.date}
                        onChange={(event) => update('date', event.target.value)}
                        onBlur={() => handleBlur('date')}
                        aria-invalid={fieldError('date') ? true : undefined}
                        aria-describedby={
                          fieldError('date') ? 'error-date' : values.date ? 'hint-date' : undefined
                        }
                      />
                      {fieldError('date') ? (
                        <p className="field__error" id="error-date">
                          {fieldError('date')}
                        </p>
                      ) : values.date ? (
                        <p className="field__hint" id="hint-date">
                          {formatDate(values.date)}
                        </p>
                      ) : null}
                    </div>

                    <div className="field" data-invalid={Boolean(fieldError('time'))}>
                      <label className="field__label" htmlFor="field-time">
                        Time
                      </label>
                      <select
                        id="field-time"
                        name="time"
                        value={values.time}
                        onChange={(event) => update('time', event.target.value)}
                        onBlur={() => handleBlur('time')}
                        aria-invalid={fieldError('time') ? true : undefined}
                        aria-describedby={fieldError('time') ? 'error-time' : undefined}
                      >
                        <option value="">Select a time</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                      {fieldError('time') ? (
                        <p className="field__error" id="error-time">
                          {fieldError('time')}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="form__row">
                    <div className="field" data-invalid={Boolean(fieldError('guests'))}>
                      <label className="field__label" htmlFor="field-guests">
                        Guests
                      </label>
                      <select
                        id="field-guests"
                        name="guests"
                        value={values.guests}
                        onChange={(event) => update('guests', event.target.value)}
                        onBlur={() => handleBlur('guests')}
                        aria-invalid={fieldError('guests') ? true : undefined}
                        aria-describedby={
                          fieldError('guests') ? 'error-guests' : 'hint-guests'
                        }
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map((count) => (
                          <option key={count} value={String(count)}>
                            {count} {count === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                      {fieldError('guests') ? (
                        <p className="field__error" id="error-guests">
                          {fieldError('guests')}
                        </p>
                      ) : (
                        <p className="field__hint" id="hint-guests">
                          8 or more? Please call the restaurant.
                        </p>
                      )}
                    </div>

                    <div className="field">
                      <label className="field__label" htmlFor="field-occasion">
                        Occasion <span>optional</span>
                      </label>
                      <select
                        id="field-occasion"
                        name="occasion"
                        value={values.occasion}
                        onChange={(event) => update('occasion', event.target.value)}
                      >
                        <option value="">Not specified</option>
                        {OCCASIONS.map((occasion) => (
                          <option key={occasion} value={occasion}>
                            {occasion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div
                    className="field"
                    data-invalid={Boolean(fieldError('email'))}
                  >
                    <label className="field__label" htmlFor="field-email">
                      Email <span>optional</span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(event) => update('email', event.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={fieldError('email') ? true : undefined}
                      aria-describedby={fieldError('email') ? 'error-email' : undefined}
                    />
                    {fieldError('email') ? (
                      <p className="field__error" id="error-email">
                        {fieldError('email')}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className="field"
                    data-invalid={Boolean(fieldError('notes'))}
                  >
                    <label className="field__label" htmlFor="field-notes">
                      Notes <span>optional</span>
                    </label>
                    <textarea
                      id="field-notes"
                      name="notes"
                      rows={3}
                      maxLength={400}
                      value={values.notes}
                      placeholder="Allergies, a quiet corner, a birthday…"
                      onChange={(event) => update('notes', event.target.value)}
                      onBlur={() => handleBlur('notes')}
                      aria-invalid={fieldError('notes') ? true : undefined}
                      aria-describedby={fieldError('notes') ? 'error-notes' : undefined}
                    />
                    {fieldError('notes') ? (
                      <p className="field__error" id="error-notes">
                        {fieldError('notes')}
                      </p>
                    ) : null}
                  </div>
                </div>

                {phase === 'error' ? (
                  <div className="form__status" role="alert" style={{ borderColor: 'var(--error)' }}>
                    <h3>We couldn’t send that</h3>
                    <p>
                      The booking service did not respond. Your details are still
                      here — try again, or send the request directly.
                    </p>
                    <div className="form__status-actions">
                      <a
                        className="btn btn--solid"
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open WhatsApp
                      </a>
                      <a className="btn" href={site.phone.href}>
                        Call {site.phone.display}
                      </a>
                    </div>
                  </div>
                ) : null}

                <div className="form__actions">
                  <button
                    type="submit"
                    className="btn btn--solid"
                    disabled={phase === 'submitting'}
                  >
                    {phase === 'submitting' ? 'Sending request…' : 'Send request'}
                  </button>
                  <p className="form__fineprint">
                    Requests are confirmed by the restaurant. For a same-day
                    table, call {site.phone.display}.
                  </p>
                </div>

                <p className="sr-only" aria-live="polite">
                  {errorEntries.length > 0
                    ? `${errorEntries.length} ${errorEntries.length === 1 ? 'field needs' : 'fields need'} attention.`
                    : ''}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
