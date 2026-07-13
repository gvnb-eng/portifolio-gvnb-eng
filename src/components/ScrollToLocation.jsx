import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function scrollToLocation(hash = '') {
  const target = hash
    ? document.getElementById(decodeURIComponent(hash.slice(1)))
    : null

  if (target) {
    target.scrollIntoView({ block: 'start', behavior: 'auto' })
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }
}

export default function ScrollToLocation() {
  const location = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => scrollToLocation(location.hash))

    return () => window.cancelAnimationFrame(frame)
  }, [location.key, location.pathname, location.hash])

  return null
}
