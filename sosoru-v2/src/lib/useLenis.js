import { useCallback, useEffect, useRef } from 'react'
import Lenis from 'lenis'

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// One page, one instance — kept at module scope so any component can stop it.
let active = null

/** Freeze the page for an overlay. Falls back to CSS when Lenis is off. */
export function lockScroll(locked) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('is-locked', locked)
  if (!active) return
  if (locked) active.stop()
  else active.start()
}

/**
 * Mounts Lenis once and hands back a scrollTo that works whether or not smooth
 * scrolling is active (reduced motion, or the instance not yet created).
 */
export function useLenis({ duration = 1.05, wheelMultiplier = 1 } = {}) {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || reduced()) return

    const instance = new Lenis({
      duration,
      wheelMultiplier,
      smoothWheel: true,
      touchMultiplier: 1.4,
      anchors: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    active = instance
    lenisRef.current = instance
    let frame = requestAnimationFrame(function raf(time) {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      lenisRef.current = null
      if (active === instance) active = null
    }
  }, [duration, wheelMultiplier])

  const scrollTo = useCallback((target, options = {}) => {
    const node = typeof target === 'string' ? document.querySelector(target) : target
    if (!node) return
    if (lenisRef.current) lenisRef.current.scrollTo(node, { offset: -8, duration: 1.2, ...options })
    else if (node.scrollIntoView) node.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth' })
  }, [])

  return { lenis: lenisRef, scrollTo }
}

export default useLenis
