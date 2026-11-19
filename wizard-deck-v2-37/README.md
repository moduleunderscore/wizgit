# Wizard Deck · v2-37

Presentación web estática para acompañar una conversación comercial de Wizard AI. El deck explica la propuesta, el proceso, las máquinas y los casos de éxito sin ejecutar procesos reales ni enviar información.

## Abrir localmente

Desde la raíz del repositorio:

```bash
python3 -m http.server 4173 --directory wizard-deck-v2-37
```

Después visita <http://127.0.0.1:4173/>.

## Estructura

- `index.html` — narrativa y composición de las ocho paradas visibles.
- `data.js` — catálogo, videos, casos y fuentes de verdad editoriales.
- `script.js` — navegación, estado, reproducción y comportamiento responsive.
- `styles.css` y `experience-v2.css` — identidad visual, layouts y movimiento.
- `assets/` — logos, iconos, videos de capítulos y recorridos de producto.
- `downloads/` — resumen imprimible y contexto preparado para IA.

## Productos con recorrido real

Pulse, Sprint, Agent, Core, Arkana, Clone U, Coach, Squad, Connect y Nexus cuentan con video suministrado por Wizard. Vault permanece marcado como material pendiente; no se simula una demo.

Agent conserva el acceso externo a [The Orb](https://themagicorb.netlify.app/) dentro de su ficha.

## Comportamiento

- HTML, CSS y JavaScript sin proceso de compilación.
- Videos silenciados, en loop y con un solo recorrido activo.
- Pausa fuera de escena y soporte para `prefers-reduced-motion`.
- Navegación completa por mouse, tacto y teclado.
- Layout validado en escritorio, laptop y móvil.

## Publicación

Versión pública `v2-37`, publicación 73:

<https://wizard-credenciales-emilio.robust-hare-3246.chatgpt.site/?v=v2-37#cover>

Los claims, activos y material de clientes deben conservar su fuente y autorización. No presentar placeholders como resultados medidos.

