import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contacto.css'

const CONTACT_CARDS = [
  { icon: '📞', label: 'Teléfono', value: '633 76 26 37', href: 'tel:+34633762637' },
  { icon: '📍', label: 'Dirección en Sevilla', value: 'C. Jaén, 2, Piso 2 Puerta 2 — 41001 Sevilla', href: null },
  { icon: '🕐', label: 'Horario de atención', value: 'Lunes a Viernes: 9:00 – 20:00', href: null },
  { icon: '💬', label: 'WhatsApp', value: 'Escríbenos directamente', href: 'https://wa.me/34633762637' },
]

export default function Contacto() {
  const [status, setStatus] = useState(null)
  const leftRef = useReveal()
  const rightRef = useReveal(150)

  const handleSubmit = (e) => {
    e.preventDefault()
    const btn = e.target.querySelector('.btn-submit')
    btn.textContent = 'Enviando...'
    btn.disabled = true
    setTimeout(() => {
      setStatus('success')
      btn.textContent = 'Solicitar consulta gratuita →'
      btn.disabled = false
      e.target.reset()
    }, 1200)
  }

  return (
    <section className="section contacto" id="contacto" aria-label="Formulario de contacto">
      <div className="section-inner contacto-grid">

        <div className="contacto-info reveal" ref={leftRef}>
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Contacto</span>
          </div>
          <h2 className="section-title">
            Consulta gratuita<br/>en <em>Sevilla</em>
          </h2>
          <p className="contacto-sub">
            Uno de nuestros especialistas en la Ley de Segunda Oportunidad analizará tu caso de forma personalizada y te llamará en menos de 24 horas con la solución más adecuada.
          </p>
          <div className="contact-cards">
            {CONTACT_CARDS.map((c, i) => (
              <div key={i} className="ccard">
                <div className="ccard-icon">{c.icon}</div>
                <div>
                  <strong>{c.label}</strong>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{c.value}</a>
                    : <span>{c.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-box reveal" ref={rightRef}>
          <h2>Escríbenos ahora</h2>
          <p>Analizamos tu caso gratis. Respuesta en menos de 24 horas.</p>

          <form onSubmit={handleSubmit} aria-label="Formulario de consulta gratuita" noValidate>
            <div className="form-row">
              <div className="fgroup">
                <label htmlFor="name">Nombre *</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre completo" required autoComplete="name" />
              </div>
              <div className="fgroup">
                <label htmlFor="phone">Teléfono *</label>
                <input type="tel" id="phone" name="phone" placeholder="6XX XXX XXX" required autoComplete="tel" />
              </div>
            </div>
            <div className="fgroup">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required autoComplete="email" />
            </div>
            <div className="fgroup">
              <label htmlFor="deuda">Importe aproximado de deuda</label>
              <select id="deuda" name="deuda">
                <option value="">Selecciona un rango</option>
                <option value="menos10k">Menos de 10.000 €</option>
                <option value="10k-30k">Entre 10.000 € y 30.000 €</option>
                <option value="30k-60k">Entre 30.000 € y 60.000 €</option>
                <option value="mas60k">Más de 60.000 €</option>
              </select>
            </div>
            <div className="fgroup">
              <label htmlFor="message">Cuéntanos tu situación</label>
              <textarea id="message" name="message" rows={4} placeholder="Describe brevemente tu situación…" />
            </div>
            <div className="form-privacy">
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy">
                He leído y acepto la <a href="/politica-de-privacidad/" target="_blank" rel="noopener">Política de Privacidad</a>
              </label>
            </div>
            <button type="submit" className="btn-submit">
              Solicitar consulta gratuita →
            </button>
            {status === 'success' && (
              <div className="form-success" role="alert">
                ✓ Consulta recibida. Te llamamos en menos de 24 horas.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}
