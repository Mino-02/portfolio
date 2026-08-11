# Portafolio UX/UI bilingüe de Sebastián López

Portafolio editorial construido con **Next.js, React y TypeScript**, disponible en español e inglés. La identidad visual combina tipografía de alto contraste, composiciones asimétricas, bloques gráficos y una paleta terrosa para comunicar el cruce entre **investigación, diseño y frontend**.

La experiencia está pensada para dos niveles de lectura:

- Una homepage que un reclutador puede escanear rápidamente.
- Casos de estudio independientes con contexto, rol, resultados y una línea de tiempo del proceso.

## Idiomas y rutas

El sitio usa URLs explícitas y compartibles:

```text
/es
/en
/es/projects
/en/projects
/es/projects/[slug]
/en/projects/[slug]
```

Cuando una persona entra por `/` o por una ruta sin idioma, `src/proxy.ts` selecciona el locale en este orden:

1. Cookie `NEXT_LOCALE`, guardada por el selector de idioma.
2. Encabezado `Accept-Language` del navegador.
3. Español como valor predeterminado.

El selector **ES / EN** conserva la página abierta. Por ejemplo, `/es/projects/campo-claro` cambia a `/en/projects/campo-claro` y mantiene también la ancla actual cuando existe.

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

## Qué incluye

- Homepage responsive en español e inglés.
- Archivo de proyectos localizado.
- Cuatro casos: Campo Claro, Bulletin Builder, Waterpoints Monitoring y Aclímate.
- Seis fases por caso, con narrativa, actividades, decisiones y espacios para evidencia visual.
- Notas internas bilingües para completar información no detallada en la hoja de vida.
- Portadas SVG originales.
- Selector de idioma accesible.
- Metadatos, Open Graph, canonical, `hreflang`, sitemap localizado, robots y manifest.
- CV descargable en español e inglés.
- Header, footer, carga y página 404 localizados.

## Dónde editar el contenido

```text
src/data/portfolio.es.ts        # Perfil y casos en español
src/data/portfolio.en.ts        # Adaptación completa al inglés
src/data/portfolio.types.ts     # Tipos compartidos
src/data/portfolio.ts           # Acceso al contenido por locale
src/i18n/dictionaries.ts        # Navegación, botones, etiquetas y metadata
src/i18n/config.ts              # Locales y helpers de rutas
src/proxy.ts                    # Detección y persistencia del idioma
```

Los slugs, índices, portadas e IDs de las fases deben permanecer iguales en ambos idiomas para que el cambio de idioma preserve el caso abierto. Los hechos, cifras, rol y nivel de responsabilidad también deben ser equivalentes, aunque la redacción no sea una traducción literal.

Cada proyecto contiene:

1. Descubrir / Discover.
2. Definir / Define.
3. Idear / Ideate.
4. Prototipar / Prototype.
5. Validar / Validate.
6. Implementar o entregar / Build or Deliver.

### Notas internas de edición

`editorNote` y `editorChecklist` contienen preguntas para completar información pendiente. `EditorSlot` las muestra únicamente durante desarrollo y devuelve `null` en producción.

Conserva solo afirmaciones que puedas sustentar con evidencia, métricas o una explicación precisa durante una entrevista.

## Añadir imágenes a un caso

Guarda los archivos en una carpeta por proyecto:

```text
public/images/projects/campo-claro/
public/images/projects/bulletin-builder/
public/images/projects/waterpoints-monitoring/
public/images/projects/aclimate-redesign/
```

En la fase correspondiente de `portfolio.es.ts` agrega:

```ts
media: [
  {
    src: "/images/projects/bulletin-builder/usability-findings.webp",
    alt: "Comparación de los hallazgos de usabilidad y las pantallas corregidas.",
    caption: "La primera ronda llevó a simplificar los estados de revisión.",
    width: 1600,
    height: 1000,
  },
],
```

En `portfolio.en.ts`, agrega un `media` equivalente dentro de la traducción de esa misma fase para localizar `alt` y `caption`:

```ts
media: [
  {
    src: "/images/projects/bulletin-builder/usability-findings.webp",
    alt: "Comparison between usability findings and the revised screens.",
    caption: "The first round led to simpler review states.",
    width: 1600,
    height: 1000,
  },
],
```

Recomendaciones:

- Usa WebP o AVIF cuando sea posible.
- Trabaja con un ancho cercano a 1600 px.
- Muestra evolución, hallazgos y decisiones, no solo pantallas finales.
- Anonimiza datos personales y material confidencial.
- Usa el pie de imagen para explicar qué cambió y por qué.
- Describe en el texto alternativo la información útil de la evidencia.

## Foto personal

La portada funciona sin fotografía mediante una ilustración editorial. Para usar una foto, guárdala en `public/images/profile/sebastian.webp` y actualiza `profile.photo` en español. La versión inglesa reutiliza la misma imagen y cambia automáticamente el texto alternativo.

```ts
photo: {
  src: "/images/profile/sebastian.webp",
  alt: "Sebastián López, diseñador UX/UI y desarrollador frontend",
},
```

## CV localizado

```text
public/cv/Sebastian_Lopez_Astudillo_CV_ES.docx
public/cv/Sebastian_Lopez_Astudillo_CV_EN.docx
```

`profile.cv` enlaza el archivo correcto según el idioma. Antes de una postulación, revisa la versión inglesa según el país y la terminología de la oferta. Para producción también puedes añadir PDF accesibles y cambiar ambas rutas.

## Casos en páginas independientes

Los proyectos usan URLs propias, no modales. Así cada caso puede compartirse, tiene metadata específica, admite contenido largo, conserva una navegación predecible y funciona mejor con móvil, teclado y tecnologías de asistencia.

## Dominio y SEO

Copia `.env.example` como `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Revisa:

```text
src/app/[locale]/layout.tsx
src/app/[locale]/opengraph-image.tsx
src/app/sitemap.ts
src/app/robots.ts
src/app/manifest.ts
src/lib/site.ts
```

El sitemap incluye las dos variantes de la homepage, el archivo de proyectos y cada caso. Las páginas publican canonical y alternates para `es-CO`, `en` y `x-default`.

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

Antes de publicar, prueba ambos idiomas con teclado, VoiceOver o NVDA, Lighthouse, axe DevTools y al menos un dispositivo móvil real.

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
