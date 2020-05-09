<template lang="html">
  <ImageResponsive
    :source="image"
    :width="width"
    :height="height"
    :classes="classes"
    :alt="alt"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    image() {
      return require(`../assets/images/${this.src}`)
    },
  },
})
</script>
