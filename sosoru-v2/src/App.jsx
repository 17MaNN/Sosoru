import { useCallback, useState } from 'react'

import CursorGlow from './components/CursorGlow'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import KumikoDivider from './components/KumikoDivider'
import Menu from './components/Menu'
import MobileBar from './components/MobileBar'
import MoodPicker from './components/MoodPicker'
import Reserve from './components/Reserve'
import Seating from './components/Seating'
import Signatures from './components/Signatures'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import Story from './components/Story'
import Visit from './components/Visit'
import { PicksProvider } from './lib/picks'
import useLenis from './lib/useLenis'

export default function App() {
  useLenis()
  const [reserveOpen, setReserveOpen] = useState(false)

  const openReserve = useCallback(() => setReserveOpen(true), [])
  const closeReserve = useCallback(() => setReserveOpen(false), [])

  return (
    <PicksProvider>
      <a
        href="#story"
        className="fixed left-4 top-4 z-[80] -translate-y-24 bg-ink px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cream transition-transform duration-300 focus:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader onReserve={openReserve} />
      <CursorGlow />

      <main>
        <Hero onReserve={openReserve} />
        <Story />

        <KumikoDivider className="shell" />

        <Signatures />
        <MoodPicker />
        <Menu />
        <Seating />
        <Gallery />
        <Visit />
      </main>

      <SiteFooter />
      <MobileBar />
      <Reserve open={reserveOpen} onClose={closeReserve} />

      <div aria-hidden className="h-14 md:hidden" />
    </PicksProvider>
  )
}
