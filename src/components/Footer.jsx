import './Footer.css'

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
]

const LEGAL_LINKS = [
  { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/cookies', label: 'Cookies' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="artemis-footer" role="contentinfo">
      <div className="footer-grid">

        {/* Col 1 — Logo + nav */}
        <div className="footer-col">
          <a href="/" className="footer-logo-link" aria-label="Artemis Consultores — Inicio">
            <img
              src="/logo.png"
              alt="Artemis Consultores"
              width="150"
              height="38"
            />
          </a>
          <p className="footer-tagline">
            Especialistas en Ley de Segunda Oportunidad en Sevilla. Más de 15 años cancelando deudas de forma legal y definitiva.
          </p>
          <nav aria-label="Navegación footer">
            <ul className="footer-nav-list">
              <li><a href="/">Inicio</a></li>
              <li><a href="/artemis-consultores">Artemis Consultores</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>

        {/* Col 2 — Contact + Social */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contacto</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-label">Teléfono</span>
            <a href="tel:+34633762637">633 76 26 37</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-label">Horario</span>
            <span>Lunes a Viernes: 9:00 – 20:00</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-label">WhatsApp</span>
            <a
              href="https://wa.me/34633762637?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20la%20Ley%20de%20Segunda%20Oportunidad."
              target="_blank"
              rel="noopener noreferrer"
            >
              Escríbenos ahora
            </a>
          </div>

          <div className="footer-socials" aria-label="Redes sociales">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.name}
                href={s.href}
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3 — Address + Legal */}
        <div className="footer-col">
          <h4 className="footer-col-title">Dirección</h4>
          <address className="footer-address">
            C. Jaén, 2, Piso 2 Puerta 2<br />
            41001 Sevilla, España
          </address>
          <a
            href="https://maps.google.com/?q=C.+Jaén+2+Sevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            <span aria-hidden="true">📍</span> Ver en el mapa
          </a>

          <h4 className="footer-col-title" style={{ marginTop: '28px' }}>Legal</h4>
          <nav aria-label="Menú legal">
            <ul className="footer-legal-list">
              {LEGAL_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>
          © {year} Artemis Consultores. Todos los derechos reservados.
        </span>
        <span className="footer-bottom-tagline">
          Diseñado para la Ley de Segunda Oportunidad
        </span>
      </div>
    </footer>
  )
}
