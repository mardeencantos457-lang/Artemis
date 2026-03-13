import { useReveal } from '../hooks/useReveal'
import './About.css'

const STATS = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '10k€', label: 'Deudas Hacienda / S.S.' },
  { value: '5', label: 'Años máx. plan de pago' },
  { value: '24h', label: 'Respuesta garantizada' },
]

const CHECKLIST = [
  'Cancelar tus deudas al 100% si no puedes pagar',
  'Planes de pago de hasta cinco años para conservar tus bienes',
  'Se levantan embargos y se suspenden demandas desde el inicio',
  'Cancelamos hasta 10.000 € de deudas con Hacienda y Seguridad Social',
  'Préstamos, minicréditos y tarjetas revolving incluidos',
  'Válido para particulares, autónomos y empresas en Sevilla',
]

export default function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <section className="section about" id="sobre" aria-label="Sobre la Ley de Segunda Oportunidad">
      <div className="section-inner about-grid">

        <div className="about-visual reveal" ref={ref1}>
          <div className="about-big-num" aria-hidden="true">2ª</div>

          <div className="about-photo-card">
            <img
              src="/about-bg.png"
              alt="Artemis Consultores especialistas en cancelación de deudas en Sevilla"
              width="560"
              height="320"
              loading="lazy"
            />
            <div className="about-photo-overlay">
              <span className="about-quote-mark" aria-hidden="true">"</span>
              <p>La Ley de Segunda Oportunidad te permite cancelar todas tus deudas para siempre.</p>
              <cite>— Artemis Consultores, Sevilla</cite>
            </div>
          </div>

          <div className="about-stats">
            {STATS.map(s => (
              <div key={s.value} className="about-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-content reveal" ref={ref2}>
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">¿Qué es la Ley?</span>
          </div>
          <h2 className="section-title">
            Una segunda oportunidad real para <em>empezar de cero</em> en Sevilla
          </h2>
          <p className="about-p">
            La Ley de Segunda Oportunidad, regulada en España desde 2015, permite a personas físicas, autónomos y empresas en situación de insolvencia <strong>cancelar el 100% de sus deudas</strong> de forma legal y definitiva.
          </p>
          <p className="about-p">
            En Artemis Consultores diseñamos la mejor estrategia legal para tu caso, gestionamos todo el procedimiento, negociamos con los acreedores y levantamos embargos — para que puedas empezar de nuevo.
          </p>
          <ul className="about-checklist" aria-label="Beneficios principales">
            {CHECKLIST.map((item, i) => (
              <li key={i}>
                <span className="check-icon" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn-dark">
            Consulta gratuita sin compromiso
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
