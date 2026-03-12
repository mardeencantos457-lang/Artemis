import { useEffect } from 'react'

const SCHEMA_LEGAL = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Artemis Consultores",
  "description": "Especialistas en Ley de Segunda Oportunidad en Sevilla, Madrid, Barcelona y toda España. Cancelación de deudas al 100%.",
  "url": "https://leysegundaoportunidadespaa.com",
  "logo": "https://leysegundaoportunidadespaa.com/logo.png",
  "telephone": "+34633762637",
  "email": "info@artemisconsultores.es",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. Jaén, 2, Piso 2 Puerta 2",
    "addressLocality": "Sevilla",
    "postalCode": "41001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.3891",
    "longitude": "-5.9845"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Sevilla" },
    { "@type": "City", "name": "Madrid" },
    { "@type": "City", "name": "Barcelona" },
    { "@type": "City", "name": "Málaga" },
    { "@type": "City", "name": "Cádiz" },
    { "@type": "City", "name": "Valencia" },
    { "@type": "Country", "name": "España" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de cancelación de deudas",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ley de Segunda Oportunidad" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concurso de acreedores" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exoneración del Pasivo Insatisfecho (EPI)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Levantamiento de embargos" } }
    ]
  },
  "priceRange": "Consulta gratuita",
  "sameAs": [
    "https://www.facebook.com/artemisconsultores",
    "https://www.instagram.com/artemisconsultores",
    "https://www.linkedin.com/company/artemisconsultores"
  ]
}

const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la Ley de Segunda Oportunidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Ley de Segunda Oportunidad (Ley 25/2015) permite a personas físicas, autónomos y pequeñas empresas en situación de insolvencia cancelar el 100% de sus deudas de forma legal ante el juez, obteniendo la Exoneración del Pasivo Insatisfecho (EPI)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda el proceso en Sevilla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El proceso en el Juzgado de lo Mercantil de Sevilla suele resolverse entre 6 y 12 meses desde la presentación de la solicitud."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se pueden cancelar deudas con Hacienda y Seguridad Social?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, mediante la Ley de Segunda Oportunidad se pueden cancelar hasta 10.000 € de deudas con Hacienda y la Seguridad Social, además de levantar embargos y suspender ejecuciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden acogerse los autónomos a la Ley de Segunda Oportunidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, los autónomos son uno de los principales beneficiarios. Pueden cancelar deudas con proveedores, Hacienda, Seguridad Social, préstamos y tarjetas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa con mi vivienda habitual si me acojo a la Ley de Segunda Oportunidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En muchos casos es posible conservar la vivienda habitual mediante un plan de pagos de hasta 5 años. Cada situación es diferente y se analiza de forma personalizada y gratuita."
      }
    }
  ]
}

const SCHEMA_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://leysegundaoportunidadespaa.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ley de Segunda Oportunidad en Sevilla",
      "item": "https://leysegundaoportunidadespaa.com/ley-segunda-oportunidad-sevilla/"
    }
  ]
}

const SCHEMA_WEBPAGE = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Ley de Segunda Oportunidad en Sevilla | Artemis Consultores",
  "description": "Cancela el 100% de tus deudas con la Ley de Segunda Oportunidad en Sevilla.",
  "url": "https://leysegundaoportunidadespaa.com/ley-segunda-oportunidad-sevilla/",
  "inLanguage": "es-ES",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Artemis Consultores",
    "url": "https://leysegundaoportunidadespaa.com"
  },
  "about": { "@type": "Thing", "name": "Ley de Segunda Oportunidad" },
  "mainEntity": { "@id": "https://leysegundaoportunidadespaa.com/#legalservice" }
}

export default function SEOHead() {
  useEffect(() => {
    const injected = []

    const injectSchema = (data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
      injected.push(script)
    }

    const setMeta = (attrs) => {
      const el = document.createElement('meta')
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      document.head.appendChild(el)
      injected.push(el)
    }

    const setLink = (attrs) => {
      const el = document.createElement('link')
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      document.head.appendChild(el)
      injected.push(el)
    }

    document.title = 'Ley de Segunda Oportunidad en Sevilla | Artemis Consultores'

    // Core SEO
    setMeta({ name: 'description', content: 'Cancela el 100% de tus deudas con la Ley de Segunda Oportunidad en Sevilla. Artemis Consultores, +15 años de experiencia. Primera consulta gratuita. Llama: 633 76 26 37.' })
    setMeta({ name: 'keywords', content: 'ley segunda oportunidad Sevilla, ley segunda oportunidad Madrid, ley segunda oportunidad Barcelona, cancelar deudas Sevilla, abogados deudas España, exoneración pasivo insatisfecho, concurso acreedores Sevilla' })
    setMeta({ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' })
    setMeta({ name: 'author', content: 'Artemis Consultores' })
    setMeta({ name: 'geo.region', content: 'ES-SE' })
    setMeta({ name: 'geo.placename', content: 'Sevilla' })
    setMeta({ name: 'geo.position', content: '37.3891;-5.9845' })
    setMeta({ name: 'ICBM', content: '37.3891, -5.9845' })

    // Viewport & Mobile
    setMeta({ name: 'theme-color', content: '#0a0f2e' })
    setMeta({ name: 'mobile-web-app-capable', content: 'yes' })
    setMeta({ name: 'apple-mobile-web-app-capable', content: 'yes' })
    setMeta({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' })

    // Open Graph
    setMeta({ property: 'og:title', content: 'Ley de Segunda Oportunidad en Sevilla | Artemis Consultores' })
    setMeta({ property: 'og:description', content: 'Cancela el 100% de tus deudas con la Ley de Segunda Oportunidad en Sevilla. +15 años de experiencia. Primera consulta gratuita.' })
    setMeta({ property: 'og:type', content: 'website' })
    setMeta({ property: 'og:locale', content: 'es_ES' })
    setMeta({ property: 'og:url', content: 'https://leysegundaoportunidadespaa.com/ley-segunda-oportunidad-sevilla/' })
    setMeta({ property: 'og:site_name', content: 'Artemis Consultores' })
    setMeta({ property: 'og:image', content: 'https://leysegundaoportunidadespaa.com/hero-bg.webp' })
    setMeta({ property: 'og:image:width', content: '1440' })
    setMeta({ property: 'og:image:height', content: '720' })
    setMeta({ property: 'og:image:alt', content: 'Artemis Consultores — Ley de Segunda Oportunidad en Sevilla' })

    // Twitter Card
    setMeta({ name: 'twitter:card', content: 'summary_large_image' })
    setMeta({ name: 'twitter:title', content: 'Ley de Segunda Oportunidad en Sevilla | Artemis Consultores' })
    setMeta({ name: 'twitter:description', content: 'Cancela el 100% de tus deudas. Consulta gratuita.' })
    setMeta({ name: 'twitter:image', content: 'https://leysegundaoportunidadespaa.com/hero-bg.webp' })

    // Canonical + Hreflang
    setLink({ rel: 'canonical', href: 'https://leysegundaoportunidadespaa.com/ley-segunda-oportunidad-sevilla/' })
    setLink({ rel: 'alternate', hreflang: 'es', href: 'https://leysegundaoportunidadespaa.com/ley-segunda-oportunidad-sevilla/' })
    setLink({ rel: 'alternate', hreflang: 'x-default', href: 'https://leysegundaoportunidadespaa.com/' })

    // Sitemap preload
    setLink({ rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' })

    // Schema.org
    injectSchema(SCHEMA_LEGAL)
    injectSchema(SCHEMA_FAQ)
    injectSchema(SCHEMA_BREADCRUMB)
    injectSchema(SCHEMA_WEBPAGE)

    return () => injected.forEach(el => el?.remove())
  }, [])

  return null
}
