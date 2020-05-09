<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="{
      'rounded-full': rounded,
    }"
    class="overflow-hidden leading-none inline-block"
  >
    <img
      :src="placeholder"
      :data-src="source"
      :data-loading="placeholder"
      :width="`${width}`"
      :height="`${height}`"
      :class="{
        'max-w-full h-auto': fluid,
        'rounded-full': rounded,
        [classes]: true,
      }"
      :alt="alt"
      :data-srcset="srcset"
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
      default: `${process.env.mainColor}`,
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
  },
})
</script>

<style scoped>
/* purgecss start ignore */
img {
  &[lazy='loading'] {
    @apply filter-blur;
  }

  &[lazy='loaded'] {
    @apply filter-none;
  }
}
/* purgecss end ignore */
</style>
