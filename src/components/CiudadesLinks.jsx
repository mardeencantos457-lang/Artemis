import { useReveal } from '../hooks/useReveal'
import './CiudadesLinks.css'

const CIUDADES_TIER1 = [
  { city: 'Sevilla', href: '/ley-segunda-oportunidad-sevilla/', desc: 'Juzgado de lo Mercantil nº1', active: true },
  { city: 'Madrid', href: '/ley-segunda-oportunidad-madrid/', desc: 'Juzgados Mercantiles de Madrid' },
  { city: 'Barcelona', href: '/ley-segunda-oportunidad-barcelona/', desc: 'Juzgados Mercantiles de Barcelona' },
]

const CIUDADES_TIER2 = [
  { city: 'Málaga', href: '/ley-segunda-oportunidad-malaga/' },
  { city: 'Cádiz', href: '/ley-segunda-oportunidad-cadiz/' },
  { city: 'Valencia', href: '/ley-segunda-oportunidad-valencia/' },
  { city: 'Bilbao', href: '/ley-segunda-oportunidad-bilbao/' },
  { city: 'Zaragoza', href: '/ley-segunda-oportunidad-zaragoza/' },
  { city: 'Alicante', href: '/ley-segunda-oportunidad-alicante/' },
  { city: 'Granada', href: '/ley-segunda-oportunidad-granada/' },
  { city: 'Córdoba', href: '/ley-segunda-oportunidad-cordoba/' },
  { city: 'Murcia', href: '/ley-segunda-oportunidad-murcia/' },
  { city: 'Palma', href: '/ley-segunda-oportunidad-palma/' },
  { city: 'Valladolid', href: '/ley-segunda-oportunidad-valladolid/' },
  { city: 'Vigo', href: '/ley-segunda-oportunidad-vigo/' },
]

const SERVICIOS_LINKS = [
  { label: 'Cancelar deudas en España', href: '/cancelar-deudas-espana/' },
  { label: 'Abogados deudas Sevilla', href: '/abogados-deudas-sevilla/' },
  { label: 'Concurso de acreedores', href: '/concurso-acreedores-sevilla/' },
  { label: 'Exoneración Pasivo Insatisfecho', href: '/exoneracion-pasivo-insatisfecho/' },
  { label: 'Cancelar deudas con Hacienda', href: '/cancelar-deudas-hacienda/' },
  { label: 'Cancelar deudas autónomos', href: '/cancelar-deudas-autonomos/' },
  { label: 'Levantamiento de embargo', href: '/levantamiento-embargo/' },
]

export default function CiudadesLinks() {
  const headerRef = useReveal()
  const tier1Ref = useReveal(80)
  const tier2Ref = useReveal(160)
  const serviciosRef = useReveal(200)

  return (
    <section
      className="section ciudades-section"
      id="ciudades"
      aria-label="Ley de Segunda Oportunidad en toda España"
    >
      <div className="section-inner">

        <div className="ciudades-header reveal" ref={headerRef}>
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Cobertura nacional</span>
          </div>
          <h2 className="section-title">
            Ley de Segunda Oportunidad<br/>
            en toda <em>España</em>
          </h2>
          <p className="section-sub">
            Artemis Consultores gestiona procedimientos en los principales juzgados
            de lo mercantil de España. Selecciona tu ciudad:
          </p>
        </div>

        {/* Tier 1 — Main cities */}
        <div className="ciudades-tier1 reveal" ref={tier1Ref}>
          {CIUDADES_TIER1.map(c => (
            <a
              key={c.city}
              href={c.href}
              className={`ciudad-card-main ${c.active ? 'active' : ''}`}
              aria-label={`Ley de Segunda Oportunidad en ${c.city}`}
            >
              <div className="ciudad-card-main-inner">
                {c.active && <span className="ciudad-badge">Sede principal</span>}
                <div className="ciudad-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>
                  Ley de Segunda Oportunidad<br/>
                  <span>en {c.city}</span>
                </h3>
                <p>{c.desc}</p>
                <span className="ciudad-link">
                  Ver más
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Tier 2 — All cities grid */}
        <div className="ciudades-tier2-wrap reveal" ref={tier2Ref}>
          <p className="ciudades-tier2-label">También en:</p>
          <nav aria-label="Ciudades de España">
            <ul className="ciudades-tier2">
              {CIUDADES_TIER2.map(c => (
                <li key={c.city}>
                  <a href={c.href} title={`Ley de Segunda Oportunidad en ${c.city}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {c.city}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Internal service links */}
        <div className="servicios-links-wrap reveal" ref={serviciosRef}>
          <p className="servicios-links-label">Servicios relacionados:</p>
          <nav aria-label="Servicios de cancelación de deudas">
            <ul className="servicios-links">
              {SERVICIOS_LINKS.map(s => (
                <li key={s.label}>
                  <a href={s.href}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </section>
  )
}
