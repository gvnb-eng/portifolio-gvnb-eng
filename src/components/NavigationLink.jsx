import { Link, useLocation } from 'react-router-dom'
import { scrollToLocation } from './ScrollToLocation'
import { useLanguage } from '../i18n/LanguageContext'

function localizeDestination(to, language) {
  if (typeof to !== 'string' || !to.startsWith('/')) return to

  const url = new URL(to, window.location.origin)
  if (language === 'en') url.searchParams.set('lang', 'en')
  else url.searchParams.delete('lang')
  return `${url.pathname}${url.search}${url.hash}`
}

export default function NavigationLink({ to, onClick, ...props }) {
  const location = useLocation()
  const { language } = useLanguage()
  const localizedTo = localizeDestination(to, language)

  const handleClick = (event) => {
    onClick?.(event)

    if (
      event.defaultPrevented
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
      || typeof localizedTo !== 'string'
    ) return

    const targetUrl = new URL(localizedTo, window.location.origin)
    const targetPath = targetUrl.pathname
    const targetHash = targetUrl.hash

    if (targetPath === location.pathname && targetHash === location.hash) {
      window.requestAnimationFrame(() => scrollToLocation(targetHash))
    }
  }

  return <Link to={localizedTo} onClick={handleClick} {...props} />
}
