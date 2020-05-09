<template>
  <div>
    <Navbar />

    <div class="main-container">
      <Nuxt />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import TheFooter from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    TheFooter,
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify({
            '@context': 'http://www.schema.org',
            '@type': 'ProfilePage',
            inLanguage: this.$i18n.locale,
            mainContentOfPage: 'https://marquez.co' + this.localePath('index'),
            about: this.$i18n.t('slogan'),
            logo: 'https://marquez.co' + require('~/assets/images/logo.png'),
            author: {
              '@type': 'person',
              familyName: 'Marquez',
              givenName: 'Julio',
              url: 'https://marquez.co' + this.localePath('index'),
              email: `${process.env.email}`,
              gender: 'http://schema.org/Male',
              logo: 'https://marquez.co' + require('~/assets/images/logo.png'),
              memberOf: [
                {
                  '@type': 'Corporation',
                  name: 'Aceforth',
                  url: 'https://aceforth.com',
                },
                {
                  '@type': 'Corporation',
                  name: 'CosmosAPI',
                  url: 'https://cosmosapi.com',
                },
              ],
            },
            sameAs: [
              'https://linkedin.com/in/juliomrqz/en',
              'https://github.com/juliomrqz',
              'https://twitter.com/juliomrqz',
              'https://www.instagram.com/juliomrqz/',
              'https://angel.co/juliomrqz',
              'https://www.crunchbase.com/person/julio-marquez',
              'https://www.upwork.com/freelancers/~018eef7959825dd2ed',
              'https://www.codementor.io/juliomrqz',
              'https://dev.to/juliomrqz',
            ],
          }),
          type: 'application/ld+json',
        },
      ],
    }
  },
}
</script>
