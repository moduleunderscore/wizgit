# 10 — Retrospectiva

## Resultado

- Cambio observado: se convirtió un alcance comercial extenso en una conversación de ocho escenas con mecanismo y precio visibles.
- Métrica antes / después: no existe línea base de negocio; QA técnico 50/50 validaciones y 0 errores de consola.
- Fuente y periodo: brief y pruebas del 2026-11-12.
- Qué sigue sin estar demostrado: decisión comercial, contactos y trabajos generados por los micrositios futuros.

## Aprendizaje

- Supuesto que resultó falso: un `role=img` parecía apropiado para el mapa, pero ocultaba los ocho destinos al árbol accesible; se reemplazó por `role=group`.
- Decisión que produjo más valor: mostrar primero el ecosistema y después el recorrido comercial.
- Qué sobró o añadió complejidad: ninguna librería era necesaria; CSS y JavaScript propios cubrieron el movimiento y navegación.
- Pregunta que debimos hacer antes: no aplica; el brief resolvió las decisiones comerciales críticas.
- Falla operativa más importante: el servidor local requirió permiso de red; se resolvió sin cambiar el producto.
- Qué sorprendió al cliente o al usuario: [PENDIENTE revisión].
- Patrón reutilizable: mapa estratégico → recorrido causal → mecánica de ejecución → inversión.

## Evolución

- Siguiente experimento o mejora: validar comprensión con Fernando y registrar qué proyecto desea priorizar.
- Responsable y fecha: Hangar1 + Wizard · [PENDIENTE].
- Señal de éxito: Fernando puede explicar el sistema y elegir programa, primera historia y calendario.
- Regla candidata para mejorar `$wizard-builder`: en visualizaciones con texto, evitar `role=img` cuando los nodos contienen información que debe seguir siendo accesible.
