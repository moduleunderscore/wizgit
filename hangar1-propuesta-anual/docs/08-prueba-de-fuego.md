# 08 — Prueba de Fuego

## Matriz de salida

| Caso | Resultado esperado | Estado | Evidencia | Responsable |
|---|---|---|---|---|
| Siete slides exactas | 7 secciones, IDs 1–7 | Pass | `tests/validate.mjs`: 139/139 validaciones | Wizard |
| Condiciones comerciales | Ocho precios individuales, crédito, regla de extra y texto fiscal exactos; sin total anual | Pass | Prueba contractual automatizada | Wizard |
| Términos prohibidos | No aparecen IVA adicional, pagos alternos ni 50/50 | Pass | Expresiones negativas en `tests/validate.mjs` | Wizard |
| Mapa completo | Cuatro avenidas + ocho destinos + audiencia y conversión por avenida | Pass | DOM accesible y revisión visual slide 2 | Wizard |
| Funnel comercial | Ocho experiencias web convergen en cuatro acciones y conversaciones calificadas | Pass | DOM semántico, ocho nodos, SVG de conectores y objetivo explícito verificados en slide 3 | Wizard |
| Ecosistema comercial Hangar1 | Ocho propiedades con territorio, audiencia y función comercial convergen en conversión y capitalización | Pass | TAA, Prime Service, First Class, Fer Miller, HangarTV, Hell Ram, Corvette y Track Day verificados en slide 4 | Wizard |
| Matching audiencias | Cuatro historias conectadas con cuatro audiencias, ocho destinos y cuatro siguientes pasos | Pass | Mapa combinado accesible y revisión visual slide 2 | Wizard |
| Detalles tipográficos | Ocho títulos en Anybody; blanco en peso 680 y outline verde en peso 820 | Pass | Regla automatizada y revisión visual desktop/móvil | Wizard |
| Transparencia de cards | El fondo fotográfico permanece visible detrás de placas y subcards | Pass | Alfa .42–.46, subcards .22 y blur 3 px verificados en CSS y navegador | Wizard |
| Calendario anual | Enero–diciembre, línea constante, ocho experiencias base y hasta dos extensiones | Pass | DOM accesible y revisión visual slide 6 | Wizard |
| Navegación | Botones, teclado, hashes y regreso desde cierre | Pass | ArrowRight, End y “Ver programas” probados en navegador | Wizard |
| Link 300ZX | URL real y segura | Pass | `target=_blank`, `noopener noreferrer`; referencia cargada | Wizard |
| Recursos | Cero imágenes o fuentes rotas | Pass | Servidor local: respuestas 200/304; consola sin errores | Wizard |
| Escritorio 1440×900 | Sin overflow horizontal | Pass | Métricas DOM para slides 1–8 | Wizard |
| Escritorio 1280×720 | Sin overflow horizontal; contenido visible | Pass | Métricas DOM para slides 1–8 | Wizard |
| Móvil 390×844 | Sin overflow horizontal; scroll vertical disponible | Pass | Métricas DOM para slides 1–8 | Wizard |
| Móvil 360×740 | Sin overflow horizontal; scroll vertical disponible | Pass | Métricas DOM para slides 1–8 | Wizard |
| Zonas focales | Rostros y frentes fuera de header, navegación y paneles densos | Pass | Auditoría visual en 1440×900 y 390×844; 300ZX libre de paneles densos en inversión | Wizard |
| Firmas de marca | Wordmark oficial Hangar1 completo y a color; Wizard visible y jerarquizado | Pass | Assets locales, proporción contenida, responsive y texto alternativo | Wizard |
| Sistema cromático | Verde + blanco + gris; interfaz sin morado ni naranja funcional | Pass | Variables y ausencia de tokens morados verificadas; Hangar1 conserva color corporativo y Wizard permanece monocromático; contraste verde profundo/blanco 4.66:1 y verde ácido/carbón 16.94:1 | Wizard |
| Sin template Davies | Sin cortes mecánicos, rieles, microetiquetas ni sombras desplazadas de la capa 2.6 | Pass | Regla negativa automatizada y revisión visual desktop/móvil | Wizard |
| Fotografía full-bleed | Siete fotografías y un video ocupan su escena completa; sin thumbnails de contenido | Pass | Regla automatizada y revisión visual por breakpoint | Wizard |
| Lenguaje web | Ruta viva, viewport, componentes e iconografía web se mantienen legibles | Pass | Navegación entre capítulos y revisión visual 1440×900, 390×844 y 360×740 | Wizard |
| Lector de pantalla | Los ocho destinos están en el árbol accesible | Pass | Mapa cambiado de `role=img` a `role=group` | Wizard |
| Movimiento reducido | Contenido final visible, sin transiciones materiales | Pass por revisión de código | Media query y override móvil presentes; emulación del SO no disponible en el navegador de prueba | Wizard |
| Movimiento distintivo | Barrido, funnel, fan-out, carriles y calendario sin alterar navegación | Pass | Revisión visual y métricas DOM; `body` sin overflow horizontal | Wizard |
| Sin JavaScript | Ocho secciones apiladas y legibles | Pass por revisión de código | Solo `.js .slide` activa el modo deck; fallback `noscript` presente | Wizard |

## Registro de ejecución

| Fecha | Versión | Entorno | Escenario | Resultado | Evidencia | Responsable |
|---|---|---|---|---|---|---|
| 2026-11-12 | 1.0.0 | Node local | Sintaxis JS | Pass | `node --check dist/assets/app.js` | Wizard |
| 2026-11-12 | 1.0.0 | Node local | Contrato comercial y assets | Pass | 50 validaciones aprobadas | Wizard |
| 2026-11-12 | 1.0.0 | IAB / servidor local | 1440×900 y 1280×720 | Pass | 0 overflow horizontal; 0 errores de consola | Wizard |
| 2026-11-12 | 1.0.0 | IAB / servidor local | 390×844 y 360×740 | Pass | 0 overflow horizontal; scroll natural | Wizard |
| 2026-11-12 | 1.0.0 | Sites privado | Guardado y despliegue | Pass | Despliegue `appgdep_6af64f0574cc819187159033b67b0595` succeeded | Wizard |
| 2026-11-12 | 1.1.0 | Node local | Sintaxis, contrato, copy y assets | Pass | 57 validaciones aprobadas; HTML parser pass | Wizard |
| 2026-11-12 | 1.1.0 | IAB / servidor local | 1440×900 y 1280×720 | Pass | 0 overflow horizontal; 0 errores de consola | Wizard |
| 2026-11-12 | 1.1.0 | IAB / servidor local | 390×844 | Pass | 0 overflow horizontal; scroll natural | Wizard |
| 2026-11-12 | 1.1.0 | Sites privado | Guardado y despliegue | Pass | Despliegue `appgdep_6af696d8ef5881918ccf222c348956db` succeeded | Wizard |
| 2026-11-12 | 2.0.0 | Node local | Sintaxis, contrato, copy y assets | Pass | 65 validaciones aprobadas; HTML parser pass | Wizard |
| 2026-11-12 | 2.0.0 | IAB / servidor local | 1440×900 y 1280×720 | Pass | 8/8 escenas sin scroll vertical; 0 errores de consola | Wizard |
| 2026-11-12 | 2.0.0 | IAB / servidor local | 390×844 y 360×740 | Pass | `body` sin overflow horizontal; scroll natural por escena | Wizard |
| 2026-11-12 | 2.0.0 | Sites privado | Guardado y despliegue | Pass | Despliegue `appgdep_6af69b95a13c8191a2cf5f5fd8ea85d0` succeeded | Wizard |
| 2026-11-12 | 2.1.0 | ImageGen + revisión visual | Ocho fotografías retocadas y ampliadas | Pass | Identidad, vehículos y escenas preservados; ocho assets guardados localmente | Wizard |
| 2026-11-12 | 2.1.0 | Node local | Sintaxis, contrato, copy, iconos y assets | Pass | 69 validaciones aprobadas; cero dependencias remotas | Wizard |
| 2026-11-12 | 2.1.0 | IAB / servidor local | 1440×900 | Pass | 8/8 escenas sin scroll ni overflow horizontal | Wizard |
| 2026-11-12 | 2.1.0 | IAB / servidor local | 390×844 y 360×740 | Pass | `body` sin overflow horizontal; scroll natural; ocho hitos visibles | Wizard |
| 2026-11-12 | 2.1.0 | IAB / servidor local | Iconografía, cards y diagramas | Pass | Iconos visibles, paso destacado con contraste, mapa y distribución 4 S + 4 M legibles | Wizard |
| 2026-11-12 | 2.2.0 | Node local | Orden narrativo, contrato y contraportada | Pass | 71 validaciones aprobadas; escenas 3–4 en orden y bloque de decisiones ausente | Wizard |
| 2026-11-12 | 2.2.0 | IAB / servidor local | 1440×900 y 390×844 | Pass | Slides 3, 4 y 8 sin overflow horizontal; cierre limpio; scroll móvil natural | Wizard |
| 2026-11-12 | 2.2.0 | Sites privado | Guardado y despliegue | Pass | Despliegue `appgdep_6af6a4fa049081918108eafaccb65b5c` succeeded | Wizard |
| 2026-11-13 | 2.3.0 | Node local | Sintaxis, contrato, assets y zonas seguras | Pass | 72 validaciones aprobadas; cero dependencias remotas | Wizard |
| 2026-11-13 | 2.3.0 | IAB / servidor local | Auditoría de rostros y frentes | Pass | 8/8 escenas revisadas en cinco viewports; 0 overflow horizontal de `body` | Wizard |
| 2026-11-13 | 2.3.0 | Sites privado | Guardado y despliegue | Pass | Despliegue privado actualizado en el mismo URL | Wizard |
| 2026-11-13 | 2.4.0 | Node local | Contrato, assets y firma de marca | Pass | 75 validaciones aprobadas; logo oficial empaquetado localmente | Wizard |
| 2026-11-13 | 2.5.0 | Node local | Contrato, sistema cromático y assets | Pass | 77 validaciones aprobadas; naranja retirado de la interfaz | Wizard |
| 2026-11-13 | 2.5.0 | IAB / servidor local | Mapa, propuesta, calendario e inversión en desktop y móvil | Pass | 0 overflow horizontal; morado y amarillo legibles en 1440×900 y 390×844 | Wizard |
| 2026-11-13 | 2.6.0 | Node local | Contrato, cards, color, iconos y assets | Pass | 78 validaciones aprobadas; cero dependencias nuevas | Wizard |
| 2026-11-13 | 2.6.0 | IAB / servidor local | Placas de instrumento, zonas focales y responsive | Pass | Slides 2–7 revisadas en 1440×900, 390×844 y 360×740; estado destacado corregido; `body` sin overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 2.7.0 | Node local | Fotografía full-bleed, placas translúcidas y assets | Pass | 79 validaciones aprobadas; cero dependencias nuevas | Wizard |
| 2026-11-13 | 2.7.0 | IAB / servidor local | Fondos full-bleed, transparencia y encuadres | Pass | Slides 2–7 revisadas en 1440×900, 390×844 y 360×740; fotografías a sangre, placas translúcidas y rostro de Fer liberado en inversión | Wizard |
| 2026-11-13 | 2.8.0 | Node local | Rutas, estado responsive, iconos y componentes web | Pass | 82 validaciones aprobadas; sintaxis JS y assets locales verificados | Wizard |
| 2026-11-13 | 2.8.0 | IAB / servidor local | Lenguaje web desktop y móvil | Pass | Barra de URL y rutas dinámicas verificadas; 0 overflow horizontal y 0 errores de consola en 1440×900, 390×844 y 360×740 | Wizard |
| 2026-11-13 | 2.9.0 | Node local | Naming de portada, contrato, assets y sintaxis | Pass | 84 validaciones aprobadas; portada “Hangar1 Digital Stories” y Fer fuera del título principal | Wizard |
| 2026-11-13 | 2.9.0 | IAB / servidor local | Portada program-first en desktop y móvil | Pass | Título en tres líneas, ruta actualizada, sin cruce con header ni overflow horizontal en 1440×900, 390×844 y 360×740; consola limpia | Wizard |
| 2026-11-13 | 3.0.0 | Node local | Ubicación de firma Wizard, contrato, assets y sintaxis | Pass | 87 validaciones aprobadas; logo presente solo en portada y contraportada | Wizard |
| 2026-11-13 | 3.0.0 | IAB / servidor local | Firma Wizard en portada, producción y cierre | Pass | Portada y cierre revisados en 1440×900, 390×844 y 360×740; sello sin logo; sin cruces con título, header, contenido o navegación; consola limpia | Wizard |
| 2026-11-13 | 3.1.0 | Node local | Paleta verde, blanco y gris; contrato, assets y sintaxis | Pass | 89 validaciones aprobadas; cero tokens morados en CSS; logos monocromáticos | Wizard |
| 2026-11-13 | 3.1.0 | IAB / servidor local | Paleta en cards, calendario, inversión y logos | Pass | 1440×900 y 390×844 sin overflow horizontal; verde profundo ajustado a contraste AA; logos monocromáticos; consola limpia | Wizard |
| 2026-11-13 | 3.1.1 | Node local | Retiro de la capa visual Davies; contrato, assets y sintaxis | Pass | 89 validaciones aprobadas; la regla negativa confirma ausencia de cortes, rieles y microetiquetas 2.6 | Wizard |
| 2026-11-13 | 3.1.1 | IAB / servidor local | Portada, historia y ecosistema sin capa Davies | Pass | `--plate-cut` ausente, panel sin sombra desplazada, body sin overflow horizontal y stylesheet 3.1.1 activo | Wizard |
| 2026-11-13 | 3.1.2 | Node local | Contrato, marca H1, handoff Wizard, assets y sintaxis | Pass | 97 validaciones aprobadas; logo oficial local y nueva imagen de inversión sin Fer | Wizard |
| 2026-11-13 | 3.1.2 | IAB / servidor local | Cards centradas, cadena conectada, propuesta e inversión | Pass | 1440×900 y 390×844; `body` sin overflow horizontal; historia, oportunidad y propuesta centradas; 300ZX visible en inversión | Wizard |
| 2026-11-13 | 3.1.3 | Node local | Tipografía, outline verde, assets y sintaxis | Pass | 99 validaciones aprobadas; cero reglas cursivas o referencias Cormorant | Wizard |
| 2026-11-13 | 3.1.4 | Node local | Transparencia de cards, assets y sintaxis | Pass | 100 validaciones aprobadas; superficies principales y subcards usan alfas reducidas | Wizard |
| 2026-11-13 | 3.1.5 | Node local | Wordmark oficial, portada, assets y sintaxis | Pass | 102 validaciones aprobadas; logo Hangar1 completo a color; “HANGAR1” tipográfico retirado; “STORIES” en outline verde | Wizard |
| 2026-11-13 | 3.1.6 | Node local | Título de oportunidad, callout Wizard, assets y sintaxis | Pass | 105 validaciones aprobadas; “OPORTUNIDAD COMERCIAL WEB” y cerebro-mago local verificados | Wizard |
| 2026-11-13 | 3.1.6 | IAB / servidor local | Handoff Wizard en desktop y móvil | Pass | 1440×900, 390×844 y 360×740; callout sin cruces, asset 640×640 cargado y `body` sin overflow horizontal | Wizard |
| 2026-11-13 | 3.1.7 | Node local | Precios individuales, crédito, alcance extra, assets y sintaxis | Pass | 112 validaciones aprobadas; cuatro proyectos de $10,000, cuatro de $15,000, total anual y pago contra entrega prohibidos | Wizard |
| 2026-11-13 | 3.1.7 | IAB / servidor local | Inversión por proyecto en desktop y móvil | Pass | 1440×900 y 390×844; matriz 4×2 / 2×4 legible, condiciones completas, `body` sin overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.1.8 | Node local | Contraportada simplificada, fondo, firma, assets y movimiento reducido | Pass | 116 validaciones aprobadas; sintaxis JS correcta y cero dependencias nuevas | Wizard |
| 2026-11-13 | 3.1.8 | IAB / servidor local | Contraportada editorial en desktop y móvil | Pass | 1440×900 y 390×844; nuevo 300ZX a sangre, frase y firma centradas, etiqueta lateral retirada, `body` sin overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.1.9 | Node local | Zona segura de contraportada y logo Wizard completo | Pass | 117 validaciones aprobadas; sintaxis JS correcta y reglas `contain` / sin clipping verificadas | Wizard |
| 2026-11-13 | 3.1.9 | IAB / servidor local | Logo final completo en alturas normales y cortas | Pass | 1440×600, 1280×520, 390×600 y 390×844; logo completamente entre header y navegación, con 79–187 px de separación inferior, cero overflow y consola limpia | Wizard |
| 2026-11-13 | 3.2.0 | Node local | Glitch de señal aplicado solo a “Digital” | Pass | 119 validaciones aprobadas; la palabra hereda fuente, peso, tracking y line-height; capas verde/gris pausadas fuera de portada y fallback `prefers-reduced-motion` | Wizard |
| 2026-11-13 | 3.2.0 | IAB / servidor local | Glitch, composición y overflow de portada | Pass | 1440×900 y 390×844; Anybody 820 intacta, capas animadas verde/gris, título completo, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.3.0 | Node local | Sistema tipográfico unificado y ocho acentos de capítulo | Pass | 123 validaciones aprobadas; ocho títulos en Anybody 820 y ocho señales cromáticas verificadas | Wizard |
| 2026-11-13 | 3.3.0 | IAB / servidor local | Tipografía editorial, color y responsive | Pass | 1440×900 y 390×844; ocho escenas sin overflow horizontal, composición intacta y consola limpia | Wizard |
| 2026-11-13 | 3.4.0 | Node local | Pipeline compacto e ilustración Wizard de vuelo | Pass | Cards bajos en desktop y móvil; asset transparente con globo “WIZ ENTRA AQUÍ”; contrato y referencias locales verificados | Wizard |
| 2026-11-13 | 3.4.0 | IAB / servidor local | Cadena comercial, mascota y responsive | Pass | 1440×900 y 390×844; cards de 106/58 px, callout legible, scroll móvil disponible, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.5.0 | Node local | Portada sin glitch y sistema de alineación izquierda | Pass | “DIGITAL” sólido; logo Hangar1, título, copy y firma Wizard comparten una guía editorial responsive | Wizard |
| 2026-11-13 | 3.5.0 | IAB / servidor local | Alineación, ajuste vertical y responsive de portada | Pass | 1440×900: guía X=86.4 px; 390×844: guía X=20 px; contenido completo dentro del viewport, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.6.0 | Node local | Inversión separada en argumento y matriz de precios | Pass | Riel izquierdo compacto, campo derecho de precios y condición fiscal alineada con la matriz; breakpoint móvil conservado | Wizard |
| 2026-11-13 | 3.6.0 | IAB / servidor local | Separación responsive de inversión | Pass | 1440×900: 100 px entre título y precios; 1024×768: 32 px; 390×844: matriz 2×4, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.7.0 | Node local | Sistema único de cards transparentes | Pass | Cards y estados destacados usan vidrio oscuro al 30 %; señal verde trasladada a bordes, texto e iconos | Wizard |
| 2026-11-13 | 3.7.0 | IAB / servidor local | Vidrio transparente en flujo, propuesta, calendario e inversión | Pass | 1440×900 y 390×844; fotografía visible tras todas las cards, jerarquía conservada, cero overflow horizontal del documento y consola limpia | Wizard |
| 2026-11-13 | 3.8.0 | Node local | Video local de contraportada, reproducción y accesibilidad | Pass | MP4 suministrado empaquetado localmente; loop silencioso, pausa fuera del slide y `prefers-reduced-motion` respetado | Wizard |
| 2026-11-13 | 3.8.0 | IAB / servidor local | Contraportada de video responsive | Pass | 1440×900 y 390×844; video 1920×1080 a sangre, monocromático, texto y logo completos, pausa al salir, cero overflow y consola limpia | Wizard |
| 2026-11-13 | 3.9.0 | Node local | Peso editorial y unificación cromática de títulos | Pass | Líneas sólidas blancas en 680; outlines en 820 y verde señal en los ocho capítulos | Wizard |
| 2026-11-13 | 3.9.0 | IAB / servidor local | Jerarquía tipográfica responsive | Pass | Portada, oportunidad, inversión y cierre revisados en 1440×900; portada, oportunidad y cierre en 390×844; verde `#BAFF3C`, pesos 680/820 y cero overflow horizontal | Wizard |
| 2026-11-13 | 3.10.0 | Node local | Navegación inferior de alto contraste | Pass | Botones anterior/siguiente en verde señal; estados hover, foco y deshabilitado definidos; contrato automatizado aprobado | Wizard |
| 2026-11-13 | 3.10.0 | IAB / servidor local | Footer responsive y estados de navegación | Pass | 1440×900 y 390×844; controles habilitados sólidos, deshabilitados translúcidos, área táctil 44×44 px, cero overflow y consola limpia | Wizard |
| 2026-11-13 | 3.11.0 | Node local | Logo Hangar1 reconstruido desde el original con caja segura | Pass | 134 validaciones aprobadas; asset RGBA 1600×474, dos usos locales y reglas anti-recorte verificadas | Wizard |
| 2026-11-13 | 3.11.0 | IAB / servidor local | Wordmark completo en header y portada | Pass | 1440×900 y 390×844; remate inferior del “1”, bandera y “MR” completos; `contain`, `clip-path:none`, overflow visible, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.12.0 | IAB / servidor local | Portada en viewports cortos y firma Wizard | Pass | 1440×900, 1366×768, 1280×720, 1024×768, 1024×600, 390×844, 390×667, 360×640 y 320×568; firma completa con 6–18 px respecto al copy y 34–209 px respecto al footer; 0 overflow horizontal | Wizard |
| 2026-11-13 | 3.13.0 | Node local | Mascota original, globo web, contrato y assets | Pass | 135 validaciones aprobadas; PNG original 1254×1254 verificado por dimensiones y referencia local | Wizard |
| 2026-11-13 | 3.13.0 | IAB / servidor local | Callout Wizard responsive | Pass | 1440×900, 1280×720, 390×844 y 320×568; logo y globo completos, nodo 04 libre, scroll móvil natural y 0 overflow horizontal | Wizard |
| 2026-11-13 | 3.14.0 | IAB / servidor local · 1440×900, 1024×768, 390×844 y 320×568 | Portada dividida y card derecho | Pass | Título y firma Wizard alineados a la izquierda; card web independiente a la derecha en desktop y apilado con la misma materialidad en móvil; sin desbordamiento horizontal ni errores de consola | Wizard |
| 2026-11-13 | 3.15.0 | Node local | Video final a color y con luz | Pass | Contrato actualizado: color original, saturación 1.14, brillo .90, opacidad .88 y reproducción limitada al cierre activo; 135 validaciones aprobadas | Wizard |
| 2026-11-13 | 3.15.0 | IAB / servidor local · 1440×900 y 390×844 | Contraportada luminosa responsive | Pass | Video full-bleed a color; velo ligero, texto y logo legibles, reproducción activa, cero desbordamiento horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.15.0 | Sites público | Acceso y despliegue | Pass | Versión 34 desplegada con estado `succeeded`; acceso confirmado como `public` en el Site activo | Wizard |
| 2026-11-13 | 3.16.0 | Node local | Semántica de ecosistema web, territorios y responsive | Pass | 147 validaciones aprobadas: título, ocho etiquetas “PÁGINA WEB EXPERIENCIAL”, ocho territorios y reglas responsive verificadas | Wizard |
| 2026-11-13 | 3.16.0 | IAB / servidor local · 1440×900, 1024×768, 390×844 y 320×568 | Ecosistema experiencial responsive | Pass | Órbita completa en desktop, ocho satélites antes del footer en tablet, inventario móvil de ancho completo con scroll natural, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-13 | 3.16.0 | Sites público | Actualización del ecosistema experiencial | Pass | Versión 36 y despliegue `appgdep_6af73b9930988191a721c6f758f1df7f` con estado `succeeded`; acceso público preservado | Wizard |
| 2026-11-13 | 3.17.0 | Node local | Composición fotográfica y protección del dossier de historia | Pass | 148 validaciones aprobadas; Cornvette desplazado hacia la izquierda y sombra negra localizada detrás del card derecho | Wizard |
| 2026-11-13 | 3.17.0 | IAB / servidor local · 1440×900, 1024×768, 390×844 y 320×568 | Historia responsive y zona focal | Pass | Auto legible antes del dossier; sombra concentrada tras el vidrio derecho, scroll móvil natural, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-16 | 3.18.1 | Node local | Narrativa comercial, contrato, assets y claims | Pass | 160 validaciones aprobadas; cuatro avenidas, ocho destinos, ocho acciones y ausencia de promesas automáticas verificadas | Wizard |
| 2026-11-16 | 3.18.1 | IAB / servidor local · 1440×900, 1024×768, 390×844 y 320×568 | Copy comercial y responsive | Pass | Slides 1–7 sin overflow horizontal; carril Wizard libre en tablet; scroll móvil natural y consola sin errores | Wizard |
| 2026-11-16 | 3.19.0 | Node local | Matriz de audiencias, switchboard, avenidas y contrato | Pass | 160 validaciones aprobadas; assets locales, contenidos, audiencias, destinos y conversiones verificados | Wizard |
| 2026-11-16 | 3.19.0 | IAB / servidor local · 1440×900, 1024×768, 390×844 y 320×568 | Sistema comercial responsive | Pass | Sin overflow horizontal de `body`; scroll natural en móvil; matriz, ramales y carriles legibles; consola limpia | Wizard |
| 2026-11-16 | 3.20.0 | Node local | Índice de siete capítulos, mapa combinado y contrato | Pass | 154 validaciones aprobadas; ocho experiencias base, dos extensiones y orden narrativo verificados | Wizard |
| 2026-11-16 | 3.20.0 | IAB / servidor local · 1440×900, 1024×768, 390×844 y 320×568 | Narrativa simplificada y responsive | Pass | Sin overflow horizontal del documento; scroll natural en móvil; portada, mapa, switchboard, propuesta, calendario e inversión legibles; consola limpia | Wizard |
| 2026-11-16 | 3.20.1 | Node local | Claim comercial de portada | Pass | “Ecosistema comercial web” integrado en portada y protegido por el contrato automatizado | Wizard |
| 2026-11-16 | 3.21.0 | Node local | Funnel comercial, secuencia de ocho capítulos, assets y contrato | Pass | 162 validaciones aprobadas; ocho sitios, cuatro acciones, objetivo H1, renumeración y rutas verificadas | Wizard |
| 2026-11-16 | 3.21.0 | IAB / servidor local · 1440×900, 1024×768 y 390×844 | Funnel comercial y secuencia responsive | Pass | Ocho sitios y cuatro acciones visibles; cero overflow horizontal del documento; scroll móvil natural hasta cierre del funnel; slides 3–8, hashes, video final y consola sin errores verificados | Wizard |
| 2026-11-16 | 3.22.0 | Node local | Narrativa de siete capítulos, copy, assets y contrato | Pass | 133 validaciones aprobadas; capítulo redundante retirado, rutas y condiciones comerciales preservadas | Wizard |
| 2026-11-16 | 3.22.0 | IAB + Chrome / servidor local · 1438×760 y 319×671 | Conexión y capitalización responsive | Pass | Tres highlights conectados en desktop y apilados en móvil; funnel comercial legible con scroll natural; cero overflow horizontal del documento y consola limpia | Wizard |
| 2026-11-17 | 3.23.0 | Node local | Legibilidad, ecosistema, inversión y contrato | Pass | 138 validaciones aprobadas; siete slides, ejemplos de contenidos/audiencias/webs, especialidad Wizard, tres niveles de precio, crédito y alcance adicional verificados | Wizard |
| 2026-11-17 | 3.23.0 | Chrome + IAB / servidor local · 1438×760 y 319×671 | Composición responsive final | Pass | Portada sin índice y con tres capas visibles; conexión sin cruces; capitalización, ecosistema y precios legibles; scroll móvil natural y sin encimados | Wizard |
| 2026-11-17 | 3.24.0 | Node local | Ocho propiedades, territorios, audiencias, contrato y assets | Pass | 139 validaciones aprobadas; ocho sitios exactos, ocho territorios y ocho rutas de audiencia verificados | Wizard |
| 2026-11-17 | 3.24.0 | Chrome + IAB / servidor local · 1920×960 y 319×671 | Ecosistema comercial responsive | Pass | Órbita de ocho propiedades legible en desktop; inventario móvil 2×4 sin encimados y con scroll natural | Wizard |
| 2026-11-17 | 3.25.0 | Node local | Opacidad, fondos, cards y contrato | Pass | 143 validaciones aprobadas; vidrio al 22 %, luz por escena, inversión a color y sombras localizadas verificados | Wizard |
| 2026-11-17 | 3.25.0 | Chrome + IAB / servidor local · 1410×728 y 390×844 | Visibilidad de fondos y contraste localizado | Pass | Siete capítulos revisados en desktop y móvil; fotografía visible, copy legible, cero overflow horizontal y cierre luminoso | Wizard |
| 2026-11-17 | 3.26.0 | Node local | Contrato responsive, sintaxis y assets | Pass | 151 validaciones aprobadas; zona segura, calendario compacto, columnas elásticas, ecosistema móvil y flechas verticales verificados | Wizard |
| 2026-11-17 | 3.26.0 | Chrome / servidor local · 1410×728, 1024×768, 390×844 y 320×568 | Composición responsive integral | Pass | Siete capítulos sin cruces de texto o líneas ni overflow horizontal; desktop completo sin scroll residual; tablet y mobile conservan alineación y zonas seguras | Wizard |
| 2026-11-17 | 3.27.0 | Node local | Iconografía semántica, conectores, sintaxis y contrato | Pass | 154 validaciones aprobadas; pictogramas verdes de trazo, mappings semánticos y un solo conector interior por satélite verificados | Wizard |
| 2026-11-17 | 3.27.0 | Chrome / servidor local · 1920×960, 390×844 y 320×568 | Iconos y conectores comerciales responsive | Pass | Slide 03 y 04 con relleno `none`, trazo verde visible y cero overflow horizontal; conectores cortos hacia el núcleo en desktop y retirados en mobile | Wizard |
| 2026-11-17 | 3.28.0 | Node local | Ecosistema de captación, mecanismos, contrato y sintaxis | Pass | 156 validaciones aprobadas; nueve rutas de ejemplo, experiencia Fer Miller, CTA, encuestas, video + respuestas y promos + cupones verificados | Wizard |
| 2026-11-17 | 3.28.0 | IAB / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Captación comercial responsive | Pass | Título, toolkit y nueve rutas sin cruces ni overflow horizontal; scroll móvil natural; consola sin errores | Wizard |
| 2026-11-17 | 3.29.0 | Node local | Constelación abierta, contrato, animación y responsive | Pass | 158 validaciones aprobadas; card exterior retirado, nueve líneas al centro y fallback de movimiento reducido verificados | Wizard |
| 2026-11-17 | 3.29.0 | IAB / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Ecosistema flotante responsive | Pass | Nueve nodos y núcleo visibles sin cajas; líneas limpias en desktop/tablet, eje mobile, cero overflow horizontal y consola sin errores | Wizard |
| 2026-11-17 | 3.30.0 | Node local | Iconos y zona segura del router 02 | Pass | 160 validaciones aprobadas; tres pictogramas con trazo verde y reservas de 190/174 px antes del divisor verificadas | Wizard |
| 2026-11-17 | 3.30.0 | IAB / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Router 02 responsive | Pass | Iconos con trazo `rgb(186, 255, 60)` y relleno nulo; 34 px de aire en desktop, 24 px en tablet y 13 px verticales en mobile; cero overflow horizontal y consola limpia | Wizard |
| 2026-11-17 | 3.31.0 | Node local | Balance vertical del calendario 05 | Pass | Contrato de retícula centrada y apertura móvil protegidos; contenido, timing, mapa y responsabilidades preservados | Wizard |
| 2026-11-17 | 3.31.0 | Chrome / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Composición vertical del calendario 05 | Pass | Centro del contenido a 3 px o menos del centro seguro en desktop/tablet; apertura móvil de 116–135 px, scroll natural, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-17 | 3.32.0 | Node local | Separación de títulos apilados | Pass | Contrato de pausa primaria y secundaria aplicado de forma global, con compactación específica para mobile | Wizard |
| 2026-11-17 | 3.32.0 | Chrome / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Respiración y encuadre de títulos | Pass | Pausa primaria de 14 px en desktop/tablet y 12 px en mobile; pausa secundaria de 8 px; siete slides sin contacto entre líneas ni overflow horizontal | Wizard |
| 2026-11-17 | 3.33.0 | Node local | Ruta “Proyectos reales”, copy, icono y conexiones | Pass | 163 validaciones aprobadas; diez ejemplos, diez territorios, diez conexiones y ausencia de métricas inventadas verificados | Wizard |
| 2026-11-17 | 3.33.0 | Chrome / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Constelación comercial con décima ruta | Pass | “Promos & Cupones” y “Proyectos reales” comparten la última fila; cero cruces entre nodos, scroll móvil natural, cero overflow horizontal y consola limpia | Wizard |
| 2026-11-17 | 3.34.0 | Node local | Balance vertical del slide 06 | Pass | Contrato de unidad centrada y nota fiscal compacta; precios, crédito y alcance preservados | Wizard |
| 2026-11-17 | 3.34.0 | Chrome / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Composición de inversión responsive | Pass | Tarifas y título comparten centro visual; la nota fiscal queda a 10 px del bloque, sin vacío hacia el footer, sin overflow horizontal y con scroll móvil natural | Wizard |
| 2026-11-17 | 3.35.0 | Node local | Balance vertical de Propuesta WIZ | Pass | Contrato de retícula de una fila centrada y apertura móvil; contenido, nodos y mecanismos preservados | Wizard |
| 2026-11-17 | 3.35.0 | Chrome / servidor local · 1280×720, 1024×768, 390×844 y 320×568 | Propuesta WIZ centrada en el área segura | Pass | Título y constelación comparten una sola fila; centro visual a 8 px del centro seguro en desktop, 48 px libres antes del footer en tablet, scroll móvil natural y cero overflow horizontal | Wizard |

## Criterio de salida

- Casos críticos aprobados: exactitud comercial, siete slides, navegación, activos y responsive.
- Defectos aceptados y por quién: ninguno conocido; emulación real de `prefers-reduced-motion` queda como límite de entorno, con implementación revisada.
- Riesgos pendientes: revisión de contenido y decisión comercial por Fernando Miller.
- Versión local validada: 3.35.0.
- Publicación pública activa: `https://hangar1-propuesta-anual-wizard.robust-hare-3246.chatgpt.site`.
