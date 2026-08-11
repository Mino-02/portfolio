# Validación del proyecto

Fecha de revisión: 11 de agosto de 2026.

## Comprobaciones realizadas

- Compilación de todos los archivos TS/TSX con TypeScript 5.8 en modo estricto mediante `tsconfig.validate.json` y declaraciones locales de compatibilidad para React y Next.js.
- Paridad estructural entre los diccionarios de interfaz `es` y `en`.
- Verificación de dos locales, cuatro proyectos por locale y 24 fases por locale.
- Comprobación de slugs, índices, portadas, acentos e IDs de fase equivalentes entre español e inglés.
- Verificación de que el cambio `/es/projects/campo-claro` → `/en/projects/campo-claro` conserva la ruta.
- Confirmación de que cada locale enlaza su CV correspondiente.
- Análisis de `src/app/globals.css` con `tinycss2`: 319 reglas y cero errores de nivel superior.
- Validación XML de los cuatro SVG de portada.
- Validación ZIP/OOXML de ambos archivos DOCX.
- Comparación SHA-256 del CV español público con el archivo original: copias idénticas.
- Render del CV inglés mediante LibreOffice: dos páginas Letter, sin texto cortado, solapamientos ni glifos faltantes; ambas páginas se revisaron visualmente.
- Revisión de contraste de las combinaciones principales: entre 4,66:1 y 17,19:1.
- Búsqueda de enlaces internos no localizados y textos de interfaz en español fuera de los archivos de contenido/diccionario.

## Limitación del entorno

El registro de npm no estuvo disponible desde este entorno. `npm install` agotó el tiempo de espera después de dos intentos de descarga de `next@16.2.12`; el registro de npm reportó `EAI_AGAIN`. Por esa razón no fue posible descargar `node_modules` ni ejecutar aquí el lint o el build reales de Next.js.

La verificación de TypeScript incluida no sustituye el build del framework; sirve para detectar errores de sintaxis, tipos propios, imports internos y discrepancias de la arquitectura localizada antes de instalar dependencias.

## Verificación local obligatoria

Después de descomprimir:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev
```

Revisa manualmente:

```text
/es
/en
/es/projects
/en/projects
/es/projects/campo-claro
/en/projects/campo-claro
```

Luego prueba el selector desde la homepage, el archivo de proyectos y los cuatro casos; confirma ambos CV, canonical, `hreflang`, `<html lang>`, metadata social, navegación por teclado y comportamiento móvil.

Cuando npm genere `package-lock.json`, inclúyelo en el repositorio para fijar las dependencias resueltas.
