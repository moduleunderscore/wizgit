# 06 — Arquitectura y operación

## Vista del sistema

```text
index.html
   ├── assets/styles.css
   ├── assets/app.js
   ├── assets/fonts/*.woff2
   └── assets/images/*.{webp,svg}

Navegación → estado de slide → tema/contador/progreso/hash → foco accesible
```

## Componentes y contratos

| Componente | Responsabilidad | Entrada | Salida | Propietario | Falla visible |
|---|---|---|---|---|---|
| HTML | Ocho slides y contenido comercial | Brief | DOM semántico | Wizard / H1 | Texto ausente o slide extra |
| CSS | Composición, responsive y movimiento | DOM + viewport | Layout legible | Wizard / H1 | Corte, contraste o overflow |
| JavaScript | Navegación y estado | Botón, teclado, gesto, hash | Slide activa y foco | Wizard / H1 | Queda fallback apilado |
| Assets | Marca, fotografía y tipografía | Archivos locales | Identidad visual | Hangar1; empaquetado por Wizard | Imagen o fuente faltante |

## Datos e integraciones

- Modelo y fuente de verdad: contenido estático derivado del brief.
- Integraciones y autenticación: ninguna.
- Permisos mínimos: acceso público de solo lectura al sitio publicado.
- Retención, exportación y borrado: archivos transferibles; no se capturan datos.
- Datos sensibles y sanitización de logs: no aplica; no hay formularios ni telemetría.

## Confiabilidad

- Idempotencia y deduplicación: navegar a la misma slide no duplica estado.
- Reintentos y colas: no aplica.
- Timeouts y circuit breakers: no aplica.
- Observabilidad y alertas: consola limpia y verificación de recursos/links en QA.
- Recuperación y continuidad: HTML estático abre localmente; sin JavaScript, contenido apilado.

## Entornos y despliegue

- Desarrollo / staging / producción: archivo local + servidor HTTP local; publicación pública en Sites.
- Variables y secretos: ninguno.
- Migraciones: no aplica.
- CI/CD y validaciones: script local de contrato, revisión browser y empaquetado Sites.
- Rollback: versiones de Sites y commit Git.

## Costos, seguridad y propiedad

- Costos variables y topes: ninguno para el runtime estático; hosting sujeto a la plataforma del propietario.
- Amenazas principales y mitigación: enlace externo usa `noopener noreferrer`; no hay formularios ni ejecución remota.
- Dependencias críticas: navegador moderno; assets locales.
- Cuentas e infraestructura del cliente: publicación futura de micrositios en infraestructura H1.
- Dependencias de Wizard o terceros: la publicación pública usa Sites; la fuente no depende de Sites.
