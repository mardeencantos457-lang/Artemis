# Artemis Consultores — Vite + React

Site migrado do WordPress para Vite + React com melhor performance e SEO.

## Stack
- **Vite** — build ultra-rápido
- **React 18** — componentes reutilizáveis
- **CSS Modules** — sem dependências de CSS-in-JS
- **Vercel** — deploy automático via GitHub

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Build para produção

```bash
npm run build
npm run preview
```

## Deploy no Vercel

### Opção 1 — Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opção 2 — Via GitHub Actions (automático)

1. Faça push para o repositório GitHub
2. Vá em **Vercel Dashboard** → Import Project → conecte o repositório
3. Configure as variáveis no GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

O deploy acontece automaticamente a cada push na branch `main`.

## Estrutura do projeto

```
src/
├── components/
│   ├── Hero.jsx / Hero.css
│   ├── TrustBar.jsx / TrustBar.css
│   ├── About.jsx / About.css
│   ├── Proceso.jsx / Proceso.css
│   ├── Servicios.jsx / Servicios.css
│   ├── Requisitos.jsx / Requisitos.css
│   ├── FAQ.jsx / FAQ.css
│   ├── Contacto.jsx / Contacto.css
│   └── SEOHead.jsx
├── hooks/
│   └── useReveal.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## SEO implementado

- ✅ Title e meta description otimizados
- ✅ Open Graph tags
- ✅ Schema.org `LegalService` + `FAQPage`
- ✅ Canonical URL
- ✅ Atributos `aria-label` e acessibilidade
- ✅ `fetchpriority="high"` na imagem hero
- ✅ Animações via IntersectionObserver (sem layout shift)
