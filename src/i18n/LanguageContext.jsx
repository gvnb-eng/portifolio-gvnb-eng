import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext(null)
const supportedLanguages = new Set(['pt', 'en'])

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (supportedLanguages.has(queryLanguage)) return queryLanguage

  const storedLanguage = window.localStorage.getItem('gvnb-language')
  return supportedLanguages.has(storedLanguage) ? storedLanguage : 'pt'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
    document.title = language === 'en'
      ? 'Gustavo Brito - Mechanical Engineer | HVAC'
      : 'Gustavo Brito - Engenheiro Mecânico HVAC'
    window.localStorage.setItem('gvnb-language', language)

    const url = new URL(window.location.href)
    if (language === 'en') url.searchParams.set('lang', 'en')
    else url.searchParams.delete('lang')
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`)
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'pt' ? 'en' : 'pt'),
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
