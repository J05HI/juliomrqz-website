---
title: Introducing you Nuxt Netlify
slug: nuxt-netlify
description: We created a new module for Nuxt.js that supports the dynamic
  creation of redirects and header rules for your site in Netlify.
cover: blog/nuxt-netlify-cover.jpg
created: 2019-03-14T17:52:20.000Z
published: 2019-03-14T17:52:20.000Z
canonical: https://aceforth.com/blog/nuxt-netlify
---
We are pleased to introduce you [Nuxt Netlify](https://github.com/aceforth/nuxt-netlify), a new module for Nuxt.js that allows you to easily create [redirects](https://www.netlify.com/docs/redirects/) and [header](https://www.netlify.com/docs/headers-and-basic-auth/) rules for your site deployed to Netlify.

## Getting Started

Getting started is simple, just install the module as follows:

```shell
npm install @aceforth/nuxt-netlify # or yarn add @aceforth/nuxt-netlify
```

Add `@aceforth/nuxt-netlify` to the modules section of `nuxt.config.js`:

```javascript
{
  modules: [
    '@aceforth/nuxt-netlify',
  ],
}
```

The default configuration will generate an empty `_redirects` file and a `_headers` file with some caching and security headers:

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

## Contribute to Nuxt Netlify

**Nuxt Netlify** is an open source project, any contribution is welcome, even giving us a [star on GitHub ★](https://github.com/aceforth/nuxt-netlify) or spreading the word 🤓.

## Documentation & Support

If you want extra details of how to configure and use this module, the **full documentation** is available at <https://aceforth.com/docs/nuxt-netlify/>.

For **Bug reports** or **Feature requests**, use the [Issues section](https://github.com/aceforth/nuxt-netlify/issues). But, if you have **questions**, please go to our [Community Chat](https://spectrum.chat/bazzite/login?r=https://spectrum.chat/bazzite/open-source).

You may also want to **follow us** [on Twitter](https://twitter.com/AceforthHQ) for future updates and valuable topics.

## Professional Support

If you require Professional Assistance on your project(s), please contact us at <https://aceforth.com/contact>.
