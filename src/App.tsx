import { useState } from 'react'

import Evening from './components/Evening'
import FindUs from './components/FindUs'
import Hero from './components/Hero'
import Intro from './components/Intro'
import MenuSection from './components/MenuSection'
import Reservations from './components/Reservations'
import Signatures from './components/Signatures'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import SpaceGallery from './components/SpaceGallery'
import { useActiveSection, useScrollReveal } from './lib/hooks'

const SECTION_IDS = ['top', 'menu', 'space', 'reservations', 'find-us']

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS, 'top')

  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader active={active} open={navOpen} onOpenChange={setNavOpen} />

      <main id="main" inert={navOpen || undefined}>
        <Hero />
        <Intro />
        <Signatures />
        <MenuSection />
        <SpaceGallery />
        <Evening />
        <Reservations />
        <FindUs />
      </main>

      <SiteFooter inert={navOpen} />
    </>
  )
}
