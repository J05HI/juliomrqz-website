<template>
  <LazyHydrate when-idle>
    <section class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10"
          >
            {{ $t('projects.title') }}
          </h2>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 dark:text-gray-300 m:mt-4 md:pb-8"
          >
            {{ $t('projects.description') }}
          </p>
        </div>
        <div
          class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :attributes="project"
          />
        </div>
      </div>
    </section>
  </LazyHydrate>
</template>

<script>
import SeoHead from '~/components/mixins/SeoHead'
import ProjectCard from '~/components/ProjectCard'
import Projects from '~/helpers/projects'

export default {
  components: {
    ProjectCard,
  },
  mixins: [SeoHead],
  data() {
    const $t = this.$t.bind(this)

    return {
      projects: Projects,
      head: {
        title: $t('projects.title'),
        description: $t('projects.description'),
      },
    }
  },
}
</script>
