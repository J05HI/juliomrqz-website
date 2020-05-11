<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="{
      'rounded-full': rounded,
    }"
    class="overflow-hidden leading-none inline-block"
  >
    <Component
      :is="$isAMP ? 'amp-img' : 'img'"
      v-bind="imageProperties"
      class="transition-all ease-in duration-200"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    source: {
      type: [String, Object],
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      required: true,
    },
    height: {
      type: [String, Number],
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
    fluid: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    placeholderColor: {
      type: String,
      default: `${process.env.placeholderColor}`,
    },
    ampLayout: {
      type: String,
      default: 'intrinsic',
    },
  },
  computed: {
    srcset() {
      if (typeof this.source === 'object') {
        // @ts-ignore
        return this.source.srcSet
      } else {
        return undefined
      }
    },
    placeholder() {
      const template =
        '<svg width="%{w}" height="%{h}" ' +
        'xmlns="http://www.w3.org/2000/svg" ' +
        'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' +
        `<rect width="100%" height="100%" style="fill:${this.placeholderColor};"></rect>` +
        '</svg>'

      const image = template
        .replace('%{w}', `${this.width}`)
        .replace('%{h}', `${this.height}`)

      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(image)}`
    },
    imageProperties() {
      let properties: { [key: string]: any } = {
        width: `${this.width}`,
        height: `${this.height}`,
        class: {
          'max-w-full h-auto': this.fluid,
          'rounded-full': this.rounded,
          // @ts-ignore
          [this.classes]: true,
        },
        alt: this.alt,
      }

      if (this.$isAMP) {
        properties.src = this.source
        properties.layout = this.ampLayout
      } else {
        properties = {
          ...properties,
          // @ts-ignore
          src: this.placeholder,
          'data-src': this.source,
          // @ts-ignore
          'data-loading': this.placeholder,
          // @ts-ignore
          'data-srcset': this.srcset,
        }
      }

      return properties
    },
  },
})
</script>

<style scoped>
/* purgecss start ignore */
img {
  &[lazy='loading'] {
    @apply filter-blur;
  }
}
/* purgecss end ignore */
</style>
