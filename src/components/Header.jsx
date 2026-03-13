import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '#sobre', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
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

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header id="site-header" className={`site-header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-inner">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>

        <a href="/" className="header-logo" aria-label="Artemis Consultores">
          <img src="/logo.png" alt="Artemis Consultores" width="200" height="52" />
        </a>

        <nav id="main-nav" className={`header-nav ${menuOpen ? 'active' : ''}`} aria-label="Navegación principal">
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNav(e, link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="header-cta" onClick={(e) => handleNav(e, '#contacto')}>
          Consulta gratis
        </a>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </header>
  )
}
