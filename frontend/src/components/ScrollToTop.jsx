import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Jump to top on route change
    window.scrollTo({ top: 50, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
