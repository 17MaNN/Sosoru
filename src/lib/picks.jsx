import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const PicksContext = createContext(null)

/** A handful of dishes the guest has tapped through the picker or the menu. */
export function PicksProvider({ children }) {
  const [picks, setPicks] = useState([])

  const toggle = useCallback((dish) => {
    setPicks((current) => {
      const exists = current.some((item) => item.name === dish.name)
      if (exists) return current.filter((item) => item.name !== dish.name)
      return [...current, { name: dish.name, price: dish.price ?? null, veg: Boolean(dish.veg) }]
    })
  }, [])

  const remove = useCallback((name) => {
    setPicks((current) => current.filter((item) => item.name !== name))
  }, [])

  const has = useCallback((name) => picks.some((item) => item.name === name), [picks])

  const value = useMemo(() => ({ picks, toggle, remove, has }), [picks, toggle, remove, has])

  return <PicksContext.Provider value={value}>{children}</PicksContext.Provider>
}

export function usePicks() {
  const context = useContext(PicksContext)
  if (!context) throw new Error('usePicks must be used inside a PicksProvider')
  return context
}
