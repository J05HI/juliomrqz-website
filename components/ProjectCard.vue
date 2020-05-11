<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <a :href="attributes.url" target="_blank" rel="noopener noreferrer">
        <ImageResponsive
          :source="
            attributes.category === 'open-source'
              ? svgImage
              : require(`~/assets/images/projects/${attributes.id}.jpg?resize&sizes[]=600&sizes[]=900&sizes[]=1200`)
          "
          :width="1200 / 2"
          :height="630 / 2"
          :alt="attributes.title[$i18n.locale]"
          classes="h-48 w-full object-cover"
        />
      </a>
    </div>
    <div
      class="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-gray-800"
    >
      <div class="flex-1">
        <div class="inline-block">
          <span
            :class="{
              'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50':
                attributes.category === 'open-source',
              'bg-gray-900 text-gray-100':
                attributes.category === 'closed-source',
              'border border-gray-900 dark:border-gray-100':
                attributes.category === 'research',
            }"
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5"
          >
            {{ $t(`projects.categories.${attributes.category}`) }}
          </span>
        </div>
        <a
          :href="attributes.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <h3
            class="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ attributes.title[$i18n.locale] }}
          </h3>

          <!-- eslint-disable vue/no-v-html -->
          <p
            class="mt-3 text-base leading-6 text-gray-500 dark:text-gray-300"
            v-html="attributes.description[$i18n.locale]"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    attributes: {
      type: Object,
      required: true,
      default: () => {},
    } as PropOptions<{ [key: string]: string }>,
  },

  computed: {
    svgImage(): string {
      // nuxt-optimzed-images seems to be failing for SVG images

      const image:
        | { default: string }
        | string = require(`~/assets/images/projects/${this.attributes.id}.svg`)

      if (typeof image === 'string') {
        return image
      } else {
        return image.default
      }
    },
  },
})
</script>
