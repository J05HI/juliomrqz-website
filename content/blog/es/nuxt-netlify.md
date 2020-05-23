---
title: "Te presentamos Nuxt Netlify"
description: "Creamos un nuevo módulo para Nuxt.js que soporta la creación dinámica de reglas de redirecciones y cabecera para tu sitio en Netlify."
published: "2019-03-14T17:52:20Z"
created: "2019-03-14T17:52:20Z"
modified: "2020-05-23T17:06:42Z"
canonical: "https://aceforth.com/es/blog/nuxt-netlify"
---

Tenemos el agrado de presentarte [Nuxt Netlify][nuxt-netlify-github], un nuevo módulo para Nuxt.js que permite crear fácilmente las reglas de [redirecciones][netlify-redirects] y [cabecera][netlify-headers-and-basic-auth]  para tu sitio desplegado en Netlify.

## Primeros Pasos

Empezar es sencillo, sólo instala el módulo de la siguiente manera:

```bash 
npm install @aceforth/nuxt-netlify # o yarn add @aceforth/nuxt-netlify
```

y añade `@aceforth/nuxt-netlify` a la sección de modulos de `nuxt.config.js`:

```js
{
  modules: [
    '@aceforth/nuxt-netlify',
  ],
}
```

La configuración por defecto generará un archivo `_redirects` vacío y un archivo `_headers` con algunas cabeceras de securidad y caché:

```text
# _headers

/*
  Referrer-Policy: origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block

/_nuxt/*
  Cache-Control: public, max-age=31536000, immutable

/sw.js
  Cache-Control: no-cache
```

## Contribuye a Nuxt Netlify

**Nuxt Netlify** es un proyecto completamente abierto, cualquier contribución es bienvenida, incluso dándonos una [estrella en GitHub ★][nuxt-netlify-github] o corriendo la voz 🤓.

## Documentación y Soporte

Si deseas más detalles sobre cómo configurar y utilizar este módulo, la **documentación completa** está disponible en [https://aceforth.com/es/docs/nuxt-netlify/][nuxt-netlify-docs].

Para **Informes de fallos** or **Solicitudes de Características**, utiliza la [sección de Issues][nuxt-netlify-issues]. Pero, si tienes **preguntas**, por favor ve al [Chat de la Comunidad][spectrum-chat].

También puedes **seguirnos** [en Twitter][twitter] para futuras actualizaciones y temas valiosos.

## Soporte Profesional

Si necesitas Asistencia Profesional para tu(s) proyecto(s), ponte en contacto con nosotros en [https://aceforth.com/contact][contact-page].



[nuxt-netlify-docs]: https://aceforth.com/es/docs/nuxt-netlify/
[nuxt-netlify-issues]: https://github.com/aceforth/nuxt-netlify/issues
[nuxt-netlify-github]: https://github.com/aceforth/nuxt-netlify
[spectrum-chat]: https://spectrum.chat/bazzite/login?r=https://spectrum.chat/bazzite/open-source
[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
[contact-page]: https://aceforth.com/contact
[twitter]: https://twitter.com/AceforthHQ
