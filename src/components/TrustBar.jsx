import './TrustBar.css'

const ITEMS = [
  { icon: '🏅', text: '+15 años de experiencia' },
  { icon: '✅', text: 'Cancelación al 100%' },
  { icon: '🏛️', text: 'Deudas con Hacienda incluidas' },
  { icon: '🔓', text: 'Levantamiento de embargos' },
  { icon: '📞', text: 'Consulta gratuita y confidencial' },
]

export default function TrustBar() {
  return (
    <div className="trust-bar" role="complementary" aria-label="Credenciales">
      {ITEMS.map((item, i) => (
        <div key={i} className="trust-bar-item">
          <span aria-hidden="true" className="trust-icon">{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  )
}
