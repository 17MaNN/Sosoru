import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import CursorGlow from './components/CursorGlow'
import MobileBar from './components/MobileBar'
import Reserve from './components/Reserve'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import ContactPage from './pages/ContactPage'
import ExperiencePage from './pages/ExperiencePage'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import NotFound from './pages/NotFound'
import StoryPage from './pages/StoryPage'
import { PicksProvider } from './lib/picks'
import { RouterProvider, useRouter } from './lib/router'
import useLenis from './lib/useLenis'

const ROUTES = {
  '/': Home,
  '/story': StoryPage,
  '/menu': MenuPage,
  '/experience': ExperiencePage,
  '/gallery': GalleryPage,
  '/contact': ContactPage,
}

const EASE = [0.22, 1, 0.36, 1]

function Shell() {
  const { path } = useRouter()
  const reduce = useReducedMotion()
  const [reserveOpen, setReserveOpen] = useState(false)

  useLenis()

  const openReserve = useCallback(() => setReserveOpen(true), [])
  const closeReserve = useCallback(() => setReserveOpen(false), [])

  // Move focus into the new page so keyboard and screen-reader users land there.
  useEffect(() => {
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [path])

  const Page = ROUTES[path] ?? NotFound

  return (
    <PicksProvider>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[80] -translate-y-24 bg-ink px-4 py-2 font-ui text-[11px] uppercase tracking-[0.2em] text-cream transition-transform duration-300 focus:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader onReserve={openReserve} />
      <CursorGlow />

      <main id="main" tabIndex={-1} className="outline-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={path}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.38, ease: EASE }}
          >
            <Page onReserve={openReserve} />
          </motion.div>
        </AnimatePresence>
      </main>

      <SiteFooter />
      <MobileBar />
      <Reserve open={reserveOpen} onClose={closeReserve} />

      <div aria-hidden className="h-14 md:hidden" />
    </PicksProvider>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  )
}
