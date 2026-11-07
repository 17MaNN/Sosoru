import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const PicksContext = createContext(null)

/**
 * Picks are keyed by the menu's own id where one is supplied — a few dish names
 * repeat across sections (chilly chicken is both a starter and a gravy), so the
 * name alone is not unique. Dishes chosen by the mood picker fall back to it.
 */
const keyOf = (dish) => (typeof dish === 'string' ? dish : dish.id ?? dish.name)

/** A handful of dishes the guest has tapped through the picker or the menu. */
export function PicksProvider({ children }) {
  const [picks, setPicks] = useState([])

  const toggle = useCallback((dish) => {
    const id = keyOf(dish)
    setPicks((current) => {
      if (current.some((item) => item.id === id)) {
        return current.filter((item) => item.id !== id)
      }
      return [...current, { id, name: dish.name, price: dish.price ?? null, veg: Boolean(dish.veg) }]
    })
  }, [])

  const remove = useCallback((id) => {
    setPicks((current) => current.filter((item) => item.id !== id))
  }, [])

  const has = useCallback((id) => picks.some((item) => item.id === id), [picks])

  const value = useMemo(() => ({ picks, toggle, remove, has }), [picks, toggle, remove, has])

  return <PicksContext.Provider value={value}>{children}</PicksContext.Provider>
}

export function usePicks() {
  const context = useContext(PicksContext)
  if (!context) throw new Error('usePicks must be used inside a PicksProvider')
  return context
}
