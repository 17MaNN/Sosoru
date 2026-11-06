import { useEffect, useState } from 'react'
import { MessageCircle, Navigation, Phone } from 'lucide-react'

import { contact } from '../data/content'

export default function MobileBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        if (y > last + 8 && y > 180) setHidden(true)
        else if (y < last - 8 || y < 120) setHidden(false)
        last = y
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const actions = [
    { label: 'Call', href: contact.phone.href, icon: Phone, external: false },
    { label: 'WhatsApp', href: contact.whatsapp.href, icon: MessageCircle, external: true },
    { label: 'Directions', href: contact.maps.href, icon: Navigation, external: true },
  ]

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/15 bg-cream/95 backdrop-blur-sm transition-transform duration-500 ease-craft md:hidden ${
        hidden ? 'pointer-events-none translate-y-full' : 'translate-y-0'
      }`}
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-3">
        {actions.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : null)}
            className="flex flex-col items-center gap-1.5 py-2.5 font-ui text-[9px] uppercase tracking-[0.16em] text-ink/70 transition-colors active:bg-ink active:text-cream"
          >
            <Icon className="h-4 w-4 text-honey" strokeWidth={1.5} aria-hidden />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
