import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/artemis-consultores', label: 'Artemis Consultores' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 992) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header id="site-header" className={`site-header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-inner">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>

        <a href="/" className="header-logo" aria-label="Artemis Consultores — Inicio">
          <img src="/logo.png" alt="Artemis Consultores" width="160" height="40" />
        </a>

        <nav id="main-nav" className={`header-nav ${menuOpen ? 'active' : ''}`} aria-label="Navegación principal">
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="https://wa.me/34633762637" className="header-cta" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.004 2.003A9.997 9.997 0 0 0 2 12c0 1.76.46 3.41 1.26 4.845L2 22l5.345-1.24A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10S17.527 2 12.004 2zm-.004 18a7.964 7.964 0 0 1-4.07-1.11l-.292-.173-3.03.703.72-2.94-.19-.303A7.952 7.952 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
          </svg>
          WhatsApp
        </a>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </header>
  )
}
