---
title: A new way to optimize the images in your Nuxt projects
slug: nuxt-optimized-images
description: We created a new module to automatically optimize images used in
  Nuxt.js projects (JPEG, PNG, SVG, WebP and GIF).
cover: blog/nuxt-optimized-images-cover.jpg
created: 2019-03-15T18:00:50.000Z
published: 2019-03-15T18:00:50.000Z
canonical: https://aceforth.com/blog/nuxt-optimized-images
---
We are very thrilled to introduce you another module we created for the Nuxt.js ecosystem: **Nuxt Optimized Images**, a new way to automatically optimize images used in your projects (JPEG, PNG, SVG, WebP and GIF).

You can now easily reduce the size of your images up to 60%, but this is not the only thing that can be done:

* **Reduces image size** by optimizing images during build.
* Improves loading speed by providing **progressive images**.
* **Inline small images** to save HTTP requests and additional roundtrips.
* Adds a **content hash** to the file name so images can get cached on CDN level and in the browser for a long time.
* Same image URLs over multiple builds for long time caching.
* Provides **query params** for file-specific handling/settings.
* JPEG/PNG images can be **converted to WebP on the fly** for an even smaller size.
* Can **resize** images or generate **low-quality image placeholders** and extract the **dominant colors** of it.

## Getting Started

Getting started is simple, just install the module as follows:

```shell
npm install @aceforth/nuxt-optimized-images # or yarn add @aceforth/nuxt-optimized-images
```

Add `@aceforth/nuxt-optimized-images` to the modules section of `nuxt.config.js`:

```javascript
{
  modules: [
    '@aceforth/nuxt-optimized-images',
  ],
}
```

You can now import or require your images directly in your Vue components:

```html
<template>
  <picture>
    <source :srcset="require('my-image.jpg?webp')" type="image/webp" />
    <source :srcset="require('my-image.jpg')" type="image/jpeg" />
    <img :src="require('my-image.jpg')" />
  </picture>
</template>

<!-- 
 Results in:

<picture>
  <source srcset="/_nuxt/images/d6816ecc.webp" type="image/webp" />
  <source srcset="/_nuxt/images/5216de42.jpg" type="image/jpeg" />
  <img src="/_nuxt/images/5216de42.jpg" />
</picture>
-->
```

There are several additional options you can specify as **query params** when you import the images, just follow [the documentation](https://aceforth.com/docs/nuxt-optimized-images/usage/) for more information.

## Contribute to Nuxt Optimized Images

**Nuxt Optimized Images** is an open source project, any contribution is welcome, even giving us a [star on GitHub ★](https://github.com/aceforth/nuxt-optimized-images) or spreading the word 🤓.

## Documentation & Support

If you want extra details of how to configure and use this module, the **full documentation** is available at <https://aceforth.com/docs/nuxt-optimized-images/>.

For **Bug reports** or **Feature requests**, use the [Issues section](https://github.com/aceforth/nuxt-optimized-images/issues). But, if you have **questions**, please go to our [Community Chat](https://spectrum.chat/bazzite/login?r=https://spectrum.chat/bazzite/open-source).

You may also want to **follow us** [on Twitter](https://twitter.com/AceforthHQ) for future updates and valuable topics.

## Professional Support

If you require Professional Assistance on your project(s), please contact us at <https://aceforth.com/contact>.
