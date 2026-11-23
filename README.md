# Portafolio de Verónica

Portafolio editorial con Astro, CSS y GSAP. Páginas prerenderizadas y API de contacto con Node para xCloud.

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

Rama `main`, aplicación **Node.js** (ya no Static build), Node.js >=22.12.0. Build: `npm ci --include=dev` y `npm run build`. Inicio: `npm start`, desde la raíz del proyecto, donde está `.env`. El proxy de xCloud debe dirigir todo el tráfico al puerto `PORT` de Node, que sirve `dist/client` y la API desde `dist/server/entry.mjs`. No publicar la raíz del repositorio ni el archivo `.env`.

Las flechas e iconos de interfaz usan SVG de @gravity-ui/icons. Hojas-002 decora el borde superior de la portada en escritorio. El loader alterna Flor-003, Flor-004 y Flor-005 cada 0,6 segundos, con copias WebP de 360 px; la animación se detiene al cerrar el loader y respeta la reducción de movimiento.

## Formulario de contacto

Copiar las variables de .env.example al archivo .env de xCloud. No subir .env a Git. Reiniciar Node después de cambiar variables; la site key se obtiene en tiempo de ejecución, sin recompilar.

- SITE_ORIGIN: origen público exacto, por ejemplo https://veronica.graphics (sin ruta). En local: http://localhost:4321.
- PUBLIC_TURNSTILE_SITE_KEY y TURNSTILE_SECRET_KEY: claves del mismo widget. Autorizar el dominio en Cloudflare. La secret key solo se usa en el servidor.
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS: datos del proveedor SMTP. Para puerto 465 usar SMTP_SECURE=true; para 587 usar false (STARTTLS obligatorio).
- CONTACT_FROM: remitente autorizado por el proveedor SMTP. CONTACT_TO: destinatario de los mensajes. El correo del visitante se usa en Reply-To.
- HOST=0.0.0.0 y PORT: puerto asignado a la aplicación en xCloud.

No basta con añadir un .env a un alojamiento estático: xCloud debe ejecutar el proceso Node. El modal mantiene deshabilitado el envío hasta completar Turnstile. La API valida origen, tamaño, campos, hostname y acción del token antes de enviar. Los errores no revelan credenciales.

Validación: npm test y npm run build. Para la comprobación real, configurar las claves y SMTP y enviar un mensaje de prueba desde el dominio autorizado.
