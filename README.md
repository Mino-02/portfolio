# Portafolio UX/UI

Portafolio editorial construido con **Next.js, React y TypeScript**, disponible en español e inglés. La identidad visual combina tipografía de alto contraste, composiciones asimétricas, bloques gráficos y una paleta terrosa para comunicar el cruce entre **investigación, diseño y frontend**.

La experiencia está pensada para dos niveles de lectura:

- Una homepage que un reclutador puede escanear rápidamente.
- Casos de estudio independientes con contexto, rol, resultados y una línea de tiempo del proceso.

## Stack

- Next.js 16.2.12 con App Router.
- React y React DOM 19.2.8.
- TypeScript estricto.
- CSS propio, sin plantilla visual ni librería de componentes.
- Server Components por defecto; JavaScript de cliente solo para el selector de idioma y estados que lo requieren.
- Contenido profesional separado de los componentes para facilitar traducción, revisión y mantenimiento.

## Inicio rápido

Requisitos:

- Node.js 20.9 o superior.
- npm 10 o compatible.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. El proxy te llevará a `/es` o `/en` según la preferencia detectada.

Antes de desplegar:

```bash
npm run lint
npm run typecheck
npm run build
```

## Accesibilidad incorporada

- `lang` correcto en cada locale.
- Enlace para saltar al contenido.
- HTML semántico y jerarquía de encabezados.
- Estados de foco visibles.
- Selector de idioma con nombres accesibles, `hreflang` y estado actual.
- Menú móvil con elementos HTML nativos.
- Enlaces externos anunciados para lectores de pantalla.
- Textos alternativos localizables.
- Contraste alto y áreas táctiles amplias.
- Compensación del header al navegar por anclas.
- Soporte para `prefers-reduced-motion`.
- Sin animaciones automáticas ni contenido parpadeante.

## Estructura principal

```text
src/
  app/
    (root)/                    # Fallback de /
    [locale]/
      layout.tsx
      page.tsx
      loading.tsx
      not-found.tsx
      opengraph-image.tsx
      projects/
        page.tsx
        [slug]/page.tsx
    globals.css
    sitemap.ts
    robots.ts
    manifest.ts
  components/
    case-study-process.tsx
    editor-slot.tsx
    hero-artifact.tsx
    language-switcher.tsx
    project-card.tsx
    section-heading.tsx
    site-footer.tsx
    site-header.tsx
  data/
    portfolio.es.ts
    portfolio.en.ts
    portfolio.ts
    portfolio.types.ts
  i18n/
    config.ts
    dictionaries.ts
  lib/site.ts
  proxy.ts
public/
  art/
  cv/
  images/
```

## Checklist antes de publicar

- Completar o retirar todas las notas internas en ambos idiomas.
- Añadir evidencia visual real en cada caso.
- Confirmar participantes, métodos, métricas y tecnologías exactas.
- Diferenciar tu aporte del trabajo colectivo.
- Revisar la adaptación inglesa con terminología consistente.
- Obtener permisos para capturas, fotografías y datos.
- Probar enlaces externos y ambos CV.
- Configurar dominio y metadata social.
- Revisar `/es`, `/en` y cada caso con teclado, lector de pantalla y móvil.
