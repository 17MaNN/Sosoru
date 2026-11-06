import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const RouterContext = createContext(null)

const normalise = (path) => {
  const clean = (path || '/').split('?')[0].replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

/**
 * A deliberately small History API router: six static routes, no dependency.
 * Anchors that only change the hash are left to Lenis.
 */
export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => normalise(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(normalise(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((to, { replace = false } = {}) => {
    const next = normalise(to)
    if (next === normalise(window.location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history[replace ? 'replaceState' : 'pushState']({}, '', to)
    setPath(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRouter must be used inside a RouterProvider')
  return context
}

export function Link({ to, children, onClick, ...rest }) {
  const { navigate } = useRouter()

  return (
    <a
      href={to}
      onClick={(event) => {
        if (event.defaultPrevented) return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
        event.preventDefault()
        onClick?.(event)
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
