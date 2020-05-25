---
title: Statusfy, Un Estupendo Sistema de Página de Estado de Código Abierto
slug: statusfy
description: Statusfy es un Sistema de Página de Estado, fácil de usar y
  completamente de código abierto. Puedes crear fácilmente un Sistema rápido, ya
  sea Estático o Renderizado por Servidor, e implementarlo fácilmente en una
  variedad de servicios de alojamiento.
cover: blog/statusfy-cover.jpg
created: 2018-11-14T14:58:34.140Z
published: 2018-11-14T14:58:34.000Z
canonical: https://aceforth.com/es/blog/statusfy
---
[Statusfy](https://aceforth.com/es/products/statusfy) es un Sistema de Página de Estado, fácil de usar y completamente de código abierto. Puedes crear fácilmente un Sistema rápido, ya sea **Estático** o **Renderizado por Servidor**, e implementarlo fácilmente en una **variedad de servicios de alojamiento**. El objetivo detrás es reducir los costos y la complejidad, proporcionando una alternativa de código abierto más simple y versátil.

Sin embargo, puedes estar preguntándote: ¿Por qué necesito un sistema de página de estado?. Estos sistemas son bastante simples y tienen una tarea principal: comunicar el estado de una aplicación o servicio. Hoy en día, cada producto SaaS debe tener un sistema de página de estado, ellos nos permiten aumentar la confianza del cliente y reducir su frustración por cualquier interrupción del servicio mediante retrospectivas (también llamadas Análisis de Causa Raíz). Con estos sistemas, puedes notificar las interrupciones del servicio, mantenimientos planificados o posibles interrupciones a través de múltiples canales: correo electrónico, SMS, Push, Webhooks, etc.

## Otro sistema de página de estado. ¿Por qué?

Actualmente, puedes encontrar varios sistemas de página de estado de fuente abierta y de pago, pero Statusfy es diferente, se diseñó para generar unos de estos Sistemas que actúe como una Aplicación Web con las arquitecturas [JAMstack](https://jamstack.org/) y  [Serverless](https://serverless.com/learn/overview/) en mente. También se puede crear una aplicación [Isomorfa](https://www.netlify.com/blog/2017/06/06/jamstack-vs-isomorphic-server-side-rendering/) con Renderizado por lado del Servidor si los contenidos estáticos no son una opción adecuada. Con estos enfoques, queríamos disfrutar de un Sistema de Página de Estado que nos brinde un mejor rendimiento, mayor seguridad, alojamiento más económico y una mejor experiencia de usuario.

## Tecnología Detrás

Un sitio Statusfy es una aplicación web, creada con [Vue](http://vuejs.org/), [Nuxt.js](https://nuxtjs.org/) y [Tailwind CSS](https://tailwindcss.com/): utilizamos **Vue** para definir dinámicamente las interfaces que representan los datos, **Nuxt.js** para hacer una abstracción rápida y útil de la lógica del cliente y del servidor y **Tailwind CSS** para definir rápidamente el estilo del tema por defecto.

Además, los incidentes del Sistema se crean utilizando **Markdown** y Statusfy genera toda la lógica necesaria de tu página de estado. La aplicación web final se puede generar desde un único CLI, se puede configurar fácilmente o personalizar con tus requisitos de Estilo.

Por otro lado, puedes servir tu Sistema de Página de Estado creado con Statusfy de dos maneras diferentes:

1. **Generación Estática:** puedes generar el HTML para cada una de las rutas y almacenarlo en un archivo. Con esto, puedes alojar la aplicación web generada en ¡cualquier hosting estático!.
2. **Renderizado por Servidor:** si deseas reducir el tiempo de despliegue o simplemente no desesas utilizar un Alojamiento Estático, puedes considerar la posibilidad de renderizar las páginas en el lado del servidor y del cliente.

Para estas dos formas de entrega de tu aplicación Statusfy, puedes usar excelentes servicios de hosting. Creamos proyectos de ejemplos para que puedas comenzar a jugar de inmediato con diferentes servicios de hospedaje populares que podrías considerar usar:

|                                                                                       | Example Project                                                                      | Example Project                                                             |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **Service**                                                                           | **Static Generated**                                                                 | **Server Rendered**                                                         |
| [GitHub Pages](https://docs.statusfy.co/guide/deploy.html#github-pages)               | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/github-pages-static) | No                                                                          |
| [GitLab Pages](https://docs.statusfy.co/guide/deploy.html#gitlab-pages-and-gitlab-ci) | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/gitlab-pages-static) | No                                                                          |
| [Netlify](https://docs.statusfy.co/guide/deploy.html#netlify)                         | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/netlify-static)      | No                                                                          |
| [Surge](https://docs.statusfy.co/guide/deploy.html#surge)                             | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/surge-static)        | No                                                                          |
| [Heroku](https://docs.statusfy.co/guide/deploy.html#heroku)                           | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/heroku-static)       | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/heroku-ssr) |
| [Now](https://docs.statusfy.co/guide/deploy.html#now)                                 | [Sí](https://github.com/aceforth/statusfy/tree/develop/examples/now-v2-static)       | No                                                                          |

## Creación de un Sistema de Página de Estado

Es bastante fácil comenzar con Statusfy. Instálalo globalmente con npm:

***Asegúrate de tener instalado [npx](https://www.npmjs.com/package/npx) (`npx` viene incluido por defecto desde [npm](https://www.npmjs.com/get-npm) `5.2.0`)***

```shell
# cambia el directorio de trabajo
cd existing_folder

# ejecuta el comando de inicialización
npx statusfy init

# e instala las dependencias locales
npm install  # O yarn install
```

Crea un nuevo incidente con el comando:

```shell
npm run new-incident # O yarn new-incident
```

y lanzar el servidor de desarrollo con:

```shell
npm run dev # O yarn dev
```

Puedes generar un sitio web Estático con:

```shell
npx statusfy generate # o yarn generate
```

o generar un sitio web Renderizado por Servidor con:

```shell
# generar archivos estáticos
npm run build # O yarn build

# lanzar el servidor
npm run start # O yarn start
```

## Que sigue

En los próximos meses, continuaremos mejorando la [documentación](https://docs.statusfy.co/es/), [crearemos nuevos tutoriales](https://aceforth.com/blog), [corregiremos errores](https://github.com/aceforth/statusfy), crearemos un Editor de Proyecto y agregaremos [funcionalidades adicionales](https://docs.statusfy.co/es/guide/#por-hacer).

## Contribuye a Statusfy

Statusfy es un proyecto completamente abierto, patrocinado por [Aceforth](https://aceforth.com/es/). Todavía es un trabajo en progreso, por lo que cualquier contribución es bienvenida. Nos apasiona construir una solución versátil y de menor costo.

También puedes ayudarnos dando una [estrella en GitHub ★](https://github.com/aceforth/statusfy) y corriendo la voz 🤓.

