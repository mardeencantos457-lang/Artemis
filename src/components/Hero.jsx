import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll('.hero-anim')
    items?.forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 100 + i * 150)
    })
  }, [])

  return (
    <header className="hero" role="banner">
      <div className="hero-bg">
        <img
          src="/hero-bg.png"
          alt="Artemis Consultores — Despacho jurídico especializado en Ley de Segunda Oportunidad en Sevilla"
          width="1440" height="720"
          loading="eager"
          fetchPriority="high"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-gradient" />
      </div>

      <div className="hero-content" ref={contentRef}>
        <div className="hero-badge hero-anim">
          <span className="hero-badge-dot" />
          Más de 15 años en Sevilla
        </div>

        <h1 className="hero-h1 hero-anim">
          Cancela tus deudas<br />
          con la <em>Ley de Segunda<br />Oportunidad</em><br />
          en Sevilla
        </h1>

        <p className="hero-sub hero-anim">
          Cancelamos el 100% de tus deudas de forma legal. Empiezas de cero, sin cargas, con un equipo especializado a tu lado.
        </p>

        <div className="hero-actions hero-anim">
          <a href="#contacto" className="btn-primary">
            Consulta gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="tel:+34633762637" className="hero-phone">
            <span className="hero-phone-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <span>
              <small>Llámanos ahora</small>
              <strong>633 76 26 37</strong>
            </span>
          </a>
        </div>

        <div className="hero-pills hero-anim">
          {['Sin coste inicial', '100% legal', 'Confidencial', 'Respuesta en 24h'].map(p => (
            <span key={p} className="hero-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint hero-anim">
        <div className="scroll-line" />
        <span>Descubre más</span>
      </div>
    </header>
  )
}
