<template>
  <footer class="text-center mt-5 py-4">
    <div
      class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div
          v-for="item in ['home', 'blog', 'projects', 'about']"
          :key="item"
          class="px-5 py-2"
        >
          <NuxtLink
            :to="localePath(item.replace('home', 'index'))"
            :class="{
              'dark:text-gray-100 font-medium':
                routeName.startsWith('index') && item === 'home',
            }"
            :active-class="
              routeName.startsWith('index') || item === 'home'
                ? null
                : 'dark:text-gray-100 font-medium'
            "
            class="text-base leading-6 text-gray-500 hover:text-gray-900 dark-hover:text-gray-100"
          >
            {{ $t(`links.${item}`) }}
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <a
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-gray-900 dark-hover:text-gray-100"
            >Email</a
          >
        </div>
        <div class="px-5 py-2">
          <a
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-gray-900 dark-hover:text-gray-100"
            >Source</a
          >
        </div>
      </nav>
      <div class="mt-8 flex justify-center">
        <a
          v-for="(item, index) in social"
          :key="item.name"
          :href="item.url"
          :title="item.name"
          :aria-label="item.name"
          :class="{ 'ml-6': index > 0 }"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-900 dark-hover:text-gray-100"
        >
          <span class="sr-only">{{ item.name }}</span>

          <SvgIcon
            :name="item.icon"
            :title="item.name"
            width="24"
            height="24"
            class="h-6 w-6"
          />
        </a>
      </div>
      <nav class="-mx-5 -my-2 mt-8 flex flex-wrap justify-center">
        <div
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="px-5 py-2"
        >
          <NuxtLink
            :to="switchLocalePath(locale.code)"
            :class="{
              'text-gray-900 dark:text-gray-100 font-medium':
                $i18n.locale === locale.code,
              'text-gray-500 hover:text-gray-900 dark-hover:text-gray-100':
                $i18n.locale !== locale.code,
            }"
            active-class=""
            class="text-base leading-6"
          >
            {{ locale.name }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue'

import '~/components/icons'
import social from '~/helpers/social'

export default Vue.extend({
  data() {
    return {
      social,
      routeName: this.$route?.name || '',
    }
  },
})
</script>
