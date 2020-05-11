<template>
  <Component
    :is="$isAMP ? 'a' : 'button'"
    :href="$isAMP ? toggleAmpLink : undefined"
    :aria-label="$t('actions.toggleDarkMode')"
    class="relative overflow-hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-100 dark-hover:bg-gray-800 dark-focus:bg-gray-800 transition duration-150 ease-in-out"
    @click="setCurrentTheme"
  >
    <span
      class="relative overflow-hidden inline-block w-6 h-6 flex items-center justify-center"
    >
      <SvgIcon
        name="moon"
        width="24"
        height="24"
        class="h-6 w-6 absolute"
        :class="$colorMode.preference === 'light' ? 'show' : 'hide'"
      />
      <SvgIcon
        name="sun"
        width="24"
        height="24"
        class="h-6 w-6 absolute"
        :class="$colorMode.preference === 'dark' ? 'show' : 'hide'"
      />
    </span>
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/components/icons/sun'
import '~/components/icons/moon'

export default Vue.extend({
  computed: {
    toggleAmpLink() {
      const canonicalPath: string = this.$route.fullPath.replace(
        /^\/amp(\/.*)?/,
        '$1'
      )
      const fullPath = canonicalPath === '' ? '/' : canonicalPath

      return `${fullPath}?amp-dark-mode`
    },
  },

  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'system'
          ? 'light'
          : this.$colorMode.preference === 'light'
          ? 'dark'
          : 'light'
    },
  },
})
</script>

<style>
button {
  outline: none;
}

.show {
  animation: show-icon 300ms forwards;
}

.hide {
  animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleY(0);
  }

  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleY(1);
  }

  to {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
