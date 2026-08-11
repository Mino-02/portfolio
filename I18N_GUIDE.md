# Guía de internacionalización

El portafolio usa internacionalización por subruta con dos locales:

```ts
export const locales = ["es", "en"] as const;
export const defaultLocale = "es";
```

Esto produce URLs explícitas como `/es/projects/campo-claro` y `/en/projects/campo-claro`.

## Flujo de una visita

1. Una URL localizada, como `/en/projects`, se renderiza directamente en inglés.
2. Una URL sin prefijo pasa por `src/proxy.ts`.
3. El proxy busca la cookie `NEXT_LOCALE`.
4. Si no existe, interpreta `Accept-Language` y respeta sus prioridades `q`.
5. Si no encuentra un locale soportado, usa español.
6. El selector `ES / EN` guarda la preferencia y conserva la ruta equivalente.
7. `src/app/(root)/page.tsx` es un fallback a `/es` cuando el proxy no interviene.

## Responsabilidades por archivo

### Configuración y rutas

```text
src/i18n/config.ts
```

Define locales, etiquetas visibles, códigos HTML y helpers para construir o intercambiar rutas.

### Textos de interfaz

```text
src/i18n/dictionaries.ts
```

Contiene navegación, botones, etiquetas estructurales, metadata, mensajes de carga, 404 y textos del footer. Los objetos `es` y `en` deben conservar la misma forma.

### Contenido profesional

```text
src/data/portfolio.es.ts
src/data/portfolio.en.ts
```

Contienen perfil, experiencia, formación, capacidades, proyectos y fases. La versión inglesa reutiliza campos invariantes del español —slugs, portadas, acentos e IDs— y aplica una traducción editorial a la narrativa.

### Tipos y acceso

```text
src/data/portfolio.types.ts
src/data/portfolio.ts
```

Los tipos compartidos mantienen la estructura. `getPortfolio(locale)` y `getProjectBySlug(locale, slug)` exponen los datos correctos a las rutas.

### Rutas y documento HTML

```text
src/app/[locale]/...
```

El layout valida el locale, genera metadata localizada, establece `<html lang>` y entrega el idioma al header y al footer.

## Editar una traducción

Para un botón o una etiqueta, actualiza la misma clave dentro de `es` y `en` en `dictionaries.ts`.

Para información profesional, edita `portfolio.es.ts` y su equivalente en `portfolio.en.ts`.

Mantén iguales:

- `slug` e `index`.
- `accent` y `cover`.
- IDs y orden de las fases.
- URLs externas.
- Cifras, hechos y nivel de certeza.

Localiza:

- Títulos, descripciones y narrativa.
- Métodos cuando exista una denominación natural.
- Etiquetas de enlaces.
- Notas internas.
- `alt` y `caption` de cada imagen.

## Añadir un proyecto

1. Crea el proyecto completo en `portfolio.es.ts`.
2. Agrega una entrada con el mismo slug en `projectTranslations` de `portfolio.en.ts`.
3. Traduce las seis fases conservando sus IDs.
4. Añade portadas y evidencia en `public/`.
5. Ejecuta la validación de datos y el build.

## Añadir un tercer idioma

Ejemplo: portugués `pt`.

1. Añade `pt` a `locales` y `localeLabels`.
2. Agrega un diccionario `pt` completo.
3. Crea `portfolio.pt.ts`.
4. Añade el portafolio al mapa de `src/data/portfolio.ts`.
5. Agrega su CV localizado.
6. Amplía canonical, `hreflang`, sitemap y Open Graph.
7. Revisa el selector y la detección del proxy.
8. Ejecuta lint, typecheck y build.

## Criterios de calidad

- Adapta el texto al lenguaje de reclutamiento; no traduzcas palabra por palabra.
- Mantén la primera persona y el alcance real de tu contribución.
- No inventes métodos, cifras ni resultados.
- Conserva nombres propios, nombres de producto y tecnologías.
- Usa terminología UX consistente.
- Revisa que los textos largos no rompan cards, botones o navegación móvil.
- Comprueba que el cambio de idioma nunca lleve a una ruta inexistente.

## Validación manual

```text
/es
/en
/es/projects
/en/projects
/es/projects/campo-claro
/en/projects/campo-claro
```

Prueba el selector desde la homepage, el archivo y los cuatro casos. Revisa también ambos CV, `<html lang>`, canonical, `hreflang`, metadata social y la persistencia de `NEXT_LOCALE`.
