<template>
  <div class="overflow-hidden">
    <div class="pt-6">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <NuxtLink :to="localePath('index')" class="navbar-brand">
                <img
                  class="h-8 w-auto rounded sm:h-10"
                  :alt="$t('title')"
                  :title="$t('title')"
                  :src="require('~/assets/images/logo.svg?inline').default"
                  width="32"
                  height="32"
                />
              </NuxtLink>

              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark-hover:bg-gray-800 dark-focus:bg-gray-800 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  @click="isMenuOpen = true"
                >
                  <SvgIcon name="menu" width="24" height="24" class="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <NuxtLink
              v-for="(item, index) in ['blog', 'projects', 'about']"
              :key="index"
              :to="localePath(item)"
              :class="{ 'ml-10': index > 0 }"
              class="font-medium text-gray-500 hover:text-gray-900 dark-hover:text-gray-100 dark-focus:text-gray-100 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              {{ $t(`links.${item}`) }}
            </NuxtLink>

            <a
              :href="`mailto:${email}`"
              target="_blank"
              class="ml-10 font-medium text-gray-500 hover:text-gray-900 dark-hover:text-gray-100 dark-focus:text-gray-100 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Email
            </a>

            <a
              :href="`${github.url}/website`"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-10 font-medium text-gray-500 hover:text-gray-900 dark-hover:text-gray-100 dark-focus:text-gray-100 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              {{ $t('links.source') }}
            </a>
          </div>
          <div
            class="ml-3 md:absolute md:ml-0 md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
          >
            <DarkModeToggle />
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="transition transform duration-150 ease-out"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition transform duration-100 ease-in"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="isMenuOpen"
          class="absolute top-0 inset-x-0 p-2 origin-top-right z-10 md:hidden"
        >
          <div class="rounded-lg shadow-md">
            <div
              class="rounded-lg bg-white shadow-xs overflow-hidden dark:bg-gray-800"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <NuxtLink :to="localePath('index')" class="navbar-brand">
                    <img
                      class="h-8 w-auto rounded"
                      :alt="$t('title')"
                      :title="$t('title')"
                      :src="require('~/assets/images/logo.svg?inline').default"
                      width="32"
                      height="32"
                    />
                  </NuxtLink>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark-hover:bg-gray-900 dark-focus:bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    @click="isMenuOpen = false"
                  >
                    <SvgIcon
                      name="cross"
                      width="24"
                      height="24"
                      class="h-6 w-6"
                    />
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <NuxtLink
                  v-for="(item, index) in ['blog', 'projects', 'about']"
                  :key="index"
                  :to="localePath(item)"
                  :class="{ 'mt-1': index > 0 }"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark-hover:text-gray-100 dark-hover:bg-gray-900 dark-focus:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {{ $t(`links.${item}`) }}
                </NuxtLink>

                <a
                  :href="`${github.url}/website`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark-hover:text-gray-100 dark-hover:bg-gray-900 dark-focus:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {{ $t('links.source') }}
                </a>
              </div>
              <div>
                <a
                  :href="`mailto:${email}`"
                  target="_blank"
                  class="block w-full px-5 py-3 text-center font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-100 dark-hover:text-gray-100 dark-hover:bg-gray-900 dark-focus:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-700 transition duration-150 ease-in-out"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/components/icons/menu'
import DarkModeToggle from '~/components/DarkModeToggle.vue'
import social from '~/helpers/social'

export default Vue.extend({
  components: {
    DarkModeToggle,
  },

  data: () => ({
    isMenuOpen: false,
    github: social.find((s) => s.name === 'Github'),
    email: process.env.email,
  }),

  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
})
</script>
