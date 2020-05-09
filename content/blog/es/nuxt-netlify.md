---
slug: "nuxt-netlify"
title: "Introducing you Nuxt Netlify"
description: "We created a new module for Nuxt.js that supports the dynamic creation of redirects and header rules for your site in Netlify."
published: "2019-03-14T17:52:20Z"
created: "2019-03-14T17:52:20Z"
modified: "2020-05-09T20:25:25Z"
canonical: "https://aceforth.com/es/blog/nuxt-netlify"
---

We are pleased to introduce you [Nuxt Netlify][nuxt-netlify-github], a new module for Nuxt.js that allows you to easily create [redirects][netlify-redirects] and [header][netlify-headers-and-basic-auth] rules for your site deployed to Netlify.

## Getting Started

Getting started is simple, just install the module as follows:

```bash 
npm install @bazzite/nuxt-netlify # or yarn add @bazzite/nuxt-netlify
```

Add `@bazzite/nuxt-netlify` to the modules section of `nuxt.config.js`:

```js
{
  modules: [
    '@bazzite/nuxt-netlify',
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

**Nuxt Netlify** is an open source project, any contribution is welcome, even giving us a [star on GitHub ★][nuxt-netlify-github] or spreading the word 🤓.

## Documentation & Support

If you want extra details of how to configure and use this module, the **full documentation** is available at [https://aceforth.com/docs/nuxt-netlify/][nuxt-netlify-docs].

For **Bug reports** or **Feature requests**, use the [Issues section][nuxt-netlify-issues]. But, if you have **questions**, please go to our [Community Chat][spectrum-chat].

You may also want to **follow us** [on Twitter][twitter] for future updates and valuable topics.

## Professional Support

If you require Professional Assistance on your project(s), please contact us at [https://aceforth.com/contact][contact-page].



[nuxt-netlify-docs]: https://aceforth.com/docs/nuxt-netlify/
[nuxt-netlify-issues]: https://github.com/aceforth/nuxt-netlify/issues
[nuxt-netlify-github]: https://github.com/aceforth/nuxt-netlify
[spectrum-chat]: https://spectrum.chat/bazzite/login?r=https://spectrum.chat/bazzite/open-source
[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
[contact-page]: https://aceforth.com/contact
[twitter]: https://bazzite.xyz/Twitter
