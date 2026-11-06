import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const GROWABLE = 'a, button, [role="button"], img, input, textarea, select, [data-glow-grow]'

/**
 * A soft honey lantern that trails the pointer on precise pointers only.
 * The real cursor stays visible — this sits behind it like light on paper.
 */
export default function CursorGlow() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 130, damping: 20, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 130, damping: 20, mass: 0.5 })
  const scale = useSpring(1, { stiffness: 210, damping: 24 })

  useEffect(() => {
    if (reduce) {
      setEnabled(false)
      return
    }
    const fine = window.matchMedia('(pointer: fine)')
    const apply = () => setEnabled(fine.matches)
    apply()
    fine.addEventListener('change', apply)
    return () => fine.removeEventListener('change', apply)
  }, [reduce])

  useEffect(() => {
    if (!enabled) return

    const move = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const over = (event) => {
      const hit = event.target instanceof Element ? event.target.closest(GROWABLE) : null
      scale.set(hit ? 2.15 : 1)
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over, true)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over, true)
    }
  }, [enabled, x, y, scale])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x: sx, y: sy, scale }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2"
        style={{
          width: 340,
          height: 340,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201,143,79,0.34) 0%, rgba(201,143,79,0.13) 38%, rgba(201,143,79,0.04) 58%, transparent 72%)',
        }}
      />
    </motion.div>
  )
}
