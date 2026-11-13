import DolusLogo from '../assets/projects/dolus-divinus/logo.svg';
import dolus0 from '../assets/projects/dolus-divinus/banner.webp';
import dolus1 from '../assets/projects/dolus-divinus/libro-001-afad7824.webp';
import dolus2 from '../assets/projects/dolus-divinus/libro-002-7485982b.webp';
import dolus3 from '../assets/projects/dolus-divinus/libro-003-33d7953e.webp';
import dolus4 from '../assets/projects/dolus-divinus/libro-004-d6427e68.webp';
import SereiaLogo from '../assets/projects/sereia/logo.svg';
import sereia0 from '../assets/projects/sereia/banner-001.webp';
import sereia1 from '../assets/projects/sereia/etiquetas.webp';
import sereia2 from '../assets/projects/sereia/bolsa-001.webp';
import sereia3 from '../assets/projects/sereia/caja-001.webp';
import sereia4 from '../assets/projects/sereia/papel-001.webp';
import sereia5 from '../assets/projects/sereia/tarjeta-001.webp';
import sereia6 from '../assets/projects/sereia/redes-001.webp';
import sereia7 from '../assets/projects/sereia/redes-002.webp';
import { translator, type Language } from '../i18n';
import SinapsiaLogo from '../assets/projects/sinapsia/logo.svg';
import sinapsiaBanner from '../assets/projects/sinapsia/banner.webp';
import sinapsiaOpenBook from '../assets/projects/sinapsia/libro-abierto.webp';
import sinapsiaPageOne from '../assets/projects/sinapsia/pagina-1.webp';
import sinapsiaPageTwo from '../assets/projects/sinapsia/pagina-2.webp';
import PasadizosLogo from '../assets/projects/entre-pasadizos/logo.svg';
import pasadizosBanner from '../assets/projects/entre-pasadizos/banner-001.webp';
import pasadizosDragons from '../assets/projects/entre-pasadizos/dragones-001.webp';
import pasadizosPackaging from '../assets/projects/entre-pasadizos/empaque.webp';
import pasadizosThieves from '../assets/projects/entre-pasadizos/ladrones-001.webp';
import pasadizosMap from '../assets/projects/entre-pasadizos/mapa-001.webp';
import EllasLogo from '../assets/projects/ellas/logo.svg';
import ellasBanner from '../assets/projects/ellas/banner.webp';
import ellasBox from '../assets/projects/ellas/caja.webp';
import ellasOpenBook from '../assets/projects/ellas/libro-abierto.webp';
import ellasBook from '../assets/projects/ellas/libro.webp';
import ellasBookmarks from '../assets/projects/ellas/separadores.webp';
import ellasStickers from '../assets/projects/ellas/pegatinas.webp';
import BubbleLogo from '../assets/projects/bubble-bug/logo.svg';
import bubbleBanner from '../assets/projects/bubble-bug/banner-001.webp';
import bubbleLabel from '../assets/projects/bubble-bug/etiqueta-001.webp';
import bubbleBottle from '../assets/projects/bubble-bug/imagen-004.webp';
import bubbleBottleOutdoor from '../assets/projects/bubble-bug/imagen-005.webp';
import bubbleCups from '../assets/projects/bubble-bug/imagen-006.webp';
import bubbleCart from '../assets/projects/bubble-bug/carrito001.webp';
import bubbleAd from '../assets/projects/bubble-bug/aviso-002.webp';
import bubblePoster from '../assets/projects/bubble-bug/imagen-007.webp';
import AmarantoLogo from '../assets/projects/amaranto/logo-negativo.svg';
import banner from '../assets/projects/amaranto/banner-001.webp';
import cap from '../assets/projects/amaranto/mockup-2.webp';
import polo from '../assets/projects/amaranto/mockup-3.webp';
import aprons from '../assets/projects/amaranto/mockup-4.webp';

export const projects = [{
  slug: 'amaranto',
  logo: AmarantoLogo,
  color: '#7f1715',
  ink: '#7f1715',
  panelInk: '#FBF3E7',
  storyLead: 'Una identidad',
  storyTitle: 'con raíces.',
  conceptLead: 'El origen',
  conceptTitle: 'en cada detalle.',
  galleryLead: 'Del café',
  galleryTitle: 'a cada aplicación.',
  concept: 'La silueta del fundador conserva la memoria de la marca. Las abejas y la polinización inspiran un lenguaje visual que conecta el café con su origen natural.',
  name: 'Amaranto Company',
  category: 'Rediseño de identidad visual',
  title: 'Tradición, café y naturaleza.',
  cover: banner,
  coverAlt: 'Café Amaranto sobre una mesa de madera, rodeado de cafetos y montañas',
  description: 'Amaranto Café es un proyecto de rediseño de identidad visual desarrollado para un emprendimiento de Mercados Campesinos de Medellín. La propuesta busca transformar su identidad original en una marca más limpia, legible y versátil, conservando la silueta de su fundador e incorporando elementos inspirados en las abejas y la polinización, que representan su historia y conexión con la naturaleza.',
  role: 'Investigación, desarrollo del concepto creativo, rediseño del logotipo, diseño de etiquetas y desarrollo de la identidad visual.',
  collaborators: 'Proyecto realizado en equipo con Sara y Santiago.',
  software: ['Procreate', 'Photoshop', 'Illustrator'] as const,
  gallery: [
    { image: aprons, alt: 'Delantales de Amaranto en tonos café y crema con el logotipo bordado', caption: 'La identidad en el día a día.', wide: true },
    { image: cap, alt: 'Gorra burdeos con el logotipo de Amaranto Company bordado en crema', caption: 'Gorra bordada.', wide: false },
    { image: polo, alt: 'Polo blanco con detalles burdeos y el logotipo de Amaranto en el pecho', caption: 'Aplicación en indumentaria.', wide: false },
  ],
}, {
  slug: 'bubble-bug',
  logo: BubbleLogo,
  color: '#E35C13',
  ink: '#9C3B08',
  panelInk: '#FFFFFF',
  storyLead: 'Una identidad',
  storyTitle: 'con efervescencia.',
  conceptLead: 'Ingredientes que',
  conceptTitle: 'inspiran el diseño.',
  galleryLead: 'Una identidad',
  galleryTitle: 'llena de frescura.',
  concept: 'Las burbujas, los ingredientes naturales y la fermentación inspiran una identidad fresca y dinámica. La propuesta visual refleja el carácter innovador de esta soda botánica artesanal.',
  name: 'Bubble Bug',
  category: 'Diseño de identidad visual',
  title: 'Soda botánica artesanal.',
  cover: bubbleBanner,
  coverAlt: 'Soda Bubble Bug en un vaso con hielo, rodeada de limón, maracuyá y jengibre',
  description: 'Bubble Bug es un proyecto académico para el Festival de Sabores Exóticos que propone una soda botánica artesanal de ginger bug, frutas y plantas aromáticas. Su identidad visual, fresca y dinámica, se inspira en las burbujas, los ingredientes naturales y la fermentación, reflejando el carácter innovador de la bebida.',
  role: 'Investigación, conceptualización creativa, diseño de logotipo y desarrollo de la identidad visual.',
  collaborators: 'Proyecto realizado en equipo con Paulina Alvarez.',
  software: ['Procreate', 'Photoshop', 'Illustrator'] as const,
  gallery: [
    { image: bubbleLabel, alt: 'Etiqueta Bubble Bug con ilustraciones de frutas y plantas aromáticas', caption: 'Los ingredientes dan forma a la identidad.', wide: true },
    { image: bubbleBottle, alt: 'Botella de soda Bubble Bug con cierre mecánico e ingredientes naturales', caption: 'Identidad aplicada a la botella.', wide: false },
    { image: bubbleBottleOutdoor, alt: 'Botella Bubble Bug sobre una mesa al aire libre', caption: 'Una propuesta fresca y botánica.', wide: false },
    { image: bubbleCups, alt: 'Dos vasos de soda Bubble Bug con maracuyá y jengibre', caption: 'La marca en cada vaso.', wide: false },
    { image: bubbleCart, alt: 'Carrito naranja de Bubble Bug con sombrilla y botellas de soda', caption: 'Una experiencia de marca para el festival.', wide: false },
    { image: bubbleAd, alt: 'Anuncio de Bubble Bug en un soporte publicitario urbano', caption: 'La identidad en el espacio público.', wide: false },
    { image: bubblePoster, alt: 'Cartel de Bubble Bug con la frase Algo está fermentando', caption: 'Comunicación para el festival.', wide: false },
  ],
}, {
  slug: 'ellas',
  logo: EllasLogo,
  color: '#00B3D5',
  ink: '#005B70',
  panelInk: '#FFFFFF',
  logoInk: '#FFFFFF',
  storyLead: 'Un álbum',
  storyTitle: 'que cuenta historias.',
  conceptLead: 'Historias que',
  conceptTitle: 'merecen ser contadas.',
  galleryLead: 'Un álbum para',
  galleryTitle: 'descubrir y coleccionar.',
  concept: 'La ilustración y la investigación se encuentran en un álbum de pegatinas coleccionables. Cada retrato invita a descubrir las historias y los logros de mujeres colombianas, a través de una experiencia visual, educativa e interactiva.',
  name: 'Ellas',
  category: 'Diseño editorial e ilustración',
  title: 'Ellas fueron, son y serán.',
  cover: ellasBanner,
  coverAlt: 'Álbum Ellas acompañado de pegatinas ilustradas de mujeres colombianas',
  description: 'ELLAS es un proyecto académico de diseño editorial que visibiliza y celebra a mujeres colombianas destacadas en la historia, el arte, la cultura y el deporte. A través de un álbum de pegatinas coleccionables, combina ilustración e investigación para presentar sus historias y logros de forma visual, educativa e interactiva.',
  role: 'Investigación, conceptualización creativa, diseño de logotipo, empaques e ilustraciones line art.',
  collaborators: 'Proyecto realizado en equipo con Sara Orrego y Santiago Uribe.',
  software: ['InDesign', 'Photoshop', 'Illustrator'] as const,
  gallery: [
    { image: ellasOpenBook, alt: 'Álbum Ellas abierto con sus páginas e ilustraciones de mujeres colombianas', caption: 'Historias que se descubren página a página.', wide: true },
    { image: ellasBook, alt: 'Portada del álbum Ellas en tonos rosa con retratos ilustrados', caption: 'El álbum coleccionable.', wide: false },
    { image: ellasStickers, alt: 'Pegatinas coleccionables con retratos ilustrados de mujeres colombianas', caption: 'Retratos para descubrir y coleccionar.', wide: false },
    { image: ellasBox, alt: 'Empaque de Ellas en rosa y azul con el logotipo del proyecto', caption: 'Un empaque que reúne la experiencia.', wide: false },
    { image: ellasBookmarks, alt: 'Separadores de libros Ellas con formas onduladas rosas y azules', caption: 'La identidad acompaña la lectura.', wide: false },
  ],
}, {
  slug: 'entre-pasadizos',
  logo: PasadizosLogo,
  color: '#7B1B12',
  ink: '#7B1B12',
  panelInk: '#FBF3E7',
  storyLead: 'Un juego de mesa',
  storyTitle: 'entre leyendas.',
  conceptLead: 'De la leyenda',
  conceptTitle: 'al tablero.',
  galleryLead: 'Las piezas de',
  galleryTitle: 'la aventura.',
  concept: 'Las leyendas suizas inspiran un universo de fantasía medieval donde dragones, ladrones y pasadizos se encuentran. La identidad visual reúne estrategia y lujo artístico para reinterpretar un juego tradicional.',
  name: 'Entre Pasadizos',
  category: 'Diseño de identidad visual',
  title: 'Policías y Ladrones reinventado.',
  cover: pasadizosBanner,
  coverAlt: 'Empaques de Entre Pasadizos en un escenario medieval con antorchas, monedas y un cofre',
  description: 'Entre Pasadizos es un proyecto académico que reinventa el juego tradicional de Policías y Ladrones como un juego de mesa estratégico para adultos mayores. Inspirado en las leyendas suizas, combina fantasía medieval, estrategia y lujo artístico.',
  role: 'Investigación, conceptualización creativa, diseño de logotipo y desarrollo de la identidad visual.',
  collaborators: 'Proyecto realizado en equipo con Paulina Alvarez y Palma Llano.',
  software: ['Procreate', 'Photoshop', 'Illustrator'] as const,
  gallery: [
    { image: pasadizosPackaging, alt: 'Dos vistas del empaque de Entre Pasadizos con ilustraciones de dragones', caption: 'El empaque abre la puerta a la aventura.', wide: false },
    { image: pasadizosMap, alt: 'Tablero de Entre Pasadizos con rutas y casillas sobre un mapa de estilo antiguo', caption: 'Un mapa para trazar la estrategia.', wide: false },
    { image: pasadizosDragons, alt: 'Cuatro fichas de dragones en distintos colores sobre bases de madera', caption: 'Dragones que dan vida a las leyendas.', wide: false },
    { image: pasadizosThieves, alt: 'Cuatro fichas de ladrones con capas de distintos colores sobre bases de madera', caption: 'Los personajes del juego reinventado.', wide: false },
  ],
}, {
  slug: 'sinapsia',
  logo: SinapsiaLogo,
  color: '#0D74AC',
  ink: '#0B608E',
  panelInk: '#FBF3E7',
  storyLead: 'Una revista',
  storyTitle: 'que conecta ciencia y diseño.',
  conceptLead: 'La ciencia',
  conceptTitle: 'toma forma editorial.',
  galleryLead: 'El mundo marino,',
  galleryTitle: 'página a página.',
  concept: 'Una estética moderna y limpia se combina con composiciones dinámicas, recursos gráficos y una diagramación pensada para acercar la información científica al lector. Las especies marinas son el punto de partida de esta exploración editorial.',
  name: 'SINAPSIA',
  category: 'Diseño editorial',
  title: 'Un mundo de beneficios.',
  cover: sinapsiaBanner,
  coverAlt: 'Revista SINAPSIA en un escenario submarino con peces, algas y conchas',
  description: 'SINAPSIA es un proyecto académico de diseño editorial enfocado en la divulgación científica de especies marinas y sus beneficios para la salud y el bienestar. Su propuesta visual combina una estética moderna y limpia con composiciones dinámicas, recursos gráficos y una diagramación que busca transformar la información científica en una experiencia de lectura atractiva y accesible.',
  role: 'Investigación, conceptualización creativa, diseño de logotipo y desarrollo de la identidad visual. Proyecto individual.',
  collaborators: null,
  software: ['InDesign', 'Photoshop', 'Illustrator'] as const,
  gallery: [
    { image: sinapsiaOpenBook, alt: 'Revista SINAPSIA abierta mostrando su portada sobre sardinas y una página publicitaria', caption: 'Una mirada editorial al mundo marino.', wide: true },
    { image: sinapsiaPageOne, alt: 'Doble página de SINAPSIA con una ilustración de un calamar y su artículo', caption: 'Ilustración y contenido en diálogo.', wide: false },
    { image: sinapsiaPageTwo, alt: 'Doble página de SINAPSIA con una ilustración de una sardina y su artículo', caption: 'Composiciones que acompañan la lectura.', wide: false },
  ],
}, {
 slug: 'sereia', logo: SereiaLogo, name: 'SEREIA', color: '#09383B', ink: '#09383B', panelInk: '#FBF3E7',
 category: 'Diseño de identidad visual',
 storyLead: "Elegancia con", storyTitle: "alma de mar.",
 conceptLead: "El ritmo del mar,", conceptTitle: "en cada trazo.",
 galleryLead: "Una experiencia", galleryTitle: "que envuelve.",
 title: "Moda de playa, a tu manera.", cover: sereia0, coverAlt: "Vitrina de SEREIA con el logotipo blanco, vegetación y trajes de baño en verde",
 description: "SEREIA es una identidad visual para una marca premium de ropa de playa y trajes de baño para mujeres. Su propuesta combina la serenidad del verde profundo con tonos arena y terracota, creando un universo cálido y sofisticado. Las curvas del logotipo, los motivos marinos y las líneas onduladas conectan las distintas aplicaciones de la marca: desde las etiquetas y los empaques hasta su comunicación digital.", concept: "El logotipo une una tipografía de trazos elegantes con un símbolo que evoca las formas de una concha y el movimiento del agua. Las ondas, el monograma y los pequeños destellos construyen un lenguaje visual reconocible, que acompaña a la marca con sutileza y carácter.", role: "Diseño de identidad visual y aplicaciones en empaques, etiquetas, papelería y piezas para redes sociales. Proyecto individual.",
 collaborators: null, software: ['Illustrator', 'Photoshop'] as const,
 gallery: [{ image: sereia1, alt: "Etiquetas SEREIA en terracota junto a un traje de baño y conchas", caption: "El detalle que acompaña cada prenda.", wide: true },
{ image: sereia2, alt: "Bolsa SEREIA en tonos arena y verde con ondas y un patrón de monogramas", caption: "Una identidad para llevar.", wide: false },
{ image: sereia3, alt: "Caja SEREIA abierta con papel estampado y sello de la marca", caption: "El empaque como parte de la experiencia.", wide: false },
{ image: sereia4, alt: "Papel de seda con el monograma y destellos de SEREIA en verde", caption: "Un patrón con ritmo propio.", wide: false },
{ image: sereia5, alt: "Anverso y reverso de una tarjeta de regalo SEREIA en verde y crema", caption: "La marca en un gesto de regalo.", wide: false },
{ image: sereia6, alt: "Publicación de expectativa de SEREIA en un teléfono con la frase Algo está tomando forma", caption: "El universo visual en redes sociales.", wide: false },
{ image: sereia7, alt: "Publicación de SEREIA en un teléfono con una mujer en traje de baño junto al mar", caption: "Una invitación a descubrir la colección.", wide: false }],
}, {
 slug: 'dolus-divinus', name: 'Dolus Divinus', logo: DolusLogo,
 color: '#171717', ink: '#171717', panelInk: '#FBF3E7',
 category: 'Diseño editorial e ilustración',
 storyLead: "Fragmentos que", storyTitle: "construyen lo inquietante.",
 conceptLead: "Entre lo sagrado", conceptTitle: "y lo inquietante.",
 galleryLead: "Un imaginario", galleryTitle: "entre páginas.",
 title: "Fragmentos que construyen lo inquietante.", cover: dolus0, coverAlt: "Portada y contraportada de Dolus Divinus en negro y dorado, entre velas y elementos góticos",
 description: "Dolus Divinus es un libro de creación colectiva que explora el encuentro entre el cadáver exquisito y la estética gótica. A través de fragmentos literarios e ilustraciones, construye un universo de personajes enigmáticos, símbolos y escenas que desdibujan los límites entre lo humano y lo divino. La propuesta editorial combina tipografía gótica, marcos ornamentales y una paleta de tonos oscuros, acentos dorados y fondos cálidos. Texto e imagen dialogan en cada doble página, dando unidad visual a las distintas aportaciones del equipo.", concept: "Arcos, miradas y figuras imposibles componen un imaginario cargado de misterio. La fragmentación de las palabras y las composiciones surrealistas trasladan el espíritu del cadáver exquisito al diseño del libro, invitando a descubrir conexiones inesperadas entre la escritura y la ilustración.", role: "Desarrollo del concepto visual, ilustración y diagramación editorial. Definición de composiciones, jerarquías tipográficas y recursos gráficos para integrar texto e imagen dentro de una estética común.",
 collaborators: "Proyecto realizado en equipo con Camila Ospina y Karen Gallego.", software: ['Illustrator'] as const,
 gallery: [{ image: dolus1, alt: "Doble página de Dolus Divinus con texto fragmentado y un personaje vestido de negro ante un castillo", caption: "Palabras e imágenes en una atmósfera gótica.", wide: false },
{ image: dolus2, alt: "Doble página de Dolus Divinus con manos doradas, un ojo y formas geométricas", caption: "Lo imposible toma forma en la ilustración.", wide: false },
{ image: dolus3, alt: "Doble página de Dolus Divinus con un personaje de capa roja y negra frente a una multitud", caption: "Personajes que habitan el relato colectivo.", wide: false },
{ image: dolus4, alt: "Doble página de Dolus Divinus con una figura de rostro rectangular y vestiduras blancas y violetas", caption: "Fragmentos unidos por un lenguaje visual.", wide: false }],
}];

export function getProjects(lang: Language) {
  const t = translator(lang);
  return projects.map(project => ({ ...project,
    category: t(project.category), title: t(project.title), coverAlt: t(project.coverAlt),
    storyLead: t(project.storyLead), storyTitle: t(project.storyTitle),
    conceptLead: t(project.conceptLead), conceptTitle: t(project.conceptTitle), concept: t(project.concept),
    galleryLead: t(project.galleryLead), galleryTitle: t(project.galleryTitle),
    description: t(project.description), role: t(project.role), collaborators: project.collaborators ? t(project.collaborators) : null,
    gallery: project.gallery.map(item => ({ ...item, alt: t(item.alt), caption: t(item.caption) })),
  }));
}
