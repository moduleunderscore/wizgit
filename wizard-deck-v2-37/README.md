# Wizard Deck · v2-41

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
- `assets/` — logos, iconos, video cinematográfico de portada, videos de capítulos, recorridos de producto y película del epílogo.
- `downloads/` — resumen imprimible y contexto preparado para IA.

## Productos con recorrido real

Pulse, Sprint, Agent, Core, Arkana, Clone U, Coach, Squad, Connect y Nexus cuentan con video suministrado por Wizard. Vault permanece marcado como material pendiente; no se simula una demo.

Agent conserva el acceso externo a [The Orb](https://themagicorb.netlify.app/) dentro de su ficha.

## Portada

La apertura usa el video 1920×1080 de astronauta + robot suministrado por Wizard. La película corre silenciada sólo mientras la portada está visible; la firma Wizard ocupa el riel inferior y el encuadre móvil conserva a ambos personajes sin depender del antiguo canvas WebGL.

## Sistema editorial

La V2.41 unifica las ocho paradas con una gramática sólido–outline: premisas blancas, señales verdes delineadas, riel técnico compacto, paneles traslúcidos y cortes de esquina compartidos. Es una capa visual; no altera el orden, la información, los productos, los casos ni las descargas. El logo de portada ocupa el centro geométrico del hero con una escala más contenida. El barrido de entrada ocurre una sola vez en escritorio y se desactiva en móvil y con `prefers-reduced-motion`.

## Epílogo

El último slide adapta la arquitectura cinematográfica del cierre de Digital Stories: video full-bleed, headline `LET’S / CONJURE / THE FUTURE`, firma Wizard y una barra compartida para descargar el PDF imprimible o el Markdown preparado para IA.

## Comportamiento

- HTML, CSS y JavaScript sin proceso de compilación.
- Videos silenciados, en loop y con un solo recorrido activo.
- Pausa fuera de escena y soporte para `prefers-reduced-motion`.
- Navegación completa por mouse, tacto y teclado.
- Layout validado en escritorio, laptop y móvil.

## Publicación

Versión pública `v2-41`, publicación 77:

<https://wizard-credenciales-emilio.robust-hare-3246.chatgpt.site/?v=v2-41#cover>

La carpeta conserva el nombre estable `wizard-deck-v2-37/` para no romper el enlace ya entregado. Su contenido corresponde a la versión V2.41.

Los claims, activos y material de clientes deben conservar su fuente y autorización. No presentar placeholders como resultados medidos.
