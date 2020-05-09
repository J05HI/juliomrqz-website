<template>
  <div
    class="mt-10 mx-auto max-w-screen-lg min-h-screen px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
  >
    <div class="text-center">
      <div
        class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
      >
        {{ subTitle }}
      </div>
      <h1
        class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none md:text-5xl"
      >
        {{ title }}
      </h1>

      <div class="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-16">
        <div class="rounded-md shadow">
          <a
            :href="localePath('index')"
            class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out md:text-lg md:px-10"
          >
            {{ $t('error.go-back-link') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'simple',
  props: {
    error: {
      required: false,
      type: Object,
      default: null,
    },
  },
  computed: {
    subTitle() {
      const $t = this.$t.bind(this)

      if (this.error.statusCode === 404) {
        return $t('error.404.title2')
      } else {
        return $t('error.other.title2')
      }
    },
    title() {
      const $t = this.$t.bind(this)

      if (this.error.statusCode === 404) {
        return $t('error.404.description')
      } else {
        return $t('error.other.description')
      }
    },
    errorMessage() {
      if (this.error.customMessage) {
        return this.error.customMessage
      } else if (this.error.message) {
        return this.error.message
      } else {
        return null
      }
    },
  },
  head() {
    const $t = this.$t.bind(this)

    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title:
        this.error.statusCode === 404
          ? $t('error.404.title')
          : $t('error.other.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.error.statusCode === 404
              ? $t('error.404.description')
              : $t('error.other.description'),
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.row {
  min-height: 70vh;
}
</style>
