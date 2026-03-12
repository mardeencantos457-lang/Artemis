import { useReveal } from '../hooks/useReveal'
import './Proceso.css'

const STEPS = [
  {
    num: '01',
    title: 'Análisis gratuito',
    desc: 'Estudiamos tu caso de forma personalizada y diseñamos la mejor estrategia legal para cancelar o reestructurar tus deudas. Sin coste y sin compromiso.',
  },
  {
    num: '02',
    title: 'Gestión completa',
    desc: 'Gestionamos todo el procedimiento: desde la solicitud hasta la resolución, negociando con acreedores y levantando embargos en tu nombre.',
  },
  {
    num: '03',
    title: 'Libertad financiera',
    desc: 'Empiezas de nuevo sin deudas en Sevilla. Te acompañamos en cada fase para asegurar un resultado claro y efectivo para tu futuro.',
  },
]

export default function Proceso() {
  const headerRef = useReveal()

  return (
    <section className="section proceso" id="proceso" aria-label="Proceso">
      <div className="section-inner">
        <div className="proceso-header reveal" ref={headerRef}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Cómo funciona</span>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Tres pasos hacia tu <em>libertad financiera</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Un proceso claro, transparente y personalizado de principio a fin
          </p>
        </div>

        <div className="proceso-steps">
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} delay={i} />
          ))}
        </div>

        <div className="proceso-connector" aria-hidden="true">
          <div className="connector-line" />
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, delay }) {
  const ref = useReveal(delay * 120)
  return (
    <div className={`pstep reveal delay-${delay + 1}`} ref={ref}>
      <div className="pstep-num">{step.num}</div>
      <h3 className="pstep-title">{step.title}</h3>
      <p className="pstep-desc">{step.desc}</p>
    </div>
  )
}
