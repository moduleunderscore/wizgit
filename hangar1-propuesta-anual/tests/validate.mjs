import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'dist/index.html'), 'utf8');
const css = readFileSync(resolve(root, 'dist/assets/styles.css'), 'utf8');
const js = readFileSync(resolve(root, 'dist/assets/app.js'), 'utf8');

const checks = [];
const check = (name, condition) => checks.push({ name, ok: Boolean(condition) });
const occurrences = (pattern) => [...html.matchAll(pattern)].length;
const section = (index) => html.match(new RegExp(`<section[^>]+id="slide-${index}"[\\s\\S]*?<\\/section>`))?.[0] ?? '';

check('exactamente 7 slides', occurrences(/<section\s+class="slide\b/g) === 7);
for (let index = 1; index <= 7; index += 1) {
  check(`id slide-${index}`, occurrences(new RegExp(`id="slide-${index}"`, 'g')) === 1);
  check(`data-slide ${index}`, occurrences(new RegExp(`data-slide="${index}"`, 'g')) === 1);
  check(`slide ${index} usa tema oscuro`, new RegExp(`id="slide-${index}"[^>]+data-theme="dark"`).test(html));
  check(`slide ${index} combina sólido y outline`, /title-solid/.test(section(index)) && /title-outline/.test(section(index)));
}
check('contador total actualizado a 07', /id="current-slide">01<\/span>[\s\S]*<span>07<\/span>/.test(html));

const expectedOrder = ['slide--hero', 'slide--story', 'slide--funnel', 'slide--wizard', 'slide--annual', 'slide--pricing', 'slide--close'];
const positions = expectedOrder.map((className) => html.indexOf(className));
check('orden narrativo simplificado', positions.every((position, index) => position >= 0 && (index === 0 || position > positions[index - 1])));
check('slide contenido a oportunidad eliminado', !html.includes('slide--journey') && !html.includes('DEL CONTENIDO') && !html.includes('A LA OPORTUNIDAD WEB') && !html.includes('conversion-switchboard'));
check('rutas web para siete capítulos', occurrences(/data-route="/g) === 7 && js.includes('nextSlide.dataset.route'));

const hero = section(1);
check('portada Hangar1 Digital Stories', hero.includes('hero-hangar-logo') && hero.includes('DIGITAL') && hero.includes('STORIES'));
check('claim comercial de portada', hero.includes('Historias que conectan') && hero.includes('en un ecosistema comercial web.'));
check('portada conserva card derecho', hero.includes('hero-brief web-surface') && css.includes('3.14.0 — Restored split cover'));
check('índice numerado retirado de portada', !hero.includes('hero-index') && !/<li><b>0[1-5]<\/b>/.test(hero));
for (const item of ['Contenido', 'Experiencia relevante', 'Acción comercial']) check(`capa de portada: ${item}`, hero.includes(item));

const connect = section(2);
check('slide 2 pregunta cómo conectamos', connect.includes('¿CÓMO') && connect.includes('CONECTAMOS?'));
check('slide 2 usa tres highlights', (connect.match(/class="connection-node(?:\s|")/g) ?? []).length === 3);
for (const stage of ['CONTENIDOS', 'AUDIENCIAS', 'WEBS']) check(`conexión: ${stage}`, connect.includes(stage));
check('conexión resume contenido audiencia web', connect.includes('CONTENIDO RELEVANTE') && connect.includes('AUDIENCIA CORRECTA') && connect.includes('MÁS PUERTAS DE ENTRADA'));
check('conexión incluye contenidos reales de H1', ['Prime Service', 'First Class', 'TAA', 'Fer Miller', 'Música', 'TV', 'Hell Ram', 'Corvette'].every((term) => connect.includes(term)));
check('conexión incluye audiencias de afinidad', ['Muscle car fans', 'tech heads', 'vintage fans', 'fans históricos', 'marketing automotriz', 'quienes cuidan sus autos', 'fans de Jeeps'].every((term) => connect.includes(term)));
check('conexión incluye formatos web experienciales', ['gaming', 'trivias', 'reproductores de música y TV', 'preventas', 'eventos digitales', 'lealtad y cupones', 'calculadoras', 'progreso de tuning', 'recomendaciones automáticas', 'asistentes virtuales', 'interacción con Fer Miller'].every((term) => connect.includes(term)));
check('caso 300ZX sigue enlazado', /href="https:\/\/firstclass\.hangar1\.com\.mx\/300zx\/"/.test(connect));
check('mapa complejo anterior retirado', !connect.includes('avenue-lane') && !connect.includes('site-destination'));

const capital = section(3);
check('slide 3 pregunta cómo capitalizamos', capital.includes('¿CÓMO') && capital.includes('CAPITALIZAMOS?'));
check('slide 3 explica emoción a conversión', capital.includes('De la emoción a la conversión.') && capital.toLowerCase().includes('capitaliza la emoción'));
for (const signal of ['PASIÓN', 'HERENCIA', 'HISTORIA', 'EXPERTISE']) check(`señal emocional: ${signal}`, capital.includes(signal));
check('web experiencial es el motor central', capital.includes('WEB EXPERIENCIAL') && capital.includes('CAPITALIZA LA EMOCIÓN') && capital.includes('Continúa la historia') && capital.includes('resuelve dudas'));
check('promos y comunicación comercial se actualizan', capital.includes('comunica promociones') && capital.includes('actualiza la oferta comercial'));
for (const action of ['CONTACTO', 'COTIZACIÓN', 'CITA', 'COLABORACIÓN']) check(`acción: ${action}`, capital.includes(action));
check('especialidad Wizard explícita', capital.includes('ESTRATEGIA COMERCIAL + CREATIVIDAD') && capital.includes('tecnologías actuales') && capital.includes('funnel comercial'));
check('fondo de capitalización actualizado', capital.includes('assets/images/fer-camera-flow.png'));
check('inventario de ocho sitios retirado del funnel', !capital.includes('funnel-site') && !capital.includes('commercial-funnel'));

const proposal = section(4);
check('propuesta WIZ es ecosistema de captación web', proposal.includes('PROPUESTA WIZ') && proposal.includes('ECOSISTEMA DE CAPTACIÓN COMERCIAL') && proposal.includes('CON EXPERIENCIAS WEB'));
check('declaración Wizard preservada', proposal.includes('Wizard lo hace de principio a fin.'));
check('diez ejemplos de sitios Hangar1 conectados', (proposal.match(/class="wizard-orbit/g) ?? []).length === 10 && ['TAA', 'Prime Service', 'First Class', 'Fer Miller', 'HangarTV', 'Hell Ram', 'Corvette', 'Track Day', 'Promos &amp; Cupones', 'Proyectos reales'].every((site) => proposal.includes(site)));
check('cada sitio declara su territorio', ['AUTOMOTIVE MARKETING', 'SERVICIO PREMIUM', 'ALTA GAMA', 'COMUNIDAD', 'ENTRETENIMIENTO', 'OFF-ROAD', 'PERFORMANCE', 'EXPERIENCIA', 'ACTIVACIÓN COMERCIAL', 'CASOS HANGAR1'].every((territory) => proposal.includes(territory)));
check('rutas de audiencia son explícitas', ['marcas que buscan conexión y resultados', 'quienes no buscan performance', 'propietarios de autos extraordinarios', 'conversación con los usuarios', 'Contenido segmentado', 'viven fuera del camino', 'fans del alto desempeño', 'fandom en comunidad', 'activar contacto, visita o recompra', 'Clientes reales, autos reales'].every((phrase) => proposal.includes(phrase)));
check('proyectos reales convierten evidencia en confianza', proposal.includes('productos aplicados en proyectos reales') && proposal.includes('del reto al resultado'));
check('centro comercial del ecosistema', proposal.includes('CONVERSIÓN') && proposal.includes('CAPITALIZACIÓN') && proposal.includes('funnel comercial'));
check('mecanismos de captación visibles', ['BOTONES + CTA', 'ENCUESTAS', 'VIDEO + RESPUESTAS', 'PROMOS + CUPONES'].every((mechanism) => proposal.includes(mechanism)) && proposal.includes('objetivo distinto'));
check('experiencia Fer Miller integrada', proposal.includes('con la experiencia de Fer Miller'));
check('ecosistema abierto sin card exterior', proposal.includes('class="wizard-ecosystem"') && !proposal.includes('wizard-ecosystem web-surface'));
check('diez conexiones convergen al centro', (proposal.match(/<path d="M/g) ?? []).length === 10 && css.includes('.ecosystem-links'));

const calendar = section(5);
check('calendario permanece en slide 5', calendar.includes('12 MESES') && calendar.includes('8–10 EXPERIENCIAS'));
check('calendario enero a diciembre', calendar.includes('<span>ENE</span>') && calendar.includes('<span>DIC</span>'));
check('ocho experiencias y dos extensiones', occurrences(/class="site-marker"/g) === 8 && occurrences(/class="site-marker site-marker--optional"/g) === 2);
check('timing preservado', calendar.toLowerCase().includes('aproximadamente 5–6 semanas por proyecto'));
check('responsabilidades preservadas', calendar.includes('Publicación, operación y mantenimiento.') && calendar.includes('Creatividad, producción y desarrollo.'));

const pricing = section(6);
check('inversión permanece en slide 6', pricing.includes('INVERSIÓN') && pricing.includes('POR PROYECTO'));
check('tres niveles de precio', (pricing.match(/class="project-price-card(?:\s|")/g) ?? []).length === 3);
check('nivel de 10 mil', occurrences(/data-price="10000"/g) === 1);
check('nivel de 15 mil', occurrences(/data-price="15000"/g) === 1);
check('nivel de 25 mil', occurrences(/data-price="25000"/g) === 1);
check('crédito por proyecto', pricing.includes('1 mes de crédito para el pago de cada proyecto.'));
check('alcance extra se cotiza antes', pricing.includes('Si el brief rebasa el alcance contemplado en $25,000 MXN, Wizard lo comunicará y cotizará el extra antes de iniciar.'));
check('nota fiscal preservada', pricing.includes('Facturación como persona física. Los impuestos y retenciones aplicables se reflejarán en la factura.'));
check('inversión usa auto sin Fer', pricing.includes('assets/images/300zx-aerial.webp'));

const close = section(7);
check('contraportada ahora es slide 7', close.includes('LET’S') && close.includes('CONJURE') && close.includes('THE FUTURE'));
check('contraportada usa video local', /<video[^>]+src="assets\/video\/wizard-future-robot\.mp4"/.test(close));
check('video final reproduce en loop silencioso', /<video[^>]+autoplay[^>]+muted[^>]+loop[^>]+playsinline/.test(close));
check('video final conserva color y luz', css.includes('3.15.0 — Luminous full-color close') && css.includes('filter:saturate(1.14) contrast(1.08) brightness(.9)'));
check('video solo corre en cierre activo', js.includes('syncSlideVideos') && js.includes("video.closest('.slide') === activeSlide") && js.includes('video.pause()'));
check('logo Wizard en portada y cierre', occurrences(/assets\/images\/wizard-logo\.png/g) === 2 && close.includes('closing-signature'));

check('nueva narrativa legible tiene CSS propio', css.includes('3.23.0 — Legibility and commercial ecosystem'));
check('conexión responsive', css.includes('.connection-path{') && css.includes('grid-template-columns:minmax(0,1fr) 42px') && css.includes('@media (max-width:760px)'));
check('capitalización responsive', css.includes('.capital-flow{') && css.includes('grid-template-columns:minmax(170px,.82fr)') && css.includes('.capital-result{'));
check('ecosistema Wizard responsive', css.includes('.wizard-ecosystem{') && css.includes('grid-template-areas:') && css.includes('.wizard-core{'));
check('piso tipográfico aumentado', css.includes('.eyebrow{font-size:clamp(11px,.82vw,13px)}') && css.includes('.micro-label{font-size:clamp(9px,.68vw,11px)}'));
check('movimiento reducido conserva contenido', /@media \(prefers-reduced-motion:reduce\)[\s\S]*\.js \.connection-node/.test(css));
check('todos los outlines son verdes', css.includes('.slide{--title-accent:var(--signal-green)}') && css.includes('-webkit-text-stroke:1.5px var(--title-accent)!important'));
check('líneas blancas usan peso ligero', css.includes('.title-solid{') && css.includes('font-weight:680!important'));
check('sin tipografía cursiva', !css.includes('Cormorant') && !css.includes('font-style:italic'));
check('paleta verde blanco gris', css.includes('--signal-green:#baff3c') && css.includes('--soft-grey:#d7dbd5') && css.includes('--charcoal-ink:#171917'));
check('botones anterior y siguiente verdes', css.includes('3.10.0 — High-visibility footer navigation') && css.includes('background:var(--signal-green)'));
check('cards transparentes', css.includes('--card-glass:rgba(7,9,7,.22)') && css.includes('backdrop-filter:blur(2px)'));
check('auditoría de fondos aplicada', css.includes('3.25.0 — Background visibility audit'));
check('auditoría responsive aplicada', css.includes('3.26.0 — Responsive composition audit'));
check('zona segura móvil sobre la navegación', css.includes('padding-bottom:calc(var(--nav-h) + 24px)!important'));
check('calendario compacto sobre navegación desktop', css.includes('grid-template-rows:210px 188px 54px auto'));
check('calendario puede envolver título en mobile', css.includes('.annual-heading h2 .title-outline{') && css.includes('white-space:normal!important'));
check('tablet usa columnas elásticas', css.includes('grid-template-columns:minmax(220px,.48fr) minmax(0,1.52fr)!important'));
check('mobile compacto convierte ecosistema a una columna', /@media \(max-width:360px\)[\s\S]*?\.wizard-ecosystem\{grid-template-columns:1fr\}/.test(css));
check('desktop bajo usa composición compacta', /@media \(max-height:760px\) and \(min-width:1101px\)/.test(css));
check('flechas del funnel no rotan el riel completo', occurrences(/class="connection-arrow" aria-hidden="true">↓<\/i>/g) === 2 && css.includes('.connection-arrow{transform:none!important}'));
check('iconos 03 y 04 usan trazo verde visible', css.includes('3.27.0 — Semantic green icon system') && css.includes('stroke:var(--signal-green)!important'));
check('iconos 02 usan trazo verde visible', css.includes('3.30.0 — Slide 02 icon and connector safe zone') && css.includes('.slide--story .connection-node__title svg{') && css.includes('fill:none!important'));
check('títulos 02 reservan zona segura antes de la línea', css.includes('grid-template-columns:minmax(190px,.62fr) minmax(0,1.38fr)') && css.includes('grid-template-columns:minmax(174px,.62fr) minmax(0,1.38fr)'));
check('slide 05 centra el calendario dentro del área segura', css.includes('3.31.0 — Annual calendar vertical balance') && /\.slide--annual \.annual-layout\{[\s\S]*?align-content:center/.test(css) && css.includes('padding-top:clamp(116px,16vh,144px)!important'));
check('títulos apilados conservan respiración', css.includes('3.32.0 — Title stack breathing room') && css.includes('margin-top:clamp(14px,1.8vh,20px)!important') && css.includes('margin-top:clamp(8px,1.1vh,13px)!important'));
check('cada satélite dibuja un solo conector', css.includes('.wizard-orbit::after{content:none}') && css.includes('.wizard-site--track::before{'));
check('iconos del ecosistema corresponden a sus títulos', html.includes('wizard-site--taa"><svg aria-hidden="true"><use href="#i-nodes"') && html.includes('wizard-site--first"><svg aria-hidden="true"><use href="#i-detail"') && html.includes('wizard-site--fer"><svg aria-hidden="true"><use href="#i-contact"'));
check('fondos ganan luz por escena', css.includes('brightness(.84)') && css.includes('brightness(.8)') && css.includes('brightness(1.02)'));
check('inversión recupera color y opacidad', /\.slide--pricing \.pricing-media\{[\s\S]*?opacity:1;[\s\S]*?grayscale\(\.12\)/.test(css));
check('inversión se centra como una sola composición', css.includes('3.34.0 — Investment composition vertical balance') && css.includes('"lead content"') && css.includes('"lead tax"') && /\.slide--pricing \.pricing-layout\{[\s\S]*?align-content:center/.test(css));
check('línea fiscal acompaña al bloque de precios', /\.slide--pricing \.tax-note\{[\s\S]*?align-self:start;[\s\S]*?padding-top:10px/.test(css));
check('propuesta WIZ se centra como una sola composición', css.includes('3.35.0 — Proposal ecosystem vertical balance') && /\.slide--wizard \.ecosystem-wizard-layout\{[\s\S]*?grid-template-rows:auto;[\s\S]*?align-content:center/.test(css));
check('propuesta WIZ abre aire superior en mobile', css.includes('padding-top:clamp(116px,16vh,144px)!important'));
check('sombras localizadas preservan fotografía', css.includes('radial-gradient(circle at 78% 52%') && css.includes('radial-gradient(circle at center,transparent 30%'));
check('logo Hangar1 oficial en header y portada', occurrences(/assets\/images\/hangar1-logo-official-safe\.png/g) === 2);
check('logo Hangar1 protegido contra recorte', css.includes('3.11.0 — Hangar1 safe-area lockup') && css.includes('clip-path:none!important'));
check('iconografía propia', occurrences(/<symbol\s+id="i-/g) >= 18 && ['i-browser', 'i-link', 'i-responsive', 'i-nodes'].every((id) => html.includes(`id="${id}"`)));
check('fondos fotográficos full bleed', css.includes('.slide-media{') && css.includes('object-fit:cover'));
check('cinco imágenes diferidas después de portada', occurrences(/class="slide-media[^>]+loading="lazy"/g) === 5);
check('siete fondos editoriales distintos', new Set([...html.matchAll(/class="slide-media[^>]+src="([^"]+)"/g)].map((match) => match[1])).size === 7);
check('video limita precarga', /class="slide-media close-media close-video"[^>]+preload="metadata"/.test(html));
check('sin dependencias remotas de runtime', !/<(?:script|link)[^>]+(?:src|href)="https?:/i.test(html));
check('navegación accesible', html.includes('aria-label="Navegación de slides"') && html.includes('id="prev-slide"') && html.includes('id="next-slide"'));

for (const pattern of [/\+\s*IVA/i, /más\s+IVA/i, /anticip(?:o|os)/i, /mensualidad(?:es)?/i, /50\s*\/\s*50/i, /10\s+sitios/i, /\$125,000/i, /\$100(?:,000|K)\b/i, /100%\s+contra\s+entrega/i]) {
  check(`ausente: ${pattern}`, !pattern.test(html));
}

const localRefs = [...html.matchAll(/(?:src|href)="(assets\/[^"#?]+)(?:\?[^"#]*)?"/g)].map((match) => match[1]);
for (const ref of localRefs) check(`asset existe: ${ref}`, existsSync(resolve(root, 'dist', ref)));

const failed = checks.filter((item) => !item.ok);
for (const item of checks) console.log(`${item.ok ? 'PASS' : 'FAIL'}  ${item.name}`);

if (failed.length) {
  console.error(`\n${failed.length} validación(es) fallaron.`);
  process.exit(1);
}

console.log(`\n${checks.length} validaciones aprobadas.`);
