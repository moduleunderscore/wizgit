# Hangar1 — Programa anual de experiencias digitales

Propuesta comercial HTML de ocho slides desarrollada por Wizard para Hangar1.

Sitio público: `https://hangar1-propuesta-anual-wizard.robust-hare-3246.chatgpt.site`

## Abrir localmente

La entrega no requiere instalación ni build. Puedes abrir `dist/index.html` directamente en un navegador o servir la carpeta para una revisión más fiel:

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Después abre `http://127.0.0.1:4173/`.

## Navegación

- Botones Anterior / Siguiente.
- Flechas izquierda y derecha, Page Up / Page Down, Home y End.
- Gesto horizontal en pantallas táctiles.
- Cada slide tiene un hash directo: `#slide-1` a `#slide-8`.

## Validación

```bash
/Users/emiliomiller/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check dist/assets/app.js
/Users/emiliomiller/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node tests/validate.mjs
```

La prueba contractual verifica ocho slides, importes, condiciones, términos prohibidos, destinos del mapa y existencia de activos locales.

## Fuente y propiedad

- HTML, CSS y JavaScript están en `dist/`.
- No hay dependencias externas de runtime, formularios, analítica ni captura de datos.
- Los activos de Hangar1 se obtuvieron de sus propiedades oficiales para esta propuesta.
- El caso 300ZX se presenta como referencia y enlaza a su experiencia vigente.
