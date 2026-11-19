# 07 — Registro de decisiones

## DEC-001 — HTML estático como formato de entrega

- Fecha: 2026-11-12.
- Estado: aceptada por implementación.
- Responsable: Wizard.
- Contexto: la pieza debe ser funcional, responsive, portable y sencilla de revisar.
- Opciones consideradas: PDF, framework web, HTML estático.
- Decisión: HTML/CSS/JS sin dependencias de runtime.
- Razón y evidencia: cubre navegación, tacto, teclado, mapa exacto y transferencia al equipo H1 con menor riesgo.
- Consecuencias y tradeoffs: no incluye edición visual en CMS; el código queda directo y auditable.
- Riesgo aceptado: la fuente debe editarse para cambios de contenido.
- Señal o fecha para revisarla: si la propuesta evoluciona a un micrositio público con captura de datos.
- Reemplaza / reemplazada por: no aplica.

## DEC-002 — El mapa y el recorrido son el centro visual

- Fecha: 2026-11-12.
- Estado: aceptada por implementación.
- Responsable: Wizard.
- Contexto: el problema no es demostrar que se pueden diseñar páginas, sino explicar el sistema comercial.
- Opciones consideradas: galería de proyectos, lista de sitios, mapa + recorrido.
- Decisión: dedicar slides 3 y 4 al ecosistema y al recorrido contenido → oportunidad.
- Razón y evidencia: coincide con el argumento central del brief y separa afinidad editorial de resultado comercial.
- Consecuencias y tradeoffs: menos espacio para mockups decorativos; más claridad estratégica.
- Riesgo aceptado: densidad del mapa mitigada con una versión móvil en inventario.
- Señal o fecha para revisarla: feedback de Fernando durante la conversación.
- Reemplaza / reemplazada por: no aplica.

## DEC-003 — Claridad primero, color sólido en la narrativa central

- Fecha: 2026-11-12.
- Estado: aceptada por feedback del usuario.
- Responsable: Wizard.
- Contexto: la primera versión tenía la dirección correcta, pero necesitaba explicar la idea con menos capas visuales.
- Opciones consideradas: mantener fotografía dominante, reducir solo el copy, simplificar copy y fondos a la vez.
- Decisión: las slides 1–6 pasan a fondo negro y acentos sólidos; las slides 7–8 se conservan por aprobación explícita.
- Razón y evidencia: prioriza comprensión de la historia, el recorrido digital y la operación anual antes de explorar una fase visual más rica.
- Consecuencias y tradeoffs: menor espectáculo fotográfico; mayor contraste conceptual y mejor lectura de las relaciones.
- Riesgo aceptado: la versión puede sentirse austera hasta una futura fase de refinamiento visual.
- Señal o fecha para revisarla: cuando el contenido y el orden sean aprobados por Fernando Miller.
- Reemplaza / reemplazada por: refina la dirección visual descrita en DEC-002 sin cambiar el mecanismo comercial.

## DEC-004 — Fer como centro de gravedad visual

- Fecha: 2026-11-12.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: la claridad ya estaba resuelta, pero el diseño seguía pareciéndose a otros decks oscuros generados con la misma gramática.
- Opciones consideradas: decorar la versión sólida, adoptar literalmente la referencia adjunta, reconstruir la arquitectura alrededor de Fer.
- Decisión: convertir la propuesta en un archivo editorial de telemetría humana con retrato dominante, tipografía monumental, fotografía automotriz y microdatos.
- Razón y evidencia: el usuario indicó que “lo importante es Fer” y pidió aplicar el arnés UI Wizard tomando la referencia como dirección, no como plantilla.
- Consecuencias y tradeoffs: la fotografía pasa a ser estructural; los activos actuales funcionan, pero su calidad final mejorará con una selección adicional de retratos y autos.
- Riesgo aceptado: algunas escenas requieren scroll vertical en móvil para conservar el contenido completo.
- Señal o fecha para revisarla: recepción de nuevas fotografías de Fer y autos.
- Reemplaza / reemplazada por: reemplaza la expresión visual de DEC-003; conserva su claridad, copy y mecanismo comercial.

## DEC-005 — Una fotografía por función, no una galería indiscriminada

- Fecha: 2026-11-12.
- Estado: aceptada por implementación.
- Responsable: Wizard.
- Contexto: el usuario entregó 19 fotografías y pidió seleccionarlas una por una, retocarlas y hacer más expresivo el sistema de cards, iconos y diagramas.
- Opciones consideradas: usar todas las fotografías, crear una galería paralela, seleccionar ocho imágenes con una función narrativa precisa.
- Decisión: usar ocho imágenes —una por slide— y mantener las once restantes fuera del runtime para evitar repetición, ruido y peso innecesario.
- Razón y evidencia: cada escena exige una prueba visual diferente; la secuencia pista → proyecto → taller → producción → proceso → programa → diagnóstico → cierre convierte a Fer en hilo conductor sin repetir pose ni contexto.
- Consecuencias y tradeoffs: la propuesta pesa más por fotografía de alta resolución, pero gana continuidad narrativa, variedad real y una lectura móvil controlada.
- Riesgo aceptado: los PNG de alta resolución suman más peso que WebP; se usa carga diferida en slides 2–8 y cero dependencias de runtime.
- Señal o fecha para revisarla: si la pieza se vuelve pública o de alto tráfico, generar variantes WebP/AVIF en el pipeline de publicación.
- Reemplaza / reemplazada por: desarrolla DEC-004 sin modificar alcance, copy ni condiciones comerciales.

## DEC-006 — El recorrido precede al mapa y el cierre no repite decisiones

- Fecha: 2026-11-12.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: la secuencia debía explicar primero cómo el contenido llega a una oportunidad y después mostrar todas las historias que forman el ecosistema.
- Opciones consideradas: conservar mapa → recorrido, intercalar ambos argumentos, usar recorrido → mapa.
- Decisión: las slides 3 y 4 pasan a ser “Del contenido a la oportunidad” y “El ecosistema completo”; la contraportada elimina el bloque Programa / Primera historia / Calendario.
- Razón y evidencia: corresponde al orden narrativo indicado por el usuario y evita que la contraportada vuelva a abrir decisiones ya explicadas.
- Consecuencias y tradeoffs: el mecanismo comercial se entiende antes de dimensionar el sistema; el cierre gana aire y contundencia.
- Riesgo aceptado: ninguno material; alcance, inversión y condiciones permanecen intactos.
- Señal o fecha para revisarla: feedback de Fernando durante la presentación.
- Reemplaza / reemplazada por: actualiza la secuencia de DEC-002 sin cambiar sus dos argumentos centrales.

## DEC-007 — Rostros y frentes de autos como zonas focales protegidas

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: varias fotografías funcionaban como fondos a pantalla completa; en tablet y móvil, títulos, menús o diagramas podían cruzar rostros y frentes de vehículos.
- Opciones consideradas: oscurecer más las fotografías, cambiar todos los activos, definir zonas seguras específicas por escena y breakpoint.
- Decisión: reservar áreas reales de composición para los sujetos. Ecosistema, calendario e inversión usan módulos fotográficos; propuesta desplaza o encapsula el retrato; portada, recorrido y cierre ajustan recorte y ancho de texto.
- Razón y evidencia: protege la prioridad visual de Fer y de los autos sin ocultar información ni reducir la fotografía a decoración.
- Consecuencias y tradeoffs: algunas escenas conservan scroll vertical natural en tablet y móvil para no comprimir diagramas ni invadir la imagen.
- Riesgo aceptado: los puntos focales dependen de estas ocho fotografías; un reemplazo futuro debe volver a pasar la auditoría.
- Señal o fecha para revisarla: cuando cambie una imagen o se agregue un nuevo breakpoint de producto.
- Reemplaza / reemplazada por: desarrolla DEC-004 y DEC-005 con reglas responsive verificables.

## DEC-008 — Wizard firma la construcción sin competir con Hangar1

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el logotipo oficial de Wizard debía entrar en la propuesta sin desplazar a Fer ni convertir la presentación en una pieza corporativa de Wizard.
- Opciones consideradas: logo persistente en header, logo en todas las escenas, sello de autoría en propuesta y cierre.
- Decisión: usar el logo oficial solo dentro del bloque de producción de la slide 5 y como firma de la contraportada.
- Razón y evidencia: coincide con los dos momentos donde Wizard debe asumir autoría —construcción y cierre— mientras Hangar1 conserva el encabezado global.
- Consecuencias y tradeoffs: la marca Wizard gana presencia verificable sin alterar la jerarquía principal ni sumar ruido repetitivo.
- Riesgo aceptado: en tamaños pequeños, el descriptor del logotipo se lee como detalle de firma y no como contenido principal.
- Señal o fecha para revisarla: si la propuesta cambia de coautoría o se convierte en pieza pública de Wizard.
- Reemplaza / reemplazada por: desarrolla DEC-004 sin modificar el protagonismo de Fer.

## DEC-009 — Amarillo ácido + morado como sistema cromático

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: el amarillo y el naranja competían por temperatura y jerarquía; la propuesta necesitaba una combinación más coherente y reconocible.
- Opciones consideradas: reducir el naranja, conservarlo solo en calendario e inversión, sustituirlo por un sistema morado con niveles de profundidad.
- Decisión: conservar el amarillo ácido para activación y lectura; usar morado eléctrico en hitos, entregas y condiciones; introducir morado tinta en cards y diagramas; retirar el naranja de la interfaz.
- Razón y evidencia: el amarillo gana contraste y energía cuando se enfrenta a un color frío; el morado permite profundidad sin abandonar el universo oscuro ni competir con las fotografías.
- Consecuencias y tradeoffs: los acentos de Hangar1 viven principalmente en marca y fotografía; la interfaz adquiere una firma más propia de la propuesta Wizard.
- Riesgo aceptado: el morado debe permanecer subordinado al contenido y no convertirse en neón decorativo.
- Señal o fecha para revisarla: feedback de Fernando sobre la nueva dirección y cualquier futura actualización de marca Hangar1.
- Reemplaza / reemplazada por: actualiza el sistema cromático de DEC-004 y DEC-005 sin cambiar composición, copy ni alcance.

## DEC-010 — Cards como placas de instrumento, no como bloques genéricos

- Fecha: 2026-11-13.
- Estado: reemplazada por DEC-016.
- Responsable: Wizard.
- Contexto: los cards ya eran legibles, pero aún se percibían como contenedores funcionales con poca materialidad y variación.
- Opciones consideradas: copiar los cards redondeados de Davies, sumar efectos glass, traducir su arquitectura a placas de taller y telemetría Hangar1.
- Decisión: usar señal dominante, rail de datos y cambio de estado como principios; ejecutarlos con cortes mecánicos, doble marco, sombras sólidas moradas, riel amarillo y numeración propia.
- Razón y evidencia: preserva la claridad del sistema y eleva la dirección de arte sin convertir la propuesta en un portfolio o en un frontend SaaS intercambiable.
- Consecuencias y tradeoffs: aumenta la densidad visual controlada; se simplifican sombras y rieles en móvil y movimiento reducido.
- Riesgo aceptado: las placas deben seguir subordinadas a Fer y a los autos; cualquier nueva card necesita la misma auditoría de zonas seguras.
- Señal o fecha para revisarla: feedback de Fernando y prueba visual en nuevos dispositivos.
- Reemplaza / reemplazada por: reemplazada por DEC-016 sin alterar narrativa, copy, precio ni alcance.

## DEC-011 — La fotografía es la escena, no un módulo

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: los encuadres seguros de ecosistema, calendario e inversión terminaron reduciendo imágenes importantes a recuadros pequeños.
- Opciones consideradas: mantener módulos fotográficos, agrandarlos o convertir todas las fotografías en fondos completos con capas de lectura.
- Decisión: todas las fotografías ocupan el fondo completo de su slide. La lectura se resuelve con velos direccionales, `object-position` por breakpoint y placas morado tinta translúcidas.
- Razón y evidencia: Fer, los autos y el taller son el argumento visual principal; reducirlos debilitaba la propuesta y fragmentaba la experiencia.
- Consecuencias y tradeoffs: los componentes informativos dejan ver la fotografía y se eliminan las ventanas visuales y los grandes espacios reservados en móvil.
- Riesgo aceptado: fondos con alto detalle pueden bajar el contraste; cada escena conserva un fallback de color sólido bajo las placas y se valida por breakpoint.
- Señal o fecha para revisarla: cualquier cambio de fotografía o nuevo breakpoint.
- Reemplaza / reemplazada por: reemplaza los módulos fotográficos de DEC-007 y conserva su objetivo de proteger rostros y frentes.

## DEC-012 — La propuesta se comporta como un producto web

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: la propuesta vendía experiencias digitales, pero sus detalles podían leerse todavía como los de una presentación editorial estática.
- Opciones consideradas: sumar código decorativo, convertir todo en un dashboard o integrar señales web reales dentro de la gramática existente.
- Decisión: introducir una barra de URL viva, rutas por capítulo, estado de viewport, etiquetas de componente, puertos, nodos e iconos propios de navegador, enlace y responsive.
- Razón y evidencia: el medio vendido se vuelve visible en la propia experiencia; cada señal explica navegación, estructura o entrega sin desplazar a Fer ni a la fotografía.
- Consecuencias y tradeoffs: aumenta la densidad de microinformación, por lo que móvil reduce controles y conserva solo ruta y etiquetas esenciales.
- Riesgo aceptado: evitar que el lenguaje técnico se vuelva cosplay de código; los detalles permanecen subordinados a la comprensión comercial.
- Señal o fecha para revisarla: feedback de Fernando sobre si la propuesta se percibe claramente como una oferta de experiencias web.
- Reemplaza / reemplazada por: desarrolla DEC-010 y DEC-011 sin modificar alcance, copy o condiciones comerciales.

## DEC-013 — El programa nombra la portada; Fer le da autoridad

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: “Fer Miller” funcionaba como titular monumental, pero podía hacer que la propuesta se leyera como un sitio personal en vez de un programa digital de Hangar1.
- Opciones consideradas: conservar el nombre personal, sumar un subtítulo de programa o convertir “Hangar1 Digital Stories” en el nombre principal.
- Decisión: la portada se titula “Hangar1 Digital Stories”. Fernando Miller permanece como protagonista fotográfico, sujeto de la telemetría y motor humano del ecosistema.
- Razón y evidencia: la primera lectura ahora identifica el producto que se está vendiendo sin perder la persona, el criterio y la historia que le dan valor.
- Consecuencias y tradeoffs: el título ocupa tres líneas y requiere una escala responsive propia; a cambio, la jerarquía comercial deja de ser ambigua.
- Riesgo aceptado: el nombre en inglés debe sostenerse consistentemente en futuras piezas del programa.
- Señal o fecha para revisarla: conversación ejecutiva con Fernando y validación del naming como denominación pública.
- Reemplaza / reemplazada por: refina DEC-004 y DEC-012 sin cambiar alcance, inversión ni condiciones comerciales.

## DEC-014 — Wizard firma los extremos, no el proceso

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el logotipo de Wizard vivía dentro del sello de producción y en la contraportada; la coautoría necesitaba una presencia más clara desde la primera escena.
- Opciones consideradas: conservar el sello, repetir el logo en tres escenas o moverlo a portada y cierre.
- Decisión: retirar el logotipo del sello de producción, mostrarlo en gran formato en la portada y conservarlo ampliado en la contraportada.
- Razón y evidencia: los extremos de la experiencia comunican autoría sin convertir el proceso ni el header en espacios de marca repetitiva.
- Consecuencias y tradeoffs: la portada gana una segunda marca visible; su posición se mantiene separada del título, del rostro de Fer y del bloque comercial mediante reglas responsive.
- Riesgo aceptado: Wizard adquiere mayor peso visual; Hangar1 conserva prioridad porque nombra el programa, domina el header y ocupa el primer nivel tipográfico.
- Señal o fecha para revisarla: feedback de Fernando sobre el equilibrio de coautoría.
- Reemplaza / reemplazada por: reemplaza la ubicación definida en DEC-008 y conserva su principio de no competir con Hangar1.

## DEC-015 — Verde, blanco y gris como paleta exclusiva

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: el sistema morado competía con la energía visual de las fotografías y no correspondía a la preferencia final de la propuesta.
- Opciones consideradas: reducir el morado, reservarlo para Wizard o retirarlo por completo.
- Decisión: eliminar todo acento morado. Verde ácido comunica activación y progreso; verde profundo separa hitos; blanco y grises neutros resuelven lectura, profundidad, cards, líneas y sombras. Los logos se muestran en monocromo.
- Razón y evidencia: la paleta queda más automotriz, directa y coherente; el color activo tiene una sola función y las fotografías conservan protagonismo.
- Consecuencias y tradeoffs: Wizard deja de usar sus tonos originales dentro de esta pieza y funciona como firma monocromática subordinada al sistema Hangar1.
- Riesgo aceptado: los dos verdes deben conservar contraste suficiente sobre fondos fotográficos; las placas carbón mantienen el respaldo de lectura.
- Señal o fecha para revisarla: revisión final con Fernando en desktop y móvil.
- Reemplaza / reemplazada por: reemplaza DEC-009 y actualiza la expresión cromática de DEC-010 y DEC-011.

## DEC-016 — Retirar por completo la capa visual derivada de Davies

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: la restauración inicial eliminó la segunda adaptación de Davies, pero todavía conservaba la primera capa introducida en la versión 2.6.
- Opciones consideradas: regresar todo el sitio a 2.5, retirar también las decisiones posteriores o eliminar únicamente la capa de placas derivada del template.
- Decisión: retirar cortes mecánicos, rieles de activación, microetiquetas, dobles marcos y sombras desplazadas de 2.6. Se conservan fotografías full-bleed, lenguaje web, naming, firmas y paleta verde/blanco/gris porque responden a instrucciones posteriores independientes.
- Razón y evidencia: el historial identifica 3edafd7 como el cambio que introdujo Davies; el resto de las decisiones posteriores tienen solicitudes y mecanismos propios.
- Consecuencias y tradeoffs: los paneles recuperan una geometría más sobria y menos decorativa; la narrativa, contenido, imágenes y navegación no cambian.
- Riesgo aceptado: las señales web siguen presentes porque fueron solicitadas por separado; deberán retirarse solo si el usuario también revoca esa dirección.
- Señal o fecha para revisarla: revisión visual inmediata de desktop y móvil.
- Reemplaza / reemplazada por: reemplaza DEC-010 y actualiza DEC-011 y DEC-012 sin modificar alcance comercial.

## DEC-017 — H1 → Wizard → oportunidad es el mecanismo comercial dominante

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: el recorrido “Del contenido a la oportunidad” mostraba las seis etapas, pero no distinguía con suficiente fuerza el momento exacto en que Wizard entra al proceso de Hangar1.
- Opciones consideradas: conservar una fila uniforme, destacar solo el copy o convertir el handoff en una cadena separada con responsables, líneas y flechas.
- Decisión: centrar seis cards independientes y conectadas, nombrar al propietario de cada etapa y elevar en verde el nodo “Wizard entra aquí”. La lectura explícita queda H1/origen → H1/contenido → H1/distribución → Wizard/experiencia web → oportunidad/acción → H1/seguimiento.
- Razón y evidencia: la propuesta vende la transformación de conversación editorial en experiencia web y acción comercial; el punto de entrada de Wizard debe ser demostrable en cinco segundos.
- Consecuencias y tradeoffs: el recorrido gana protagonismo y densidad causal; móvil lo transforma en una columna conectada para conservar orden y legibilidad.
- Riesgo aceptado: la cadena puede dominar la escena, por lo que el ecosistema conserva su propio capítulo y el copy descriptivo se mantiene breve.
- Señal o fecha para revisarla: explicación de Fernando del recorrido sin apoyo de Wizard.
- Reemplaza / reemplazada por: desarrolla DEC-002 y DEC-012 sin cambiar alcance, precio ni calendario.

## DEC-018 — Marca oficial Hangar1 y vehículo sin Fer en inversión

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el header necesitaba la marca oficial de Hangar1 y la escena de inversión debía variar el ritmo fotográfico sin volver a mostrar a Fernando.
- Opciones consideradas: conservar el wordmark tipográfico, usar el archivo maestro completo o recortar su marca útil; mantener el retrato de Fer o sustituirlo por un vehículo.
- Decisión: usar el logo oficial Hangar1 recortado de su archivo maestro, en monocromo, dentro del header y la portada. La inversión cambia a una toma cenital del 300ZX sin Fer.
- Razón y evidencia: la autoría del programa se reconoce de inmediato y la inversión conserva identidad automotriz sin repetir protagonista.
- Consecuencias y tradeoffs: el logo se integra sobre negro y requiere una zona estable; el nuevo fondo protege el auto mediante `object-position` específico para desktop y móvil.
- Riesgo aceptado: el archivo fuente incluye fondo negro; su uso queda restringido a superficies oscuras de esta propuesta.
- Señal o fecha para revisarla: sustitución futura por una versión vectorial o transparente oficial.
- Reemplaza / reemplazada por: actualiza DEC-007, DEC-011, DEC-013 y DEC-014.

## DEC-019 — Los detalles de título comparten la tipografía bold

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: las líneas secundarias de los títulos utilizaban una serif cursiva que introducía un tono distinto al sistema técnico y monumental de la propuesta.
- Opciones consideradas: conservar la cursiva, usar bold sólido verde o mantener la familia Anybody bold con contorno verde.
- Decisión: retirar la cursiva de toda la interfaz. Los detalles de título conservan su escala y posición, pero usan Anybody 820 con relleno transparente y `text-stroke` verde.
- Razón y evidencia: la jerarquía sigue diferenciando título y detalle sin romper la continuidad tipográfica ni añadir otra voz visual.
- Consecuencias y tradeoffs: el sistema se vuelve más contundente y técnico; el contorno requiere un grosor menor en móvil para conservar legibilidad.
- Riesgo aceptado: navegadores sin `-webkit-text-stroke` pueden perder el contorno; la familia y el peso permanecen declarados como fallback estructural.
- Señal o fecha para revisarla: legibilidad del outline en pantallas móviles de baja densidad.
- Reemplaza / reemplazada por: actualiza la capa tipográfica de DEC-004 y DEC-013.

## DEC-020 — Los cards dejan respirar la fotografía

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: las placas mantenían la lectura, pero su densidad oscurecía demasiado los fondos full-bleed y reducía el valor de Fer, los autos y el taller.
- Opciones consideradas: bajar la opacidad de toda la slide, retirar cards o reducir únicamente el alfa y blur de las superficies informativas.
- Decisión: conservar bordes y jerarquía, bajar los cards principales a alfa .42–.46, los subcards internos a .22 y el blur a 3 px. Los estados verdes destacados bajan de .94 a .86 para dejar pasar textura sin perder contraste.
- Razón y evidencia: la fotografía vuelve a participar en la composición detrás de la información y las cards siguen funcionando como agrupadores legibles.
- Consecuencias y tradeoffs: aumenta el detalle visible del fondo; las escenas con mayor contraste dependen más del velo direccional de cada slide.
- Riesgo aceptado: una fotografía futura especialmente clara puede exigir ajuste específico de `scene-shade` sin volver a oscurecer globalmente los cards.
- Señal o fecha para revisarla: lectura de textos pequeños en el taller, calendario e inversión desde móvil.
- Reemplaza / reemplazada por: refina DEC-011 y DEC-016 sin cambiar geometría, contenido ni alcance.

## DEC-021 — El wordmark oficial reemplaza el nombre tipográfico en portada

- Fecha: 2026-11-13.
- Estado: aceptada por feedback directo del usuario.
- Responsable: Wizard.
- Contexto: el archivo oficial de Hangar1 estaba completo, pero la interfaz lo reducía, forzaba a escala de grises y repetía “HANGAR1” como texto monumental, debilitando la aplicación de marca.
- Opciones consideradas: mantener el tratamiento monocromático, usar solo el isotipo o recuperar el wordmark completo a color.
- Decisión: retirar el filtro de escala de grises, respetar proporción y color del wordmark completo en header y portada, y eliminar la línea visible “HANGAR1” del título. La composición queda logo oficial + “DIGITAL” sólido + “STORIES” en outline verde.
- Razón y evidencia: el logo suministrado ya contiene la firma completa y su combinación amarillo/rojo/gris; usarla sin alteraciones reconoce de inmediato la marca y evita duplicar el nombre con una aproximación tipográfica.
- Consecuencias y tradeoffs: la portada incorpora color corporativo fuera de la paleta UI verde/blanco/gris; se acepta porque es contenido de marca, no un nuevo acento funcional.
- Riesgo aceptado: el wordmark necesita una superficie oscura estable y suficiente ancho en móvil; el diseño conserva fondo oscuro, `object-fit: contain` y límites responsivos explícitos.
- Señal o fecha para revisarla: legibilidad del wordmark completo en 390×844 y 360×740.
- Reemplaza / reemplazada por: actualiza DEC-015 y reemplaza la decisión cromática de Hangar1 en DEC-018 sin alterar la firma Wizard.

## DEC-022 — El handoff Wizard se convierte en una señal de oportunidad comercial

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el nodo “Wizard entra aquí” señalaba la etapa correcta, pero su escala era menor que el resto del recorrido y el título “oportunidad” no nombraba de forma explícita el resultado web-comercial.
- Opciones consideradas: ampliar solo el texto, sustituir la card completa por un logo o construir un callout de marca unido a la etapa web.
- Decisión: cambiar el remate del título a “OPORTUNIDAD COMERCIAL WEB” en outline verde y anexar al cuarto nodo un callout más grande con el cerebro-mago suministrado y la leyenda “Wizard entra aquí”.
- Razón y evidencia: la intervención de Wizard debe localizarse en cinco segundos como el puente entre contenido de Hangar1 y acción comercial, sin confundirla con el origen ni con el seguimiento de H1.
- Consecuencias y tradeoffs: desktop eleva el callout sobre el nodo web; tablet y móvil lo integran dentro de la card para evitar cruces y conservar la secuencia vertical.
- Riesgo aceptado: el azul propio del activo Wizard entra como contenido de marca dentro de una interfaz verde, blanca y gris; queda restringido al callout solicitado.
- Señal o fecha para revisarla: lectura del handoff en 1440×900, 1024×768, 390×844 y 360×740.
- Reemplaza / reemplazada por: refina DEC-017 sin cambiar el alcance comercial ni los propietarios del proceso.

## DEC-023 — La inversión se presenta por proyecto, no como suma anual

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: abrir la conversación con $100,000 MXN hacía que el programa se percibiera grande antes de explicar el valor y el alcance de cada entrega.
- Opciones consideradas: conservar el total con una nota, mostrar solo dos tarifas o asignar y visualizar un precio a cada uno de los ocho proyectos.
- Decisión: retirar por completo el total anual del slide; mostrar 01, 03, 05 y 07 a $10,000 MXN y 02, 04, 06 y 08 a $15,000 MXN; otorgar un mes de crédito para el pago de cada proyecto; y declarar que un brief con alcance mayor al contemplado en $15,000 MXN se comunica y cotiza como extra antes de iniciar.
- Razón y evidencia: la unidad de decisión real es cada proyecto. La matriz individual reduce la fricción perceptual, mantiene transparente el programa de ocho entregas y protege el alcance sin presentar una suma intimidante.
- Consecuencias y tradeoffs: el total puede inferirse, pero deja de dominar la conversación; Wizard debe confirmar el alcance de cada brief antes de iniciar y comunicar cualquier extra.
- Riesgo aceptado: los precios alternados funcionan como referencia del programa; la clasificación final sigue dependiendo del alcance real de cada brief.
- Señal o fecha para revisarla: comprensión de Fernando del precio, crédito y regla de extra sin apoyo verbal.
- Reemplaza / reemplazada por: sustituye las condiciones económicas registradas en DEC-001 y refina DEC-012 sin cambiar el número de proyectos.

## DEC-024 — La contraportada cierra con un solo conjuro

- Fecha: 2026-11-13.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el último slide repetía la lógica explicativa del resto de la propuesta con eyebrow, titular, párrafos, botón y firma; el cierre perdía fuerza por exceso de información.
- Opciones consideradas: retocar el bloque existente, conservar el CTA con una fotografía nueva o reducir la escena a una sola frase de marca y la firma Wizard.
- Decisión: cambiar el fondo por la toma del 300ZX en estudio, retirar cards, CTA, microcopy, retícula y barrido, y dejar únicamente “LET’S CONJURE THE FUTURE” en outline verde con el logotipo de Wizard.
- Razón y evidencia: el recorrido ya explicó la oportunidad, el alcance, el calendario y la inversión. El último capítulo debe funcionar como firma emocional, no como otra pantalla informativa.
- Consecuencias y tradeoffs: se elimina el acceso directo a inversión desde el cierre; la navegación persistente mantiene el regreso a cualquier capítulo.
- Riesgo aceptado: el mensaje en inglés depende de una lectura de marca más aspiracional; la frase es breve y la interfaz conserva contexto suficiente.
- Señal o fecha para revisarla: legibilidad del outline y escala del logo en 1440×900, 390×844 y con `prefers-reduced-motion`.
- Reemplaza / reemplazada por: reemplaza la composición de contraportada definida en DEC-007 y refina DEC-019.

## DEC-025 — El funnel comercial merece un capítulo propio

- Fecha: 2026-11-16.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el mapa de historias y audiencias explicaba la diversidad de rutas, y el switchboard explicaba dónde entra Wizard, pero faltaba una escena que mostrara a los ocho sitios convergiendo en un solo objetivo comercial.
- Opciones consideradas: ampliar el mapa del capítulo 2, saturar el switchboard existente o insertar un capítulo dedicado entre ambos.
- Decisión: añadir un tercer capítulo “DE LA EMOCIÓN / A LA CONVERSIÓN” que presenta las ocho experiencias web, las conecta con cuatro acciones —contacto, cotización, cita y colaboración— y termina en conversaciones calificadas para el seguimiento comercial de Hangar1. El switchboard pasa al capítulo 4 y se retitula “DEL CONTENIDO / A LA OPORTUNIDAD WEB”.
- Razón y evidencia: separar el valor comercial del mecanismo de Wizard mejora la lectura ejecutiva: primero se entiende qué produce el ecosistema; después, cómo se construye y enruta.
- Consecuencias y tradeoffs: el deck crece de siete a ocho capítulos y exige renumerar propuesta, calendario, inversión y cierre; a cambio, desaparece la ambigüedad entre funnel y proceso operativo.
- Riesgo aceptado: repetir las ocho experiencias en dos capítulos puede sentirse redundante; se mitiga cambiando la pregunta visual: el capítulo 2 hace matching de audiencia y el 3 demuestra convergencia comercial.
- Señal o fecha para revisarla: comprensión de Fernando del recorrido ocho sitios → cuatro acciones → seguimiento H1 sin explicación adicional.
- Reemplaza / reemplazada por: amplía DEC-022 y preserva el orden comercial aprobado en 3.20.0.

## DEC-026 — Dos preguntas reemplazan tres explicaciones

- Fecha: 2026-11-16.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: los capítulos de historias y audiencias, funnel y oportunidad web explicaban partes cercanas del mismo argumento. Aunque eran completos, la suma exigía demasiado tiempo antes de llegar a la propuesta.
- Opciones consideradas: editar únicamente el copy, conservar tres capítulos con menos cards o condensar la estrategia en dos preguntas ejecutivas.
- Decisión: reducir el deck a siete capítulos. “¿Cómo conectamos?” resume el mecanismo como contenidos → audiencias → webs. “¿Cómo capitalizamos?” explica cómo esas webs convierten pasión, herencia, historia y expertise en contacto, cotización, cita o colaboración mediante una estrategia comercial. Se retira el capítulo independiente “Contenido a oportunidad”; Propuesta WIZ, calendario, inversión y cierre conservan su contenido.
- Razón y evidencia: cada capítulo responde ahora una sola pregunta y puede entenderse en segundos. La primera explica relevancia; la segunda, valor comercial. El resultado elimina repetición sin perder el puente entre contenido y conversión.
- Consecuencias y tradeoffs: desaparece el inventario visual de ocho sitios dentro de la explicación estratégica; el calendario conserva el alcance de ocho experiencias y dos extensiones. El deck gana velocidad y claridad ejecutiva.
- Riesgo aceptado: las audiencias se presentan como highlights en vez de una matriz completa; los ejemplos siguen disponibles como apoyo verbal y en el caso 300ZX.
- Señal o fecha para revisarla: comprensión de Fernando de contenidos → audiencias → webs → acción comercial sin explicación adicional.
- Reemplaza / reemplazada por: sustituye la estructura de DEC-025 y simplifica DEC-022; conserva las decisiones operativas y económicas posteriores.

## DEC-027 — Legibilidad, ecosistema comercial y tres niveles de inversión

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: los microtextos no se leían a distancia, el capítulo de conexión presentaba cruces entre título y cards, la propuesta Wizard seguía explicando demasiado el proceso y la inversión necesitaba reflejar briefs de complejidad distinta.
- Opciones consideradas: conservar el proceso y solo aumentar tipografía; agregar más slides; o mantener siete capítulos y redistribuir información.
- Decisión: elevar el piso tipográfico; retirar el índice numerado de portada; separar título izquierdo y router derecho en “¿Cómo conectamos?”; usar ejemplos reales de contenidos, audiencias y formatos web; explicar la actualización constante de promociones en “¿Cómo capitalizamos?”; convertir “Propuesta WIZ” en un ecosistema de seis capacidades centrado en conversión y capitalización; y mostrar niveles de $10,000, $15,000 y $25,000 MXN según brief.
- Razón y evidencia: la conversación comercial necesita entenderse en una pantalla pequeña y en pocos segundos. El valor no está en enumerar etapas internas, sino en demostrar que Wizard conecta creatividad, estrategia, tecnología y operación para convertir interés en una entrada correcta al funnel.
- Consecuencias y tradeoffs: se reduce el detalle operativo visible y se gana claridad ejecutiva; cada brief deberá clasificarse antes de cotizar y cualquier alcance mayor a $25,000 MXN se comunicará por separado.
- Riesgo aceptado: el ecosistema resume capacidades complejas; la conversación presencial deberá profundizar solo donde Fernando muestre interés.
- Señal o fecha para revisarla: lectura completa en desktop y móvil antes de publicar la versión 3.23.0.
- Reemplaza / reemplazada por: actualiza DEC-023 y refina DEC-026 sin cambiar el orden de siete capítulos.

## DEC-028 — El ecosistema se explica mediante ocho propiedades Hangar1

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: seis capacidades de Wizard explicaban cómo se ejecutaría el programa, pero no hacían visible qué sitios concretos formarían el ecosistema ni por qué cada uno conecta con una audiencia distinta.
- Opciones consideradas: agregar una lista debajo del diagrama, sustituir el centro comercial o convertir las órbitas existentes en propiedades reales.
- Decisión: conservar conversión y capitalización en el centro y sustituir las seis capacidades por ocho propiedades: TAA, Prime Service, First Class, Fer Miller, HangarTV, Hell Ram, Corvette y Track Day. Cada card nombra territorio, audiencia y función comercial.
- Razón y evidencia: Fernando puede evaluar mejor una propuesta concreta cuando reconoce sus marcas, comunidades y tipos de cliente; el diagrama demuestra que no son páginas aisladas, sino rutas diferenciadas hacia el funnel.
- Consecuencias y tradeoffs: el proceso interno de Wizard queda resumido en el copy “de principio a fin”; se gana especificidad comercial y se requiere una retícula de cuatro niveles alrededor del núcleo.
- Riesgo aceptado: los objetivos son hipótesis de propuesta y deberán precisarse en el brief de cada sitio; no se presentan resultados como hechos.
- Señal o fecha para revisarla: lectura completa del slide 04 en 1438×760 y 319×671 antes de publicar 3.24.0.
- Reemplaza / reemplazada por: refina DEC-027 y conserva su centro de conversión y capitalización.

## DEC-029 — Los fondos recuperan protagonismo con contraste localizado

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: varias escenas combinaban `brightness` bajo, velos de hasta 98 % y cards oscuras; la fotografía quedaba subordinada aunque debía sostener la emoción de la propuesta.
- Opciones consideradas: bajar todas las opacidades con una sola regla, retirar completamente los velos o auditar cada escena según sujeto, texto y composición.
- Decisión: elevar luz y saturación por slide; reducir el vidrio de cards de 30 % a 22 % y su blur de 4 px a 2 px; retirar el monocromo dominante de inversión; y sustituir capas oscuras globales por gradientes y sombras localizadas detrás de textos y diagramas.
- Razón y evidencia: la propuesta vende experiencias web a partir del universo visual de Hangar1. Las fotos deben sentirse como contenido vivo, no como textura secundaria, sin perder lectura ejecutiva.
- Consecuencias y tradeoffs: cada slide usa un balance propio y requiere QA desktop/móvil; se gana presencia fotográfica y profundidad, pero no existe ya una única fórmula de velo para toda la presentación.
- Riesgo aceptado: en pantallas con brillo alto el fondo tendrá más presencia; la legibilidad se protege mediante contraste localizado, bordes y vidrio ligero.
- Señal o fecha para revisarla: lectura completa de los siete capítulos en desktop y móvil antes de publicar 3.25.0.
- Reemplaza / reemplazada por: refina la materialidad de DEC-027 sin cambiar estructura, narrativa ni contenido.

## DEC-030 — Cada viewport comparte una zona de lectura protegida

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el calendario podía quedar detrás de la navegación en pantallas bajas, el ecosistema comprimía sus satélites en teléfonos estrechos y algunas transformaciones decorativas ampliaban el área de scroll aunque el copy no se encimara.
- Opciones consideradas: reducir globalmente todos los textos, permitir scroll indiscriminado o ajustar la composición por densidad y breakpoint.
- Decisión: conservar la escala editorial y establecer zonas seguras compartidas; compactar solo desktop de poca altura; mantener carriles elásticos en tablet; usar flujo vertical y padding inferior protegido en móvil; convertir el ecosistema a una columna bajo 360 px; y sustituir las flechas rotadas por flechas verticales nativas.
- Razón y evidencia: la propuesta debe poder presentarse en laptop, tablet y teléfono sin que textos, líneas, logos o controles compitan por el mismo espacio. La auditoría geométrica confirmó cero cruces y cero overflow horizontal en 1410×728, 1024×768, 390×844 y 320×568.
- Consecuencias y tradeoffs: los slides densos conservan scroll vertical natural en móvil; a cambio, desktop y tablet muestran la composición completa antes del footer y el copy mantiene un tamaño legible.
- Riesgo aceptado: teléfonos muy bajos requieren más recorrido vertical en ecosistema e inversión; la secuencia y la navegación permanecen visibles y utilizables.
- Señal o fecha para revisarla: cualquier incorporación de nuevos cards, claims o propiedades deberá repetirse en los cuatro viewports de referencia.
- Reemplaza / reemplazada por: complementa DEC-029 y formaliza el contrato responsive de todo el deck.

## DEC-031 — Iconografía semántica y conectores sin colisión

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: los SVG de “Web experiencial”, las acciones comerciales y las ocho propiedades heredaban relleno negro; sobre cards oscuras parecían ausentes. Además, cada satélite generaba dos conectores y la línea sin posición específica podía invadir el contenido.
- Opciones consideradas: aclarar los rellenos, sustituir todos los SVG por imágenes o formalizar un sistema único de pictogramas de trazo verde.
- Decisión: usar `fill: none` y trazo verde señal para toda la iconografía comercial; asignar símbolos relacionados con cada título; encerrar los pictogramas en placas de borde verde; y generar únicamente el conector que mira hacia el núcleo, reducido a 14 px. En móvil se eliminan todos los conectores.
- Razón y evidencia: los iconos recuperan contraste y significado sin introducir otro color. La auditoría calculada confirma trazo `rgb(186, 255, 60)`, relleno `none`, un solo conector por satélite en desktop y ninguno en mobile.
- Consecuencias y tradeoffs: el diagrama es más limpio y legible; los símbolos funcionan como orientación rápida, mientras el copy sigue aportando la explicación comercial.
- Riesgo aceptado: algunos territorios admiten más de una metáfora visual; se priorizó reconocimiento inmediato y coherencia del sistema sobre literalidad exhaustiva.
- Señal o fecha para revisarla: cualquier nueva propiedad o acción debe recibir un icono semántico y repetir la prueba de conectores en 1920 px, 390 px y 320 px.
- Reemplaza / reemplazada por: complementa DEC-028 y corrige la implementación visual de DEC-030 sin cambiar estructura ni contenido.

## DEC-032 — El ecosistema explicita sus mecanismos de captación

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el mapa explicaba qué territorios podían convertirse en experiencias, pero no mostraba con suficiente claridad qué recursos digitales moverían a cada audiencia hacia una acción comercial.
- Opciones consideradas: aumentar el copy de cada propiedad, agregar un capítulo independiente o incorporar un toolkit compacto dentro de Propuesta WIZ.
- Decisión: retitular el capítulo como “Ecosistema de captación comercial con experiencias web”; declarar que Wizard construye cada historia con la experiencia de Fer Miller; hacer visibles botones + CTA, encuestas, video + respuestas y promociones + cupones; y sumar Promos & Cupones como novena ruta de ejemplo.
- Razón y evidencia: los mecanismos convierten “sitios experienciales” en una propuesta comercial concreta y muestran que cada experiencia puede responder a un objetivo distinto sin prometer resultados no medidos.
- Consecuencias y tradeoffs: la escena gana densidad, por lo que se compacta el titular y el toolkit; el calendario conserva ocho experiencias base y hasta dos extensiones, mientras el mapa demuestra capacidad de expansión.
- Riesgo aceptado: las nueve rutas son ejemplos de arquitectura, no un compromiso automático de nueve entregas; cada brief define alcance, objetivo y nivel de inversión.
- Señal o fecha para revisarla: lectura completa en 1280×720, 1024×768, 390×844 y 320×568 antes de publicar 3.28.0.
- Reemplaza / reemplazada por: amplía DEC-028 y conserva las reglas visuales y responsive de DEC-030 y DEC-031.

## DEC-033 — El ecosistema deja de ser un card y se vuelve constelación

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el contenedor rectangular y los nueve subcards hacían que el ecosistema se leyera como otro bloque de información, no como una red comercial viva alrededor de un objetivo compartido.
- Opciones consideradas: retirar solo el borde exterior, conservar cards sin fondo o convertir toda la composición en nodos flotantes.
- Decisión: conservar sólido únicamente el núcleo de conversión y capitalización; retirar fondos y bordes de los destinos; y dibujar nueve conexiones convergentes detrás de las etiquetas. En mobile, sustituir la geometría radial por un eje vertical seguro y retirar conectores en una sola columna.
- Razón y evidencia: la ausencia de caja permite ver más del taller y hace que el centro comercial domine la lectura. Las líneas muestran el mecanismo sin obligar a interpretar una retícula de cards.
- Consecuencias y tradeoffs: el texto depende más del contraste fotográfico, por lo que se conserva sombra tipográfica y placas de icono; la constelación requiere geometría específica por breakpoint.
- Riesgo aceptado: los destinos flotantes tienen menos separación visual que un card; iconos, jerarquía y espaciado mantienen su identificación.
- Señal o fecha para revisarla: lectura completa en 1280×720, 1024×768, 390×844 y 320×568 antes de publicar 3.29.0.
- Reemplaza / reemplazada por: refina la composición visual de DEC-032 sin cambiar copy, alcance ni condiciones comerciales.

## DEC-034 — El router protege iconos y etiquetas del divisor

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: los tres pictogramas de “¿Cómo conectamos?” no heredaban el sistema semántico verde de los slides comerciales. Además, las etiquetas largas “CONTENIDOS” y “AUDIENCIAS” podían rebasar su carril y acercarse al divisor vertical.
- Opciones consideradas: reducir tipografía, ocultar la línea o ampliar el carril de título según breakpoint.
- Decisión: aplicar a los tres SVG relleno nulo y trazo verde; reservar 190 px para el título en desktop y 174 px en tablet; conservar en mobile la separación horizontal ya existente.
- Razón y evidencia: el color recupera contraste y coherencia, mientras la zona segura resuelve la causa geométrica sin reducir lectura ni cambiar contenido.
- Consecuencias y tradeoffs: el carril de ejemplos pierde una fracción menor de ancho, pero mantiene envoltura natural y gana una separación visible y consistente.
- Riesgo aceptado: textos futuros más largos requerirán revisar esta reserva; el contrato visual automatizado protege los tamaños actuales.
- Señal o fecha para revisarla: cualquier cambio de etiqueta o tipografía en el slide 02 deberá repetirse en 1280×720, 1024×768, 390×844 y 320×568.
- Reemplaza / reemplazada por: extiende DEC-031 al router del slide 02 y conserva DEC-030.

## DEC-035 — El calendario se compone como un bloque centrado

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el slide 05 preservaba todos sus elementos dentro del área segura, pero las reglas responsive finales alineaban la retícula al inicio y concentraban demasiado peso visual en la parte superior.
- Opciones consideradas: trasladar cada elemento por separado, aplicar una transformación visual al contenedor o resolver la distribución desde la retícula.
- Decisión: centrar verticalmente la retícula completa entre el header y la navegación en desktop y tablet, conservando sus cuatro bandas; en mobile mantener el scroll natural y aumentar el aire antes del título.
- Razón y evidencia: el ajuste por `align-content` redistribuye el espacio libre sin alterar relaciones internas, zonas de clic ni el flujo del documento. Así, título, mapa y responsabilidades se perciben como una sola unidad más baja y equilibrada.
- Consecuencias y tradeoffs: pantallas altas muestran más aire superior; pantallas bajas conservan la retícula compacta y la separación de la navegación. En mobile el primer pantallazo contiene menos información, pero gana jerarquía y respiración.
- Riesgo aceptado: futuras ampliaciones de copy pueden aumentar la altura total y reducir el efecto de centrado; el contrato responsive debe volver a verificarse en los cuatro viewports de referencia.
- Señal o fecha para revisarla: cualquier cambio de altura en título, timing, mapa o responsabilidades del slide 05.
- Reemplaza / reemplazada por: refina DEC-030 sin cambiar contenido, calendario ni alcance comercial.

## DEC-036 — Los títulos apilados conservan una pausa visible

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: la interlínea editorial comprimida hacía que algunas líneas blancas y outlines verdes se percibieran demasiado pegadas, especialmente en títulos de dos y tres niveles.
- Opciones consideradas: aumentar la interlínea completa, reducir el tamaño tipográfico o separar únicamente los bloques consecutivos.
- Decisión: aplicar una pausa primaria entre la línea sólida y el primer outline, y una pausa secundaria entre outlines consecutivos; compactar ambas distancias en mobile.
- Razón y evidencia: los márgenes por relación entre hermanos corrigen el contacto visual sin alterar el tamaño, el ancho, la alineación ni la composición de cada slide.
- Consecuencias y tradeoffs: los títulos ocupan entre 4 y 14 px adicionales; el área segura existente absorbe el cambio y se conserva la jerarquía tipográfica.
- Riesgo aceptado: títulos futuros con más de tres líneas deberán validar su altura total en pantallas bajas.
- Señal o fecha para revisarla: cualquier cambio de fuente, tamaño o número de líneas en los títulos de capítulo.
- Reemplaza / reemplazada por: complementa DEC-030 y DEC-035 sin modificar estructura ni copy.

## DEC-037 — Los proyectos reales funcionan como prueba comercial

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el ecosistema cubría audiencias, entretenimiento, performance y activación, pero no mostraba una ruta dedicada a demostrar el trabajo real de Hangar1 con clientes, autos y productos reales.
- Opciones consideradas: agregar la idea como nota, incorporarla dentro de TAA o convertirla en un sitio experiencial propio.
- Decisión: sumar “Proyectos reales” como décimo ejemplo conectado al centro de conversión y capitalización, con la promesa editorial “del reto al resultado” y sin inventar métricas.
- Razón y evidencia: los casos concretos aportan evidencia, reducen incertidumbre y abren una entrada comercial para usuarios que necesitan ver el criterio aplicado antes de contactar.
- Consecuencias y tradeoffs: la última fila se divide entre activación y prueba; el mapa gana una ruta sin modificar el programa de ocho experiencias base ni prometer diez entregas.
- Riesgo aceptado: el sitio deberá documentar resultados verificables cuando existan; mientras no haya métricas suministradas, el copy se limita al proceso y al resultado observable.
- Señal o fecha para revisarla: al elegir el primer caso real o recibir evidencia cuantitativa aprobada por Hangar1.
- Reemplaza / reemplazada por: amplía DEC-032 y DEC-033 sin cambiar alcance, calendario ni inversión.

## DEC-038 — La inversión se presenta como una sola unidad centrada

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: el bloque principal de inversión quedaba alto mientras la línea fiscal se estiraba hacia el footer, separando visualmente información que pertenece al mismo cierre comercial.
- Opciones consideradas: mover únicamente la nota inferior, desplazar manualmente cada tarjeta o corregir la distribución desde la retícula.
- Decisión: hacer que el título abarque las dos filas de la composición y centrar como una unidad las tarifas, notas comerciales y nota fiscal; reducir la distancia entre el contenido y su divisor.
- Razón y evidencia: la corrección desde la retícula conserva alineaciones, responsive y lectura comercial, mientras reúne precio y condiciones dentro del mismo campo visual.
- Consecuencias y tradeoffs: el contenido principal desciende y la línea fiscal sube; se reduce el vacío central sin modificar copy, precios ni alcance.
- Riesgo aceptado: un aumento futuro de texto en las condiciones puede elevar la altura total del bloque y requerir una nueva compactación en pantallas bajas.
- Señal o fecha para revisarla: cualquier cambio en niveles de precio, notas comerciales o condición fiscal del slide 06.
- Reemplaza / reemplazada por: refina la composición responsive de DEC-030 sin cambiar la propuesta económica.

## DEC-039 — Propuesta WIZ ocupa el centro del área segura

- Fecha: 2026-11-17.
- Estado: aceptada por solicitud directa del usuario.
- Responsable: Wizard.
- Contexto: título, mecanismos y constelación se percibían altos porque la retícula conservaba filas vacías de una arquitectura anterior y concentraba todo el contenido en la primera banda.
- Opciones consideradas: trasladar visualmente el bloque con una transformación, aumentar un margen superior o corregir la estructura real de filas.
- Decisión: reducir la composición a una sola fila centrada entre header y navegación, con padding asimétrico mínimo para conservar un ligero sesgo inferior; en mobile aumentar el aire inicial sin alterar el orden natural.
- Razón y evidencia: retirar las filas sin contenido corrige la causa y mantiene título, toolkit, nodos, conectores y núcleo como un solo sistema visual.
- Consecuencias y tradeoffs: la escena desciende sin modificar dimensiones internas; mobile requiere un poco más de scroll, pero gana una entrada más clara y menos pegada al header.
- Riesgo aceptado: si el ecosistema crece de nuevo, su altura total podría reducir el aire inferior en pantallas bajas.
- Señal o fecha para revisarla: cualquier cambio de cantidad de nodos, altura del título o mecanismos de captación del slide 04.
- Reemplaza / reemplazada por: refina DEC-032, DEC-033 y DEC-037 sin cambiar contenido ni alcance.
