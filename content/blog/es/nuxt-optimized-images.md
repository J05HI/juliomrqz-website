---
title: "Una nueva forma de optimizar las imágenes en tus proyectos Nuxt"
description: "Creamos un nuevo módulo que permite optimizar automáticamente las imágenes utilizadas en los proyectos Nuxt.js (JPEG, PNG, SVG, WebP y GIF)."
published: "2019-03-15T18:00:50Z"
created: "2019-03-15T18:00:50Z"
modified: "2020-05-23T17:06:42Z"
canonical: "https://aceforth.com/es/blog/nuxt-optimized-images"
---

Estamos muy emocionados de presentarte otro módulo que hemos creado para el ecosistema de Nuxt.js: **Nuxt Optimized Images**, una nueva forma de optimizar automáticamente las imágenes utilizadas en tus proyectos (JPEG, PNG, SVG, WebP y GIF).

Ahora puedes reducir fácilmente el tamaño de tus imágenes hasta en un 60%, pero esto no es lo único que se puede hacer:

* **Reduce el tamaño de las imagenes** al optimizar las imágenes durante la compilación.
* Mejora la velocidad de carga al proporcionar **imágenes progresivas**.
* Hace que las imágenes pequeñas se **guarden en línea** para ahorrar solicitudes HTTP y los viajes de ida y vuelta adicionales.
* Agrega un **hash de contenido** al nombre del archivo para que las imágenes puedan almacenarse en caché a nivel de CDN y en el navegador durante mucho tiempo.
* Mismas URLs de imágenes en múltiples compilaciones para un almacenamiento en caché a largo plazo.
* Proporciona **parámetros de consulta (query params)** para la gestión y configuración de archivos específicos.
* Las imágenes JPEG/PNG **se pueden convertir a WebP sobre la marcha** para un tamaño aún más pequeño.
* Puede **redimensionar** imágenes o generar **placeholders de baja calidad** y extraer los **colores dominantes** de las mismas.

## Primeros Pasos

Empezar es sencillo, sólo instala el módulo de la siguiente manera:

```bash 
npm install @aceforth/nuxt-optimized-images # o yarn add @aceforth/nuxt-optimized-images
```

Añade `@aceforth/nuxt-optimized-images` a la sección de modulos de `nuxt.config.js`:

```js
{
  modules: [
    '@aceforth/nuxt-optimized-images',
  ],
}
```

Puedes importar o requerir tus imágenes directamente en tus componentes Vue:

```html

<template>
  <picture>
    <source :srcset="require('~/assets/my-image.jpg?webp')" type="image/webp" />
    <source :srcset="require('~/assets/my-image.jpg')" type="image/jpeg" />
    <img :src="require('~/assets/my-image.jpg')" />
  </picture>
</template>

<!-- 
 Resulta en:

<picture>
  <source srcset="/_nuxt/images/d6816ecc.webp" type="image/webp" />
  <source srcset="/_nuxt/images/5216de42.jpg" type="image/jpeg" />
  <img src="/_nuxt/images/5216de42.jpg" />
</picture>
-->

```

Hay varias opciones adicionales que puedes especificar como parámetros de consulta cuando importas las imágenes, sólo tienes que seguir [la documentación][nuxt-optimized-images-docs-usage] para obtener más información.


## Contribuye a Nuxt Optimized Images

**Nuxt Optimized Images** es un proyecto completamente abierto, cualquier contribución es bienvenida, incluso dándonos una [estrella en GitHub ★][nuxt-optimized-images-github] o corriendo la voz 🤓.

## Documentation & Support

Si deseas más detalles sobre cómo configurar y utilizar este módulo, la **documentación completa** está disponible en [https://aceforth.com/es/docs/nuxt-optimized-images/][nuxt-optimized-images-docs].

Para **Informes de fallos** or **Solicitudes de Características**, utiliza la [sección de Issues][nuxt-optimized-images-issues]. Pero, si tienes **preguntas**, por favor ve al [Chat de la Comunidad][spectrum-chat].

También puedes **seguirnos** [en Twitter][twitter] para futuras actualizaciones y temas valiosos.

## Soporte Profesional

Si necesitas Asistencia Profesional para tu(s) proyecto(s), ponte en contacto con nosotros en [https://aceforth.com/contact][contact-page].



[nuxt-optimized-images-docs]: https://aceforth.com/es/docs/nuxt-optimized-images/
[nuxt-optimized-images-docs-usage]: https://aceforth.com/es/docs/nuxt-optimized-images/usage/
[nuxt-optimized-images-issues]: https://github.com/aceforth/nuxt-optimized-images/issues
[nuxt-optimized-images-github]: https://github.com/aceforth/nuxt-optimized-images
[spectrum-chat]: https://spectrum.chat/bazzite/login?r=https://spectrum.chat/bazzite/open-source
[contact-page]: https://aceforth.com/contact
[twitter]: https://twitter.com/AceforthHQ
