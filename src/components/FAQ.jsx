import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './FAQ.css'

const FAQS = [
  {
    q: '¿Qué es la Ley de Segunda Oportunidad?',
    a: 'La Ley de Segunda Oportunidad (Ley 25/2015) permite a personas físicas, autónomos y pequeñas empresas en situación de insolvencia cancelar el 100% de sus deudas de forma legal ante el juez, obteniendo la Exoneración del Pasivo Insatisfecho (EPI) y comenzar de nuevo sin cargas económicas.',
  },
  {
    q: '¿Cuánto tarda el proceso en Sevilla?',
    a: 'El proceso en el Juzgado de lo Mercantil de Sevilla suele resolverse entre 6 y 12 meses desde la presentación de la solicitud, dependiendo de la carga del juzgado y la complejidad del caso. Nuestro equipo te acompaña durante todo el procedimiento.',
  },
  {
    q: '¿Se pueden cancelar deudas con Hacienda y Seguridad Social?',
    a: 'Sí. Mediante la Ley de Segunda Oportunidad es posible cancelar hasta 10.000 € de deudas públicas con Hacienda y la Seguridad Social, además de levantar embargos y suspender ejecuciones en curso.',
  },
  {
    q: '¿Pueden acogerse los autónomos?',
    a: 'Sí, los autónomos son uno de los principales beneficiarios de esta ley. Pueden cancelar deudas con proveedores, Hacienda, Seguridad Social, préstamos y tarjetas, y obtener planes de pago de hasta 5 años para conservar su actividad.',
  },
  {
    q: '¿Qué pasa con mi vivienda habitual?',
    a: 'En muchos casos es posible conservar la vivienda habitual mediante un plan de pagos de hasta 5 años. Cada situación es diferente; por eso analizamos tu caso de forma gratuita y personalizada para encontrar la mejor solución.',
  },
  {
    q: '¿Cuánto cuesta el servicio de Artemis Consultores?',
    a: 'La primera consulta es totalmente gratuita y sin compromiso. Si decidimos trabajar juntos, los honorarios se ajustan a cada caso con total transparencia desde el primer momento, sin sorpresas. Contamos con planes accesibles para adaptarnos a tu situación.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const headerRef = useReveal()
  const listRef = useReveal(100)

  const toggle = (i) => setOpen(open === i ? -1 : i)

  return (
    <section className="section faq-section" id="faq" aria-label="Preguntas frecuentes">
      <div className="section-inner">
        <div className="faq-header reveal" ref={headerRef}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />
            <span className="eyebrow-text">FAQ</span>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Preguntas frecuentes sobre la<br/>
            <em>Ley de Segunda Oportunidad</em> en Sevilla
          </h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Resolvemos las dudas más comunes antes de tu consulta gratuita
          </p>
        </div>

        <div className="faq-list reveal" ref={listRef}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12" className="faq-horiz"/>
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
