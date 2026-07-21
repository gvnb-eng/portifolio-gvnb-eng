import { Link, useLocation } from 'react-router-dom'
import { scrollToLocation } from './ScrollToLocation'

export default function NavigationLink({ to, onClick, ...props }) {
  const location = useLocation()

  const handleClick = (event) => {
    onClick?.(event)

    if (
      event.defaultPrevented
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
      || typeof to !== 'string'
    ) return

    const hashIndex = to.indexOf('#')
    const targetPath = hashIndex >= 0 ? to.slice(0, hashIndex) || location.pathname : to
    const targetHash = hashIndex >= 0 ? to.slice(hashIndex) : ''

    if (targetPath === location.pathname && targetHash === location.hash) {
      window.requestAnimationFrame(() => scrollToLocation(targetHash))
    }
  }

  return <Link to={to} onClick={handleClick} {...props} />
}
