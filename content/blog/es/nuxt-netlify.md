---
title: Te presentamos Nuxt Netlify
slug: nuxt-netlify
description: Creamos un nuevo módulo para Nuxt.js que soporta la creación
  dinámica de reglas de redirecciones y cabecera para tu sitio en Netlify.
cover: blog/nuxt-netlify-cover.jpg
created: 2019-03-14T17:52:20.000Z
published: 2019-03-14T17:52:20.000Z
canonical: https://aceforth.com/es/blog/nuxt-netlify
---
Tenemos el agrado de presentarte [Nuxt Netlify](https://github.com/aceforth/nuxt-netlify), un nuevo módulo para Nuxt.js que permite crear fácilmente las reglas de [redirecciones](https://www.netlify.com/docs/redirects/) y [cabecera](https://www.netlify.com/docs/headers-and-basic-auth/)  para tu sitio desplegado en Netlify.

## Primeros Pasos

Empezar es sencillo, sólo instala el módulo de la siguiente manera:

```shell
npm install @aceforth/nuxt-netlify # o yarn add @aceforth/nuxt-netlify
```

y añade `@aceforth/nuxt-netlify` a la sección de modulos de `nuxt.config.js`:

```javascript
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

**Nuxt Netlify** es un proyecto completamente abierto, cualquier contribución es bienvenida, incluso dándonos una [estrella en GitHub ★](https://github.com/aceforth/nuxt-netlify) o corriendo la voz 🤓.

## Documentación y Soporte

Si deseas más detalles sobre cómo configurar y utilizar este módulo, la **documentación completa** está disponible en <https://aceforth.com/es/docs/nuxt-netlify/>.

Para **Informes de fallos** or **Solicitudes de Características**, utiliza la [sección de Issues](https://github.com/aceforth/nuxt-netlify/issues). Pero, si tienes **preguntas**, por favor ve al [Chat de la Comunidad](https://spectrum.chat/bazzite/login?r=https://spectrum.chat/bazzite/open-source).

También puedes **seguirnos** [en Twitter](https://twitter.com/AceforthHQ) para futuras actualizaciones y temas valiosos.

## Soporte Profesional

Si necesitas Asistencia Profesional para tu(s) proyecto(s), ponte en contacto con nosotros en <https://aceforth.com/contact>.
