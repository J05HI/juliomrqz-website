<template>
  <div>
    <section
      class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
        >
          <div
            class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
          >
            {{ $t('about.subTitle') }}
          </div>
          <h2
            class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-800 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
          >
            {{ $t('subTitle') }}
            <br class="hidden md:inline" />
            <span class="text-gray-900">{{ $t('title') }}</span>
          </h2>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
          >
            {{ $t('about.description') }}
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                v-scroll-to="'#instroductionTitle'"
                href="#instroductionTitle"
                class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >{{ $t('links.more') }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
        >
          <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
            <div class="relative block w-full rounded-lg overflow-hidden">
              <ImageResponsive
                :source="
                  require('~/assets/images/profile.jpg?resize&sizes[]=600&sizes[]=900&sizes[]=1200')
                "
                :width="600"
                :height="600"
                :alt="$t('title')"
                placeholder-color="#fff"
                classes="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- introduction -->
    <LazyHydrate ssr-only>
      <div class="bg-gray-50 overflow-hidden">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
            <div class="lg:col-span-1">
              <h2
                class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              >
                {{ $t('about.introduction.title') }}
              </h2>

              <p class="mt-3 text-lg leading-7 text-gray-600">
                {{ $t('about.introduction.description') }}
              </p>
            </div>
            <div
              class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0"
            >
              <div
                v-for="(value, key, index) in values"
                :key="key"
                :class="{ 'mt-10 sm:mt-0': index > 0 }"
              >
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white"
                >
                  <SvgIcon
                    :name="value"
                    width="24"
                    height="24"
                    class="h-6 w-6"
                  />
                </div>
                <div class="mt-5">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ $t(`about.introduction.${key}.title`) }}
                  </h3>
                  <p class="mt-2 text-base leading-6 text-gray-600">
                    {{ $t(`about.introduction.${key}.description`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyHydrate>

    <!-- experience -->
    <LazyHydrate ssr-only>
      <div class="bg-gray-50 overflow-hidden">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
            <div class="lg:col-span-1">
              <h2
                class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              >
                {{ $t('about.experience.title') }}
              </h2>
            </div>
            <div
              class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0"
            >
              <div
                v-for="(i, index) in [1, 2, 3, 4, 5]"
                :key="i"
                :class="{ 'mt-10 sm:mt-0': index > 0 }"
              >
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ $t(`about.experience.experience${i}.title`) }}
                  </h3>
                  <p class="text-base leading-6 font-medium text-gray-700">
                    {{ $t(`about.experience.experience${i}.company`) }}
                  </p>
                  <p class="mt-2 text-base leading-6 text-gray-600">
                    {{ $t(`about.experience.experience${i}.description`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyHydrate>

    <!-- Honors & Awards -->
    <LazyHydrate when-visible>
      <section
        class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
      >
        <div
          class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="relative">
            <h1
              class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
            >
              {{ $t('about.awards.title') }}
            </h1>

            <ul class="mt-10">
              <li
                v-for="(i, index) in [1, 2]"
                :key="i"
                :class="{ 'mt-10': index > 0 }"
              >
                <div>
                  <h5 class="text-lg leading-6 font-medium text-gray-900">
                    {{ $t(`about.awards.award${i}.title`) }}
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    {{ $t(`about.awards.award${i}.description`) }}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0">
            <ImageResponsive
              :source="
                require('~/assets/images/honors-awards.jpg?resize&sizes[]=600&sizes[]=900&sizes[]=1200')
              "
              :width="600"
              :height="400"
              :alt="$t('about.awards.title')"
              class="shadow-lg rounded-lg"
              classes="relative mx-auto"
            />
          </div>
        </div>
      </section>
    </LazyHydrate>
  </div>
</template>

<script>
import '~/components/icons'
import SeoHead from '~/components/mixins/SeoHead'

export default {
  mixins: [SeoHead],
  data() {
    const $t = this.$t.bind(this)

    return {
      values: {
        passion: 'heart',
        innovation: 'lamp',
        commitment: 'shield',
        quality: 'checkmark',
      },
      head: {
        title: $t('about.title'),
        description: $t('about.description'),
      },
    }
  },
}
</script>

<style scoped>
.cover {
  padding-top: 3.5em;
  padding-bottom: 3.5em;
}

.feature-2 .feature__body {
  width: 100%;
}
</style>
