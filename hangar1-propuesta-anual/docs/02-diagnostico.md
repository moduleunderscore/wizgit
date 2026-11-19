# 02 — Diagnóstico

## Evidencia disponible

| Evidencia | Fuente | Fecha | Qué demuestra | Confianza |
|---|---|---|---|---|
| Brief comercial completo | Texto suministrado por el usuario | 2026-11-12 | Estructura, alcance, precios, responsabilidades y condiciones obligatorias | Alta |
| Sitio principal Hangar1 | https://hangar1.com.mx/ | Consultado 2026-11-12 | Marca protagonista, paleta dual, jerarquía condensada y líneas PrimeService / SpeedCenter | Alta |
| Caso 300ZX | https://firstclass.hangar1.com.mx/300zx/ | Consultado 2026-11-12 | Storytelling desde historia, criterio, trabajo y llamada a contar la historia propia | Alta |
| Activos públicos de marca | Recursos cargados por los dos sitios oficiales | 2026-11-12 | Fotografías, logotipo y tipografías disponibles para una propuesta coherente | Alta |
| Referencia visual adjunta y feedback de diseño | Usuario | 2026-11-12 | Fer debe ser el protagonista; la interfaz debe usar retrato, tipografía monumental y microdatos con mayor identidad | Alta |
| 19 fotografías de Fer, taller y vehículos | Usuario | 2026-11-12 | Permiten sustituir imágenes repetidas por una secuencia real y variada: pista, proyecto, producción, taller, programa, diagnóstico y cierre | Alta |
| Revisión comercial de Eduardo / Wizard | Usuario | 2026-11-16 | El valor debe explicarse como ampliación del funnel: varias líneas de contenido, rutas web por audiencia y acciones comerciales B2C/B2B | Alta |
| Definición de rutas experienciales Hangar1 | Usuario | 2026-11-17 | TAA, Prime Service, First Class, Fer Miller, HangarTV, Hell Ram, Corvette y Track Day activan territorios y audiencias diferentes; promociones y cupones agregan activación comercial, mientras los proyectos reales aportan prueba y confianza | Alta |

## Proceso actual

`Contenido de Hangar1 → interés de una audiencia → ruta web especializada → historia + respuestas → contacto/cotización/cita/patrocinio → equipo comercial H1 → seguimiento`

Hoy, según la revisión comercial suministrada, contenidos con temas y audiencias diferentes desembocan en un mismo funnel. Wizard construye el concepto, la narrativa, la producción con IA y la experiencia web que abre rutas especializadas; el equipo técnico de H1 publica, opera y mantiene. La propuesta debe hacer visible ese reparto sin presentar una cadena técnica innecesaria.

## Fricción y causa

- Síntoma visible: una lista de sitios puede parecer una colección de páginas inconexas o un gasto anual grande.
- Pérdida o riesgo: subestimar el valor estratégico, mantener audiencias distintas dentro de una sola ruta de captación o percibir una suma anual grande antes de entender cada proyecto.
- Causa raíz probable: falta de una explicación simple de por qué una experiencia web especializada extiende el contenido, resuelve dudas y abre una acción comercial distinta para cada audiencia.
- Qué se hace manualmente y por qué: priorización, brief y selección del nivel de $10,000, $15,000 o $25,000 requieren criterio humano por proyecto.
- Dónde se rompe o se pierde contexto: entre el contenido que despierta interés y el siguiente paso comercial; entre el programa completo y el precio individual de cada entrega.
- Qué ya se intentó: el caso 300ZX demuestra una narrativa de historia → criterio → trabajo → invitación, pero no articula por sí solo el programa anual completo.

## Lo pedido vs. lo necesario

- Forma solicitada por el cliente: propuesta comercial HTML de 7 capítulos ejecutivos; dos slides de highlights explican conexión y capitalización antes de la propuesta Wizard.
- Problema que intenta resolver: hacer comprensible y deseable un programa anual conectado, con inversión transparente.
- Capacidad que realmente necesita: una herramienta de conversación ejecutiva que muestre cómo contenidos reales encuentran audiencias específicas, continúan en 8 o más propiedades web experienciales y llegan a acciones comerciales mediante CTA, encuestas, video con respuestas, promociones, cupones o casos de proyectos reales que construyen confianza, además de responsabilidades y costo por proyecto.
- Diferencia que debemos explicar o validar: no vender “páginas bonitas”; vender continuidad entre contenido, experiencia específica y conversación comercial sin prometer ventas.

## Restricciones y riesgos

| Restricción o riesgo | Probabilidad | Impacto | Mitigación | Responsable |
|---|---:|---:|---|---|
| Más o menos de 7 slides | Baja | Alto | Contar `.slide` en prueba automatizada y en DOM | Wizard |
| Condición comercial alterada | Baja | Alto | Verificaciones textuales y aritméticas sobre el HTML | Wizard |
| Mapa ilegible en móvil | Media | Alto | SVG/HTML responsivo, vista móvil real y scroll interno solo cuando sea necesario | Wizard |
| Propuesta genérica o protagonismo de Wizard | Media | Alto | Fer funciona como centro visual y narrativo; Wizard queda como constructor discreto | Wizard |
| Activo remoto roto | Baja | Medio | Empaquetar localmente todos los activos visuales usados | Wizard |
| Confundir contacto con venta | Baja | Alto | Nombrar contactos, cotizaciones, citas y trabajos como métricas separadas | Wizard / H1 |

## Declaración del problema

`Cuando Fernando evalúa el programa anual, puede percibir páginas aisladas si no ve cómo cada una amplía el funnel actual: toma una línea de contenido, conecta con una audiencia, resuelve dudas y presenta una acción comercial específica. Sin esa relación, el valor web se diluye aunque la inversión y la ejecución sean claras.`

## Qué validar antes de construir

1. Que los tres niveles de precio, el mes de crédito, la regla de alcance adicional, las responsabilidades y el texto fiscal coincidan literalmente con el brief vigente.
2. Que la relación contenidos → audiencias → webs y el paso emoción → intención → oportunidad sean los argumentos visuales dominantes, sin inventarios ni diagramas redundantes.
3. Que la propuesta funcione por teclado, botones y gesto táctil, en escritorio y móvil.
4. Que los activos sean locales y que el enlace al 300ZX funcione.
