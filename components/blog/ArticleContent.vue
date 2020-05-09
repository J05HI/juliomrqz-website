<template>
  <div class="markdown-body">
    <component :is="dynamicComponent" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
    }
  },
  created() {
    this.dynamicComponent = () =>
      this.$blog
        .getArticle(this.$route.params.slug, this.$i18n.locale)
        .then(({ vue }) => vue.component)
  },
}
</script>
