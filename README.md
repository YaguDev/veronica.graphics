# Portafolio de Verónica

Portafolio editorial con Astro, CSS y GSAP. Salida estática para xCloud (`dist/`).

## Desarrollo

- `npm ci --include=dev`: instalar las dependencias del lockfile.
- `npm run dev -- --background`: iniciar Astro en segundo plano.
- `npm run astro -- dev status`: consultar el servidor.
- `npm run astro -- dev stop`: detenerlo.
- `npm run build`: generar la web de producción.
- `npm test`: comprobar el arranque seguro de la pantalla de carga.

## Diseño

Paleta: rojo `#E84533` y crema `#FBF3E7`. Inter para textos y Cormorant Garamond para la composición editorial. El título utiliza el SVG personalizado de Verónica. Las fuentes se sirven localmente.

La textura `src/assets/textures/paper.webp` es una copia optimizada de `NO SUBIR A GIT/noise.webp`, con mezcla `multiply` detrás del contenido. Los originales de referencia permanecen excluidos de Git. Se conserva el retrato; se retiraron las flores del diseño anterior.

## Componentes y próximos recursos

- `PortfolioTitle.astro`: SVG personalizado inline con nombre accesible; sus 14 paths aparecen en orden horizontal con GSAP.
- `Hero.astro`: portada con Flor-001, Flor-004 y Hojas-001, copias WebP optimizadas en `src/assets/botanical/`. Entran desde los laterales; en móvil se oculta la rama de hojas. Los PNG originales permanecen en la carpeta excluida de Git.
- `About.astro`: fotografía, presentación, educación y herramientas tomadas de la referencia.
- `Projects.astro`: aviso de próximos proyectos, sin trabajos ficticios.
- `Contact.astro`: cierre y enlaces. Correo y redes permanecen con `#` por decisión del usuario.
- `animations.ts`: entrada y revelados al desplazarse, desactivados con reducción de movimiento.

La pantalla de carga aparece una vez por sesión (clave `veronica-editorial-intro-v1`). Se mantiene visible al menos 3,6 segundos (dos ciclos de flores), incluso con recursos en caché, y luego sale con una animación de 0,75 segundos. La espera mínima ocurre en paralelo a la carga de recursos esenciales, limitada a 2,2 segundos. Tiene botón para omitirla y una salida de seguridad a los 6 segundos si el módulo de animación falla. Los enlaces directos a secciones y la reducción de movimiento evitan la pantalla de carga. El HTML permanece visible sin JavaScript.

## xCloud

Rama `main`, modo **Static build**, Web Root `dist`, Node.js >=22.12.0. El script de despliegue ejecuta `npm ci --include=dev` y `npm run build`. Este rediseño no necesita un proceso Node en producción.

Las flechas e iconos de interfaz usan SVG de @gravity-ui/icons. Hojas-002 decora el borde superior de la portada en escritorio. El loader alterna Flor-003, Flor-004 y Flor-005 cada 0,6 segundos, con copias WebP de 360 px; la animación se detiene al cerrar el loader y respeta la reducción de movimiento.
