import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Requisitos.css'

const ITEMS = [
  {
    num: '01',
    title: 'Deudor de buena fe',
    desc: 'No haber cometido delitos económicos en los últimos 10 años y actuar de buena fe durante todo el proceso.',
  },
  {
    num: '02',
    title: 'No acogerse en los últimos 5 años',
    desc: 'No haberse acogido a la Ley de Segunda Oportunidad en los últimos cinco años anteriores a la solicitud.',
  },
  {
    num: '03',
    title: 'Sin sanciones muy graves',
    desc: 'No haber recibido sanciones muy graves de Hacienda o la Seguridad Social. De haberlas, deberán abonarse antes.',
  },
]

export default function Requisitos() {
  const [active, setActive] = useState(0)
  const leftRef = useReveal()
  const rightRef = useReveal(150)

  return (
    <section className="section requisitos" id="requisitos" aria-label="Requisitos">
      <div className="section-inner req-grid">

        <div className="reveal" ref={leftRef}>
          <div className="section-eyebrow">
            <div className="eyebrow-line" style={{ background: '#f0a96a' }} />
            <span className="eyebrow-text" style={{ color: '#f0a96a' }}>¿Puedo acogerme?</span>
          </div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Requisitos para acogerse a la<br/>
            <em>Ley de Segunda Oportunidad</em>
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.52)', maxWidth: '480px', marginBottom: '36px' }}>
            Descubre si cumples las condiciones para empezar de nuevo sin deudas en Sevilla
          </p>
          <div className="req-items" role="list">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className={`req-item ${active === i ? 'active' : ''}`}
                role="listitem"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
              >
                <div className="req-num">{item.num}</div>
                <div className="req-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="req-cta reveal" ref={rightRef}>
          <div className="req-cta-deco" aria-hidden="true" />
          <h3>¿Cumples los requisitos?</h3>
          <p>Analizamos tu caso de forma gratuita y confidencial. Te respondemos en menos de 24 horas con la mejor solución.</p>
          <a href="tel:+34633762637" className="req-phone">633 76 26 37</a>
          <a href="#contacto" className="btn-white">Solicitar análisis gratuito</a>
        </div>

      </div>
    </section>
  )
}
