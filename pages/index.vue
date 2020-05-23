<template>
  <div>
    <LazyHydrate when-idle>
      <section class="relative py-12 sm:py-16 md:py-20 lg:py-18 xl:py-32">
        <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6">
          <div class="text-center">
            <h1
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-700 dark:text-gray-300 sm:text-5xl sm:leading-none md:text-6xl"
            >
              {{ $t('subTitle') }}
              <br class="xl:hidden" />
              <span class="text-gray-900 dark:text-gray-100">
                {{ $t('title') }}
              </span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-base font-medium dark:text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              {{ $t('slogan') }}
            </p>
            <div
              class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div class="rounded-md shadow">
                <a
                  v-scroll-to="'#moreInfo'"
                  href="#moreInfo"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 dark:text-gray-900 dark:bg-gray-200 dark-hover:bg-gray-50 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >{{ $t('links.more2') }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section
        id="moreInfo"
        class="relative max-w-xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 lg:max-w-screen-xl"
      >
        <div class="relative mt-12 sm:mt-16 lg:mt-24">
          <div
            class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div class="lg:col-start-2">
              <h2
                class="text-2xl leading-8 font-extrabold tracking-tight dark:text-gray-100 sm:text-3xl sm:leading-9"
              >
                {{ $t('home.introduction.title') }}
              </h2>
              <p
                class="mt-3 text-lg leading-7 text-gray-500 dark:text-gray-300"
              >
                {{ $t('home.introduction.description') }}
              </p>

              <div class="mt-5 max-w-md mx-auto md:mt-8 lg:ml-0">
                <span class="w-full inline-flex rounded-md shadow-sm">
                  <NuxtLink
                    :to="localePath('about')"
                    class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 dark:text-gray-900 dark:bg-gray-200 dark-hover:bg-gray-50 dark-active:bg-gray-50 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
                    >{{ $t('links.more') }}</NuxtLink
                  >
                </span>
              </div>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <ImageResponsive
                :source="
                  require('~/assets/images/work.jpg?resize&sizes[]=600&sizes[]=900&sizes[]=1200')
                "
                :width="1200 / 2"
                :height="784 / 2"
                :alt="$t('home.introduction.title')"
                class="rounded-lg shadow-lg m-2"
              />
            </div>
          </div>
        </div>
      </section>
    </LazyHydrate>

    <!-- blog -->
    <LazyHydrate when-visible>
      <section
        class="relative bg-gray-50 pt-16 pb-20 px-4 dark:bg-gray-900 sm:px-6 lg:pt-24 lg:pb-18 lg:px-8"
      >
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 dark:bg-gray-800 sm:h-2/3"></div>
        </div>
        <div class="relative">
          <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
              <h2
                class="text-3xl leading-9 tracking-tight font-extrabold dark:text-gray-100 sm:text-4xl sm:leading-10"
              >
                {{ $t('blog.title2') }}
              </h2>
              <p
                class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 dark:text-gray-300 sm:mt-4"
              >
                {{ $t('blog.description') }}
              </p>
            </div>
            <div
              class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
            >
              <!-- {{posts}} -->
              <BlogArticleCard
                v-for="post in posts"
                :key="post.slug"
                :attributes="post"
              />
            </div>
          </div>

          <div class="text-center mt-12">
            <NuxtLink
              :to="localePath('blog')"
              class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 shadow-sm hover:bg-gray-800 dark:text-gray-900 dark:bg-gray-200 dark-hover:bg-gray-50 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              {{ $t('blog.viewAll') }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </LazyHydrate>

    <!-- projects -->
    <LazyHydrate when-visible>
      <section class="pt-16 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-18 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2
              class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10"
            >
              {{ $t('projects.title') }}
            </h2>
            <p
              class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 dark:text-gray-300 sm:mt-4"
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

        <div class="text-center mt-12">
          <NuxtLink
            :to="localePath('projects')"
            class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 shadow-sm hover:bg-gray-800 dark:text-gray-900 dark:bg-gray-200 dark-hover:bg-gray-50 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
          >
            {{ $t('projects.viewAll') }}
          </NuxtLink>
        </div>
      </section>
    </LazyHydrate>
  </div>
</template>

<script>
import SeoHead from '~/components/mixins/SeoHead'
import projects from '~/helpers/projects'

export default {
  mixins: [SeoHead],
  async asyncData({ app, $sentry, $content }) {
    const title = `${app.i18n.t('subTitle')} ${app.i18n.t('title')}`
    let posts = []

    try {
      posts = await $content('blog', app.i18n.locale)
        .only(['slug', 'title', 'description', 'published'])
        .sortBy('created', 'desc')
        .limit(3)
        .fetch()
    } catch (error) {
      $sentry.captureException(error)
    }

    return {
      posts: posts.slice(0, 3),
      head: {
        titleTemplate: '%s',
        title: `${title} - ${app.i18n.t('slogan')}`,
        description: app.i18n.t('description'),
      },
    }
  },
  data: () => ({
    projects: projects.slice(0, 3),
  }),
}
</script>

<style scoped>
.cover,
.cover .row {
  height: 85vh;
}
</style>
