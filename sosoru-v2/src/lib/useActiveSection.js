import { useEffect, useState } from 'react'

/**
 * Reports the id of the section currently crossing the middle of the viewport.
 * The band is deliberately narrow so two tall sections never both qualify.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState('')
  const key = ids.filter(Boolean).join('|')

  useEffect(() => {
    const list = key.split('|').filter(Boolean)
    const nodes = list.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return

    const visible = new Set()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        const next = list.find((id) => visible.has(id))
        if (next) setActive(next)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [key])

  return active
}
