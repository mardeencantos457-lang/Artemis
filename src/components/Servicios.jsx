import { useReveal } from '../hooks/useReveal'
import './Servicios.css'

const CARDS = [
  {
    cls: 'scard-featured',
    icon: '⚖️',
    badge: 'Más solicitado',
    title: 'Ley de Segunda Oportunidad',
    desc: 'La solución legal para cancelar todas tus deudas para siempre. Más de 15 años ofreciendo soluciones adaptadas a cada caso en Sevilla.',
    list: ['Cancelación total de deudas', 'Levantamiento de embargos', 'Suspensión de demandas', 'Salida de listas de morosos', 'Préstamos y tarjetas incluidos'],
    link: 'Quiero acogerme',
    span2: true,
  },
  {
    cls: 'scard-orange',
    icon: '👨‍👩‍👧',
    badge: 'Particulares',
    title: 'Para personas físicas',
    desc: 'Trabajadores, desempleados y pensionistas sin capacidad de pago. Cancelamos préstamos, tarjetas y minicréditos al 100%.',
    link: 'Me interesa',
  },
  {
    cls: 'scard-light',
    icon: '🏗️',
    title: 'Autónomos y Empresas',
    desc: 'Cancelación al 100% mediante Ley de Segunda Oportunidad o concurso de acreedores. Planes de pago a 5 años.',
    link: 'Me interesa',
  },
  {
    cls: 'scard-light',
    icon: '🏛️',
    title: 'Deudas con Hacienda y S.S.',
    desc: 'Cancelamos hasta 10.000 € de deudas con Hacienda y Seguridad Social. Levantamos embargos y suspendemos ejecuciones.',
    link: 'Más información',
  },
  {
    cls: 'scard-cream',
    icon: '📋',
    title: '¿No sabes cuál te aplica?',
    desc: 'Analizamos tu caso gratis y te decimos la mejor solución. Sin compromiso, en menos de 24 horas.',
    link: 'Consulta gratuita',
  },
]

export default function Servicios() {
  const headerRef = useReveal()
  const gridRef = useReveal(100)

  return (
    <section className="section servicios" id="servicios" aria-label="Servicios">
      <div className="section-inner">
        <div className="servicios-header reveal" ref={headerRef}>
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Especialidades</span>
          </div>
          <h2 className="section-title">
            Soluciones para <em>cancelar deudas</em> en Sevilla
          </h2>
        </div>

        <div className="servicios-grid reveal" ref={gridRef}>
          {CARDS.map((card, i) => (
            <article key={i} className={`scard ${card.cls} ${card.span2 ? 'span2' : ''}`}>
              <div className="scard-bg-deco" aria-hidden="true">2ª</div>
              <div className="scard-icon">{card.icon}</div>
              {card.badge && <span className="scard-badge">{card.badge}</span>}
              <h3 className="scard-title">{card.title}</h3>
              <p className="scard-desc">{card.desc}</p>
              {card.list && (
                <ul className="scard-list">
                  {card.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              <a href="#contacto" className="scard-link">
                {card.link}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
